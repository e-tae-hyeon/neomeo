export type SystemColor = {
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
};

export type AppTheme = {
  system: SystemColor;
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
  },
};
