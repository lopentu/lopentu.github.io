import { Container, Tabs, Title } from "@mantine/core";
import { useEffect, useState } from "react";

export default function Publications() {
  const [data, setData] = useState<{ [key: string]: any[] }>({});
  const [years, setYears] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const context = import.meta.glob("../data/publications/*.json");
      const loadedData: { [key: string]: any[] } = {};
      const loadedYears: string[] = [];

      for (const path in context) {
        const module = await context[path]();
        const year = path.match(/(\d{4})\.json$/)?.[1];
        if (year) {
          loadedData[year] = module.default;
          loadedYears.push(year);
        }
      }

      loadedYears.sort((a, b) => Number(b) - Number(a));
      setData(loadedData);
      setYears(loadedYears);
    }

    fetchData();
  }, []);

  return (
    <>
      <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
        <Title order={1} align="center" m={"xl"}>
          研究成果
        </Title>
        {years.length > 0 && (
          <Tabs variant="outline" defaultValue={years[0]}>
            <Tabs.List>
              {years.map((year) => (
                <Tabs.Tab key={year} value={year}>
                  {year}
                </Tabs.Tab>
              ))}
            </Tabs.List>

            {years.map((year) => (
              <Tabs.Panel key={year} value={year}>
                <ul>
                  {data[year].map((item, index) => (
                    <li
                      key={index}
                      style={{ marginBottom: "10px" }}
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  ))}
                </ul>
              </Tabs.Panel>
            ))}
          </Tabs>
        )}
      </Container>
    </>
  );
}
