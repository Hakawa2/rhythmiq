import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useSearchController } from "@/features/Search/hooks/useSearchController";

export const SearchInput = () => {
  const { term, setSearch, type, toggleType, clean } = useSearchController();

  return (
    <div className="flex flex-col items-center gap-4 mb-6">
      <input
        type="text"
        placeholder={`Buscar por ${
          type === "artists" ? "artista" : "álbum"
        }...`}
        value={term}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 rounded-xl text-sm text-white placeholder-gray-500 outline-none ring-2 ring-purple-400"
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
            className="cursor-pointer text-sm text-white"
          >
            {type === "artists" ? "Artistas" : "Álbuns"}
          </Label>
        </div>
        <button className="cursor-pointer text-sm text-white" onClick={clean}>
          Limpar
        </button>
      </div>
    </div>
  );
};
