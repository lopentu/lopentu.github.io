import {
  Card,
  Image,
  Text,
  Badge,
  ActionIcon,
  Group,
  Grid,
  Center,
} from "@mantine/core";
import { IconMail, IconLink } from "@tabler/icons-react";
import { useEffect, useState } from "react";

import amber from "../assets/images/member/amber.png";
import bk from "../assets/images/member/bk.png";
import richard from "../assets/images/member/richard.png";
import linda from "../assets/images/member/linda.png";
import pin_er from "../assets/images/member/pin-er.png";
import joanne from "../assets/images/member/joanne.png";
import mia from "../assets/images/member/mia.png";
import irene from "../assets/images/member/irene.png";
import micah from "../assets/images/member/micah.png";
import deborah from "../assets/images/member/deborah.png";
import andy from "../assets/images/member/andy.png";
import rick from "../assets/images/member/rick.png";
import yuxuan from "../assets/images/member/yuxuan.png";
import zhihan from "../assets/images/member/zhihan.png";
import amanda from "../assets/images/member/amanda.png";

type Member = {
  name: string;
  grade: string;
  researchField: string;
  image: string;
  email?: string;
  site?: string;
};

export default function MemberCards() {
  const [members, setMembers] = useState<Member[]>([]);

  const imageMap: { [key: string]: string } = {
    amber,
    bk,
    richard,
    linda,
    pin_er,
    joanne,
    mia,
    irene,
    micah,
    deborah,
    andy,
    rick,
    yuxuan,
    zhihan,
    amanda,
  };

  useEffect(() => {
    async function fetchMembers() {
      const data = await import("../data/member/members.json");
      setMembers(data.default);
    }

    fetchMembers();
  }, []);

  return (
    <Grid gutter="lg">
      {members.map((member, index) => (
        <Grid.Col key={index} span={{ base: 12, sm: 6, md: 3 }}>
          <Card shadow="sm" padding="lg" radius="md" withBorder style={{ height: '100%', display: 'flex', flexDirection: 'column', minHeight: "320px" }}>
            <Card.Section>
              <Image
                src={imageMap[member.image]}
                alt={member.name}
                h={160}
              />
            </Card.Section>
            <Group justify="space-between" mt={10} style={{ alignItems: "center" }} wrap="nowrap">
              <Text size="lg" >
                {member.name}
              </Text>

              <Center>
                <Badge
                  color="blue"
                  variant="light"
                >
                  {member.grade.substring(0, 1)}
                </Badge>
              </Center>
            </Group>
            <Text size="sm" c="dimmed" style={{ marginBottom: "1em", flexGrow: 1 }}>
              {member.researchField}
            </Text>

            <Group justify="space-between">
              <ActionIcon
                component="a"
                href={`mailto:${member.email}`}
                variant="light"
                color="green"
                aria-label="Email"
                radius="xl"
                style={{ width: 30, height: 30 }}
              >
                <IconMail
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
              <ActionIcon
                component="a"
                href={member.site}
                target="_blank"
                variant="light"
                color="blue"
                aria-label="site"
                radius="xl"
                style={{ width: 30, height: 30 }}
              >
                <IconLink
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Group>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
}
