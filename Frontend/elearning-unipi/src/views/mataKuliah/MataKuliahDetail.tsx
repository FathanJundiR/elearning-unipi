import { Accordion } from "@mantine/core";
import MataKuliahAccordion from "../../components/MataKuliahAccordion";

const mockData = [
  {
    pertemuan: "Apples",
    description:
      "Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.",
  },
  {
    pertemuan: "Bananas",
    description:
      "Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.",
  },
  {
    pertemuan: "Broccoli",
    description:
      "Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.",
  },
];

export default function MataKuliahDetail() {
  return (
    <div>
      <div>
        <Accordion variant="separated">
          {mockData?.map((data, index) => {
            return (
              <MataKuliahAccordion
                key={index}
                pertemuan={data.pertemuan}
                description={data.description}
              ></MataKuliahAccordion>
            );
          })}
        </Accordion>
      </div>
      <div></div>
    </div>
  );
}
