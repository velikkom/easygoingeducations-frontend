"use client";

import React from "react";

export const SubmitButton = ({
  title = "Submit",
  icon = "pi pi-send",
  ...rest
}) => {
  return (
    <button type="submit" className="btn btn-primary">
      {!!icon && (
        <>
          <i className={`pi pi-${icon}`}></i>{" "}
        </>
      )}
      {title}
    </button>
  );
};
