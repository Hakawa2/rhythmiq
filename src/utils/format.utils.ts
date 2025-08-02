export const formatDate = (date?: string): string => {
  if (!date) {
    return "";
  }

  const parsedDate = new Date(date);

  return new Intl.DateTimeFormat("pt-BR").format(parsedDate);
};

export const formatNumbers = (number: number): string => {
  return number ? Intl.NumberFormat("pt-BR").format(number) : "";
};

export const formatToTime = (duration: number): string => {
  return duration
    ? `${Math.floor(duration / 60000)}:${String(
        Math.floor((duration % 60000) / 1000)
      ).padStart(2, "0")}`
    : "";
};
