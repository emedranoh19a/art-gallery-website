import Image from "next/image";
import Text from "./single/Text";

export default function Footer() {
  return (
    <footer className="bg-almost-black w-full py-14 ">
      <div className="relative container flex flex-col sm:flex-row px-4 justify-between mx-auto gap-4">
        <FooterContents />
        <Logos />
      </div>
    </footer>
  );
}
function FooterContents() {
  return (
    <div className="flex gap-4 flex-col items-start sm:flex-row">
      <Image
        width={160}
        height={58}
        src="/assets/logo-light.svg"
        alt="Art gallery logo"
        className=""
      />
      <Text variant="sm" className="text-white max-w-xs ">
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </Text>
    </div>
  );
}
function Logos() {
  return (
    <div className="flex flex-row h-fit w-fit gap-4">
      <Image
        width={20}
        height={20}
        src="/assets/icon-facebook.svg"
        alt="facebook"
        className="block"
      />
      <Image
        width={20}
        height={20}
        src="/assets/icon-instagram.svg"
        alt="instagram"
        className="block"
      />
      <Image
        width={20}
        height={20}
        src="/assets/icon-twitter.svg"
        alt="twitter"
        className="block"
      />
    </div>
  );
}
