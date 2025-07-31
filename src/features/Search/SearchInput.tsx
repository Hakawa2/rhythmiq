import { Input } from "@/components/Input/Input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useSearchController } from "@/features/Search/hooks/useSearchController";
import { useTranslation } from "react-i18next";

export const SearchInput = () => {
  const { t } = useTranslation();
  const { term, setSearch, type, toggleType, clean } = useSearchController();

  return (
    <div className="flex flex-col items-center gap-4 mb-6">
      <Input
        placeholder={t("search", { term: t(type) })}
        value={term}
        setValue={setSearch}
      />

      <div className="flex items-center gap-4 self-end">
        <div className="flex items-center gap-2">
          <Switch
            id="search-type"
            className="cursor-pointer"
            checked={type === "albums"}
            onCheckedChange={toggleType}
          />
          <Label
            htmlFor="search-type"
            className="cursor-pointer capitalize font-bold text-sm text-white"
          >
            {t(type)}
          </Label>
        </div>
        <button
          className="cursor-pointer font-bold text-sm text-white"
          onClick={clean}
        >
          {t("clean")}
        </button>
      </div>
    </div>
  );
};
