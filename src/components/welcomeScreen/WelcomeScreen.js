import React from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

const WelcomeScreen = () => {
  const mainDivClasses = classNames(
    "absolute",
    "w-screen",
    "h-screen",
    "flex",
    "flex-col",
    "items-center",
    "pt-20",
    "z-10"
  );

  const gridWrapperClasses = classNames(
    "w-full",
    "h-full",
    // "min-h-550",
    "p-8",
    "grid",
    "grid-cols-12 grid-rows-6",
    "max-w-screen-xl"
  );

  const gridElementClasses = classes =>
    classNames("h-full", "bg-center", "bg-contain", "bg-no-repeat", classes);

  const bottomDivClasses = classNames(
    "col-span-12 row-span-1 pt-4",
    "flex flex-col items-center justify-center"
  );

  return (
    <div className={mainDivClasses}>
      <motion.div
        className={gridWrapperClasses}
        initial={{ y: "3rem", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
      >
        <div
          className={gridElementClasses(
            "col-span-3 row-span-5 hidden lg:block"
          )}
          style={{ backgroundImage: "url(assets/ships/left.png)" }}
        />
        <motion.div
          initial={{ y: "-1.5rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
          className={gridElementClasses("col-span-12 lg:col-span-6 row-span-5")}
          style={{ backgroundImage: "url(assets/ships/mid.png)" }}
        />
        <div
          className={gridElementClasses(
            "col-span-3 row-span-5 hidden lg:block"
          )}
          style={{ backgroundImage: "url(assets/ships/right.png)" }}
        />
        <motion.div
          className={bottomDivClasses}
          initial={{ y: "1.5rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
        >
          <div
            className="w-full h-12 min-h-1.25rem my-2 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(assets/unofficial_logo_spaced.png)`,
            }}
          />
          <div className="w-5/12 border-t border-gray-700 pt-2 flex justify-center">
            <p className="text-base xxs:text-xl sm:text-2xl font-questrial text-gray-700 whitespace-no-wrap">
              UNOFFICIAL LAUNCHES SITE
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;
