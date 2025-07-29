export const formatDate = (date?: Date): string => {
  if (!date) {
    return "";
  }

  const parsedDate = new Date(date);

  return new Intl.DateTimeFormat("pt-BR").format(parsedDate);
};

export const formatNumbers = (number: number) => {
  return number ? Intl.NumberFormat("pt-BR").format(number) : "";
};
