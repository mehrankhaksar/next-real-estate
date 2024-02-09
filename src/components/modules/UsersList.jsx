"use client";

import { motion } from "framer-motion";

import UserCard from "../modules/UserCard";

const listVariants = {
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

const itemVariants = {
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
    <motion.div className="list-container" variants={listVariants}>
      {users.map((item, index) => (
        <motion.div variants={itemVariants} key={index}>
          <UserCard user={item} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default UsersList;
