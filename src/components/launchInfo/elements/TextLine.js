import React from "react";
import classNames from "classnames";

const TextLine = ({
  value,
  title = "",
  isHeader = false,
  isDescription = false,
}) => {
  const headerClasses = classNames("text-lg font-bold text-blue-900");
  const titleClasses = classNames("font-bold text-gray-700");
  const descriptionClasses = classNames("font-bold text-blue-800");
  const paddingClasses = classNames(
    { "pb-2": isHeader },
    { "pb-2": isDescription }
  );
  return (
    <p className={paddingClasses}>
      {isHeader ? (
        <span className={headerClasses}>{value.toString()}</span>
      ) : isDescription ? (
        <span className={descriptionClasses}>{value.toString()}</span>
      ) : (
        <>
          <span className={titleClasses}>{title.toString() + ": "}</span>
          <span
            className={
              value === "SUCCESS"
                ? "text-green-600"
                : value === "FAILURE"
                ? "text-red-500"
                : "text-gray-900"
            }
          >
            {value.toString()}
          </span>
        </>
      )}
    </p>
  );
};

export default TextLine;
