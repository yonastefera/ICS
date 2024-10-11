export const slideUp = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  shown: {
    opacity: 1,
    y: 0,
  },
};

export const slideDown = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  shown: {
    opacity: 1,
    y: 0,
  },
};

export const slideLeft = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  shown: {
    opacity: 1,
    x: 0,
  },
};

export const slideRight = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  shown: {
    opacity: 1,
    x: 0,
  },
};

export const opacity = {
  hidden: {
    opacity: 0,
  },
  shown: {
    opacity: 1,
  },
};

export const container = {
  hidden: {},
  shown: {
    transition: {
      staggerChildren: 0.4,
      delay: 0.2,
      duration: 2,
    },
  },
};

export const containerSync = {
  hidden: {},
  shown: {
    transition: {
      delay: 0.2,
      duration: 2,
    },
  },
};
