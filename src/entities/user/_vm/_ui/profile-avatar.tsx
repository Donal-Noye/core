import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Profile } from "../../_domain/types";
import { AvatarFallback } from "@/shared/ui/avatar";
import { getProfileLetters } from "../get-profile-letters";
import { cn } from "@/shared/ui/utils";

export const ProfileAvatar = ({
  profile,
  className,
}: {
  profile?: Profile;
  className?: string;
}) => {
  if (!profile) {
    return null;
  }

  return (
    <Avatar
      className={cn(
        className,
        "relative flex shrink-0 overflow-hidden rounded-full",
      )}
    >
      <AvatarImage src={profile.image ?? ""} alt="" />
      <AvatarFallback>{getProfileLetters(profile)}</AvatarFallback>
    </Avatar>
  );
};
