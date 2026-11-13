import type { CardIconName } from "./card-icons";

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
  icon: CardIconName;
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
    icon: "headphones",
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
    icon: "feeding",
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
    icon: "pulse",
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
  {
    slug: "masaz-logopedyczny-i-terapia-manualna",
    tone: "pink",
    eyebrow: "Holistyczne wsparcie logopedyczne",
    title: "Masaż logopedyczny i terapia manualna",
    shortTitle: "Masaż i terapia manualna",
    description:
      "Masaż logopedyczny, techniki terapii manualnej i wybrane elementy osteopatii jako uzupełnienie terapii mowy, połykania i oddychania.",
    intro:
      "Łączę pracę lokalną w obrębie aparatu mowy z oddziaływaniem na struktury, które mogą wpływać na mowę, połykanie i oddychanie.",
    image: "/images/site/anna-strus.jpg",
    imageAlt: "Anna Strus, logopeda prowadząca terapię manualną",
    imageWidth: 933,
    imageHeight: 1400,
    icon: "hands",
    facts: [
      { label: "Zakres", value: "twarz, jama ustna i szyja" },
      { label: "Podejście", value: "lokalne i całościowe" },
      { label: "Plan", value: "dobierany indywidualnie" },
    ],
    overviewTitle: "Praca z napięciem, ruchem i czuciem",
    overview: [
      "W mojej pracy łączę masaż logopedyczny, techniki terapii manualnej oraz wybrane elementy osteopatii. Pozwala to działać zarówno lokalnie na aparat mowy, jak i na struktury, które mogą wpływać na mowę, połykanie i oddychanie.",
      "Masaż logopedyczny przygotowuje i usprawnia mięśnie twarzy, języka, warg oraz żuchwy. Służy poprawie napięcia, ruchomości i czucia tkanek, a także ułatwia wykonywanie ćwiczeń artykulacyjnych i oddechowych.",
      "Terapia manualna obejmuje również obszary oddziałujące na aparat mowy pośrednio, między innymi stawy skroniowo-żuchwowe, mięśnie szyi i obręcz barkową. Celem jest zmniejszenie napięć i tworzenie lepszych warunków biomechanicznych do mówienia, połykania oraz oddychania.",
    ],
    signalsTitle: "Terapia może obejmować pracę nad",
    signalsLead:
      "Zakres i kolejność technik wynikają z badania funkcjonalnego oraz aktualnych potrzeb pacjenta.",
    signals: [
      "napięciem i ruchomością mięśni twarzy, języka, warg i żuchwy",
      "czuciem tkanek w obrębie aparatu mowy",
      "stawami skroniowo-żuchwowymi",
      "mięśniami szyi i obręczą barkową",
      "koordynacją oddechu, połykania i artykulacji",
      "przygotowaniem do ćwiczeń logopedycznych",
    ],
    processTitle: "Jak wygląda proces terapii?",
    processLead:
      "Poszczególne elementy łączę w jednej terapii tylko wtedy, gdy wynikają z oceny i wspierają ustalony cel logopedyczny.",
    process: [
      {
        number: "01",
        title: "Ocena funkcjonalna",
        description:
          "Oceniam napięcie i ustawienie struktur — od twarzy po szyję i obręcz barkową.",
      },
      {
        number: "02",
        title: "Terapia manualna",
        description:
          "Dobieram pracę manualną do rozpoznanych napięć i ograniczeń ruchomości.",
      },
      {
        number: "03",
        title: "Masaż logopedyczny",
        description:
          "Przygotowuję mięśnie aparatu mowy do wykonywania zaplanowanych funkcji i ćwiczeń.",
      },
      {
        number: "04",
        title: "Ćwiczenia logopedyczne",
        description:
          "Utrwalamy uzyskane efekty w funkcji mowy, połykania i oddychania.",
      },
    ],
    noteTitle: "Rola elementów osteopatii",
    note:
      "W Polsce osteopatia nie jest formalnie uznana za metodę medyczną. W gabinecie wykorzystuję wyłącznie wybrane techniki oparte na pracy manualnej oraz wiedzy z anatomii, fizjologii i biomechaniki — jako wsparcie procesu logopedycznego, a nie jako leczenie chorób.",
    faq: [
      {
        question: "Czy masaż logopedyczny jest osobną terapią?",
        answer:
          "Może być jednym z elementów planu. Najczęściej łączę go z ćwiczeniami logopedycznymi, aby wykorzystać poprawę ruchomości, czucia i napięcia w konkretnej funkcji.",
      },
      {
        question: "Jakich obszarów może dotyczyć terapia manualna?",
        answer:
          "W zależności od potrzeb praca może obejmować twarz, jamę ustną, stawy skroniowo-żuchwowe, mięśnie szyi oraz obręcz barkową.",
      },
      {
        question: "Czy każda wizyta przebiega tak samo?",
        answer:
          "Nie. Techniki, ich kolejność i intensywność dobieram do aktualnego badania, celu terapii oraz tolerancji pacjenta.",
      },
    ],
  },
  {
    slug: "audiologia-w-logopedii",
    tone: "teal",
    eyebrow: "Słuch i rozwój mowy",
    title: "Audiologia w logopedii",
    shortTitle: "Audiologia w logopedii",
    description:
      "Ocena funkcjonalna słuchu i uwzględnienie mechanizmów słuchowych w diagnozie oraz planowaniu terapii logopedycznej.",
    intro:
      "Prawidłowa ocena słuchu pomaga lepiej rozumieć trudności z mową, artykulacją i odbiorem języka oraz świadomie zaplanować dalszą terapię.",
    image: "/images/site/anna-neuroflow.jpg",
    imageAlt: "Anna Strus podczas pracy z materiałem wykorzystywanym w treningu słuchowym",
    imageWidth: 1200,
    imageHeight: 1800,
    icon: "ear",
    facts: [
      { label: "Obszar", value: "słuch i rozumienie mowy" },
      { label: "Narzędzia", value: "ocena i trening" },
      { label: "Współpraca", value: "laryngolog i audiolog" },
    ],
    overviewTitle: "Słuch jest podstawą rozwoju mowy",
    overview: [
      "Audiologia to nauka o słuchu i jego mechanizmach, a także o zmyśle równowagi. Słuch i równowaga są związane z działaniem ucha wewnętrznego.",
      "W codziennej pracy logopedy wiedza audiologiczna jest ważna, ponieważ diagnoza i terapia logopedyczna w dużej mierze zależą od prawidłowej oceny słuchu oraz rozumienia mechanizmów słuchowych.",
      "Uwzględnienie oceny słuchu pomaga interpretować wyniki badań dodatkowych, takich jak audiometria tonalna, tympanometria, otoemisja czy ABR, a w razie potrzeby kierować pacjenta na konsultację laryngologiczną lub audiologiczną.",
    ],
    signalsTitle: "Ocena słuchu pomaga, gdy pacjent",
    signalsLead:
      "Logopeda może jako pierwszy zauważyć sygnały, które wymagają dalszej diagnostyki słuchu.",
    signals: [
      "ma trudności z rozwojem mowy lub rozumieniem języka",
      "nie reaguje na ciche dźwięki",
      "popełnia błędy artykulacyjne mogące wiązać się z niedosłuchem",
      "potrzebuje dopasowania terapii do wyników badań słuchu",
      "wymaga ćwiczeń rozwijających percepcję słuchową",
      "doświadcza pogorszenia słyszenia lub nawracających problemów z uszami",
    ],
    processTitle: "Jak wykorzystuję audiologię w terapii?",
    processLead:
      "Ocena funkcjonalna nie zastępuje pełnej diagnostyki medycznej, ale pomaga właściwie ukierunkować pracę i współpracę ze specjalistami.",
    process: [
      {
        number: "01",
        title: "Wywiad i obserwacja",
        description:
          "Zbieram informacje o rozwoju mowy, reakcjach na dźwięki i dotychczasowych trudnościach.",
      },
      {
        number: "02",
        title: "Analiza badań",
        description:
          "Uwzględniam aktualne wyniki badań słuchu i wskazania innych specjalistów.",
      },
      {
        number: "03",
        title: "Dostosowanie warunków",
        description:
          "W razie potrzeby modyfikuję sposób komunikacji, miejsce pracy i wykorzystywane wsparcie słuchowe.",
      },
      {
        number: "04",
        title: "Trening słuchowy",
        description:
          "Dobieram ćwiczenia rozwijające percepcję słuchową i wspomagające rozwój mowy.",
      },
    ],
    noteTitle: "Kiedy potrzebna jest konsultacja specjalistyczna?",
    note:
      "Podejrzenie ubytku słuchu, nawracające wysiękowe zapalenia ucha lub niepokojące wyniki obserwacji wymagają diagnostyki u lekarza laryngologa albo audiologa. Ocena logopedyczna nie zastępuje badania słuchu.",
    faq: [
      {
        question: "Dlaczego słuch ma znaczenie dla artykulacji?",
        answer:
          "Dziecko uczy się mowy między innymi poprzez odbieranie i różnicowanie dźwięków. Nieprawidłowe słyszenie może utrudniać rozwój wymowy i rozumienie języka.",
      },
      {
        question: "Czy logopeda może rozpoznać niedosłuch?",
        answer:
          "Logopeda może zauważyć niepokojące objawy i zasugerować dalsze badania, ale diagnozę słuchu przeprowadza właściwy specjalista.",
      },
      {
        question: "Jak zmienia się terapia przy problemach ze słuchem?",
        answer:
          "Plan może obejmować trening słuchowy, ćwiczenia percepcji oraz dostosowanie warunków pracy, na przykład bliższe siedzenie, wyraźniejszą mowę lub odpowiednie systemy wspomagające.",
      },
    ],
  },
  {
    slug: "terapia-miofunkcjonalna",
    tone: "yellow",
    eyebrow: "Mioterapia w logopedii",
    title: "Terapia miofunkcjonalna",
    shortTitle: "Terapia miofunkcjonalna",
    description:
      "Ćwiczenia mięśni ustno-twarzowych oraz funkcji oddychania, połykania i żucia jako element terapii logopedycznej.",
    intro:
      "Mioterapia służy usprawnianiu mięśni i funkcji układu oralnego, które są ważne dla wymowy, połykania, oddychania i zgryzu.",
    image: "/images/site/anna-karmienie.jpg",
    imageAlt: "Anna Strus podczas pracy z pomocami wykorzystywanymi w terapii funkcji oralnych",
    imageWidth: 1400,
    imageHeight: 933,
    icon: "mouth",
    facts: [
      { label: "Obszar", value: "mięśnie ustno-twarzowe" },
      { label: "Funkcje", value: "oddech, żucie i połykanie" },
      { label: "Współpraca", value: "opieka interdyscyplinarna" },
    ],
    overviewTitle: "Terapia mięśni i funkcji oralnych",
    overview: [
      "Mioterapia jest formą oddziaływania terapeutycznego służącą usprawnianiu mięśni mimicznych oraz przeciwdziałaniu zaburzeniom układu oralnego lub ograniczaniu ich skutków.",
      "Terapia miofunkcjonalna stanowi część terapii logopedycznej. Ma szczególne znaczenie przy trudnościach związanych z mową, połykaniem, oddychaniem i zgryzem.",
      "Praca może obejmować mięśnie warg, języka, policzków, żuchwy i podniebienia, regulację napięcia mięśniowego oraz kształtowanie prawidłowych wzorców oddychania, połykania i żucia.",
    ],
    signalsTitle: "Terapia może być pomocna dla",
    signalsLead:
      "O zakresie pracy decyduje indywidualna ocena funkcji ustno-twarzowych i potrzeb pacjenta.",
    signals: [
      "dzieci z wadami wymowy lub opóźnionym rozwojem mowy",
      "osób z trudnościami w połykaniu",
      "pacjentów z wadami zgryzu",
      "osób oddychających nawykowo przez usta",
      "dzieci z nieprawidłowym napięciem w strefie ustno-twarzowej",
      "pacjentów przygotowujących się do leczenia ortodontycznego",
      "osób przed i po zabiegu podcięcia wędzidełka",
    ],
    processTitle: "Na czym polega mioterapia?",
    processLead:
      "Ćwiczenia są dobierane do rozpoznanej funkcji i mogą zmieniać się wraz z postępami terapii.",
    process: [
      {
        number: "01",
        title: "Ocena funkcji",
        description:
          "Sprawdzam sposób oddychania, połykania i żucia oraz pracę mięśni ustno-twarzowych.",
      },
      {
        number: "02",
        title: "Ćwiczenia mięśniowe",
        description:
          "Wzmacniamy i koordynujemy pracę warg, języka, policzków, żuchwy i podniebienia.",
      },
      {
        number: "03",
        title: "Regulacja napięcia",
        description:
          "Pracujemy nad napięciem mięśniowym potrzebnym do prawidłowej wymowy, połykania i oddychania.",
      },
      {
        number: "04",
        title: "Utrwalenie wzorców",
        description:
          "Ćwiczymy prawidłowe wzorce oddychania, połykania i żucia w codziennych funkcjach.",
      },
    ],
    noteTitle: "Współpraca z innymi specjalistami",
    note:
      "W przypadku wad zgryzu, trudności z oddychaniem lub innych złożonych problemów terapia może wymagać ścisłej współpracy z ortodontą, fizjoterapeutą, laryngologiem albo innym specjalistą.",
    faq: [
      {
        question: "Czy mioterapia dotyczy wyłącznie wymowy?",
        answer:
          "Nie. Obejmuje również funkcje ważne dla mowy i zgryzu, takie jak oddychanie, połykanie, żucie oraz pozycja spoczynkowa języka i warg.",
      },
      {
        question: "Czy terapia może wspierać leczenie ortodontyczne?",
        answer:
          "Tak, jeśli ocena wykaże nieprawidłowe funkcje jamy ustnej. Plan warto wtedy uzgodnić z ortodontą prowadzącym leczenie.",
      },
      {
        question: "Czy pracuje się także przed i po podcięciu wędzidełka?",
        answer:
          "Może to być część przygotowania i opieki po zabiegu, ale zakres ćwiczeń ustala się indywidualnie, z uwzględnieniem zaleceń osoby wykonującej zabieg.",
      },
    ],
  },
  {
    slug: "terapia-reki-i-stopy",
    tone: "teal",
    eyebrow: "Baza ruchowa rozwoju mowy",
    title: "Terapia ręki i stopy w logopedii",
    shortTitle: "Terapia ręki i stopy",
    description:
      "Ćwiczenia stóp, postawy, motoryki małej i integracji sensorycznej jako wsparcie rozwoju mowy oraz artykulacji.",
    intro:
      "Rozwój mowy ściśle wiąże się z rozwojem motorycznym. Sprawność stóp i dłoni pomaga budować bazę posturalno-ruchową potrzebną do oddychania, fonacji i artykulacji.",
    image: "/images/site/anna-strus.jpg",
    imageAlt: "Anna Strus, logopeda wykorzystująca ćwiczenia ruchowe w terapii",
    imageWidth: 933,
    imageHeight: 1400,
    icon: "movement",
    facts: [
      { label: "Baza", value: "postawa i stabilizacja" },
      { label: "Precyzja", value: "motoryka dłoni" },
      { label: "Integracja", value: "ruch i czucie" },
    ],
    overviewTitle: "Od stabilnej postawy do precyzyjnej mowy",
    overview: [
      "Rozwój mowy nie jest procesem izolowanym — ściśle wiąże się z ogólnym rozwojem motorycznym dziecka. Zarówno sprawność stóp, jak i rąk mają znaczenie dla tworzenia bazy posturalno-ruchowej, na której opierają się artykulacja, oddech i fonacja.",
      "Prawidłowa praca stóp wspiera równowagę, stabilność oraz ustawienie miednicy, kręgosłupa i głowy. Stabilne podparcie pomaga też w swobodnej pracy przepony i klatki piersiowej potrzebnej do wydobywania głosu.",
      "Ćwiczenia precyzyjnych ruchów dłoni rozwijają planowanie sekwencji ruchowych. Zadania z różnymi fakturami, temperaturami i kształtami dostarczają również bodźców sensorycznych, które można wykorzystywać w szerszym planie terapii.",
    ],
    signalsTitle: "Praca może rozwijać",
    signalsLead:
      "Ćwiczenia ruchowe są dobierane do możliwości dziecka i łączone z konkretnym celem logopedycznym.",
    signals: [
      "równowagę, stabilizację i prawidłową postawę",
      "świadomość ciała i czucie głębokie",
      "koordynację oddechu, fonacji i artykulacji",
      "precyzję ruchów dłoni",
      "planowanie i wykonywanie sekwencji ruchowych",
      "integrację bodźców dotykowych i sensorycznych",
      "płynność oraz jakość mowy",
    ],
    processTitle: "Jak łączymy pracę ręki, stopy i mowy?",
    processLead:
      "Dziecko rozwija się od ruchów całego ciała do coraz bardziej precyzyjnych działań, dlatego ćwiczenia można układać w naturalnej kolejności.",
    process: [
      {
        number: "01",
        title: "Stabilna baza",
        description:
          "Ćwiczenia stóp i postawy wspierają równowagę oraz swobodne ustawienie całego ciała.",
      },
      {
        number: "02",
        title: "Ruch i czucie",
        description:
          "Aktywności ruchowe angażują czucie dotykowe, głębokie i układ przedsionkowy.",
      },
      {
        number: "03",
        title: "Precyzja dłoni",
        description:
          "Nawlekanie, wycinanie i podobne zadania uczą dokładności oraz planowania sekwencji.",
      },
      {
        number: "04",
        title: "Integracja z mową",
        description:
          "Łączymy ruch z ćwiczeniami oddechu, fonacji, artykulacji i płynności mowy.",
      },
    ],
    noteTitle: "Rozwój od ogółu do szczegółu",
    note:
      "W naturalnym rozwoju najpierw doskonali się motoryka duża, a później motoryka mała. Mowa jest bardzo precyzyjną formą aktywności ruchowej, dlatego może korzystać z solidnej bazy ruchowej i sensorycznej.",
    faq: [
      {
        question: "Jaki związek ma stopa z rozwojem mowy?",
        answer:
          "Stopa wspiera stabilizację, równowagę i ustawienie ciała. Taka baza ułatwia swobodną pracę oddechową oraz precyzyjne ustawienie głowy i narządów mowy.",
      },
      {
        question: "Dlaczego ćwiczenia dłoni pojawiają się w terapii logopedycznej?",
        answer:
          "Zadania manualne rozwijają precyzję i planowanie kolejnych ruchów. Te umiejętności można następnie łączyć z sekwencjami dźwięków i sylab.",
      },
      {
        question: "Czy ręka i stopa są ćwiczone jednocześnie?",
        answer:
          "Mogą być. Zadania angażujące ręce i stopy równocześnie pozwalają łączyć równowagę, planowanie ruchu, czucie oraz kontrolę oddechu w jednym ćwiczeniu.",
      },
    ],
  },
] as const satisfies readonly SpeechServiceDetail[];

export const getSpeechService = (slug: string) =>
  speechServiceDetails.find((service) => service.slug === slug);
