import { translations as en } from "./en";
import { translations as es } from "./es";

export function getTranslations(locale: string) {
  switch (locale) {
    case "es":
      return es;
    case "en":
    default:
      return en;
  }
}
