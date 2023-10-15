import * as React from "react";
import Button from "./Button/Button";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title = "Welcome",
  imageUrl = "/images/hero-bg.jpg",
  imageAlt,
  buttonText = "Hello",
}) => {
  const onClick = () => {
    console.log("hero");
  };

  return (
    <section className="flex-col flex relative shrink-0 box-border items-stretch min-h-[20px] min-w-[20px] overflow-hidden h-[400px] mt-5">
      <Image
        loading="lazy"
        src={imageUrl}
        className="absolute h-full w-full object-cover object-center"
        alt={imageAlt}
        width="100"
        height="100"
      />
      <div className="relative shrink-0 box-border h-auto text-black text-7xl m-auto pt-20 pb-2.5">
        <h1>{title}</h1>
      </div>
      <Button
        text={buttonText}
        onClick={onClick}
        className="relative flex flex-col shrink-0 box-border mt-2 mb-20"
      />
    </section>
  );
};

export default HeroSection;
