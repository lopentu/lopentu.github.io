import React, { useEffect, useState } from "react";
import { Group, ActionIcon, Title, Text } from "@mantine/core";
import { IconMail, IconLink } from "@tabler/icons-react";

import shukai from "../assets/images/member/shukai.png";
import { useMediaQuery } from "@mantine/hooks";

const ProfessorInfo = () => {
  const [data, setData] = useState([]);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    async function fetchProfessorData() {
      const data = await import("../data/member/professor.json");
      setData(data.default);
    }
    fetchProfessorData();
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      {data.map((professor, index) => (
        <Group key={index} mb={40}>
          <div
            key={index}
            style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}
          >
            <img
              src={shukai}
              alt={professor.name}
              style={{
                width: "150px",
                height: "200px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
            <div>
              <Title order={3}>{professor.name}</Title>
              <Text w={isMobile ? 150 : 400} fw={500} mt={10} mb={10}>
                {professor.university}
              </Text>
              <Text w={isMobile ? 150 : 400}>{professor.research}</Text>

              <Group position="left" spacing="sm" mt={20} mb={30}>
                <ActionIcon
                  component="a"
                  variant="light"
                  color="green"
                  aria-label="Email"
                  radius="xl"
                  style={{ width: 40, height: 40 }}
                >
                  <IconMail
                    style={{ width: "70%", height: "70%" }}
                    stroke={1.5}
                  />
                </ActionIcon>

                <ActionIcon
                  component="a"
                  href={professor.site}
                  target="_blank"
                  variant="light"
                  color="blue"
                  aria-label="site"
                  radius="xl"
                  style={{ width: 40, height: 40 }}
                >
                  <IconLink
                    style={{ width: "70%", height: "70%" }}
                    stroke={1.5}
                  />
                </ActionIcon>
              </Group>
            </div>
          </div>
        </Group>
      ))}
    </div>
  );
};

export default ProfessorInfo;
