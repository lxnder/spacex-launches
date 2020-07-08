import React from "react";
import classNames from "classnames";

const Description = ({ description }) => {
  const descriptionClasses = exists =>
    classNames(
      "py-6",
      "px-16",
      "h-auto",
      "text-center",
      "flex",
      "justify-center",
      "items-center",
      "text-lg",
      { "text-blue-800": exists },
      { "text-red-500": !exists },
      "max-w-screen-xxl",
      "border-b border-subtle-5"
    );

  return (
    <div id="description" className={descriptionClasses(description)}>
      {description ? <p>{description}</p> : <p>-NO DESCRIPTION FOUND-</p>}
    </div>
  );
};

export default Description;
