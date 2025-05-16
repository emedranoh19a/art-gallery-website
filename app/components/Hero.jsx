import Image from "next/image";
import Button from "./single/Button";
import Text from "./single/Text";
import ImageSet from "./single/ImageSet";
import { cn } from "../utils/utils"

export default function Hero() {
  return (
    <header className="grid grid-cols-1 sm:grid-cols-2 lg:gap-0 lg:grid-cols-[4.5fr_5.4fr_4.5fr] grid-rows-[1fr_1fr] sm:grid-rows-1 gap-8 mb-28">
      <div className="relative hidden lg:block w-full h-full bg-almost-black">
        <MaskedTitle />
      </div>
      <HeroImage />
      <div className=" flex flex-col gap-8 sm:py-20 lg:py-60 px-4 sm:px-14 z-10">
        <HeroTitle />
        <HeroDescription />
      </div>
    </header>
  );
}
function HeroImage() {
  
  return (
    <div className="relative origin-left w-full sm:w-[140%] lg:w-full z-0 h-full block">
      <ImageSet
        assetName="image-hero@2x.jpg"
        className="object-cover"
        alt="People walking around a museum"
      />
    </div>
  );
}

function HeroDescription() {
  return (
    <div className="flex flex-col gap-8">
      <Text variant="md">
        The arts in the collection of the Modern Art Gallery all started from a
        spark of inspiration. Will these pieces inspire you? Visit us and find
        out.
      </Text>
      <Button />
    </div>
  );
}

function HeroTitle() {
  return (
    <Text as="h1" className="uppercase lg:hidden">
      Modern
      <br className="" /> art gallery
    </Text>
  );
}
function MaskedTitle() {
    const commonClassName="uppercase hidden lg:inline-block absolute z-20 top-60 right-0 translate-x-[40%] w-[120%]";
    const leftClassName = cn(commonClassName, "text-white");
    const rightClassName = cn(commonClassName, "text-almost-black");
const clipPercent = 60
  return (
    <>
      <Text
        as="h1"
        className={leftClassName}
        style={{ clipPath: `polygon(0% 0%, ${clipPercent}% 0%, ${clipPercent}% 100%, 0% 100%)` }}
      >
        Modern
        <br className="" /> art gallery
      </Text>
      <Text
        as="h1"
        className={rightClassName}
        style={{ clipPath: `polygon(${clipPercent}% 0%, 100% 0%, 100% 100%, ${clipPercent}% 100%)` }}
      >
        Modern
        <br className="" /> art gallery
      </Text>
    </>
  );
}
