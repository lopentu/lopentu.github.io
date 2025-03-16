import { useState, useEffect } from "react";
import { AppShell, Group, Anchor, Image } from "@mantine/core";
import logoLope from "../assets/images/header/logo_lope.jpg";
import "../app.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppShell.Header className={scrolled ? "header scrolled" : "header"}>
      <Group position="apart">
        <Image src={logoLope} alt="Logo" width={100} height="30px"/>

        <Group gap="xl">
          <Anchor href="#news" c={"white"} underline="never" fw={500}>
            最新
          </Anchor>
          <Anchor href="#about" c={"white"} underline="never" fw={500}>
            關於
          </Anchor>
          <Anchor href="#resources" c={"white"} underline="never" fw={500}>
            資源
          </Anchor>
          <Anchor href="#member" c={"white"} underline="never" fw={500}>
            成員
          </Anchor>
          <Anchor href="#publications" c={"white"} underline="never" fw={500}>
            成果
          </Anchor>
        </Group>
      </Group>
    </AppShell.Header>
  );
}
