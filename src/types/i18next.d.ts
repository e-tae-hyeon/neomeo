import "i18next";
import resources from "@/assets/locales"; // default language

declare module "i18next" {
  // Extend CustomTypeOptions
  interface CustomTypeOptions {
    resources: typeof resources.ko;
  }
}
