import ru from "./ru";
import en from "./en";
import { SiteContent } from "./types";

export function getContent(locale: string | undefined): SiteContent {
  if (locale === "en") return en;
  return ru;
}
