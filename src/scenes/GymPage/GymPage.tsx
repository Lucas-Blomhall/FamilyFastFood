// import useMediaQuery from "@/hooks/useMediaQuery";
// import { SelectedPage } from "@/shared/types";
// import ActionButton from "@/shared/ActionButton";
// import FamilyFastFoodHatTransBackgroundText from "@/assets/FamilyFastFoodHatTransBackgroundText.png";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import { motion } from "framer-motion";
// import RecipesButton from "@/shared/RecipesButton";
// import { Link, useNavigate } from 'react-router-dom';
// import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn } from "mdb-react-ui-kit";
// import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Input, TextField } from "@mui/material";
// import { useEffect, useState } from "react";
// import lucasselfiefffbackground from "@/assets/lucasselfiefffbackground.png";

import { useNavigate } from "react-router-dom";
import { SelectedPage } from "../../shared/alltypes";
import { useEffect, useState } from "react";
import { SelectChangeEvent, TextField, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const GymPage = ({ setSelectedPage }: Props) => {
  const navigate = useNavigate();
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="gympage" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div
        className="main-content mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.GymPage)}
      >
        <div className=" flex flex-col items-center space-y-4">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Sports nutrition
          </h1>
          <div className="flex flex-col items-center space-y-4 px-4 md:px-10">
            <p className="text-md leading-6 mt-4">
              In the realm of athletics, the importance of nutrition cannot be
              overstated. Whether you're training for strength, endurance, or
              simply aiming for overall fitness, what you consume plays a
              pivotal role in determining your success. At{" "}
              <strong>Family Fast-Food</strong>, we recognize the diverse
              nutrition needs of our users. Whether you're on a bulking phase,
              shredding for a competition, or fueling for an upcoming marathon,
              having the right dietary information at your fingertips is
              crucial.
            </p>
            <p className="text-md leading-6 mt-4">
              Our platform is designed to empower you with detailed insights
              into the nutritional content of your meals. From protein to
              carbohydrates, fats, and essential micronutrients, we strive to
              provide a comprehensive breakdown to cater to your specific
              athletic needs. We believe that by offering this knowledge, we're
              not just helping you meet your fitness goals but also promoting a
              holistic approach to health and well-being. With{" "}
              <strong>Family Fast-Food</strong>, embark on your fitness journey
              with confidence, knowing that you're fueling your body right.
            </p>
          </div>
        </div>
        <div className="fade-in "></div>
      </motion.div>
    </section>
  );
};

export default GymPage;
