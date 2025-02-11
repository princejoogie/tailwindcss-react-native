import { StyledComponent } from "tailwindcss-react-native";
import { StyleSheet, Text } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
export function Test() {
  return (
    <TailwindProvider platform="native">
      <StyledComponent
        className="font-bold"
        style={styles.test}
        component={Text}
      >
        Hello world!
      </StyledComponent>
    </TailwindProvider>
  );
}
const styles = StyleSheet.create({
  test: {
    color: "blue",
  },
});
Object.assign(
  globalThis.tailwindcss_react_native_style,
  StyleSheet.create({
    "font-bold": {
      fontWeight: "700",
    },
  })
);
Object.assign(globalThis.tailwindcss_react_native_media, {});
