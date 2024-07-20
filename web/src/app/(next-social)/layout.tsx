import type { ReactNode } from "react";

interface INextSocialLayout {
  children: ReactNode;
}

export default function NextSocialLayout({
  children,
}: Readonly<INextSocialLayout>) {
  return <>{children}</>;
}
