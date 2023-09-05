import { useNavigate, useParams } from "react-router-dom";
import { SelectedPage } from "../../shared/alltypes";
import { useEffect, useState } from "react";
import { TextField, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import {
  Categories,
  Cuisines,
  Ingredient,
  Tags,
} from "@/shared/AllRecipesTypes";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const DiabetesPage = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="diabetespage"
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      <div className="flex flex-col items-center space-y-4">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Diabetes
        </h1>
        <motion.div
          className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
          onViewportEnter={() => setSelectedPage(SelectedPage.DiabetesPage)}
        >
          <div className="flex flex-col items-center space-y-4 px-4 md:px-10">
            <blockquote className="border-l-4 border-gray-600 pl-4 italic text-lg">
              “Diabetes mellitus, often known simply as diabetes, is a group of
              common endocrine diseases characterized by sustained high blood
              sugar levels. Diabetes is due to either the pancreas not producing
              enough insulin, or the cells of the body becoming unresponsive to
              the hormone's effects. Classic symptoms include thirst, polyuria,
              weight loss, and blurred vision. If left untreated, the disease
              can lead to various health complications, including disorders of
              the cardiovascular system, eye, kidney, and nerves. Untreated or
              poorly treated diabetes accounts for approximately 1.5 million
              deaths every year.” From Wikipedia, the free encyclopedia
            </blockquote>
            <p className="text-md leading-6 mt-4">
              Many of these tragic outcomes could be prevented with early
              intervention and management. A key component of managing diabetes
              is understanding and controlling dietary intake. By being informed
              about the sugar and nutritional content of the food we eat, we can
              make healthier choices that may reduce the risk of complications.{" "}
              <strong>Family Fast-Food</strong> aims to empower individuals with
              the knowledge they need about their food. Knowledge is power, and
              by understanding what's on our plate, we can take significant
              strides in managing and preventing diabetes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DiabetesPage;
