import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const DynamicButton = ({ onClick, updateNameFilter, overlayIsActive }) => {
  const [inputText, setInputText] = useState("");

  const setText = e => {
    updateNameFilter(e);
    setInputText(e.target.value);
    console.log(e.target.value);
  };

  const btnClasses = classNames(
    "flex",
    "flex-col",
    "justify-center",
    "w-full",
    "h-full",
    "px-4",
    "focus:outline-none"
  );

  const btnTextClasses = classNames(
    "self-center",
    "font-oxanium",
    "font-light",
    "text-2xl",
    "none"
  );

  const inputClasses = classNames(
    "bg-transparent",
    "flex",
    "flex-col",
    "justify-center",
    "w-full",
    "h-full",
    "px-4",
    "text-center",
    "font-oxanium",
    "ease-in-out",
    "text-red-500",
    "outline-none",
    "select-none"
  );

  const dynamicDivClasses = classNames(
    { "w-full h-16 bg-gray-900 border-b-2 border-red-500": overlayIsActive },
    { "w-3/12 h-12 bg-white rounded-lg": !overlayIsActive },
    "transition-all",
    "duration-1000",
    "ease-in-out",
    "min-w-10"
  );

  return (
    <div className={dynamicDivClasses}>
      {!overlayIsActive ? (
        <button className={btnClasses} onClick={onClick}>
          <p className={btnTextClasses}>SELECT A LAUNCH</p>
        </button>
      ) : (
        <input
          type="text"
          placeholder="Type here to filter launches..."
          className={inputClasses}
          onChange={setText}
          value={inputText}
        />
      )}
    </div>
  );
};

DynamicButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  updateNameFilter: PropTypes.func.isRequired,
  overlayIsActive: PropTypes.bool.isRequired,
};

export default DynamicButton;
