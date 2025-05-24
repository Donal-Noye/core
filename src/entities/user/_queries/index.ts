import { getUserProfileAction } from "@/entities/user/_actions/get-user-profile";
import { useQueryClient } from "@tanstack/react-query";
import { UserId } from "@/kernel/domain/user";

const baseKey = "user";

export const getProfileQuery = (userId: UserId) => ({
  queryKey: [baseKey, "getProfileById", userId],
  queryFn: () => getUserProfileAction({ userId }),
});

export const useInvalidateProfile = () => {
  const queryClient = useQueryClient();

  return (userId: UserId) =>
    queryClient.invalidateQueries({
      queryKey: [baseKey, "getProfileById", userId],
    });
};
