import clsx from "clsx";
import Text from "./single/Text";
import ImageSet from "./single/ImageSet";

export default function About() {
  const gridStyles = clsx(
    "relative grid container mx-auto",
    "gap-2 lg:gap-4",
    "grid-cols-1 grid-rows-[3.2fr_auto_4.8fr_2fr_2.9fr] ",
    "sm:grid-cols-[4fr_2.8fr] sm:grid-rows-[4fr_3.1fr_4fr]",
    "mb-28 w-full px-4"
  );
  return (
    <section id="about" className={gridStyles}>
      <div className="w-full h-fit sm:pr-[50%] flex flex-col gap-2 sm:gap-5 row-start-2 sm:row-start-1 sm:justify-center h-full">
        <Text as="h3" className="text-almost-black text-balance uppercase  ">
          Your day at the gallery
        </Text>
        <Text variant="md">
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process.
        </Text>
      </div>
      <div className="relative w-full sm:w-[150%] sm:right-1/2  h-80 sm:h-full">
        <ImageSet assetName="image-grid-1@2x.jpg" alt="Art gallery hall" className="sm:w-[150%] absolute h-full right-0 top-0" />
      </div>
      <div className="relative row-span-2 w-full h-full">
        <ImageSet assetName="image-grid-2@2x.jpg" alt="Art frame" />
      </div>
      <div className="relative w-full h-full">
        <ImageSet assetName="image-grid-3@2x.jpg" alt="Art frame" />
      </div>
      <div className="relative bg-almost-black w-full h-full grid place-items-center py-16 px-12">
        <div className="w-fit h-fit">
          <Text className="text-white uppercase " as="h3">
            Come & be inspired
          </Text>
          <Text className="text-white mt-[1lh]" variant="md">
            We&apos;re excited to welcome you to our gallery and see how our
            collections influence you.
          </Text>
        </div>
      </div>
    </section>
  );
}
