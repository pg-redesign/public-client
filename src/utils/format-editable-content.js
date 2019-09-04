import React from "react";

export const boldFirstWord = item => {
  const [title, content] = item.split(": ");

  return (
    <>
      <b>{title}:</b> {content}
    </>
  );
};

export const addLineBreaks = content =>
  content.split("\n").reduce((sections, section) => (
    <>
      {sections}
      <br />
      {section}
    </>
  ));

// absolute violence for a fucking subscript...
export const addSubscript = item =>
  item.split(" ").map(part => {
    const matches = part.match(/_[a-z0-9]+/gim);
    if (!matches) return ` ${part}`;

    const [, ...subscriptableContent] = matches[0];

    return (
      <span>
        {" "}
        {part.replace(/_[a-z0-9]+/gim, " ")}
        <sub>{subscriptableContent}</sub>
      </span>
    );
  });

export const convertToFullName = shortName => {
  switch (shortName) {
    case "pollution":
      return "The Pollution & Hydrology Course";
    case "remediation":
      return "The Remediation Course";
    case "brasil":
      return "Curso de Poluição e Hidrologia";
    default:
      return "";
  }
};
