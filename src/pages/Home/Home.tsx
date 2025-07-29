import { SearchHandler } from "@/components/SearchHandler/SearchHandler";
import { SearchInput } from "@/components/SearchInput/SearchInput";
import { Artists } from "@/features/Artists/Artists";
import type { Artist } from "@/features/Artists/types";
import { useSearchController } from "@/hooks/useSearchController";
import { useSearchQuery } from "@/hooks/useSearchQuery";

export function Home() {
  const {
    search,
    setSearch,
    type,
    toggleType,
    debouncedSearch,
    isQueryEnabled,
  } = useSearchController();

  console.log(type);

  const { data, isLoading, isError, isEmpty } = useSearchQuery(
    debouncedSearch,
    type,
    {
      enabled: isQueryEnabled,
    }
  );

  console.log("data", data);

  return (
    <>
      <SearchInput
        search={search}
        onSearchChange={setSearch}
        type={type}
        onTypeToggle={toggleType}
      />
      <SearchHandler
        isEmpty={isEmpty}
        isLoading={isLoading}
        isError={isError}
        type="list"
      >
        <Artists data={data as Artist[]} />
      </SearchHandler>
    </>
  );
}
