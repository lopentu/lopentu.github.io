import { Container, Title } from "@mantine/core";
import AdditionalResources from "./AdditionalResources";
import MainResources from "./MainResources";

export default function Resources() {
  return (
    <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Title order={1} align="center" m={"xl"}>
        實驗室資源與工具
      </Title>

      <MainResources />

      <AdditionalResources />
    </Container>
  );
}
