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
    "bg-gray-200",
    "px-4"
  );

  const inputClasses = classNames(
    "flex",
    "flex-col",
    "justify-center",
    "w-full",
    "h-full",
    "bg-gray-200",
    "px-4",
    "text-center",
    "font-orbitron"
  );

  const dynamicDivClasses = classNames(
    { "w-3/12": !overlayIsActive },
    { "w-full": overlayIsActive },
    { "h-12": !overlayIsActive },
    { "h-16": overlayIsActive },
    "bg-white",
    "transition-all",
    "duration-1000",
    "ease-in-out",
    "min-w-10"
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
          placeholder="Search a launch ..."
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
