import {
  Container,
  Grid,
  Card,
  Text,
  Title,
  Badge,
  Group,
  Modal,
} from "@mantine/core";
import { useEffect, useState } from "react";

type NewsItem = {
  date: string;
  tag: string;
  status: string;
  title: string;
  content: string;
};

export default function News() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [opened, setOpened] = useState(false); 
  const [currentNews, setCurrentNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    async function fetchNews() {
      const data = await import("../data/news/news.json");
      setNewsItems(data.default);
    }

    fetchNews();
  }, []);

  const handleCardClick = (newsItem: NewsItem) => {
    setCurrentNews(newsItem);
    setOpened(true);
  };

  return (
    <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Title order={1} align="center" m={"xl"}>
        最新消息
      </Title>

      <Grid gutter="lg">
        {newsItems.map((item, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              onClick={() => handleCardClick(item)}
              style={{ cursor: "pointer" }}
            >
              <Group position="apart" style={{ marginBottom: "10px" }}>
                <Text size="xs" color="dimmed">
                  {item.date}
                </Text>
                <Badge color="blue" variant="light">
                  {item.tag}
                </Badge>
                {/* <Badge
                  color="green"
                  variant="outline"
                  style={{ marginBottom: "10px" }}
                >
                  {item.status}
                </Badge> */}
              </Group>

              <Text weight={700} size="lg" style={{ marginBottom: "10px" }}>
                {item.title}
              </Text>

              <Text
                size="sm"
                color="dimmed"
                lineClamp={2}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </Card>
          </Grid.Col>
        ))}
      </Grid>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={currentNews?.title}
      >
        {currentNews && (
          <>
            <Text size="sm" color="dimmed" style={{ marginBottom: "10px" }}>
              {currentNews.date}
            </Text>
            <Badge color="blue" variant="light">
              {currentNews.tag}
            </Badge>
            <Text size="sm" style={{ marginBottom: "10px" }}>
              <strong>Status:</strong> {currentNews.status}
            </Text>

            <Text
              size="sm"
              dangerouslySetInnerHTML={{ __html: currentNews.content }}
            />
          </>
        )}
      </Modal>
    </Container>
  );
}
