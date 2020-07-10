import React from "react";
import classNames from "classnames";
import { useStore } from "../../stores/global";

const DynamicButtonFilter = () => {
  const {
    launchFilterName,
    setLaunchFilterName,
    overlayIsActive,
    setOverlayIsActive,
    selectedLaunchName,
  } = useStore();

  const setText = e => {
    setLaunchFilterName(e.target.value);
  };

  // ! REMOVED FIXED TOP-0
  const wrapperClasses = classNames(
    "absolute w-full h-20",
    "flex flex-col justify-end items-center",
    "z-50"
  );

  // ! ADDED Z-50
  const dynamicDivClasses = classNames(
    { "w-full h-16": overlayIsActive },
    {
      "w-3/4 xs:w-2/4 sm:w-5/12 md:w-4/12 lg:w-3/12 h-16 border-b border-t border-gray-700": !overlayIsActive,
    },
    "transition-all duration-1000 ease-in-out",
    "min-w-10 z-50"
  );

  const btnClasses = classNames(
    "w-full h-full",
    "flex flex-col justify-center",
    "px-4",
    "focus:outline-none",
    "hover:border-none"
  );

  const btnTextClasses = classNames(
    "self-center",
    "font-questrial",
    "text-base xxs:text-xl sm:text-2xl",
    "font-light",
    "text-gray-700",
    "none",
    "sm:whitespace-no-wrap"
  );

  const inputClasses = classNames(
    "bg-transparent",
    "flex flex-col justify-center",
    "w-full h-full",
    "px-4",
    "text-center text-lg text-red-500",
    "font-questrial",
    "outline-none select-none",
    { "border-b border-red-500": overlayIsActive }
  );

  return (
    <div className={wrapperClasses}>
      <div className={dynamicDivClasses}>
        {!overlayIsActive ? (
          <button
            className={btnClasses}
            onClick={() => setOverlayIsActive(true)}
          >
            <p className={btnTextClasses}>
              {selectedLaunchName !== "" ? selectedLaunchName : "SELECT LAUNCH"}
            </p>
          </button>
        ) : (
          <input
            type="text"
            placeholder="Type here to filter missions..."
            className={inputClasses}
            onChange={setText}
            value={launchFilterName}
            spellCheck="false"
          />
        )}
      </div>
    </div>
  );
};

export default DynamicButtonFilter;
