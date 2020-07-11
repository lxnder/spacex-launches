import React from "react";

const Link = ({ link, text }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <p className="text-blue-700 underline">{text}</p>
    </a>
  );
};

export default Link;
