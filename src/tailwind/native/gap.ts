import { CustomPluginFunction } from "./types";

export const gap: CustomPluginFunction = ({ matchUtilities, theme }) => {
  matchUtilities(
    {
      gap: (value: string) => {
        value = value === "0" ? "0px" : value;
        value = value === "px" ? "1px" : value;

        return {
          "&": {
            margin: `calc(${value} / -2)`,
            "@selector (> *)": {
              margin: `calc(${value} / 2)`,
            },
          },
        };
      },
      "gap-x": (value: string) => {
        value = value === "0" ? "0px" : value;
        value = value === "px" ? "1px" : value;

        return {
          "&": {
            "margin-left": `calc(${value} / -2)`,
            "margin-right": `calc(${value} / -2)`,
            "@selector (> *)": {
              "margin-left": `calc(${value} / 2)`,
              "margin-right": `calc(${value} / 2)`,
            },
          },
        };
      },
      "gap-y": (value: string) => {
        value = value === "0" ? "0px" : value;
        value = value === "px" ? "1px" : value;

        return {
          "&": {
            "margin-top": `calc(${value} / -2)`,
            "margin-bottom": `calc(${value} / -2)`,
            "@selector (> *)": {
              "margin-top": `calc(${value} / 2)`,
              "margin-bottom": `calc(${value} / 2)`,
            },
          },
        };
      },
    },
    { values: theme("gap") }
  );
};
