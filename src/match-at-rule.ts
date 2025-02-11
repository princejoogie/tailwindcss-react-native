import { match } from "css-mediaquery";
import { ComponentContext, TailwindContext } from "./context";

interface MatchAtRuleOptions {
  rule: string;
  params: string;
  hover: boolean;
  active: boolean;
  focus: boolean;
  componentInteraction: ComponentContext;
  tailwindContext: TailwindContext;
}

export function matchAtRule({
  rule,
  params,
  hover,
  active,
  focus,
  componentInteraction,
  tailwindContext: { width, height, platform, orientation, colorScheme },
}: MatchAtRuleOptions) {
  if (rule === "pseudo-class" && params === "hover") {
    return hover;
  } else if (rule === "pseudo-class" && params === "focus") {
    return focus;
  } else if (rule === "pseudo-class" && params === "active") {
    return active;
  } else if (rule === "component" && params === "hover") {
    return componentInteraction.hover;
  } else if (rule === "component" && params === "focus") {
    return componentInteraction.focus;
  } else if (rule === "component" && params === "active") {
    return componentInteraction.active;
  } else if (rule === "media") {
    return match(params, {
      "aspect-ratio": width / height,
      "device-aspect-ratio": width / height,
      type: platform,
      width,
      height,
      "device-width": width,
      "device-height": width,
      orientation,
      "prefers-color-scheme": colorScheme,
    });
  }
}

export interface MatchChildAtRuleOptions {
  nthChild: number;
  rule: string;
  params: string;
}

export function matchChildAtRule({
  nthChild,
  rule,
  params,
}: MatchChildAtRuleOptions) {
  if (
    rule === "selector" &&
    params === "(> *:not(:first-child))" &&
    nthChild > 1
  ) {
    return true;
  } else if (rule === "selector" && params === "(> *)") {
    return true;
  }

  return false;
}
