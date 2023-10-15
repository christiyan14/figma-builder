"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Button from "./components/Button/Button";
import HeroSection from "./components/HeroSection";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Button, {
  name: "Button",
  inputs: [
    {
      name: "text",
      type: "string",
    },
  ],
});

Builder.registerComponent(HeroSection, {
  name: "HeroSection",
  inputs: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "imageUrl",
      type: "string",
    },
    {
      name: "imageAlt",
      type: "string",
    },
    {
      name: "buttonText",
      type: "string",
    },
  ],
});
