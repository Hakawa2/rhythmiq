export const detailsConfig = {
  emptyMessage: "Nenhuma resposta foi encontada",
  heroSkeleton: {
    skeleton: [
      {
        id: "1",
        className: "w-48 h-48 object-cover rounded-full shadow-lg",
      },
    ],
  },
  headerSkeleton: {
    containerClassName: "flex flex-col gap-4 items-start",
    skeleton: [
      {
        id: "2",
        className: "h-4 w-56",
      },
      {
        id: "3",
        className: "h-4 w-32",
      },
      {
        id: "4",
        className: "h-4 w-24",
      },
      {
        id: "5",
        className: "h-4 w-24",
      },
    ],
  },
  tracksSkeleton: {
    containerClassName:
      "bg-white/10 p-4 rounded-xl flex flex-col gap-4 justify-between items-start hover:bg-white/20 transition",
    quantity: 12,
    skeleton: [
      {
        id: "6",
        className: "h-8 w-full",
      },
      {
        id: "7",
        className: "h-4 w-full",
      },
    ],
  },
};
