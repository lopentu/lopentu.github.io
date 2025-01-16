import {
  Container,
  Title,
} from "@mantine/core";
import MemberCards from "./MemberCards";
import ProfessorInfo from "./ProfessorInfo";

export default function Member() {
  return (
    <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Title order={1} align="center" m={"xl"}>
        成員
      </Title>

      <ProfessorInfo />

      <MemberCards />
    </Container>
  );
}
