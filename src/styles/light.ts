import { extendTheme } from "@chakra-ui/react";
import { defaultStyles } from "./defaultStyles";
import { Theme } from ".";

const lightColors: Theme = {
  colors: {
    background: {
      primary: "#F8F9FC",
      secondary: "#FFFFFF",
    },
    color: {
      primary: "#000000",
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

export const light = extendTheme({
  ...defaultStyles,
  ...lightColors,
});
