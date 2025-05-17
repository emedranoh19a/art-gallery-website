import Link from "next/link";
import { cn } from "../../utils/utils";
import Text from "./Text";
import Image from "next/image";

export default function Button({ backToHome = false }) {
  const linkStyles = cn("group flex gap-0 mb-1 w-fit z-10", backToHome && "flex-row-reverse");
  const textStyles = cn(
    "font-extrabold uppercase text-white text-[20px] tracking-[3.64px]",
    "py-6 px-8",
    "transition-colors",
    !backToHome? "bg-almost-black group-hover:bg-gold":"bg-gold group-hover:bg-almost-black"
);
const iconStyles = cn(
    "relative w-14 h-inherit grid place-items-center",
    "",
    "transition-colors",
    backToHome? "bg-almost-black group-hover:bg-gold":"bg-gold group-hover:bg-almost-black"
    // !backToHome? "bg-gold group-hover:bg-almost-black":"bg-gold group-hover:bg-almost-black"
  );
  return (
    <Link href={backToHome?"/":"/location"} className={linkStyles}>
      <Text as="span" className={textStyles} display>
        {backToHome?"Back to home":"our location"}
      </Text>
      <span className={iconStyles}>
        <Image
          src={`/assets/icon-arrow-${backToHome?"left":"right"}.svg`}
          height={24}
          width={8}
          className="relative"
          alt=""
        />
      </span>
    </Link>
  );
}
