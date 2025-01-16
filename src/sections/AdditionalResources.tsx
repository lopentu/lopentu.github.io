import { Container, Grid, Card, Text, Button, Title } from "@mantine/core";
import { useEffect, useState } from "react";

type Tool = {
  title: string;
  description: string;
  link: string;
};

export default function AdditionalResources() {
  const [tools, setTools] = useState<Tool[]>([]);

  useEffect(() => {
    async function fetchTools() {
      const data = await import("../data/resources/additional_resources.json");
      setTools(data.default);
    }

    fetchTools();
  }, []);

  return (
    <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Title order={2} align="center" m={"xl"}>
        學習共筆與開放課程、工作坊
      </Title>

      <Grid gutter="lg">
        {tools.map((tool, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Text weight={700} size="lg" style={{ marginBottom: "10px" }}>
                {tool.title}
              </Text>

              <Text size="sm" color="dimmed" style={{ marginBottom: "20px" }}>
                {tool.description}
              </Text>

              <Button
                component="a"
                href={tool.link}
                target="_blank"
                variant="light"
                color="blue"
                fullWidth
              >
                查看更多
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
