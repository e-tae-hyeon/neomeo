import instance from "@/src/common/storage";
import { getAppLocale, Locale } from "./Locale";

export type IAppSettings = {
  general: IAppSettingsGeneral;
  noti: IAppSettingsNoti;
};

export type IAppSettingsGeneral = {
  locale: Locale;
};

export type IAppSettingsNoti = {
  question: boolean;
};

class _AppSettings {
  key = "k_app_settings";
  default: IAppSettings = {
    general: { locale: getAppLocale() },
    noti: { question: true },
  };

  get() {
    return instance.getObject<IAppSettings>(this.key) ?? this.default;
  }

  set(by: Partial<IAppSettings>) {
    const prev = this.get();

    const updated: IAppSettings = {
      general: { ...prev.general, ...by.general },
      noti: { ...prev.noti, ...by.noti },
    };

    instance.setObject(this.key, updated);

    return updated;
  }
}

const AppSettings = new _AppSettings();

export default AppSettings;
