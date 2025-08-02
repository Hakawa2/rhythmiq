import { useTranslate } from "@/hooks/useTranslate";

export function LanguageToggle() {
  const { toggleLanguage, currentLanguage } = useTranslate();

  return (
    <div className="absolute top-4 right-4">
      <button
        onClick={toggleLanguage}
        className="text-white px-2 py-1 rounded bg-white/20 hover:bg-white/30 transition cursor-pointer"
        data-testid="language-toggle-button"
      >
        {currentLanguage}
      </button>
    </div>
  );
}
