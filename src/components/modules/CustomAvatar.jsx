import { Badge } from "../ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

import { findName } from "@/utils/helperFunctions";
import { roles } from "@/constants/lists";

const CustomAvatar = ({
  badgeStyles,
  user: { role, avatar, firstName, lastName },
  avatarStyles,
}) => {
  return (
    <div className="relative">
      <Badge
        className={`absolute px-1.5 z-10 ${badgeStyles} ${
          role === "ADMIN" && "bg-yellow-400 hover:bg-yellow-500"
        }`}
      >
        {findName(roles, role)}
      </Badge>
      <Avatar className={`font-extrabold ${avatarStyles}`}>
        <AvatarImage src={avatar} alt={`${firstName} ${lastName}`} />
        <AvatarFallback>
          {firstName[0]} {lastName[0]}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default CustomAvatar;
