import React from "react";
import classNames from "classnames";

const WelcomeScreen = () => {
  const mainDivClasses = classNames(
    "absolute",
    "w-screen",
    "h-screen",
    "flex",
    "flex-col",
    "items-center",
    "pt-32",
    "p-24",
    "z-10"
  );

  const gridWrapperClasses = classNames(
    "w-full",
    "h-full",
    "grid",
    "grid-cols-12",
    "row-gap-12",
    "grid-rows-6",
    "max-w-screen-xl"
  );

  const gridElementClasses = classes =>
    classNames("h-full", "bg-center", "bg-contain", "bg-no-repeat", classes);

  const bottomDivClasses = classNames(
    "col-span-12",
    "row-span-1",
    "flex",
    "flex-col",
    "items-center",
    "space-y-4"
  );

  return (
    <div className={mainDivClasses}>
      <div className={gridWrapperClasses}>
        <div
          className={gridElementClasses("col-span-3 row-span-5")}
          style={{ backgroundImage: "url(assets/ships/left.png)" }}
        />
        <div
          className={gridElementClasses("col-span-6 row-span-5")}
          style={{ backgroundImage: "url(assets/ships/mid.png)" }}
        />
        <div
          className={gridElementClasses("col-span-3 row-span-5")}
          style={{ backgroundImage: "url(assets/ships/right.png)" }}
        />
        <div className={bottomDivClasses}>
          <img
            className="w-6/12 h-auto"
            src="assets/unofficial_logo_spaced.png"
            alt="unofficial_logo"
          />
          <div className="w-5/12 border-t border-gray-700 p-2">
            <p className="text-center text-base xxs:text-xl sm:text-2xl font-questrial text-gray-700 whitespace-no-wrap">
              UNOFFICIAL LAUNCHES SITE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
