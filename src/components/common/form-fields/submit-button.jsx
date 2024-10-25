"use client";

import React, { use } from "react";
import { Button } from "react-bootstrap";
import { useFormStatus } from "react-dom";


export const SubmitButton = ({
  title = "Submit",
  icon = "pi pi-send",
  ...rest
}) => {
const {pending}=useFormStatus();

const iconSrc = pending ? "pi pi-spin pi-spinner" : `pi pi-${icon}`;

  return (
    <Button type="submit" className="btn btn-primary">
      {!!iconSrc && (
        <>
          <i className={iconSrc}></i>{" "}
        </>
      )}
      {title}
    </Button>
  );
};
