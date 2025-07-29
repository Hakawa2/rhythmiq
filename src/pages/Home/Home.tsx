import { Card } from "@/components/Card/Card";
import { PaginationController } from "@/components/PaginationController/PaginationController";
import { SearchHandler } from "@/components/SearchHandler/SearchHandler";
import { SearchInput } from "@/components/SearchInput/SearchInput";
import { useSearchController } from "@/hooks/useSearchController";
import { useSearchQuery } from "@/hooks/useSearchQuery";
import type { ListItem } from "@/types/list-type";
import { scrollTo } from "@/utils/scrollTo.utils";
import { useEffect, useState } from "react";

export function Home() {
  const [pagination, setPagination] = useState("0");
  const {
    search,
    setSearch,
    type,
    toggleType,
    debouncedSearch,
    isQueryEnabled,
    clean,
  } = useSearchController();

  const { data, isLoading, isError, isEmpty } = useSearchQuery(
    debouncedSearch,
    pagination,
    type,
    {
      enabled: isQueryEnabled,
    }
  );

  const handlePagination = (page: string) => {
    setPagination(page);
  };

  useEffect(() => {
    if (!isLoading && data) {
      setTimeout(() => scrollTo(0), 50);
    }
  }, [data, isLoading]);

  return (
    <>
      <SearchInput
        search={search}
        onSearchChange={setSearch}
        type={type}
        onTypeToggle={toggleType}
        onClean={clean}
      />
      <SearchHandler isEmpty={isEmpty} isLoading={isLoading} isError={isError}>
        <div className="flex flex-wrap gap-4 md:gap-10">
          {data?.items &&
            data.items.map((result: ListItem) => (
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

        <PaginationController
          pagination={data?.pagination}
          handleNewPage={handlePagination}
        />
      </SearchHandler>
    </>
  );
}
