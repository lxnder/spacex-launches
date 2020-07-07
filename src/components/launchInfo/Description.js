import React from "react";
import classNames from "classnames";

const Description = ({ description }) => {
  const descriptionClasses = classNames(
    "col-span-2",
    "h-auto",
    "bg-green-600",
    "text-center",
    "flex",
    "justify-center",
    "items-center"
  );

  return (
    <div id="description" className={descriptionClasses}>
      <p>{description}</p>
    </div>
  );
};

export default Description;
