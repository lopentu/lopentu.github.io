import { Grid, Card, Text, Button, Image } from "@mantine/core";
import { useEffect, useState } from "react";

import cwn from "../assets/images/resources/main_resources/cwn.png";
import moco from "../assets/images/resources/main_resources/moco.png";
import ptt_corp from "../assets/images/resources/main_resources/ptt_corp.png";
import chi_var from "../assets/images/resources/main_resources/chi-var.png";
import lopotator from "../assets/images/resources/main_resources/lopotator.png";
import cwm from "../assets/images/resources/main_resources/cwm.png";
import semcor from "../assets/images/resources/main_resources/SemCor.png";

type Resource = {
  title: string;
  description: string;
  image: string;
  link: string;
};

export default function MainResources() {
  const [resources, setResources] = useState<Resource[]>([]);

  const imageMap: { [key: string]: string } = {
    cwn,
    moco,
    ptt_corp,
    chi_var,
    lopotator,
    cwm,
    semcor
  };

  useEffect(() => {
    async function fetchResources() {
      const data = await import("../data/resources/main_resources.json");
      setResources(data.default);
    }

    fetchResources();
  }, []);

  return (
    <Grid gutter="lg">
      {resources.map((resource, index) => (
        <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={imageMap[resource.image]} 
                alt={resource.title}
                height={130}
                fit="cover"
              />
            </Card.Section>
            <Text
              weight={700}
              size="lg"
              style={{ marginTop: "10px", marginBottom: "10px" }}
            >
              {resource.title}
            </Text>
            <Text size="sm" color="dimmed" style={{ marginBottom: "20px" }}>
              {resource.description}
            </Text>
            <Button
              component="a"
              href={resource.link}
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
  );
}
