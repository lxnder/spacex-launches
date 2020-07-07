import React from "react";
import classNames from "classnames";

const Pictures = ({ pictures }) => {
  const pictureClasses = classNames(
    "col-span-1",
    "h-auto",
    "flex",
    "items-center"
  );

  return (
    <div id="pictures" className={pictureClasses}>
      <img src={pictures[0]} alt="pic" />
    </div>
  );
};

export default Pictures;
