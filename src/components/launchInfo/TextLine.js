import React from "react";
import classNames from "classnames";

const TextLine = ({ title, value }) => {
  const titleClasses = classNames("font-bold text-gray-700");
  return (
    <p>
      <span className={titleClasses}>
        {title}
        {": "}
      </span>
      {value}
    </p>
  );
};

export default TextLine;
