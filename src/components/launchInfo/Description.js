import React from "react";
import classNames from "classnames";

const Description = ({ description }) => {
  const descriptionClasses = classNames(
    "col-span-2",
    "h-auto",
    "text-center",
    "flex",
    "justify-center",
    "items-center",
    "text-lg",
    "text-gray-800"
  );

  return (
    <div id="description" className={descriptionClasses}>
      {description ? <p>{description}</p> : <p>-NO DESCRIPTION FOUND-</p>}
    </div>
  );
};

export default Description;
