"use client";
import React from "react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  text = "Read more",
  type = "button",
  className,
}) => {
  return (
    <button
      type={type}
      className={`bg-black hover:bg-slate-800 text-white text-2xl self-center ml-0 mx-0.5 px-5 py-3 rounded-xl shadow-md ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
