import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Text, Title, Badge, Flex, Anchor, Breadcrumbs } from "@mantine/core";
import { client } from "../../libs/client";

type NewsItem = {
  id: string;
  title: string;
  date: string;
  tag: string;
  status: string;
  content: string;
};

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);

  useEffect(() => {
    async function fetchNewsDetail() {
      try {
        const data = await client.get({
          endpoint: "news",
          contentId: id,
        });
        setNewsItem(data);
      } catch (error) {
        console.error("Failed to fetch news detail:", error);
      }
    }

    if (id) {
      fetchNewsDetail();
    }
  }, [id]);

  if (!newsItem) {
    return <Text>Loading...</Text>;
  }

  const items = [
    { title: "首頁", href: "/" },
    { title: "歷史消息", href: "/news" },
    { title: newsItem.title, href: "" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  return (
    <Container mt={70}>
      <Breadcrumbs>{items}</Breadcrumbs>
      <Title order={2} my={"sm"}>
        {newsItem.title}
      </Title>
      <Flex gap={"sm"}>
        <Text size="md" c="dimmed">
          {newsItem.date.split("T")[0]}
        </Text>
        <Badge size="md" color="blue" variant="light">
          {newsItem.tag}
        </Badge>
      </Flex>
      <Text
        mt={"md"}
        size="sm"
        dangerouslySetInnerHTML={{ __html: newsItem.content }}
      />
    </Container>
  );
}