import Color from "color";

export type ThemeColors = {
  base: string;
  lighter: string;
  lightest: string;
  light: string;
  dark: string;
  darker: string;
  darkest: string;
};

export const palletGenerator = (base: string): ThemeColors => ({
  base,
  lighter: Color(base).lighten(0.7).hex(),
  lightest: Color(base).lighten(0.5).hex(),
  light: Color(base).lighten(0.2).hex(),
  dark: Color(base).lighten(0.2).hex(),
  darker: Color(base).lighten(0.4).hex(),
  darkest: Color(base).lighten(0.6).hex(),
});
