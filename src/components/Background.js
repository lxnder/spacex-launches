import React from "react";
import classNames from "classnames";

const Background = () => {
  const gradientBgClasses = classNames(
    "w-screen",
    "h-screen",
    "gradient-bg",
    "fixed",
    "top-0",
    "left-0",
    "z-0"
  );

  return <div className={gradientBgClasses} />;
};

export default Background;
