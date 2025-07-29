import { ListLoading } from "@/layouts/ListLoading/ListLoading";

type SearchHandlerProps<T> = {
  isLoading: boolean;
  isError: boolean;
  isEmpty: boolean;
  data?: T;
  children: React.ReactNode;
  type: "list" | "details";
};

export const SearchHandler = <T,>({
  isLoading,
  isError,
  isEmpty,
  children,
  type = "list",
}: SearchHandlerProps<T>) => {
  if (isLoading) return type === "list" ? <ListLoading /> : "";
  if (isError) return <p>Erro ao carregar dados 😢</p>;
  if (isEmpty) return <p>Nenhum Resultado foi encontrado 😢</p>;
  return <>{children}</>;
};
