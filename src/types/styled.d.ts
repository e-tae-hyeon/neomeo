import { AppTheme } from "@/src/common/theme";
import "styled-components";
import "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme extends AppTheme {}
}

declare module "styled-components/native" {
  export interface DefaultTheme extends AppTheme {}
}
