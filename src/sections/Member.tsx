import {
  Container,
  Title,
} from "@mantine/core";
import MemberCards from "./MemberCards";
import ProfessorInfo from "./ProfessorInfo";

export default function Member() {
  return (
    <Container style={{ marginTop: "1em", marginBottom: "1em" }}>
      <Title order={1} ta="center" m={"xl"}>
        成員
      </Title>

      <ProfessorInfo />

      <MemberCards />
    </Container>
  );
}
