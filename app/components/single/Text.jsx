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
        // `${outfit.className}`,
        Tag === "h1" && `font-black text-[60px] leading-[55px] sm:text-[70px] sm:leading-[65px] lg:text-8xl lg:leading-[88px] ${bigShoulders.className}`,
        Tag === "h2" && `font-black text-[50px] leading-[45px] sm:text-[55px] sm:leading-[50px] lg:text-7xl lg:leading-[70px] ${bigShoulders.className}`,
        Tag === "h3" && `font-black text-[50px] leading-[45px] sm:text-[50px] sm:leading-[45px] lg:text-6xl lg:leading-[50px] ${bigShoulders.className}`,
        Tag === "h4" && `font-black text-[32px] leading-[32px] lg:text-4xl lg:leading-[36px] ${bigShoulders.className}`,
        variant === "md" && `font-light text-[18px] leading-[28px] lg:text-2xl lg:leading-[32px] ${outfit.className}`,
        variant === "sm" && `font-light text-lg leading-[28px] ${outfit.className}`,
        display && bigShoulders.className,
        className
      );
  return <Tag className={textStyles} {...otherProps}>{children}</Tag>;
}
