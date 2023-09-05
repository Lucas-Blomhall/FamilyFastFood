import { useNavigate, useParams } from "react-router-dom";
import { SelectedPage } from "../../shared/alltypes";
import { TextField, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import {
  Categories,
  Cuisines,
  Ingredient,
  Tags,
} from "@/shared/AllRecipesTypes";
import React, { useState, useEffect } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const CalendrarPage = ({ setSelectedPage }: Props) => {
  const [events, setEvents] = useState([]);

  //calendrar user fetch calories
  useEffect(() => {
    // Fetch data from your API here
    fetch("http://localhost:5239/api/DailyCaloricIntakeEntries")
      .then((response) => response.json())
      .then((data) => {
        const formattedEvents = data.map(
          (entry: { caloriesConsumed: any; date: any }) => ({
            title: `${entry.caloriesConsumed} calories`,
            start: entry.date,
          })
        );
        setEvents(formattedEvents);
      });
  }, []);

  // a custom render function
  function renderEventContent(eventInfo: {
    timeText:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
    event: {
      title:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined;
    };
  }) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  return (
    <section
      id="diabetespage"
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      <motion.div
        className="main-content mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.DiabetesPage)}
      >
        <div className="flex flex-col items-center space-y-4">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Diabetes
          </h1>
          <div className="flex flex-col items-center space-y-4 px-4 md:px-10">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              weekends={true}
              events={events}
              eventContent={renderEventContent}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CalendrarPage;
