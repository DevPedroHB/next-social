"use client";

import { themes } from "@/constants/themes";
import { SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import { DropdownMenu } from "./ui/dropdown-menu";

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="bg-primary-100 dark:bg-primary-900 flex aspect-square rounded p-2">
        <SunMoon className="size-5" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme}>
          {themes.map((theme) => {
            const Icon = theme.icon;

            return (
              <DropdownMenu.RadioItem key={theme.id} value={theme.id}>
                <Icon className="size-5" />
                <span>{theme.label}</span>
              </DropdownMenu.RadioItem>
            );
          })}
        </DropdownMenu.RadioGroup>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
