import { extendTheme } from "@chakra-ui/react";
import { defaultStyles } from "./defaultStyles";
import { Theme } from ".";

const darkColors: Theme = {
  colors: {
    background: {
      primary: "#1B1B1B",
      secondary: "#1E1E1E",
    },
    color: {
      primary: "#FFFFFF",
    },
    primary: {
      30: "#3F4E4F",
      40: "#31363F",
      50: "#3B5249",
      70: "#647E68",
      90: "#5C8374",
      100: "#519872",
    },
  },
};

export const dark = extendTheme({
  ...defaultStyles,
  ...darkColors,
});
