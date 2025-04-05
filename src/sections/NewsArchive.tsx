import {
  Container,
  Grid,
  Card,
  Text,
  Title,
  Badge,
  Flex,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { client } from "../../libs/client";
import { useNavigate } from "react-router-dom";

type NewsItem = {
  id: string;
  title: string;
  date: string;
  tag: string;
  status: string;
  content: string;
};

export default function NewsArchive() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const navigate = useNavigate();

  const handleCardClick = (newsItem: NewsItem) => {
    navigate(`/news/${newsItem.id}`);
  };

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await client.get({
          endpoint: "news",
        });
        setNewsItems(data.contents);
      } catch (error) {
        console.error("Failed to fetch news from CMS:", error);
      }
    }

    fetchNews();
  }, []);



  return (
    <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Title order={1} mt={80} mb={"md"}>
        歷史消息
      </Title>

      <Grid gutter="lg">
        {newsItems.map((item) => (
          <Grid.Col key={item.id} span={{ base: 12, sm: 12 }}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              onClick={() => handleCardClick(item)}
              style={{ cursor: "pointer" }}
            >
              <Flex gap={"sm"}>
                <Text size="xs" c="dimmed">
                  {item.date.split("T")[0]}
                </Text>
                <Badge color="blue" variant="light">
                  {item.tag}
                </Badge>
              </Flex>
              <Title order={5} size="lg" my={"sm"}>
                {item.title}
              </Title>
              <Text
                size="sm"
                lineClamp={2}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
