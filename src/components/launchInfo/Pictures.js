import React, { useState } from "react";
import classNames from "classnames";

const Pictures = ({ pictures }) => {
  const [index, setIndex] = useState(0);

  const containerClasses = classNames(
    "col-span-7",
    "h-auto",
    "p-4",
    "grid grid-cols-12"
  );

  const bgClasses = classNames(
    "bg-center",
    "bg-cover",
    "bg-no-repeat",
    "w-full",
    "h-full",
    "rounded-lg",
    "col-span-10"
  );

  const blurClasses = classNames("w-full", "h-full", "rounded-lg");

  const pictureClasses = classNames(
    "bg-center",
    "bg-contain",
    "bg-no-repeat",
    "w-full",
    "h-full"
  );

  const arrowContainerClasses = classNames(
    "col-span-1",
    "flex",
    "flex-col",
    "justify-center",
    "items-center"
  );

  const arrowClasses = direction =>
    classNames(
      "w-8",
      "h-8",
      "border-blue-800",
      "transform",
      "transition",
      "ease-in-out",
      "duration-200",
      "cursor-pointer",
      "hover:scale-125 hover:border-red-500",
      { "border-t border-r rotate-45": direction === "right" },
      { "border-t border-l -rotate-45": direction === "left" }
    );

  const nextPicture = () => {
    if (index < pictures.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  const previousPicture = () => {
    if (index === 0) {
      setIndex(pictures.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className={containerClasses}>
      {pictures.length < 1 ? (
        <div className="col-span-12 flex flex-col justify-center items-center">
          <p className="text-lg text-red-500">-NO IMAGES FOUND-</p>
        </div>
      ) : (
        <>
          <div className={arrowContainerClasses}>
            <div className={arrowClasses("left")} onClick={previousPicture} />
          </div>
          <div
            className={bgClasses}
            style={{
              backgroundImage: `url(${pictures[index]}`,
            }}
          >
            <div
              className={blurClasses}
              style={{ backdropFilter: "blur(16px)" }}
            >
              <div
                className={pictureClasses}
                style={{ backgroundImage: `url(${pictures[index]}` }}
              ></div>
            </div>
          </div>
          <div className={arrowContainerClasses}>
            <div className={arrowClasses("right")} onClick={nextPicture} />
          </div>
        </>
      )}
    </div>
  );
};

export default Pictures;
