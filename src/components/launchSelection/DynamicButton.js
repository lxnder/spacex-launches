import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

const DynamicButton = ({ onClick, onChange, overlayIsActive }) => {
  const btnClasses = classNames(
    "flex",
    "flex-col",
    "justify-center",
    "w-full",
    "h-full",
    "px-4",
    "focus:outline-none"
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
    "font-orbitron",
    "ease-in-out",
    "text-red-500",
    "outline-none"
  );

  const dynamicDivClasses = classNames(
    { "w-full": overlayIsActive },
    { "h-16": overlayIsActive },
    { "bg-gray-900": overlayIsActive },
    { "bg-white": !overlayIsActive },
    { "w-3/12": !overlayIsActive },
    { "h-12": !overlayIsActive },
    { "rounded-lg": !overlayIsActive },
    "transition-all",
    "duration-1000",
    "ease-in-out",
    "min-w-10",
    { "border-b-2": overlayIsActive },
    { "border-red-500": overlayIsActive }
  );

  return (
    <div className={dynamicDivClasses}>
      {!overlayIsActive ? (
        <button className={btnClasses} onClick={onClick}>
          <p className="self-center font-orbitron text-lg none">
            SELECT A LAUNCH
          </p>
        </button>
      ) : (
        <input
          type="text"
          placeholder="Type here to filter launches..."
          className={inputClasses}
          onChange={onChange}
        />
      )}
    </div>
  );
};

DynamicButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  overlayIsActive: PropTypes.bool.isRequired,
};

export default DynamicButton;
