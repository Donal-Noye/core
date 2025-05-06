import { useMutation } from "@tanstack/react-query";
import { updateProfileAction } from "@/features/update-profile/_actions/update-profile";
import { useAppSession } from "@/entities/user/_vm/_ui/use-app-session";
import { useInvalidateProfile } from "@/entities/user/profile";

export const useUpdateProfile = () => {
  const { update: updateSession } = useAppSession();
  const invalidateProfile = useInvalidateProfile();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: updateProfileAction,
    async onSuccess({ profile }, { userId }) {
      await invalidateProfile(userId);
      await updateSession({
        user: profile,
      });
    },
  });

  return {
    updateProfile: mutateAsync,
    isPending,
  };
};
