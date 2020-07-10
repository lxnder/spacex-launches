import React from "react";
import classNames from "classnames";

const Description = ({ description }) => {
  const descriptionClasses = exists =>
    classNames(
      "h-40",
      "border-b border-subtle-5",
      "flex items-center justify-center",
      "max-w-screen-xxl",
      "pb-12 pt-10 px-16",
      "text-center text-lg",
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
