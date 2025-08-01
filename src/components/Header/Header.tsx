import { useTranslation } from "react-i18next";

export function Header() {
  const { t } = useTranslation();
  return (
    <header className="text-center py-10" data-testid="header-title">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white">
        Rhythmiq
      </h1>
      <p className="mt-3 text-lg md:text-xl text-gray-300">{t("subtitle")}</p>
    </header>
  );
}
