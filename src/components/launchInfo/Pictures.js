import React, { useState } from "react";
import classNames from "classnames";

const Pictures = ({ pictures }) => {
  const [index, setIndex] = useState(0);

  const containerClasses = classNames(
    "col-span-7",
    "h-auto",
    // "p-4",
    "grid grid-cols-12"
  );

  const bgClasses = classNames(
    "bg-center",
    "bg-cover",
    "bg-no-repeat",
    "w-full",
    "h-full",
    "col-span-12"
  );

  const blurClasses = classNames("w-full", "h-full", "rounded-lg");

  const pictureClasses = classNames(
    "bg-center",
    "bg-contain",
    "bg-no-repeat",
    "w-full",
    "h-full",
    "flex items-center justify-between px-4"
  );

  const arrowContainerClasses = direction =>
    classNames(
      "w-12",
      "h-12",
      "bg-subtle-40",
      "rounded-full",
      "flex",
      "items-center",
      "justify-center",
      "cursor-pointer",
      { "pl-2": direction === "left" },
      { "pr-2": direction === "right" }
    );

  const arrowClasses = direction =>
    classNames(
      "w-5",
      "h-5",
      "border-white",
      "transform",
      "transition",
      "ease-in-out",
      "duration-200",
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

  // TODO: No images found
  return (
    <div className={containerClasses}>
      {pictures.length < 1 ? (
        <div className="col-span-12 flex flex-col justify-center items-center">
          <p className="text-lg text-red-500">-NO IMAGES FOUND-</p>
        </div>
      ) : (
        <>
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
              >
                <div
                  className={arrowContainerClasses("left")}
                  onClick={previousPicture}
                >
                  <div className={arrowClasses("left")} />
                </div>
                <div
                  className={arrowContainerClasses("right")}
                  onClick={nextPicture}
                >
                  <div className={arrowClasses("right")} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Pictures;
