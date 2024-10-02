import { dark } from "./dark";
import { light } from "./light";

export interface Theme {
  colors: {
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    color: {
      primary: string;
    };
    primary: {
      30: string;
      40: string;
      50: string;
      70: string;
      90: string;
      100: string;
    };
  };
}

export { dark, light };
