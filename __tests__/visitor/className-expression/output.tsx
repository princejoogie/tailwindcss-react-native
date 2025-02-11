import { StyleSheet } from "react-native";
import { StyledComponent } from "tailwindcss-react-native";
import { Text } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
export function Test({ isBold, isUnderline }) {
  const classNames = [];
  if (isBold) classNames.push("font-bold");
  if (isUnderline) classNames.push("underline");
  return (
    <TailwindProvider platform="native">
      <StyledComponent className={classNames.join(" ")} component={Text}>
        Hello world!
      </StyledComponent>
    </TailwindProvider>
  );
}
Object.assign(
  globalThis.tailwindcss_react_native_style,
  StyleSheet.create({
    "font-bold": {
      fontWeight: "700",
    },
    underline: {
      textDecorationLine: "underline",
    },
  })
);
Object.assign(globalThis.tailwindcss_react_native_media, {});
