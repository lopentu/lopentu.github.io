import { Modal, Container, Text, Badge } from "@mantine/core";

type NewsModalProps = {
  opened: boolean;
  onClose: () => void;
  newsItem: {
    title: string;
    date: string;
    tag: string;
    content: string;
  } | null;
};

export default function NewsModal({
  opened,
  onClose,
  newsItem,
}: NewsModalProps) {
  if (!newsItem) return null;

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      centered
      size="auto"
      title={newsItem.title}
    >
      <Container>
        <Text size="xs" c="dimmed">
          {newsItem.date.split("T")[0]}
        </Text>
        <Badge color="blue" variant="light" my={"md"}>
          {newsItem.tag}
        </Badge>
        <Text
          size="sm"
          dangerouslySetInnerHTML={{ __html: newsItem.content }}
        />
      </Container>
    </Modal>
  );
}
