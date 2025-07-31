import { DetailsLoading } from "@/layouts/DetailsLoading/DetailsLoading";
import { ListLoading } from "@/layouts/ListLoading/ListLoading";

export type SearchHandlerProps<T> = {
  isLoading: boolean;
  isError: boolean;
  isEmpty?: boolean;
  data?: T;
  children: React.ReactNode;
  type: "list" | "details";
};

export const SearchHandler = <T,>({
  isLoading,
  isError,
  isEmpty,
  children,
  type,
}: SearchHandlerProps<T>) => {
  if (isLoading) return type === "list" ? <ListLoading /> : <DetailsLoading />;
  if (isError)
    return <p data-testid="error-message">Erro ao carregar dados 😢</p>;
  if (isEmpty)
    return (
      <p data-testid="empty-message">Nenhum Resultado foi encontrado 😢</p>
    );
  return <>{children}</>;
};
