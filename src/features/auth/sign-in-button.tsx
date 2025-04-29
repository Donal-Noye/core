"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/shared/ui/button";
import { LogIn } from "lucide-react";

export function SignInButton() {
  const handleSignIn = () => signIn();

  return (
    <Button variant="outline" onClick={handleSignIn}>
      <LogIn className="h-4 w-4" />
      Войти
    </Button>
  );
}
