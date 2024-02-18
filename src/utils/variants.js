const templateVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delay: 0.2,
      duration: 0.4,
      ease: "easeIn",
    },
  },
};

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
    },
  },
  exit: { opacity: 0 },
};

const parentVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      ease: "linear",
    },
  },
};

const childVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeIn",
    },
  },
};

export { templateVariants, containerVariants, parentVariants, childVariants };
