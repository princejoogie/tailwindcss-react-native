import { Declaration } from "postcss";
import {
  getPropertyName,
  getStylesForProperty,
  Style,
} from "css-to-react-native";

import { properties } from "./properties";
import { isInvalidProperty } from "./is-invalid-property";
import { StyleError } from "../../types/common";

export interface ToReactNativeOptions {
  onError: (options: StyleError) => void;
}

export function toReactNative(
  declaration: Declaration,
  { onError }: ToReactNativeOptions
) {
  const { prop, value } = declaration;

  const name = getPropertyName(prop) as keyof typeof properties;

  let styles: Style | undefined;

  try {
    const transform = properties[name];
    styles = transform
      ? transform(value, name)
      : getStylesForProperty(name, value);
  } catch (error) {
    if (error instanceof Error) {
      onError({ declaration, error: error.message, result: styles });
    }
    return;
  }

  const hasInvalidStyle = Object.keys(styles).some((property) => {
    return isInvalidProperty(property);
  });

  if (hasInvalidStyle) {
    onError({
      declaration,
      error: "invalid property",
      result: styles,
    });
    return;
  }

  return styles;
}
