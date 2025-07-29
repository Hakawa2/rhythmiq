export const formatDate = (date?: Date): string => {
  console.log(date);
  if (!date) {
    return "";
  }

  const parsedDate = new Date(date);

  return new Intl.DateTimeFormat("pt-BR").format(parsedDate);
};
