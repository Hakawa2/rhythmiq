import { useCallback } from "react";
import { useTranslation } from "react-i18next";

export const useTranslate = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language.toUpperCase();

  const toggleLanguage = useCallback(() => {
    const selectedLanguage = i18n.language === "en" ? "ptBr" : "en";
    localStorage.setItem("language", selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  }, [i18n]);

  const setSavedLanguage = useCallback(() => {
    const storedLanguage = localStorage.getItem("language");
    i18n.changeLanguage(storedLanguage ?? "en");
  }, [i18n]);

  return {
    toggleLanguage,
    setSavedLanguage,
    currentLanguage,
  };
};
