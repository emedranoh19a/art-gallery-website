import Button from "./components/single/Button";
import Text from "./components/single/Text";

export default function Page() {
  return (
    <div className="">
      <Text as="h1">
        There are more things in Heaven and Earth than those dreamt of in your
        philosofy.
      </Text>
      <Text as="h2">
        There are more things in Heaven and Earth than those dreamt of in your
        philosofy.
      </Text>
      <Text as="h3">
        There are more things in Heaven and Earth than those dreamt of in your
        philosofy.
      </Text>
      <Text as="h4">
        There are more things in Heaven and Earth than those dreamt of in your
        philosofy.
      </Text>
      <Text variant="sm">
        There are more things in Heaven and Earth than those dreamt of in your
        philosofy.
      </Text>
      <Text variant="md">
        There are more things in Heaven and Earth than those dreamt of in your
        philosofy.
      </Text>
      <Button />
      <Button backToHome />
    </div>
  );
}
