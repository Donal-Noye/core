import { useMutation } from "@tanstack/react-query";
import { updateProfileAction } from "@/features/update-profile/_actions/update-profile";
import { useInvalidateProfile } from "@/entities/user/profile";
import { useAppSession } from "@/kernel/lib/next-auth/client";

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
