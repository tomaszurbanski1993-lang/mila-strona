export const speechTherapyServices = [
  {
    icon: "conversation",
    title: "Konsultacja logopedyczna",
    description: "Rozmowa, wstępna ocena trudności i wskazanie najlepszego dalszego kroku.",
    href: null,
  },
  {
    icon: "diagnosis",
    title: "Diagnoza logopedyczna",
    description: "Pogłębiona ocena mowy, komunikacji i funkcji narządu artykulacyjnego.",
    href: null,
  },
  {
    icon: "speech",
    title: "Terapia logopedyczna",
    description: "Indywidualna praca dobrana do wieku, potrzeb i możliwości pacjenta.",
    href: null,
  },
  {
    icon: "pulse",
    title: "Elektrostymulacja",
    description: "Metoda wspierająca terapię funkcji w obrębie aparatu artykulacyjnego.",
    href: "/logopeda/elektrostymulacja",
  },
  {
    icon: "tape",
    title: "Kinesiotaping logopedyczny",
    description: "Wsparcie pracy mięśni i funkcji wykorzystywanych podczas mówienia i jedzenia.",
    href: null,
  },
  {
    icon: "headphones",
    title: "Neuroflow ATS®",
    description: "Ocena funkcjonalna i aktywny trening słuchowy dopasowany do pacjenta.",
    href: "/logopeda/neuroflow-ats",
  },
  {
    icon: "feeding",
    title: "Karmienie i żywienie",
    description: "Ocena oraz terapia trudności związanych z przyjmowaniem pokarmów.",
    href: "/logopeda/karmienie-i-zywienie",
  },
  {
    icon: "tooth",
    title: "Wsparcie terapii ortodontycznej",
    description: "Praca nad funkcjami jamy ustnej przed leczeniem i w jego trakcie.",
    href: null,
  },
  {
    icon: "hands",
    title: "Masaż logopedyczny",
    description: "Masaż, terapia manualna i wybrane elementy osteopatii wspierające mowę, połykanie oraz oddychanie.",
    href: "/logopeda/masaz-logopedyczny-i-terapia-manualna",
  },
  {
    icon: "ear",
    title: "Audiologia w logopedii",
    description: "Ocena funkcjonalna słuchu i świadome uwzględnienie mechanizmów słuchowych w planowaniu terapii mowy.",
    href: "/logopeda/audiologia-w-logopedii",
  },
  {
    icon: "mouth",
    title: "Terapia miofunkcjonalna",
    description: "Ćwiczenia mięśni ustno-twarzowych wspierające prawidłowe oddychanie, połykanie, żucie i artykulację.",
    href: "/logopeda/terapia-miofunkcjonalna",
  },
  {
    icon: "movement",
    title: "Terapia ręki i stopy w logopedii",
    description: "Praca nad bazą ruchową, równowagą i precyzją dłoni jako wsparcie rozwoju mowy.",
    href: "/logopeda/terapia-reki-i-stopy",
  },
] as const;

export const firstVisitSteps = [
  {
    number: "1",
    title: "Rozmowa",
    description: "Zaczynamy od powodu wizyty, historii rozwoju i obserwacji rodzica lub pacjenta.",
  },
  {
    number: "2",
    title: "Badanie i obserwacja",
    description: "Dobieramy zadania do wieku i możliwości, dbając o spokojną atmosferę spotkania.",
  },
  {
    number: "3",
    title: "Omówienie wniosków",
    description: "Wyjaśniamy wynik i ustalamy jasny, możliwy do wdrożenia plan kolejnych działań.",
  },
] as const;
