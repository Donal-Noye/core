import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";

export function useSignOut() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: () => signOut({ callbackUrl: "/" }),
    onSuccess: async () => {
      router.push("/auth/sign-in");
    },
  });

  return {
    signOut: mutation.mutateAsync,
    isPending: mutation.isPending,
  };
}
