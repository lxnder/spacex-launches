import React, { useState } from "react";
import { GET_LAUNCHES } from "../../lib/queries";
import { useQuery } from "@apollo/react-hooks";
import classNames from "classnames";
import DynamicButtonFilter from "./DynamicButtonFilter";
import LaunchList from "./LaunchList";
import { useStore } from "../../stores/global";

const Overlay = () => {
  const overlayIsActive = useStore(state => state.overlayIsActive);
  const setOverlayIsActive = useStore(state => state.setOverlayIsActive);
  const [launchNameFilter, setLaunchNameFilter] = useState("");

  const { loading, error, data } = useQuery(GET_LAUNCHES);

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
          launchNameFilter={launchNameFilter}
        />
      )}
    </div>
  );
};

export default Overlay;
