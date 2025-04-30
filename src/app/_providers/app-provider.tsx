"use client";

import { ThemeProvider } from "@/features/theme/theme-provider";
import { ComposeChildren } from "@/shared/lib/react";
import { AppSessionProvider } from "@/entities/session/app-session-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/shared/api/query-client";

export function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <ComposeChildren>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      />
      <AppSessionProvider />
      <QueryClientProvider client={queryClient} />
      {children}
    </ComposeChildren>
  );
}
