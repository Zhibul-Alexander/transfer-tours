import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      bg: string;
      card: string;
      text: string;
      muted: string;
      border: string;
      accent: string;
      accent2: string;
      success: string;
    };
    maxWidth: number;
  }
}
