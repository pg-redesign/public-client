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
