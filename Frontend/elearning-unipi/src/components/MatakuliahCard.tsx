import { Card, Text, Badge, Button, Group, Stack } from "@mantine/core";
import { IconAlarm, IconCalendarWeek, IconUser } from "@tabler/icons-react";
import classes from "./MatakuliahCard.module.css";

interface MataKuliahProps {
  judul: string;
  deskripsi: string;
  dosen: string;
  hari: string;
  jam: string;
}

export default function MatakuliahCard({
  judul,
  deskripsi,
  dosen,
  hari,
  jam,
}: MataKuliahProps) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className={classes.card}
    >
      {/* <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section> */}

      <Group justify="space-between" mb="xs">
        <Text fw={500}>{judul}</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed" lineClamp={2} mb="sm">
        {deskripsi}
      </Text>
      <Stack gap="xs">
        <Group gap="sm">
          <IconUser />
          <Text size="sm">{dosen}</Text>
        </Group>

        <Group gap="xl">
          <Group gap="sm">
            <IconCalendarWeek />
            <Text size="sm">{hari}</Text>
          </Group>

          <Group gap="sm">
            <IconAlarm />
            <Text size="sm">{jam}</Text>
          </Group>
        </Group>
      </Stack>

      <Button color="blue" fullWidth mt="md" radius="md">
        Buka
      </Button>
    </Card>
  );
}
