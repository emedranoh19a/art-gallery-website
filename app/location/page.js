import Map from "../components/Map";
import Button from "../components/single/Button";
import Text from "../components/single/Text";
import Footer from "./Footer";

export default function Page() {
  return (
    <div className="relative w-full min-h-screen flex flex-col z-10">
      <div className="h-fit container top-0 left-1/2 -translate-x-1/2 absolute  px-4  sm:px-10 z-50 ">
        <Button backToHome />
      </div>
      <Map />
      <Content />
      <Footer />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-almost-black text-white py-12 px-4 sm:py-20 sm:px-10 lg:py-40 lg:px-28">
      <div className="mx-auto w-full flex flex-col justify-between gap-12 sm:flex-row container">
        <Text as="h1" className="text-white ">
          Our location
        </Text>
        <div className="flex flex-col gap-6">
          <Text as="h4" className="text-gold">
            99 King Street
          </Text>
          <ul>
            <Text as="li" className="text-white">
              Newport
            </Text>
            <Text as="li" className="text-white">
              RI 02840
            </Text>
            <Text as="li" className="text-white">
              United States of America
            </Text>
          </ul>
          <Text className="text-white max-w-sm">
            Our newly opened gallery is located near the Edward King House on 99
            King Street, the Modern Art Gallery is free to all visitors and open
            seven days a week from 8am to 9pm.
          </Text>
        </div>
      </div>
    </div>
  );
}
