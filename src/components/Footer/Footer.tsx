import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer
      className="bg-white/30 backdrop-blur-3xl flex items-center justify-center"
      data-testid="footer"
    >
      <p>{t("footer")}</p>
    </footer>
  );
}
