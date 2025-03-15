import { BaseTheme } from "common/theme";
import "styled-components";
import "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme extends BaseTheme {}
}

declare module "styled-components/native" {
  export interface DefaultTheme extends BaseTheme {}
}
