import React, { useState } from "react";
import { GET_LAUNCHES } from "../../lib/queries";
import { useQuery } from "@apollo/react-hooks";
import classNames from "classnames";
import DynamicButton from "./DynamicButton";

const LaunchSelector = () => {
  const [overlayIsActive, setOverlayActive] = useState(false);
  const toggleOverlay = () => setOverlayActive(!overlayIsActive);

  const { loading, error, data } = useQuery(GET_LAUNCHES);

  const onClick = e => {
    toggleOverlay();
  };

  const onChange = e => {};

  const mainDivClasses = classNames(
    "h-screen",
    "w-screen",
    "fixed",
    "top-0",
    "left-0",
    " z-10",
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
