import {
  Anchor,
  Box,
  Flex,
  ScrollArea,
  ScrollAreaAutosize,
  Text,
  Title,
} from "@mantine/core";
import AnnouncementCard from "../../components/AnnouncementCard";
import classes from "./HomePage.module.css";
import AssignmentStatCard from "../../components/AssignmentStatCard";

export default function HomePage() {
  return (
    <>
      <Box mb="md">
        <Flex justify="flex-start" align="flex-start" direction="column">
          <Box mb="md">
            <Title order={4}>Pengumuman</Title>
          </Box>
          <ScrollArea w="100%">
            <Box className={classes.boxAnnouncement}>
              <AnnouncementCard></AnnouncementCard>
              <AnnouncementCard></AnnouncementCard>
              <AnnouncementCard></AnnouncementCard>
              <AnnouncementCard></AnnouncementCard>
            </Box>
          </ScrollArea>
          <Box
            style={{
              display: "flex",
              justifyContent: "end",
              width: "100%",
            }}
          >
            <Anchor
              fw={500}
              fz="md"
              href="#"
              underline="never"
              className={classes.anchorMore}
              style={{ alignContent: "center" }}
            >
              See more
            </Anchor>
          </Box>
        </Flex>
      </Box>
      <Box mb="md">
        <Flex justify="flex-start" align="flex-start" direction="column">
          <Box mb="md">
            <Title order={4}>Tugas</Title>
          </Box>
          <ScrollArea w="100%">
            <Box className={classes.boxAnnouncement}>
              <AssignmentStatCard bg="red.7"></AssignmentStatCard>
              <AssignmentStatCard bg="grape.4"></AssignmentStatCard>
              <AssignmentStatCard bg="cyan.7"></AssignmentStatCard>
            </Box>
          </ScrollArea>
          <Box
            style={{
              display: "flex",
              justifyContent: "end",
              width: "100%",
            }}
          >
            <Anchor
              fw={500}
              fz="md"
              href="#"
              underline="never"
              className={classes.anchorMore}
            >
              See more
            </Anchor>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
