import { ToggleTheme } from "@/components/toggle-theme";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2">
      <h1>Page Home</h1>
      <ToggleTheme />
    </main>
  );
}
