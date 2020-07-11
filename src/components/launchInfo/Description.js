import React from "react";
import classNames from "classnames";

const Description = ({ description }) => {
  const descriptionClasses = exists =>
    classNames(
      "h-auto",
      // "border-b border-subtle-5",
      "flex items-center justify-center",
      "max-w-screen-xxl",
      "px-8 sm:px-16",
      "pb-6 xxs:pb-12",
      "pt-4 xxs:pt-10",
      "text-center text-base xxs:text-base sm:text-lg",
      { "text-blue-800": exists },
      { "text-red-500": !exists }
    );

  return (
    <div id="description" className={descriptionClasses(description)}>
      {description ? <p>{description}</p> : <p>-NO DESCRIPTION FOUND-</p>}
    </div>
  );
};

export default Description;
