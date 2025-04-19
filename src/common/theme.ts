import { Font, getFont } from "../features/settings/utils/Font";

export type SystemColors = {
  white: string;
  black: string;
  background: string;
  text100: string;
  text80: string;
  text60: string;
  text40: string;
  text20: string;
  text4: string;
  main: string;
  sub: string;
  negative: string;
};

type GrayColors = {
  gray50: string;
  gray100: string;
  gray150: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  gray700: string;
  gray800: string;
  gray900: string;
};

export type AppTheme = {
  system: SystemColors;
  gray: GrayColors;
  font: Font;
};

export const baseTheme: AppTheme = {
  system: {
    white: "#fffff6",
    black: "#000000",
    background: "#9AA9DB",
    text100: "#171717",
    text80: "#171717CC",
    text60: "#17171799",
    text40: "#17171766",
    text20: "#17171733",
    text4: "#1717170A",
    main: "#8FA9EA",
    sub: "#BDC9F2",
    negative: "#dc2626",
  },
  gray: {
    gray50: "#fafafa",
    gray100: "#f5f5f5",
    gray150: "#ededed",
    gray200: "#e5e5e5",
    gray300: "#d4d4d4",
    gray400: "#a3a3a3",
    gray500: "#737373",
    gray600: "#525252",
    gray700: "#404040",
    gray800: "#262626",
    gray900: "#171717",
  },
  font: getFont(),
};
