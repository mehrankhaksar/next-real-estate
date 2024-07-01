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
        className={`absolute text-xs z-10 dark:text-accent-foreground ${badgeStyles} ${
          role === "ADMIN" && "bg-yellow-500 hover:bg-yellow-600"
        }`}
      >
        {findName(roles, role)}
      </Badge>
      <Avatar className={`text-sm font-semibold ${avatarStyles}`}>
        <AvatarImage
          className="object-cover"
          src={avatar}
          alt={`${firstName} ${lastName}`}
        />
        <AvatarFallback className="dark:bg-background">
          {firstName[0]} {lastName[0]}
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default CustomAvatar;
