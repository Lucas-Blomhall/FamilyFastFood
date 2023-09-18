// import { SelectedPage, RecipeType } from "@/shared/types";
// import { motion } from "framer-motion";
// import HText from "@/shared/HText";
// import Recipe from "./Recipe";
// import { useState } from "react";
// import ClassFile, { RecipePropsagain } from "@/shared/ClassFile";

// import Image1Meat from "./src/assets/Image1Meat.jpg";
import { useState } from "react";
import { RecipeType, SelectedPage } from "../../shared/alltypes";
import { motion } from "framer-motion";
import ClassFile from "../../shared/ClassFile";
import HText from "../../shared/HText";
import Image2Meat from "@/assets/meatdish.jpg";
import Image1Meat from "@/assets/Image1Meat.jpg";
import Image3Vegetarian from "@/assets/vegetariandish.jpg";
import Image3dietdish from "@/assets/dietdish.jpg";

const classes: RecipeType[] = [
  {
    name: "Meat dishes",
    description:
      "In conclusion, meat dishes are more than just a culinary delight; they are a journey through time, telling tales of survival, innovation, and culture. While we relish the flavors and textures that meat brings to our table, it's crucial to honor the life it represents and consume it with gratitude and responsibility.",
    image: Image2Meat,
    category: "Meat",
  },
  {
    name: "Vegetarian dishes",
    description:
      "In conclusion, vegetarian dishes are a celebration of nature's generosity. They are not just meals but stories – tales of cultures, traditions, and the endless creativity of chefs and home cooks alike. Embracing vegetarian cuisine is not just about foregoing meat; it's about diving into a world of flavors, textures, and aromas, discovering the infinite possibilities that nature offers us on a plate.",
    image: Image3Vegetarian,
    category: "Vegetarian",
  },
  {
    name: "Diet dishes",
    description:
      "Diet dishes are not about deprivation but about celebrating food in its most nutritious form. It’s a journey of exploring flavors while keeping health at the forefront. With a surge in the demand for health-focused meals, there has never been a better time to embrace and explore the world of diet dishes. So, the next time you look at a diet dish, see it not as a compromise but as a harmonious blend of taste and health.",
    image: Image3dietdish,
    category: "Diet",
  },
  {
    name: "etc",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image1Meat,
    category: "etc1",
  },
  {
    name: "etc2",
    image: Image1Meat,
    category: "etc2",
  },
  {
    name: "etc3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: Image1Meat,
    category: "etc3",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const SelectedRecipe = ({ setSelectedPage }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <section id="selectedrecipe" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.SelectedRecipe)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Some food categories</HText>
            <p className="py-5">
              Here you can find some of the food categories I have added to the
              website.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: RecipeType, index) => (
              <ClassFile
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
                category={item.category}
                isSelected={item.category === selectedCategory}
                onSelect={handleCategorySelect}
              />
            ))}
            {selectedCategory && <p>Selected Category: {selectedCategory}</p>}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default SelectedRecipe;
