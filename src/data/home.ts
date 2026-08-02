export const practices = [
  {
    eyebrow: "Gabinet logopedyczny",
    name: "Anna Strus",
    role: "Logopeda i neurologopeda",
    description:
      "Diagnoza i terapia dzieci, młodzieży oraz dorosłych. Uważna ocena, indywidualny plan i współpraca z rodzicem na każdym etapie.",
    image: "/images/site/anna-strus.jpg",
    imageAlt: "Anna Strus, logopeda i neurologopeda",
    href: "/logopeda",
    linkLabel: "Poznaj Annę i zakres wsparcia",
    highlights: ["diagnoza i terapia mowy", "karmienie i funkcje oralne", "Neuroflow ATS®"],
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
    highlights: ["konsultacje pediatryczne", "opieka nad dziećmi i młodzieżą", "wizyta bez pośpiechu"],
  },
] as const;

export const values = [
  {
    mark: "01",
    title: "Uważność",
    description: "Patrzymy na potrzeby konkretnego dziecka i jego rodziny, nie tylko na pojedynczy objaw.",
    tone: "pink",
  },
  {
    mark: "02",
    title: "Doświadczenie",
    description: "Łączymy wieloletnią praktykę z aktualną wiedzą i metodami dobranymi do realnej sytuacji.",
    tone: "teal",
  },
  {
    mark: "03",
    title: "Jasna komunikacja",
    description: "Wyjaśniamy rozpoznanie, zalecenia i kolejne kroki spokojnym, zrozumiałym językiem.",
    tone: "purple",
  },
] as const;

export const featuredBlog = {
  type: "Z bloga",
  title: "Jak przygotować święta i nie być zmęczonym, a szczęśliwym?",
  description:
    "O rodzinnych przygotowaniach, małych tradycjach i sposobach na to, by w ważnym czasie zostało miejsce na bliskość.",
  date: "20 grudnia 2024",
  href: "/blog/jak-przygotowac-swieta-i-nie-byc-zmeczonym-a-szczesliwym",
} as const;

export const latestNews = [
  {
    title: "Większy, odremontowany gabinet",
    description: "Krótka informacja organizacyjna dotycząca gabinetu logopedycznego.",
    date: "13 sierpnia 2025",
    href: "/aktualnosci/wiekszy-odremontowany-gabinet-otwarty-od-1-wrzesnia",
  },
  {
    title: "Magnetyczne chwile w poczekalni",
    description: "Nowa tablica magnetyczna pomaga najmłodszym przyjemniej spędzić czas przed wizytą.",
    date: "5 listopada 2024",
    href: "/aktualnosci/magnetyczne-chwile-w-poczekalni",
  },
] as const;
