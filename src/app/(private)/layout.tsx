import AuthorizedGuard from "@/features/auth/authorized-guard";
import { AppHeader } from "@/app/_widgets/app-header/app-header";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AppHeader variant="private" />
      <AuthorizedGuard>{children}</AuthorizedGuard>
    </>
  );
}
