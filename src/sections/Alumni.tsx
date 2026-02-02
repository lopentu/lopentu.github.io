import { Container, Title, Text } from "@mantine/core";
import { useEffect, useState } from "react";

type Member = {
  englishName: string;
  chineseName: string;
  degree: string;
  thesis?: string | null;
};

export default function Alumni() {
  const [alumni, setAlumni] = useState<Member[]>([]);
  const [researchAssistants, setResearchAssistants] = useState<Member[]>([]);
  const [postdocs, setPostdocs] = useState<Member[]>([]);
  const [fullTimeAssistants, setFullTimeAssistants] = useState<Member[]>([]);

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

      const fullTimeAssistantsData = await import(
        "../data/alumni/full_time_assistants.json"
      );
      setFullTimeAssistants(fullTimeAssistantsData.default);
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
            <div key={index} style={{ marginBottom: "14px" }}>
              <Text>
                <strong>{member.englishName}</strong> | {member.chineseName},{" "}
                {member.degree}
              </Text>
              {member.thesis ? (
                <Text size="sm" color="dimmed" style={{ marginTop: 4 }}>
                  {member.thesis}
                </Text>
              ) : null}
            </div>
          ))}
        </div>

        <div>
          {secondColumn.map((member, index) => (
            <div key={index} style={{ marginBottom: "14px" }}>
              <Text>
                <strong>{member.englishName}</strong> | {member.chineseName},{" "}
                {member.degree}
              </Text>
              {member.thesis ? (
                <Text size="sm" color="dimmed" style={{ marginTop: 4 }}>
                  {member.thesis}
                </Text>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderGroupedMembers = (members: Member[]) => {
    const phdRegex = /Ph\.?D|PhD|Doctor/i;
    const maRegex = /M\.?A\.?|Master/i;

    const phd = members.filter((m) => phdRegex.test(m.degree || ""));
    const ma = members.filter(
      (m) => maRegex.test(m.degree || "") && !phd.includes(m)
    );
    const others = members.filter((m) => !phd.includes(m) && !ma.includes(m));

    return (
      <div style={{ display: "grid", gap: 18 }}>
        {phd.length > 0 && (
          <div>
            <Title order={3} align="center" m={"sm"}>
              博士 (PhD)
            </Title>
            {renderMembers(phd)}
          </div>
        )}

        {ma.length > 0 && (
          <div>
            <Title order={3} align="center" m={"sm"}>
              碩士 (M.A.)
            </Title>
            {renderMembers(ma)}
          </div>
        )}

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
        {renderGroupedMembers(alumni)}

        <Title order={2} align="center" m={"xl"}>
          研究助理＆交換生
        </Title>
        {renderMembers(researchAssistants)}

        <Title order={2} align="center" m={"xl"}>
          博士後研究員
        </Title>
        {renderMembers(postdocs)}

        <Title order={2} align="center" m={"xl"}>
          專任助理
        </Title>
        {renderMembers(fullTimeAssistants)}
      </Container>
    </>
  );
}
