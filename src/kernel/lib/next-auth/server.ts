import { getServerSession } from "next-auth";
import { nextAuthConfig } from "@/kernel/lib/next-auth/next-auth-config";
import { NeedAuthError } from "@/shared/lib/errors";

export const getAppSessionServer = () => getServerSession(nextAuthConfig);
export const getAppSessionStrictServer = async () => {
  const session = await getAppSessionServer();

  if (session === null) {
    throw new NeedAuthError();
  }

  return session;
};
