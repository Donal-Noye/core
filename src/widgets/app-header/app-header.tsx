import { Layout } from "@/widgets/app-header/_ui/layout";
import { Profile } from "@/widgets/app-header/_ui/profile";
import { MainNav } from "@/widgets/app-header/_ui/main-nav";
import { Logo } from "@/widgets/app-header/_ui/logo";
import { ToggleTheme } from "@/features/theme/toggle-theme";

export function AppHeader({
  variant,
}: {
  variant: "auth" | "private" | "public";
}) {
  const isProfile = variant !== "auth";

  return (
    <Layout
      profile={isProfile && <Profile />}
      nav={<MainNav />}
      logo={<Logo />}
      actions={<ToggleTheme />}
    />
  );
}
