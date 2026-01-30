import ru from "./ru";
import en from "./en";
import ge from "./ge";
import { SiteContent } from "./types";

export function getContent(locale: string | undefined): SiteContent {
  if (locale === "en") return en;
  if (locale === "ge") return ge;
  return ru;
}
