import {
  Container,
  Grid,
  Card,
  Text,
  Title,
  Modal,
  Badge,
  Flex,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { client } from "../../libs/client"; // microCMSクライアントをインポート
import NewsModal from "../components/NewsModal";

type NewsItem = {
  id: string;
  title: string;
  date: string;
  tag: string;
  status: string;
  content: string;
};

export default function News() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [opened, setOpened] = useState(false);
  const [currentNews, setCurrentNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    async function fetchNews() {
      try {
        const data = await client.get({ endpoint: "news" });
        setNewsItems(data.contents); // microCMSのレスポンスに合わせてデータを設定
      } catch (error) {
        console.error("Failed to fetch news from CMS:", error);
      }
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
        {newsItems.map((item) => (
          <Grid.Col key={item.id} span={{ base: 12, sm: 6 }}>
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

      <NewsModal
        opened={opened}
        onClose={() => setOpened(false)}
        newsItem={currentNews}
      />
    </Container>
  );
}
