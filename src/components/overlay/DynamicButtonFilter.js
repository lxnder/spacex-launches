import React from "react";
import classNames from "classnames";
import { useStore } from "../../stores/global";

const DynamicButtonFilter = () => {
  // const launchFilterName = useStore(state => state.launchFilterName);
  // const setLaunchFilterName = useStore(state => state.setLaunchFilterName);
  // const overlayIsActive = useStore(state => state.overlayIsActive);
  // const setOverlayIsActive = useStore(state => state.setOverlayIsActive);

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

  const btnClasses = classNames(
    "flex",
    "flex-col",
    "justify-center",
    "w-full",
    "h-full",
    "px-4",
    "focus:outline-none",
    "hover:border-none"
  );

  const btnTextClasses = classNames(
    "self-center",
    "font-questrial",
    "font-light",
    "text-base xxs:text-xl sm:text-2xl",
    "text-gray-700",
    "none",
    "sm:whitespace-no-wrap"
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
    "font-questrial",
    "text-red-500",
    "outline-none",
    "text-lg",
    "select-none",
    { "border-b border-red-500": overlayIsActive }
  );

  const wrapperClasses = classNames(
    "w-full",
    "h-20",
    "flex",
    "flex-col",
    "justify-end",
    "items-center",
    "fixed top-0"
  );

  const dynamicDivClasses = classNames(
    { "w-full h-16": overlayIsActive },
    {
      "w-3/4 xs:w-2/4 sm:w-5/12 md:w-4/12 lg:w-3/12 h-16 border-b border-t border-gray-700": !overlayIsActive,
    },
    "transition-all",
    "duration-1000",
    "ease-in-out",
    "min-w-10"
  );

  // TODO set global launch name state for button title
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
