import { Box, Container, Text, Center, Title } from "@mantine/core";

export default function Footer() {
  return (
    <Box
      bg="gray"
      sx={{
        padding: "20px 0",
        width: "100%",
        marginTop: "auto",
      }}
    >
      <Container>
        <Center>
          <div style={{ textAlign: "center" }}>
            <Title order={2} align="center" mt={"xl"} mb={"sm"} c={"white"}>
              聯絡我們
            </Title>

            <Text c={"white"}>謝舒凱老師 email : shukaihsieh@ntu.edu.tw</Text>

            <Text c={"white"} style={{ marginTop: "10px" }}>
              臺大語言所 | 知識本體、語言處理與人文計算實驗室
            </Text>
            <Text c={"white"} mb={"lg"}>
              LOPE lab @ National Taiwan University, Graduate Institute of
              Linguistics
            </Text>
          </div>
        </Center>
      </Container>
    </Box>
  );
}
