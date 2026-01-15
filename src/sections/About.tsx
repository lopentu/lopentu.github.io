import { Title, Text, Container, Grid, Group, Image } from "@mantine/core";
import { useEffect, useState } from "react";

import feature1 from "../assets/images/about/feature1.png";
import feature2 from "../assets/images/about/feature2.png";
import feature3 from "../assets/images/about/feature3.png";
import feature4 from "../assets/images/about/feature4.png";

type Feature = {
  title: string;
  description: string;
  image: string;
};

export default function About() {
  const [features, setFeatures] = useState<Feature[]>([]);

  const imageMap: { [key: string]: string } = {
    feature1,
    feature2,
    feature3,
    feature4,
  };

  useEffect(() => {
    async function fetchFeatures() {
      const data = await import("../data/about/features.json");
      setFeatures(data.default);
    }

    fetchFeatures();
  }, []);

  return (
    <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Title order={1} align="center" m={"xl"}>
        關於LOPE
      </Title>

      <Text size="lg" style={{ marginBottom: "40px" }}>
        LOPE (Lab of Ontologies, Language Processing, and e-Humanities)
        實驗室是由謝舒凱老師在 2007 年起創立的研究團隊，
        期待以其中世紀原意「大步慢走」('walk with a long bounding stride')
        的團隊精神，對於語言研究的基礎建設、自然語言處理與理解、
        與人文社會計算應用領域有所貢獻。      
        實驗室的信念是，希望人文與知識的價值，在計算數位時代被尊重、發揮與創化。本著實證方法、人文關懷與哲學思辨，我們已經建構詞彙網、語料庫等各式語言資源以及自然語言處理工具，並在語料庫與計算語言學領域發表了超過百餘篇研究，包括 4
        本博士論文、30多本碩士論文，
        以及數件產學技術轉移。我們也竭誠歡迎大學部同學與有志一同的社群夥伴加入我們的研發行列。
      </Text>
      <Grid>
        {features.map((feature, index) => (
          <Grid.Col key={index} span={{ base: 12, md: 6 }}>
            <Group align="flex-start" spacing="md" wrap="nowrap" style={{ padding: "10px", flexDirection: "row" }}>
              <Image
                src={imageMap[feature.image]}
                alt={feature.title}
                width={50}
                height={50}
                fit="contain"
              />
              <div>
                <Text weight={700} size="lg" style={{ marginBottom: "5px" }}>
                  {feature.title}
                </Text>
                <Text size="sm" color="dimmed">
                  {feature.description}
                </Text>
              </div>
            </Group>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
