import { DetailsHeader } from "@/components/DetailsHeader/DetailsHeader";
import { List } from "@/components/List/List";
import { SearchHandler } from "@/components/SearchHandler/SearchHandler";
import { useFindDetails } from "@/hooks/useFindDetails";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export function Artists() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useFindDetails("artists", id);

  return (
    <>
      <SearchHandler isLoading={isLoading} isError={isError} type="details">
        {data && (
          <div className="flex flex-col gap-8">
            <DetailsHeader
              image={data.image}
              title={data.name}
              subtitle={data.subtitle}
              description={data.description}
              optionalInformation={data.optionalInformation}
            />
            <List
              title={t("details.topTracks")}
              data={data.topTracks}
              showNumbers
            />
          </div>
        )}
      </SearchHandler>
    </>
  );
}
