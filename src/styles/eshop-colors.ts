import { palletGenerator } from "./utils";

export const THEME_COLOURS = {
  blue: "#1B68B3",
  black: "#232323",
  red: "#E53935",
  orange: "#FF8000",
  primary: "#00378B",
  primaryHover: "#022B6B",
  secondary: "#F20000",
  secondaryHover: "#cf0000",
  green: "#26AE50",
  yellow: "#FAB234",
  gray: "#999999",
  white: "#FFFFFF",
  greys: {
    label: "#8E8E93",
    placeholdersIcons: "#BCBCBD",
    dividersDisabled: "#D2D2D2",
    bordersBg: "#E4E4E5",
    bg: "#EBECEC",
    bgHover: "#F5F5F5",
  },
};

const colors = {
  blue: palletGenerator(THEME_COLOURS.blue),
  red: palletGenerator(THEME_COLOURS.red),
  orange: palletGenerator(THEME_COLOURS.orange),
  green: palletGenerator(THEME_COLOURS.green),
  gray: palletGenerator(THEME_COLOURS.gray),
  black: THEME_COLOURS.black,
  white: THEME_COLOURS.white,
};

const eshopColours = {
  body: {
    background: colors.white,
    scrollbar: {
      color: colors.gray,
      background: colors.gray.lighter,
    },
  },
};

export type CustomTheme = typeof eshopColours;

export default eshopColours;
