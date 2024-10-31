"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";

export const BackButton = ({
  title = "Return Back",
  icon = "arrow-circle-left",
  ...rest
}) => {
  const router = useRouter();
  return (
    <Button
      type="button"
      variant="outline-secondary"
      {...rest}
      onClick={() => router.back()}
    >
      {icon && (
        <>
          <i className={`pi pi-${icon}`}></i>{" "}
        </>
      )}
      {title}
    </Button>
  );
};
