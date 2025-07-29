export const listConfig = {
  emptyMessage: "Nenhuma resposta foi encontada",
  containerClassName:
    "bg-white/10 p-5 rounded-xl backdrop-blur-lg hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg w-full md:w-3xs gap-4 flex flex-col",
  skeletons: [
    {
      id: "image",
      className: "w-full aspect-square object-cover rounded-lg",
    },
    {
      id: "name",
      className: "h-8",
    },
    {
      id: "description",
      className: "h-4",
    },
  ],
  quantity: 12,
};
