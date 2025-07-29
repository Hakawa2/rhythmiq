import { Switch } from "@/components/ui/switch";
import type { SearchType } from "@/types/search-types";
import { Label } from "../ui/label";

type SearchInputProps = {
  search: string;
  onSearchChange: (value: string) => void;
  type: SearchType;
  onTypeToggle: () => void;
};

export const SearchInput = ({
  search,
  onSearchChange,
  type,
  onTypeToggle,
}: SearchInputProps) => {
  return (
    <div className="flex flex-col items-center gap-4 mb-6">
      <input
        type="text"
        placeholder={`Buscar por ${
          type === "artists" ? "artista" : "álbum"
        }...`}
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full p-3 rounded-xl text-black placeholder-gray-500 outline-none ring-2 ring-purple-400"
      />

      <div className="flex items-center gap-4 self-end">
        <div className="flex items-center gap-2">
          <Switch
            id="search-type"
            className="cursor-pointer"
            checked={type === "albums"}
            onCheckedChange={onTypeToggle}
          />
          <Label
            htmlFor="search-type"
            className="cursor-pointer text-sm text-white"
          >
            {type === "artists" ? "Artistas" : "Álbuns"}
          </Label>
        </div>
        <button
          className="cursor-pointer text-sm text-white"
          onClick={() => console.log("clean")}
        >
          Limpar
        </button>
      </div>
    </div>
  );
};
