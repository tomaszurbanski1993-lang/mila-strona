export const practices = [
  {
    eyebrow: "Gabinet logopedyczny",
    name: "Anna Strus",
    role: "Logopeda i glottodydaktyk",
    description:
      "Diagnoza i terapia dzieci, młodzieży oraz dorosłych. Uważna ocena, indywidualny plan i współpraca z rodzicem na każdym etapie.",
    image: "/images/site/anna-strus.jpg",
    imageAlt: "Anna Strus, logopeda i glottodydaktyk",
    href: "/logopeda",
    linkLabel: "Poznaj Annę i zakres wsparcia",
    highlights: [
      { label: "diagnoza i terapia mowy", icon: "diagnosis" },
      { label: "karmienie i funkcje oralne", icon: "feeding" },
      { label: "Neuroflow ATS®", icon: "headphones" },
    ],
  },
  {
    eyebrow: "Gabinet pediatryczny",
    name: "Paweł Strus",
    role: "Lekarz pediatra",
    description:
      "Konsultacje pediatryczne w spokojnej atmosferze, z czasem na pytania rodziców i jasne omówienie dalszego postępowania.",
    image: "/images/site/pawel-strus.jpg",
    imageAlt: "Paweł Strus, lekarz pediatra",
    href: "/pediatra",
    linkLabel: "Poznaj Pawła i gabinet pediatryczny",
    highlights: [
      { label: "konsultacje pediatryczne", icon: "conversation" },
      { label: "opieka nad dziećmi i młodzieżą", icon: "care" },
      { label: "leczenie wg aktualnej wiedzy", icon: "experience" },
    ],
  },
] as const;

export const values = [
  {
    title: "Uważność",
    icon: "attention",
    tone: "pink",
    description: "Patrzymy na potrzeby konkretnego dziecka i jego rodziny, nie tylko na pojedynczy objaw.",
  },
  {
    title: "Doświadczenie",
    icon: "experience",
    tone: "teal",
    description: "Łączymy wieloletnią praktykę z aktualną wiedzą i metodami dobranymi do realnej sytuacji.",
  },
  {
    title: "Jasna komunikacja",
    icon: "conversation",
    tone: "purple",
    description: "Wyjaśniamy rozpoznanie, zalecenia i kolejne kroki spokojnym, zrozumiałym językiem.",
  },
] as const;
