import { Container, Title, Text, Center } from "@mantine/core";

export default function MainVisual() {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(135deg, #548CA8, #2541B2, #185ADB, #1768AC)",
        backgroundSize: "600% 600%",
        minHeight: "100vh",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "hidden",
        animation: "gradient 4s ease-in-out infinite",
      }}
    >
      <style>
        {`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>

      <Container>
        <Center>
          <Text size="50px" c={"white"} m={"lg"} fw={500}>
            知識本體、語言處理與人文計算實驗室
          </Text>
        </Center>

        <Center>
          <Text
            size="40px"
            fw={500}
            style={{ marginBottom: "20px", color: "white" }}
          >
            @ 台大語言學研究所
          </Text>
        </Center>

        <Center>
          <Text
            size="30px"
            style={{ maxWidth: "800px", lineHeight: 1.5, color: "white" }}
          >
            <span style={{ color: "#FF6F00", fontWeight: "bold" }}>L</span>ab of{" "}
            <span style={{ color: "#FF6F00", fontWeight: "bold" }}>O</span>
            ntologies, Language{" "}
            <span style={{ color: "#FF6F00", fontWeight: "bold" }}>P</span>
            rocessing and{" "}
            <span style={{ color: "#FF6F00", fontWeight: "bold" }}>E</span>
            -humanities
          </Text>
        </Center>
      </Container>
    </div>
  );
}
