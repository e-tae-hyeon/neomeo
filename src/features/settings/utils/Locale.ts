import { getLocales } from "expo-localization";

export type Locale = "ko" | "en" | "zh" | "ja";

export const supportedLocales: Locale[] = ["ko", "en", "zh", "ja"];

export function getDeviceLocale() {
  const deviceLanguage = getLocales().at(0)?.languageCode;

  return deviceLanguage as Locale;
}

export function getAppLocale(): Locale {
  const deviceLocale = getDeviceLocale();

  return supportedLocales.includes(deviceLocale) ? deviceLocale : "en";
}
