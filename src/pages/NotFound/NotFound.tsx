import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white px-6 text-center">
      <h1 className="text-7xl font-extrabold  mb-6">{t("404.title")}</h1>
      <p className="text-gray-400 mb-8">{t("404.message")}</p>
      <Link
        to="/"
        className="bg-orange-500 hover:bg-orange-600 transition-colors px-6 py-3 rounded-xl text-white font-medium"
      >
        {t("404.backToHome")}
      </Link>
    </div>
  );
}
