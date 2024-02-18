"use client";

import { motion } from "framer-motion";
import { parentVariants, childVariants } from "@/utils/variants";

import UserCard from "../modules/UserCard";

const UsersList = ({ users }) => {
  return (
    <motion.div className="list-container" variants={parentVariants}>
      {users.map((item) => (
        <motion.div variants={childVariants} key={item._id}>
          <UserCard user={item} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default UsersList;
