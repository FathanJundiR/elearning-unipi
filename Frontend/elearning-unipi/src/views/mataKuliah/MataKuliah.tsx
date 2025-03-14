import { Divider } from "@mantine/core";
import MatakuliahCard from "../../components/MatakuliahCard";
import classes from "./MataKuliah.module.css";

const matkulData = [
  {
    judul: "PBO",
    deskripsi: "Mengenali pemrograman berorientasi object",
    dosen: "Pak Budi",
    hari: "Senin",
    jam: "09.00",
  },
  {
    judul: "Kriptografi",
    deskripsi:
      "Pengenalan kriptografi bagi calon hacker, jancuk pristel prestakon mayo",
    dosen: "Pak Hengkel",
    hari: "Sabtu",
    jam: "21.00",
  },
  {
    judul: "Kriptografi",
    deskripsi:
      "Pengenalan kriptografi bagi calon hacker, jancuk pristel prestakon mayo",
    dosen: "Pak Hengkel",
    hari: "Sabtu",
    jam: "21.00",
  },
  {
    judul: "Kriptografi",
    deskripsi:
      "Pengenalan kriptografi bagi calon hacker, jancuk pristel prestakon mayo pristell pler mayo pres ma eh pres ma tah pres ma eh",
    dosen: "Pak Hengkel",
    hari: "Sabtu",
    jam: "21.00",
  },
  {
    judul: "Kriptografi",
    deskripsi:
      "Pengenalan kriptografi bagi calon hacker, jancuk pristel prestakon mayo",
    dosen: "Pak Hengkel",
    hari: "Sabtu",
    jam: "21.00",
  },
  {
    judul: "Kriptografi",
    deskripsi:
      "Pengenalan kriptografi bagi calon hacker, jancuk pristel prestakon mayo pristell pler mayo pres ma eh pres ma tah pres ma eh",
    dosen: "Pak Hengkel",
    hari: "Sabtu",
    jam: "21.00",
  },
  {
    judul: "Kriptografi",
    deskripsi:
      "Pengenalan kriptografi bagi calon hacker, jancuk pristel prestakon mayo pristell pler mayo pres ma eh pres ma tah pres ma eh",
    dosen: "Pak Hengkel",
    hari: "Sabtu",
    jam: "21.00",
  },
  {
    judul: "Kriptografi",
    deskripsi:
      "Pengenalan kriptografi bagi calon hacker, jancuk pristel prestakon mayo pristell pler mayo pres ma eh pres ma tah pres ma eh",
    dosen: "Pak Hengkel",
    hari: "Sabtu",
    jam: "21.00",
  },
  {
    judul: "Kriptografi",
    deskripsi:
      "Pengenalan kriptografi bagi calon hacker, jancuk pristel prestakon mayo pristell pler mayo pres ma eh pres ma tah pres ma eh",
    dosen: "Pak Hengkel",
    hari: "Sabtu",
    jam: "21.00",
  },
  {
    judul: "Kriptografi",
    deskripsi:
      "Pengenalan kriptografi bagi calon hacker, jancuk pristel prestakon mayo pristell pler mayo pres ma eh pres ma tah pres ma eh",
    dosen: "Pak Hengkel",
    hari: "Sabtu",
    jam: "21.00",
  },
  {
    judul: "Kriptografi",
    deskripsi:
      "Pengenalan kriptografi bagi calon hacker, jancuk pristel prestakon mayo pristell pler mayo pres ma eh pres ma tah pres ma eh",
    dosen: "Pak Hengkel",
    hari: "Sabtu",
    jam: "21.00",
  },
  {
    judul: "Kriptografi",
    deskripsi:
      "Pengenalan kriptografi bagi calon hacker, jancuk pristel prestakon mayo pristell pler mayo pres ma eh pres ma tah pres ma eh",
    dosen: "Pak Hengkel",
    hari: "Sabtu",
    jam: "21.00",
  },
  {
    judul: "Kriptografi",
    deskripsi:
      "Pengenalan kriptografi bagi calon hacker, jancuk pristel prestakon mayo pristell pler mayo pres ma eh pres ma tah pres ma eh",
    dosen: "Pak Hengkel",
    hari: "Sabtu",
    jam: "21.00",
  },
];

export default function MataKuliah() {
  return (
    <>
      <div className={classes.section}>
        <Divider
          mb="xs"
          size="md"
          label="2024 / 2025 Ganjil"
          labelPosition="left"
          color=""
        ></Divider>
        <div className={classes.container}>
          {matkulData?.map((data, index) => {
            return (
              <MatakuliahCard
                judul={data.judul}
                deskripsi={data.deskripsi}
                dosen={data.dosen}
                hari={data.hari}
                jam={data.jam}
                key={index}
              ></MatakuliahCard>
            );
          })}
        </div>
      </div>
      <div className={classes.section}>
        <Divider
          my="xs"
          size="md"
          label="2024 / 2025 Ganjil"
          labelPosition="left"
          color=""
        ></Divider>
        <div className={classes.container}>
          {matkulData?.map((data, index) => {
            return (
              <MatakuliahCard
                judul={data.judul}
                deskripsi={data.deskripsi}
                dosen={data.dosen}
                hari={data.hari}
                jam={data.jam}
                key={index}
              ></MatakuliahCard>
            );
          })}
        </div>
      </div>
    </>
  );
}
