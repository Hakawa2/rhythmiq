import { Card } from "@/components/Card/Card";
import { SearchHandler } from "@/components/SearchHandler/SearchHandler";
import { SearchInput } from "@/components/SearchInput/SearchInput";
import { useSearchController } from "@/hooks/useSearchController";
import { useSearchQuery } from "@/hooks/useSearchQuery";
import type { ListItem } from "@/types/list-type";

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
        <div className="flex flex-wrap gap-4 md:gap-10">
          {data &&
            data.map((result: ListItem) => (
              <Card
                key={result.id}
                image={result.image}
                name={result.name}
                ariaLabel={result.ariaLabel}
                description={result.description}
                url={result.uri}
              />
            ))}
        </div>
      </SearchHandler>
    </>
  );
}
