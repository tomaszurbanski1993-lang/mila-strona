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
    highlights: ["konsultacje pediatryczne", "opieka nad dziećmi i młodzieżą", "leczenie wg aktualnej wiedzy"],
  },
] as const;

export const values = [
  {
    title: "Uważność",
    description: "Patrzymy na potrzeby konkretnego dziecka i jego rodziny, nie tylko na pojedynczy objaw.",
    tone: "pink",
  },
  {
    title: "Doświadczenie",
    description: "Łączymy wieloletnią praktykę z aktualną wiedzą i metodami dobranymi do realnej sytuacji.",
    tone: "teal",
  },
  {
    title: "Jasna komunikacja",
    description: "Wyjaśniamy rozpoznanie, zalecenia i kolejne kroki spokojnym, zrozumiałym językiem.",
    tone: "purple",
  },
] as const;

export const featuredBlog = {
  type: "Z bloga",
  title: "Zasady bezpieczeństwa dla dzieciaków na Miłej",
  description:
    "Sześć prostych zasad, które pomagają dzieciom czuć się bezpiecznie podczas wizyty w obu gabinetach.",
  date: "10 sierpnia 2026",
  href: "/blog/zasady-bezpieczenstwa-dla-dzieciakow-na-milej",
} as const;

export const latestNews = [
  {
    title: "Nowe metody terapii w gabinecie logopedycznym",
    description: "Od września terapia będzie mogła uwzględniać także masaż i terapię manualną, mioterapię, ocenę funkcjonalną słuchu oraz terapię ręki.",
    date: "23 stycznia 2026",
    href: "/aktualnosci/nowe-metody-terapii-w-gabinecie-logopedycznym",
  },
  {
    title: "Większy, odremontowany gabinet",
    description: "Krótka informacja organizacyjna dotycząca gabinetu logopedycznego.",
    date: "13 sierpnia 2025",
    href: "/aktualnosci/wiekszy-odremontowany-gabinet-otwarty-od-1-wrzesnia",
  },
] as const;
