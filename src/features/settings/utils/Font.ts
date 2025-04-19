import AppSettings from "./AppSettings";

export type Font =
  | "Ownglyph_PDH-Rg"
  | "KiwiMaru-Regular"
  | "LiuHuanKaTongShouShu";

export const supportedFonts: Font[] = [
  "Ownglyph_PDH-Rg",
  "KiwiMaru-Regular",
  "LiuHuanKaTongShouShu",
];

export function getFont(): Font {
  const { locale } = AppSettings.get().general;

  switch (locale) {
    case "ko":
    case "en":
      return "Ownglyph_PDH-Rg";
    case "ja":
      return "KiwiMaru-Regular";
    case "zh":
      return "LiuHuanKaTongShouShu";
  }
}

export const fontSizeAdditionMap: Record<Font, number> = {
  "Ownglyph_PDH-Rg": 3,
  "KiwiMaru-Regular": 1,
  LiuHuanKaTongShouShu: 2,
};
