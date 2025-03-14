import { useState } from "react";
import {
  IconAuth2fa,
  IconBellRinging,
  IconBook2,
  IconDatabaseImport,
  IconFingerprint,
  IconKey,
  IconLogout,
  IconHome,
  IconSettings,
  IconSwitchHorizontal,
  IconChevronDown,
} from "@tabler/icons-react";
import {
  Box,
  Burger,
  Center,
  Code,
  Collapse,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  UnstyledButton,
} from "@mantine/core";
import classes from "./NavbarSimpleColored.module.css";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
const data = [
  { link: "/", label: "Halaman Utama", icon: IconHome },
  { link: "/pengumuman", label: "Pengumuman", icon: IconBellRinging },
  { link: "/matakuliah", label: "Mata Kuliah", icon: IconBook2 },
  { link: "", label: "Security", icon: IconFingerprint },
  { link: "", label: "SSH Keys", icon: IconKey },
  { link: "", label: "Databases", icon: IconDatabaseImport },
  { link: "", label: "Authentication", icon: IconAuth2fa },
  { link: "", label: "Other Settings", icon: IconSettings },
];

export function NavbarSimpleColored() {
  const [active, setActive] = useState("Billing");
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const navigate = useNavigate();

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
        navigate(item.link);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <>
      <Box visibleFrom="sm">
        <nav className={classes.navbar}>
          <div className={classes.navbarMain}>
            <Group className={classes.header} justify="space-between">
              <Box size={28} style={{ color: "white" }} />
              <Code fw={700} className={classes.version}>
                v3.1.2
              </Code>
            </Group>
            {links}
          </div>

          <div className={classes.footer}>
            <a
              href="#"
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
              <span>Change account</span>
            </a>

            <a
              href="#"
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <IconLogout className={classes.linkIcon} stroke={1.5} />
              <span>Logout</span>
            </a>
          </div>
        </nav>
      </Box>

      <Box className={classes.headerSmall} hiddenFrom="sm">
        <Group justify="space-between">
          <Box size={28} style={{ color: "white" }} />
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.drawerClose}
            color="white"
          />
        </Group>
      </Box>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        title="Menu"
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
        classNames={{
          title: classes.drawerTitle,
          header: classes.drawerHeader,
          close: classes.drawerClose,
        }}
      >
        <ScrollArea
          h="calc(100vh - 80px"
          mx="-md"
          className={classes.scrollArea}
        >
          <Divider my="sm" />
          {links}
          {/* <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features
              </Box>
              <IconChevronDown size={16} color="blue.6" />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a> */}

          {/* 
          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group> */}
        </ScrollArea>
      </Drawer>
    </>
  );
}
