const templateVariants = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      type: "linear",
      delay: 0.25,
      duration: 0.5,
    },
  },
};

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: { opacity: 0 },
};

const parentVariants = {
  hidden: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
      ease: "linear",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      ease: "easeIn",
    },
  },
};

export { templateVariants, containerVariants, parentVariants, childVariants };
