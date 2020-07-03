import React, { useState } from "react";
import { GET_LAUNCHES } from "../../lib/queries";
import { useQuery } from "@apollo/react-hooks";
import classNames from "classnames";
import DynamicButtonFilter from "./DynamicButtonFilter";

import LaunchList from "./LaunchList";

const Overlay = () => {
  const [overlayIsActive, setOverlayIsActive] = useState(true);
  const [launchNameFilter, setLaunchNameFilter] = useState("");

  const { loading, error, data } = useQuery(GET_LAUNCHES);

  const disableOverlay = e => {
    if (e.target === e.currentTarget) {
      setOverlayIsActive(false);
    }
  };

  const mainDivClasses = classNames(
    "h-screen",
    "w-screen",
    "fixed",
    "top-0",
    "left-0",
    "z-10",
    "flex",
    "flex-col"
  );

  // const topBarClasses = classNames();
  // "z-30",
  // "flex",
  // "flex-col",
  // "justify-center",
  // "items-center",
  // "content-center",
  // "w-screen",
  // "h-16"

  return (
    <div className={mainDivClasses}>
      <DynamicButtonFilter
        onClick={() => setOverlayIsActive(true)}
        updateNameFilter={e => setLaunchNameFilter(e.target.value)}
        overlayIsActive={overlayIsActive}
      />
      {overlayIsActive && (
        <LaunchList
          launchesData={{ data, loading, error }}
          disableOverlay={disableOverlay}
          launchNameFilter={launchNameFilter}
        />
      )}
    </div>
  );
};

export default Overlay;
