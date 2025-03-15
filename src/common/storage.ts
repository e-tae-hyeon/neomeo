import { MMKV } from "react-native-mmkv";
import { useState, useRef, useCallback, useEffect } from "react";

const mmkv = new MMKV();

type Options<T> = {
  putAndReturnIfAbsent?: T;
  returnIfAbsent?: T;
};

type DefaultGetFunction<T> = (key: string, options: Options<T>) => T;

class LocalStorage {
  set = <T extends number | string | boolean>(key: string, value: T) => {
    mmkv.set(key, value);
  };

  private createWithDefaultFunction = <T extends number | string | boolean>({
    isValidValueChecker,
    getter,
  }: {
    isValidValueChecker: (data?: T) => boolean;
    getter: (key: string) => T | undefined;
  }): DefaultGetFunction<T> => {
    return (key, { putAndReturnIfAbsent, returnIfAbsent }) => {
      if (
        !isValidValueChecker(putAndReturnIfAbsent) &&
        !isValidValueChecker(returnIfAbsent)
      ) {
        throw new Error(
          "putAndReturnIfAbsent or returnIfAbsent should be not nullable"
        );
      }

      let ret = getter(key);
      if (isValidValueChecker(ret)) {
        return ret!;
      } else {
        if (isValidValueChecker(putAndReturnIfAbsent)) {
          this.set(key, putAndReturnIfAbsent as any);
          return putAndReturnIfAbsent!;
        } else {
          return returnIfAbsent!;
        }
      }
    };
  };

  getString = (key: string): string | undefined => mmkv.getString(key);
  getStringWithDefault = this.createWithDefaultFunction<string>({
    isValidValueChecker: (d) => typeof d === "string",
    getter: this.getString,
  });
  getNumber = (key: string): number | undefined => mmkv.getNumber(key);
  getNumberWithDefault = this.createWithDefaultFunction<number>({
    isValidValueChecker: (d) => typeof d === "number",
    getter: this.getNumber,
  });
  getBoolean = (key: string): boolean | undefined => mmkv.getBoolean(key);
  getBooleanWithDefault = this.createWithDefaultFunction<boolean>({
    isValidValueChecker: (d) => typeof d === "boolean",
    getter: this.getBoolean,
  });

  setArray = <T>(key: string, values: T[]) => {
    this.set(key, JSON.stringify(values));
  };
  getArray = <T>(key: string, defaultValue: T[] = []): T[] => {
    const raw: string | undefined = this.getString(key)?.trim();
    if (raw && raw[0] === "[" && raw[raw.length - 1] === "]") {
      return JSON.parse(raw) as T[];
    } else {
      this.setArray(key, defaultValue);
      return defaultValue;
    }
  };

  setObject = <T extends object>(key: string, value: T) => {
    this.set(key, JSON.stringify(value));
  };
  getObject = <T extends object>(
    key: string,
    defaultValue?: T
  ): T | undefined => {
    const raw: string | undefined = this.getString(key)?.trim();
    if (raw && raw[0] === "{" && raw[raw.length - 1] === "}") {
      return JSON.parse(raw) as T;
    } else {
      if (defaultValue) {
        this.setObject(key, defaultValue);
      }
      return defaultValue;
    }
  };

  remove = (key: string) => mmkv.delete(key);
}

function createHook<
  T extends (boolean | number | string | Uint8Array) | undefined,
  TSet extends T | undefined,
  TSetAction extends TSet | ((current: T) => TSet)
>(getter: (key: string, options: Options<T>) => T) {
  return (
    key: string,
    options: Options<T>
  ): [value: T, setValue: (value: TSetAction) => void] => {
    const [value, setValue] = useState<T>(() => getter(key, options));
    const valueRef = useRef<T>(value);
    valueRef.current = value;

    // update value by user set
    const set = useCallback(
      (v: TSetAction) => {
        const newValue: TSet = (
          typeof v === "function" ? v(valueRef.current) : v
        ) as TSet;
        switch (typeof newValue) {
          case "number":
          case "string":
          case "boolean":
            mmkv.set(key, newValue);
            break;
          case "undefined":
            mmkv.delete(key);
            break;
          default:
            throw new Error(`MMKV: Type ${typeof newValue} is not supported!`);
        }
        setValue(getter(key, options));
      },
      [key, options]
    );

    // update value if it changes somewhere else (second hook, same key)
    useEffect(() => {
      const listener = mmkv.addOnValueChangedListener((changedKey) => {
        if (changedKey === key) {
          setValue(getter(key, options));
        }
      });
      return () => listener.remove();
    }, [key, options]);

    return [value, set];
  };
}

const instance = new LocalStorage();

export const useStorageString = createHook((key, options: Options<string>) =>
  instance.getStringWithDefault(key, options)
);
export const useStorageNumber = createHook((key, options: Options<number>) =>
  instance.getNumberWithDefault(key, options)
);
export const useStorageBoolean = createHook((key, options: Options<boolean>) =>
  instance.getBooleanWithDefault(key, options)
);
export const useStorageArray = <T>(key: string, defaultValue: T[] = []) => {
  const [value, setValue] = useState<T[]>(instance.getArray(key, defaultValue));
  const set = useCallback(
    (v: T[]) => {
      instance.setArray(key, v);
      setValue(v);
    },
    [key]
  );

  // update value if it changes somewhere else (second hook, same key)
  useEffect(() => {
    const listener = mmkv.addOnValueChangedListener((changedKey) => {
      if (changedKey === key) {
        setValue(instance.getArray(key));
      }
    });
    return () => listener.remove();
  }, [key]);

  return [value, set] as const;
};
export const useStorageObject = <T extends object>(
  key: string,
  defaultValue?: T
) => {
  const [value, setValue] = useState<T | undefined>(
    instance.getObject(key, defaultValue)
  );
  const set = useCallback(
    (v: T) => {
      instance.setObject(key, v);
      setValue(v);
    },
    [key]
  );

  // update value if it changes somewhere else (second hook, same key)
  useEffect(() => {
    const listener = mmkv.addOnValueChangedListener((changedKey) => {
      if (changedKey === key) {
        setValue(instance.getObject(key));
      }
    });
    return () => listener.remove();
  }, [key]);

  return [value, set] as const;
};
export const useStorageObjectWithDefault = <T extends object>(
  key: string,
  defaultValue: T
) => {
  const [_value, setValue] = useStorageObject<T>(key, defaultValue);
  return [_value!, setValue] as [T, typeof setValue];
};

export default instance;
export const storage = mmkv;
