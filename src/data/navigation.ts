import type { NavItem } from "./types";

export const navItems = [
  { label: "Start", href: "/" },
  { label: "Logopeda", href: "/logopeda" },
  { label: "Pediatra", href: "/pediatra" },
  { label: "O nas", href: "/o-nas" },
  { label: "Blog", href: "/blog" },
  { label: "Aktualności", href: "/aktualnosci" },
  { label: "Kontakt", href: "/kontakt" },
] satisfies readonly NavItem[];
