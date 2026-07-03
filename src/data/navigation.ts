import type { NavItem } from "./types";

export const navItems = [
  { label: "Start", href: "/" },
  { label: "Aktualności", href: "/aktualnosci" },
  { label: "O nas", href: "/o-nas" },
  { label: "Logopeda", href: "/logopedia" },
  { label: "Pediatra", href: "/pediatria" },
  { label: "Blog", href: "/blog" },
  { label: "Kontakt", href: "/kontakt" },
] satisfies readonly NavItem[];
