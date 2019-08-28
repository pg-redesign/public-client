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
