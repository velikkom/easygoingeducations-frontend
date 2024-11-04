"use client";
import { Calendar } from "primereact/calendar";
import React, { useEffect, useState } from "react";
import { FloatingLabel, FormControl, InputGroup } from "react-bootstrap";

export const DateInput = ({
  name,
  label,
  errorMessage,
  className,
  iconBefore,
  iconAfter,
  value,
  ...rest
}) => {
  const [date, setDate] = useState("");

  useEffect(() => {
    // Gelen value değerini yyyy-MM-dd formatına çeviriyoruz
    if (value) {
      const formattedDate = formatDate(new Date(value));
      setDate(formattedDate);
    }
  }, [value]);

  // Tarihi yyyy-MM-dd formatına çevirme fonksiyonu
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = ("0" + (d.getMonth() + 1)).slice(-2);
    const day = ("0" + d.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  return (
    <InputGroup className={`${className} ${errorMessage ? "mb-5" : ""}`}>
      {!!iconBefore && (
        <InputGroup.Text>
          <i className={`pi pi-${iconBefore}`}></i>
        </InputGroup.Text>
      )}

      <FloatingLabel controlId={name} label={label}>
        <Calendar
          {...rest}
          name={name}
          className={`form-control w-100 ${errorMessage ? "is-invalid" : ""}`}
          value={date}
          onChange={(e) => {
            // Seçilen tarihi yyyy-MM-dd formatına çevirip ayarlıyoruz
            const formattedDate = formatDate(e.value);
            setDate(formattedDate);
          }}
          dateFormat="yy-mm-dd" // primereact Calendar için format ayarı
        />

        <FormControl.Feedback type="invalid" style={{ position: "absolute" }}>
          {errorMessage}
        </FormControl.Feedback>
      </FloatingLabel>
      {!!iconAfter && (
        <InputGroup.Text>
          <i className={`pi pi-${iconAfter}`}></i>
        </InputGroup.Text>
      )}
    </InputGroup>
  );
};
