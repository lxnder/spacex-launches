import React, { useState } from "react";
import classNames from "classnames";

const Pictures = ({ pictures }) => {
  const [index, setIndex] = useState(0);

  const containerClasses = classNames(
    "col-span-12 lg:col-span-8 xl:col-span-7"
  );

  const blurBgClasses = classNames(
    "w-full h-screen lg:h-full",
    "bg-center bg-cover bg-no-repeat bg-subtle-60"
  );

  const pictureClasses = classNames(
    "w-full h-full",
    "flex items-center justify-between",
    "bg-center bg-contain bg-no-repeat",
    "px-4"
  );

  const arrowContainerClasses = direction =>
    classNames(
      "w-12 h-12",
      "flex items-center justify-center",
      "bg-subtle-60",
      "rounded-full",
      "cursor-pointer",
      { "pl-2": direction === "left" },
      { "pr-2": direction === "right" }
    );

  const arrowClasses = direction =>
    classNames(
      "w-5 h-5",
      "transform transition",
      "ease-in-out duration-200",
      "border-white",
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
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="h-32 w-full bg-subtle-50 flex items-center justify-center">
            <p className="text-2xl text-red-500 text-center">
              -NO IMAGES FOUND-
            </p>
          </div>
        </div>
      ) : (
        <div className={blurBgClasses}>
          <div
            className={pictureClasses}
            style={{ backgroundImage: `url(${pictures[index]})` }}
          >
            {pictures.length > 1 && (
              <>
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
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Pictures;
