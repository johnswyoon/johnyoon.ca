export const menuAnimation = {
  initial: {
    y: 50,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.9],
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export const titleSlideUp = {
  initial: { y: 200 },
  animate: { y: 0 },
};

export const transition = {
  duration: 0.8,
  ease: [0.6, -0.05, 0.01, 0.9],
};
