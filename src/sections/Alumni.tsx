import { Container, Title, Text } from "@mantine/core";
import { useEffect, useState } from "react";

type Member = {
  englishName: string;
  chineseName: string;
  degree: string;
};

export default function Alumni() {
  const [alumni, setAlumni] = useState<Member[]>([]);
  const [researchAssistants, setResearchAssistants] = useState<Member[]>([]);
  const [postdocs, setPostdocs] = useState<Member[]>([]);

  useEffect(() => {
    // Ensure we start at top when entering the alumni page
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    async function fetchData() {
      const alumniData = await import("../data/alumni/alumni.json");
      setAlumni(alumniData.default);

      const researchAssistantsData = await import(
        "../data/alumni/research_assistants.json"
      );
      setResearchAssistants(researchAssistantsData.default);

      const postdocsData = await import(
        "../data/alumni/postdoctoral_researchers.json"
      );
      setPostdocs(postdocsData.default);
    }

    fetchData();
  }, []);

  const renderMembers = (members: Member[]) => {
    const halfIndex = Math.ceil(members.length / 2);
    const firstColumn = members.slice(0, halfIndex);
    const secondColumn = members.slice(halfIndex);

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div>
          {firstColumn.map((member, index) => (
            <Text key={index} style={{ marginBottom: "10px" }}>
              <strong>{member.englishName}</strong> | {member.chineseName},{" "}
              {member.degree}
            </Text>
          ))}
        </div>

        <div>
          {secondColumn.map((member, index) => (
            <Text key={index} style={{ marginBottom: "10px" }}>
              <strong>{member.englishName}</strong> | {member.chineseName},{" "}
              {member.degree}
            </Text>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div style={{ paddingTop: 92 }}>
        <Title order={1} align="center" mt={"xl"}>
          歷任成員
        </Title>
      </div>
      <Container style={{ marginTop: "24px", marginBottom: "40px" }}>
        <Title order={2} align="center" m={"xl"}>
          已畢業成員
        </Title>
        {renderMembers(alumni)}

        <Title order={2} align="center" m={"xl"}>
          研究助理＆交換生
        </Title>
        {renderMembers(researchAssistants)}

        <Title order={2} align="center" m={"xl"}>
          博士後研究員＆專任助理
        </Title>
        {renderMembers(postdocs)}
      </Container>
    </>
  );
}
