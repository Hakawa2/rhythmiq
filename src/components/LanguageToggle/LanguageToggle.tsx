import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ptBr" : "en");
  };

  return (
    <div className="absolute top-4 right-4">
      <button
        onClick={toggleLanguage}
        className="text-white px-2 py-1 rounded bg-white/20 hover:bg-white/30 transition cursor-pointer"
      >
        {i18n.language.toUpperCase()}
      </button>
    </div>
  );
}
