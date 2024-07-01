"use client";

import { motion } from "framer-motion";
import { parentVariants, childVariants } from "@/utils/variants";

import UserCard from "./UserCard";

const AllUsersList = ({ users }) => {
  return (
    <motion.div
      className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      variants={parentVariants}
    >
      {users.length ? (
        users.map((item) => (
          <motion.div variants={childVariants} key={item._id}>
            <UserCard user={item} />
          </motion.div>
        ))
      ) : (
        <p className="not-found">کاربری یافت نشد</p>
      )}
    </motion.div>
  );
};

export default AllUsersList;
