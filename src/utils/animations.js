export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1, x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1, x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export const fadeScale = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1, scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
