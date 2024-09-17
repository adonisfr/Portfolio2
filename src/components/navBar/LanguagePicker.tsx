import { type ChangeEvent } from "react";
import { supportedLocales, defaultLocale } from "../../i18n/config";

const navigateToUrl = (event: ChangeEvent<HTMLSelectElement>) => {
  const language = event.target.value;
  if (language) {
    window.location.href = language === defaultLocale ? "/" : `/${language}/`; // redirect
  }
};

const LanguagePicker = ({ locale = "en" }: { locale?: string }) => {
  return (
    <select
      className="md:ml-5 md:hover:cursor-pointer border-2 border-gray-900 
  dark:border-gray-100 dark:bg-slate-900 dark:text-gray-100
  dark:active:border-gray-100 rounded-lg"
      defaultValue={locale}
      onChange={navigateToUrl}
    >
      {supportedLocales.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
};

export default LanguagePicker;
