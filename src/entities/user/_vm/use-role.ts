import { useAppSession } from "./_ui/use-app-session";

export const useRole = () => {
  const session = useAppSession();

  return session.data?.user.role
}