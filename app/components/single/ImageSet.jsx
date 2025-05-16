import { cn } from "@/app/utils/utils"
import Image from "next/image";

export default function ImageSet({ assetName, alt, className }) {
  const breakpoints = [
    {
      name: "mobile",
      className: "object-cover block sm:hidden",
    },
    {
      name: "tablet",
      className: "object-cover hidden sm:block lg:hidden",
    },
    {
      name: "desktop",
      className: "object-cover hidden lg:block",
    },
  ];
  return (
    <>
      {breakpoints.map((bp, i) => (
        <Image
          key={bp.name + i}
          src={`/assets/${bp.name}/${assetName}`}
          fill
          className={cn(bp.className, className)}
          alt={alt}
        />
      ))}
    </>
  );
}
