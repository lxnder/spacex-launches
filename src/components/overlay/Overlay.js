import React from "react";
import { GET_LAUNCHES } from "../../lib/queries";
import { useQuery } from "@apollo/react-hooks";
import classNames from "classnames";
import DynamicButtonFilter from "./DynamicButtonFilter";
import LaunchList from "./LaunchList";
import { useStore } from "../../stores/global";
import { AnimatePresence } from "framer-motion";

const Overlay = () => {
  const { overlayIsActive } = useStore();
  const { loading, error, data } = useQuery(GET_LAUNCHES);

  const mainDivClasses = classNames(
    "h-screen",
    "w-screen",
    "fixed",
    "top-0",
    "left-0",
    "flex",
    "flex-col"
  );

  return (
    <div className={mainDivClasses}>
      <DynamicButtonFilter />
      <AnimatePresence>
        {overlayIsActive && (
          <LaunchList launchesData={{ data, loading, error }} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Overlay;
