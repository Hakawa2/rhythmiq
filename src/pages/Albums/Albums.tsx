import { DetailsHeader } from "@/components/DetailsHeader/DetailsHeader";
import { List } from "@/components/List/List";
import { SearchHandler } from "@/components/SearchHandler/SearchHandler";
import { useFindDetails } from "@/hooks/useFindDetails";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export function Albums() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useFindDetails("albums", id ?? "");

  return (
    <>
      <SearchHandler isLoading={isLoading} isError={isError} type="details">
        {data && (
          <div className="flex flex-col gap-4">
            <DetailsHeader
              image={data.image}
              title={data.name}
              subtitle={data.popularity}
              description={data.description}
              optionalInformation={data.tracksQuantity}
            />

            <List
              title={t("details.tracklist")}
              data={data.tracks}
              showNumbers
            />
          </div>
        )}
      </SearchHandler>
    </>
  );
}
