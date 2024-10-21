"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-bootstrap";
import slides from "@/helpers/data/slider.json";
import "./slider.scss";

export const Slider = () => {
  return (
    <Carousel fade className="main-slider">
      {slides.map((item) => (
        <Carousel.Item key={item.id}>
          <Image
            src={`/img/slider/${item.image}`}
            alt={item.title}
            width={1800}
            height={800}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
