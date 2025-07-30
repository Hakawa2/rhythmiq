export const getPagination = (pagination: string | null): string => {
  if (!pagination) {
    return "";
  }

  const currentPagination = new URLSearchParams(pagination.split("?")[1]);
  return currentPagination.get("offset") ?? "";
};
