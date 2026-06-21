import type { ServiceCard } from "./types";

export const services = [
  {
    title: "Logopeda",
    description:
      "Diagnoza, terapia mowy i spokojne prowadzenie dziecka oraz rodzica przez kolejne etapy rozwoju komunikacji.",
    href: "/logopedia",
    icon: "🗣️",
  },
  {
    title: "Pediatra",
    description:
      "Opieka pediatryczna w przyjaznym gabinecie — z czasem na rozmowę, pytania i uważność na dziecko.",
    href: "/pediatria",
    icon: "🩺",
  },
  {
    title: "Wsparcie rodziców",
    description:
      "Praktyczne wskazówki, spokojne tłumaczenie zaleceń i atmosfera, w której rodzic nie czuje się oceniany.",
    href: "/o-nas",
    icon: "💬",
  },
] satisfies readonly ServiceCard[];
