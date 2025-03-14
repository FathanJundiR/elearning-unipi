import { Accordion } from "@mantine/core";

interface MatkulAccordionProps {
  pertemuan: string;
  description: string;
}

export default function MataKuliahAccordion({
  pertemuan,
  description,
}: MatkulAccordionProps) {
  return (
    <Accordion.Item value={pertemuan}>
      <Accordion.Control>{`Pertemuan ke-${pertemuan}`}</Accordion.Control>
      <Accordion.Panel>{description}</Accordion.Panel>
    </Accordion.Item>
  );
}
