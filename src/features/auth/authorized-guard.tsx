"use client";

import { useAppSession } from "@/entities/user/session.client";
import { FullPageSpinner } from "@/shared/ui/full-page-spinner";
import { signIn } from "next-auth/react";
import React, { useEffect } from "react";

export default function AuthorizedGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = useAppSession();

  const isAuthenticated = session.status === "unauthenticated";

  useEffect(() => {
    if (isAuthenticated) {
      signIn();
    }
  }, [isAuthenticated]);

  const isLoading = session.status === "loading" ||
        session.status === "unauthenticated"

  return (
    <>
      <FullPageSpinner isLoading={isLoading} />
      {session.status === "authenticated" && children}
    </>
  );
}
