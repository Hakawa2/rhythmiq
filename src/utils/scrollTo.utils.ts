export const scrollTo = (top = 0) => {
  requestAnimationFrame(() => {
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  });
};
