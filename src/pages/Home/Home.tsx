import { Card } from "@/components/Card/Card";
import { Header } from "@/components/Header/Header";
import { PaginationController } from "@/components/PaginationController/PaginationController";
import { SearchHandler } from "@/components/SearchHandler/SearchHandler";

import { useSearchContext } from "@/context/search/useSearchContext";
import { SearchInput } from "@/features/Search/SearchInput";
import { useSearchController } from "@/features/Search/hooks/useSearchController";
import { useSearchQuery } from "@/hooks/useSearchQuery";
import type { ListItem } from "@/types/list-type";
import { scrollTo } from "@/utils/scrollTo.utils";
import { useEffect } from "react";

export function Home() {
  const { state, dispatch } = useSearchContext();
  const { type, debouncedSearch, isQueryEnabled } = useSearchController();

  const { data, isLoading, isError, isEmpty } = useSearchQuery(
    debouncedSearch,
    state.offset,
    type,
    {
      enabled: isQueryEnabled,
    }
  );

  const handlePagination = (page: string) => {
    dispatch({ type: "SET_OFFSET", payload: page });
  };

  useEffect(() => {
    if (!isLoading && data) {
      setTimeout(() => scrollTo(0), 50);
    }
  }, [data, isLoading]);

  return (
    <>
      <Header />
      <SearchInput />
      <SearchHandler
        isEmpty={isEmpty}
        isLoading={isLoading}
        isError={isError}
        type="list"
      >
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
