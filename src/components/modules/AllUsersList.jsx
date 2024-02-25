"use client";

import { motion } from "framer-motion";
import { parentVariants, childVariants } from "@/utils/variants";

import UserCard from "./UserCard";

const AllUsersList = ({ allUsers }) => {
  return (
    <motion.div className="list-container" variants={parentVariants}>
      {allUsers.map((item) => (
        <motion.div variants={childVariants} key={item._id}>
          <UserCard user={item} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AllUsersList;
