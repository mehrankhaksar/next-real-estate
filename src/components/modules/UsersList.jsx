"use client";

import { motion } from "framer-motion";

import UserCard from "../modules/UserCard";

const layoutVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.25,
      delay: 0.25,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const userVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: "easeIn",
    },
  },
};

const UsersList = ({ users }) => {
  return (
    <motion.div
      className="w-full grid grid-cols-5 gap-5"
      variants={layoutVariants}
    >
      {users.map((item, index) => (
        <motion.div variants={userVariants} key={index}>
          <UserCard user={item} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default UsersList;
