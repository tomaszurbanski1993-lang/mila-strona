export interface SpeechServiceDetail {
  slug: string;
  tone: "teal" | "pink" | "yellow";
  eyebrow: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  badge: string;
  facts: readonly { label: string; value: string }[];
  overviewTitle: string;
  overview: readonly string[];
  signalsTitle: string;
  signalsLead: string;
  signals: readonly string[];
  processTitle: string;
  processLead: string;
  process: readonly { number: string; title: string; description: string }[];
  noteTitle: string;
  note: string;
  faq: readonly { question: string; answer: string }[];
}

export const speechServiceDetails = [
  {
    slug: "neuroflow-ats",
    tone: "teal",
    eyebrow: "Aktywny trening słuchowy",
    title: "Neuroflow ATS®",
    shortTitle: "Neuroflow ATS®",
    description:
      "Ocena funkcjonalna i aktywny trening słuchowy Neuroflow ATS® dla dzieci z trudnościami w przetwarzaniu informacji słuchowych.",
    intro:
      "Program pomaga ćwiczyć konkretne umiejętności słuchowe w sposób aktywny, etapowy i dopasowany do profilu trudności dziecka.",
    image: "/images/site/anna-neuroflow.jpg",
    imageAlt: "Anna Strus podczas ćwiczenia z materiałem logopedycznym",
    imageWidth: 1200,
    imageHeight: 1800,
    badge: "ATS",
    facts: [
      { label: "Forma", value: "ocena i trening" },
      { label: "Udział", value: "dziecko i rodzic" },
      { label: "Tryb", value: "etapowy program" },
    ],
    overviewTitle: "Słyszeć to nie zawsze znaczy rozumieć",
    overview: [
      "Przetwarzanie słuchowe obejmuje sposób, w jaki układ nerwowy porządkuje i interpretuje dźwięki. Trudności mogą być szczególnie widoczne w hałasie, podczas wykonywania dłuższych poleceń albo rozróżniania podobnie brzmiących głosek.",
      "Objawy nie są charakterystyczne wyłącznie dla zaburzeń przetwarzania słuchowego. Dlatego pracę poprzedza zebranie wywiadu, analiza aktualnego badania słuchu i ocena, czy potrzebna jest konsultacja audiologiczna lub innego specjalisty.",
      "W programie Neuroflow ATS® dziecko czynnie wykonuje zadania o stopniowo zmienianym poziomie trudności. Ćwiczenia mogą odbywać się w domu pod opieką rodzica, a kolejne etapy są monitorowane przez terapeutę.",
    ],
    signalsTitle: "Warto zapytać o ocenę, gdy dziecko",
    signalsLead: "Pojedynczy objaw nie stanowi rozpoznania — ważny jest cały obraz funkcjonowania.",
    signals: [
      "często prosi o powtórzenie wypowiedzi",
      "ma trudność z rozumieniem mowy w hałasie",
      "szybko męczy się podczas dłuższego słuchania",
      "myli podobnie brzmiące dźwięki mowy",
      "ma trudność z dłuższymi lub złożonymi poleceniami",
      "doświadcza problemów z nauką czytania lub pisania",
    ],
    processTitle: "Jak wygląda kwalifikacja i trening?",
    processLead:
      "Program jest planowany indywidualnie. Nie każde dziecko potrzebuje takiej samej liczby etapów ani identycznego zestawu ćwiczeń.",
    process: [
      {
        number: "01",
        title: "Wywiad i dokumentacja",
        description:
          "Omawiamy trudności w domu i szkole oraz sprawdzamy aktualne wyniki badania słuchu.",
      },
      {
        number: "02",
        title: "Ocena funkcjonalna",
        description:
          "Rozpoznajemy mocne strony i obszary słuchowe, które wymagają dalszego wsparcia.",
      },
      {
        number: "03",
        title: "Indywidualny program",
        description:
          "Dziecko regularnie wykonuje aktywne zadania dopasowane do swoich możliwości.",
      },
      {
        number: "04",
        title: "Kontrola postępów",
        description:
          "Po zakończeniu etapu omawiamy efekty i decydujemy, czy potrzebne są kolejne działania.",
      },
    ],
    noteTitle: "Ważne przed pierwszym spotkaniem",
    note:
      "Ocena w gabinecie logopedycznym nie zastępuje pełnej diagnostyki audiologicznej. Do różnicowania trudności potrzebne jest aktualne badanie słuchu, a czasem także współpraca z audiologiem, psychologiem, pedagogiem lub innym specjalistą.",
    faq: [
      {
        question: "Czy przed oceną potrzebne jest badanie słuchu?",
        answer:
          "Tak. Aktualna ocena słuchu obwodowego pomaga wykluczyć niedosłuch, który może powodować podobne trudności w codziennym funkcjonowaniu.",
      },
      {
        question: "Czy trening odbywa się wyłącznie w gabinecie?",
        answer:
          "Zadania mogą być wykonywane również w domu na platformie internetowej, pod opieką rodzica i z kontrolą przebiegu programu przez terapeutę.",
      },
      {
        question: "Czy każde dziecko przechodzi cały program?",
        answer:
          "Nie. Liczba etapów i tempo pracy wynikają z oceny, potrzeb dziecka oraz obserwowanych postępów.",
      },
    ],
  },
  {
    slug: "karmienie-i-zywienie",
    tone: "pink",
    eyebrow: "Pediatric Feeding Disorders",
    title: "Karmienie i żywienie",
    shortTitle: "Karmienie i żywienie",
    description:
      "Diagnoza i terapia trudności w karmieniu oraz rozwijaniu umiejętności jedzenia u niemowląt i dzieci.",
    intro:
      "Pomagam rodzinom zrozumieć trudności dziecka podczas posiłku i budować bezpieczne, możliwe do wdrożenia kroki terapii.",
    image: "/images/site/anna-karmienie.jpg",
    imageAlt: "Anna Strus podczas pracy z pomocami wykorzystywanymi w gabinecie",
    imageWidth: 1400,
    imageHeight: 933,
    badge: "PFD",
    facts: [
      { label: "Podejście", value: "dziecko i rodzina" },
      { label: "Początek", value: "wywiad i obserwacja" },
      { label: "Plan", value: "małe, realne kroki" },
    ],
    overviewTitle: "Posiłek jest złożoną umiejętnością",
    overview: [
      "Na sposób jedzenia wpływają między innymi rozwój ruchowy i sensoryczny, funkcje jamy ustnej, stan zdrowia, konsystencja pokarmu, używane akcesoria oraz relacja dziecka z osobą karmiącą.",
      "Ocena logopedyczna koncentruje się na funkcjach oralnych i umiejętnościach potrzebnych do bezpiecznego jedzenia i picia. W razie potrzeby terapia jest częścią szerszej współpracy z lekarzem, dietetykiem, psychologiem lub innym specjalistą.",
      "Pracujemy w stylu responsywnym: dorosły tworzy bezpieczne warunki i proponuje posiłek, a sygnały dziecka są zauważane i respektowane. Celem nie jest presja, lecz stopniowe rozwijanie kompetencji i komfortu przy stole.",
    ],
    signalsTitle: "Konsultacja może pomóc, gdy dziecko",
    signalsLead: "Zakres oceny zależy od wieku, etapu rozwoju i historii medycznej dziecka.",
    signals: [
      "ma trudność z gryzieniem, żuciem lub piciem z kubka",
      "akceptuje bardzo ograniczony zestaw produktów",
      "nie radzi sobie z przechodzeniem na nowe konsystencje",
      "denerwuje się lub wycofuje podczas posiłków",
      "ma trudność z samodzielnym jedzeniem",
      "potrzebuje oceny pozycji lub używanych akcesoriów",
    ],
    processTitle: "Jak wygląda pierwsza konsultacja?",
    processLead:
      "Chcemy zobaczyć codzienny posiłek możliwie takim, jaki jest — bez występu i bez oceniania rodzica.",
    process: [
      {
        number: "01",
        title: "Kwestionariusz i wywiad",
        description:
          "Zbieramy informacje o rozwoju, zdrowiu, sposobie karmienia i dotychczasowych trudnościach.",
      },
      {
        number: "02",
        title: "Obserwacja posiłku",
        description:
          "Analizujemy filmy z domu lub wspólnie obserwujemy jedzenie znanych dziecku produktów.",
      },
      {
        number: "03",
        title: "Ocena funkcji",
        description:
          "Sprawdzamy pozycję, pracę jamy ustnej, konsystencje, akcesoria i sygnały wysyłane przez dziecko.",
      },
      {
        number: "04",
        title: "Plan dla rodziny",
        description:
          "Ustalamy cel oraz niewielkie zadania możliwe do ćwiczenia podczas codziennych posiłków.",
      },
    ],
    noteTitle: "Bezpieczeństwo jest najważniejsze",
    note:
      "Krztuszenie, kaszel lub zmiana głosu podczas jedzenia, problemy z oddychaniem, odwodnienie albo nieprawidłowy przyrost masy ciała wymagają konsultacji medycznej. Ocena logopedyczna może być częścią opieki zespołowej, ale jej nie zastępuje.",
    faq: [
      {
        question: "Co zabrać na pierwsze spotkanie?",
        answer:
          "Po ustaleniu terminu otrzymasz wskazówki. Zwykle pomocne są znane dziecku produkty, używane na co dzień akcesoria oraz krótkie filmy z domowych posiłków.",
      },
      {
        question: "Czy terapia polega na zmuszaniu do próbowania?",
        answer:
          "Nie. Praca opiera się na bezpieczeństwie, obserwacji sygnałów dziecka i stopniowym rozwijaniu umiejętności bez budowania dodatkowej presji przy stole.",
      },
      {
        question: "Czy potrzebna jest współpraca z innymi specjalistami?",
        answer:
          "Czasami tak. Trudności w karmieniu mogą mieć podłoże medyczne, żywieniowe, sensoryczne lub psychospołeczne, dlatego plan bywa ustalany zespołowo.",
      },
    ],
  },
  {
    slug: "elektrostymulacja",
    tone: "yellow",
    eyebrow: "Metoda wspierająca",
    title: "Elektrostymulacja w logopedii",
    shortTitle: "Elektrostymulacja",
    description:
      "Elektrostymulacja jako uzupełnienie indywidualnie dobranej terapii funkcji w obrębie aparatu artykulacyjnego.",
    intro:
      "Zabieg może zostać włączony do terapii po badaniu logopedycznym, ocenie wskazań i wykluczeniu przeciwwskazań.",
    image: "/images/site/elektrostymulacja-detail.jpg",
    imageAlt: "Elektrody i akcesoria wykorzystywane podczas elektrostymulacji",
    imageWidth: 1400,
    imageHeight: 933,
    badge: "TENS",
    facts: [
      { label: "Rola", value: "uzupełnienie terapii" },
      { label: "Kwalifikacja", value: "po badaniu" },
      { label: "Plan", value: "indywidualny" },
    ],
    overviewTitle: "Metoda dobierana do konkretnej funkcji",
    overview: [
      "Elektrostymulacja wykorzystuje prąd impulsowy o parametrach dobranych przez przeszkolonego terapeutę. W gabinecie jest rozpatrywana jako element szerszej terapii, a nie samodzielne rozwiązanie trudności w mowie, jedzeniu czy połykaniu.",
      "Decyzję o zastosowaniu metody poprzedza wywiad oraz badanie budowy i funkcji kompleksu ustno-twarzowego. Terapeuta ocenia cel pracy, możliwe korzyści, przeciwwskazania oraz to, czy potrzebna jest zgoda lekarza prowadzącego.",
      "Odczucia podczas zabiegu są indywidualne i mogą przypominać delikatne mrowienie. Parametry, miejsce aplikacji oraz czas dobierane są do wieku, tolerancji i potrzeb pacjenta.",
    ],
    signalsTitle: "Metoda może być rozważona przy pracy nad",
    signalsLead: "O kwalifikacji zawsze decyduje badanie — sama obecność objawu nie jest wskazaniem do zabiegu.",
    signals: [
      "funkcją języka, warg lub policzków",
      "napięciem mięśniowym w obszarze ustno-twarzowym",
      "pozycją spoczynkową jamy ustnej",
      "funkcją połykania lub oddychania",
      "przygotowaniem i terapią po zabiegu wędzidełka",
      "wybranymi celami wspierającymi leczenie ortodontyczne",
    ],
    processTitle: "Od kwalifikacji do zabiegu",
    processLead:
      "Każdy etap powinien być zrozumiały dla pacjenta i rodzica. Przed rozpoczęciem można omówić wszystkie pytania i wątpliwości.",
    process: [
      {
        number: "01",
        title: "Wywiad i badanie",
        description:
          "Określamy główny problem funkcjonalny, cel terapii oraz dotychczasowe leczenie.",
      },
      {
        number: "02",
        title: "Ocena bezpieczeństwa",
        description:
          "Sprawdzamy przeciwwskazania i w razie potrzeby prosimy o opinię lekarza prowadzącego.",
      },
      {
        number: "03",
        title: "Dobór parametrów",
        description:
          "Miejsce aplikacji, natężenie i czas są dostosowywane do celu oraz tolerancji pacjenta.",
      },
      {
        number: "04",
        title: "Połączenie z terapią",
        description:
          "Zabieg łączymy z ćwiczeniami, które utrwalają funkcję i odpowiadają planowi logopedycznemu.",
      },
    ],
    noteTitle: "To nie jest metoda dla każdego",
    note:
      "Elektrostymulacja wymaga indywidualnej kwalifikacji. Dostępne badania dotyczą różnych grup pacjentów i protokołów, dlatego nie należy przedstawiać jej jako gwarantowanego ani samodzielnego sposobu terapii.",
    faq: [
      {
        question: "Czy zabieg boli?",
        answer:
          "Zwykle odczuwane jest mrowienie lub łaskotanie. Terapeuta stopniowo dobiera parametry i na bieżąco kontroluje komfort pacjenta.",
      },
      {
        question: "Czy potrzebne jest zaświadczenie od lekarza?",
        answer:
          "W niektórych sytuacjach tak — szczególnie gdy pacjent pozostaje pod stałą opieką specjalistyczną. Zakres potrzebnej dokumentacji ustalamy podczas kwalifikacji.",
      },
      {
        question: "Czy elektrostymulacja zastępuje ćwiczenia?",
        answer:
          "Nie. Jest metodą wspierającą i powinna być częścią planu obejmującego właściwie dobrane ćwiczenia oraz kontrolę postępów.",
      },
    ],
  },
] as const satisfies readonly SpeechServiceDetail[];

export const getSpeechService = (slug: string) =>
  speechServiceDetails.find((service) => service.slug === slug);
