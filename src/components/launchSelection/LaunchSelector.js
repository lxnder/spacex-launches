import React, { useState, useEffect } from "react";
import { GET_LAUNCHES } from "../../lib/queries";
import { useQuery } from "@apollo/react-hooks";
import classNames from "classnames";
import DynamicButton from "./DynamicButton";

const LaunchSelector = () => {
  const [overlayIsActive, setOverlayActive] = useState(false);
  const [launchesByDate, setLaunchesByDate] = useState([]);

  const { loading, error, data } = useQuery(GET_LAUNCHES);

  // Duplicates list of launches ordered by date for performance reasons after data change
  useEffect(() => {
    if (!loading && !error) {
      setLaunchesByDate(
        [...data.launches].sort((a, b) => {
          return parseInt(b.launch_date_unix) - parseInt(a.launch_date_unix);
        })
      );
    } else {
      setLaunchesByDate([]);
    }
  }, [data]);

  const onClick = e => {
    setOverlayActive(!overlayIsActive);
  };

  const onChange = e => {};

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

  const topBarClasses = classNames(
    "z-30",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "content-center",
    "w-screen",
    "h-16",
    "bg-gray-800"
  );

  return (
    <div className={mainDivClasses}>
      <div className={topBarClasses}>
        <DynamicButton
          onClick={onClick}
          onChange={onChange}
          overlayIsActive={overlayIsActive}
        />
      </div>
    </div>
  );
};

export default LaunchSelector;
