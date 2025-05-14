import { cn } from "../../utils/utils";

import { Big_Shoulders_Display, Outfit } from "next/font/google";

const bigShoulders = Big_Shoulders_Display({subsets:["latin"], weight:["800","900"]})
const outfit = Outfit({subsets:["latin"], weight:["300"]})

export default function Text({
  as:Tag = "p",
  variant, //Headings don't need variant
  className,
  children,
  display=false, 
  ...otherProps
}) {
    const textStyles = cn(
        "antialiased",
        Tag?.startsWith("h") && `${bigShoulders.className} font-black`,
        Tag === "h1" && "text-8xl leading-[88px]",
        Tag === "h2" && "text-7xl leading-[70px]",
        Tag === "h3" && "text-6xl leading-[50px]",
        Tag === "h4" && "text-4xl leading-[36px]",
        variant === "md" && ` font-light text-2xl leading-[32px]`,
        variant === "sm" && ` font-light text-lg leading-[28px]`,
        display? `${bigShoulders.className}`: `${outfit.className}`,
        className
      );
  return <Tag className={textStyles} {...otherProps}>{children}</Tag>;
}
