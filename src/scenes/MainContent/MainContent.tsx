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

const MainContent = ({ setSelectedPage }: Props) => {
  const navigate = useNavigate();
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="maincontent"
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      <div className="flex flex-col items-center space-y-4">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Welcome to the Family!
        </h1>
        <motion.div
          className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
          onViewportEnter={() => setSelectedPage(SelectedPage.MainContent)}
        >
          <p className="text-md leading-6 mt-4">
            Welcome to Family Fast-Food! I created this recipe website primarily
            to showcase detailed nutritional values of various dishes, helping
            everyone identify specific food content – from sugar, protein, and
            calorie counts to specific ingredients like pork, milk, or nuts.
            Knowing what we eat is essential, and with the diverse needs and
            preferences out there, it's important that everyone finds something
            suitable. That's why 'Family' is at the heart of Family Fast-Food –
            because this is a recipe platform for everyone.
          </p>
          <div className="fade-in "></div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainContent;
