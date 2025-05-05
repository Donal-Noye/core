export { profileSchema } from "@/entities/user/_domain/schema";
export {
  getProfileQuery,
  useInvalidateProfile,
} from "@/entities/user/_queries";
export { ProfileAvatar } from "./_vm/_ui/profile-avatar";
export { getProfileDisplayName } from "./_vm/get-profile-display-name";
export type { Profile } from "./_domain/types";
