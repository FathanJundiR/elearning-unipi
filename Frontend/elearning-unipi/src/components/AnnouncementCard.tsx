import { Box, Card, Text } from "@mantine/core";
import classes from "./AnnouncementCard.module.css";
import { IconAlertTriangle } from "@tabler/icons-react";

export default function AnnouncementCard() {
  return (
    <Card
      radius="lg"
      shadow="sm"
      padding="xs"
      component="a"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
      className={classes.card}
    >
      <IconAlertTriangle stroke={2} className={classes.icon} />
      <div className={classes.content}>
        <Text fw={500} size="md" lineClamp={1}>
          You&apos;ve won a million dollars in cash!
        </Text>
        <Box className={classes.detail}>
          <Text size="xs" lineClamp={2}>
            Please click anywhere on this card to claim your reward, this is not
            a fraud, trust Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Deleniti fuga asperiores, sapiente consequatur laudantium
            aperiam sint eligendi suscipit reiciendis, iste, ad perferendis ab
            ducimus aut quisquam? Eveniet tempore tempora quia?
            <Text size="xs"></Text>
          </Text>
        </Box>
      </div>
    </Card>
  );
}
