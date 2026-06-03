export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readingTime: number;
  publishedAt: string;
  excerpt: string;
  content: ArticleSection[];
  tags: string[];
  featured?: boolean;
  image: string;
  imageAlt: string;
}

export interface ArticleSection {
  type: "paragraph" | "heading2" | "heading3" | "blockquote" | "list" | "divider" | "callout";
  text?: string;
  items?: string[];
}

export const articles: Article[] = [
  {
    slug: "poradce-vs-interim-manazer",
    title: "Poradce vs. Interim manažer: Kdo nese skutečnou zodpovědnost?",
    subtitle: "Zásadní rozdíl, který rozhoduje o úspěchu nebo neúspěchu vaší transformace",
    category: "Základy",
    readingTime: 8,
    publishedAt: "2025-11-12",
    featured: true,
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=85",
    imageAlt: "Tým manažerů na strategickém setkání",
    tags: ["zodpovědnost", "poradce", "interim manažer", "transformace"],
    excerpt:
      "Mnoho firem si plete poradenství s interim managementem. Výsledek? Zaplatí vysoké honoráře, dostanou sadu doporučení v PowerPointu a se skutečnou změnou zůstanou sami. Tento článek vysvětluje zásadní rozdíl.",
    content: [
      {
        type: "paragraph",
        text: "Představte si, že vám záchranář místo přímé pomoci předá brožuru s návodem, jak si sám zastavit krvácení. Absurdní? Přesně takto funguje vztah mnoha poradenských firem ke svým klientům. Přijdou, analyzují, doporučí — a odejdou. Zodpovědnost za výsledek zůstává na vás.",
      },
      {
        type: "heading2",
        text: "Poradce: expert na rady",
      },
      {
        type: "paragraph",
        text: "Poradce je ze své podstaty nezávislý pozorovatel. Přináší zkušenosti z mnoha projektů, metodologie osvědčené v jiných firmách a pohled zvenčí, který váš tým nemá. To jsou nepopiratelné výhody.",
      },
      {
        type: "paragraph",
        text: "Problém nastává v okamžiku, kdy doporučení narazí na realitu vaší firmy. Poradce v tu chvíli zpravidla není přítomen. Projekt se vleče, implementace se deformuje, zaměstnanci doporučení ignorují — a výsledky se nedostavují.",
      },
      {
        type: "blockquote",
        text: "\"Poradce vám řekne, co a proč. Interim manažer přijde, udělá to a nese za výsledek hlavu.\"",
      },
      {
        type: "heading2",
        text: "Interim manažer: executive s dočasným mandátem",
      },
      {
        type: "paragraph",
        text: "Interim manažer vstupuje do firmy jako dočasný člen vedení — s reálnou pravomocí, přístupem k datům, lidmi ve svém týmu a jasně definovanými KPI. Nezpracovává zprávy; řídí. Nenavrhuje změny; zavádí je.",
      },
      {
        type: "paragraph",
        text: "Klíčový rozdíl tkví v osobní zodpovědnosti za výsledky. Pokud interim manažer nesplní dohodnuté cíle, nese přímé důsledky — finanční i reputační. Tato struktura incentivů radikálně mění kvalitu odvedené práce.",
      },
      {
        type: "heading3",
        text: "Co by měl interim manažer od prvního dne řídit",
      },
      {
        type: "list",
        items: [
          "Přímé řízení týmu nebo celého oddělení s plnou personální pravomocí",
          "Reálný přístup k finančním datům, objednávkám a provozním ukazatelům",
          "Mandát k rozhodování — bez nutnosti schvalovat každý krok u majitele",
          "Jasně definované měřitelné cíle s termíny (KPI, milestones)",
          "Pravidelné reporting a eskalační cestu k vlastníkovi nebo boardu",
        ],
      },
      {
        type: "heading2",
        text: "Kdy vybrat poradce a kdy interim manažera?",
      },
      {
        type: "paragraph",
        text: "Poradenství dává smysl tam, kde potřebujete specializovaný náhled na konkrétní problém a máte interní kapacitu implementaci zvládnout sami. Strategická analýza trhu, due diligence akvizice, nebo audit specifického procesu — to jsou legitimní poradenské zakázky.",
      },
      {
        type: "paragraph",
        text: "Interim management je správná volba tehdy, kdy vaše firma prochází zásadní změnou a vaše interní vedení buď chybí, je přetížené, nebo na danou situaci nemá zkušenosti. Krizové řízení, transformace, skalování, generační přechod — to jsou situace pro interim manažera.",
      },
      {
        type: "callout",
        text: "Praktické pravidlo: Potřebujete-li výsledek — ne zprávu — sáhněte po interim manažerovi. Pokud potřebujete pouze analýzu nebo doporučení a interní tým zvládne realizaci, poradce postačí.",
      },
      {
        type: "heading2",
        text: "Finanční pohled: Jak srovnat náklady",
      },
      {
        type: "paragraph",
        text: "Denní sazba top-tier poradce z velké čtyřky se pohybuje od 15 000 do 40 000 Kč. Interim manažer v podobném seniorním záběru stojí srovnatelně — ale s jedním zásadním rozdílem: platíte za výsledek, ne za přítomnost.",
      },
      {
        type: "paragraph",
        text: "Navíc: dobrý interim manažer dokáže v prvních 90 dnech identifikovat a začít eliminovat provozní ztráty, které náklady na jeho angažmá několikanásobně přesáhnou. To je investice s jasně měřitelnou návratností.",
      },
      {
        type: "heading2",
        text: "Závěr",
      },
      {
        type: "paragraph",
        text: "Volba mezi poradcem a interim manažerem není jen otázkou preference. Je to strategické rozhodnutí, které určí, zda se firma skutečně změní, nebo si jen zaplatí za iluzi pohybu vpřed. Ptejte se vždy: kdo nese zodpovědnost za výsledek? Pokud odpověď není jednoznačná, pravděpodobně platíte za rady.",
      },
    ],
  },
  {
    slug: "provozni-slepota",
    title: "Skrytá provozní slepota: Jak zachránit miliony ve vaší firmě",
    subtitle: "Proč zkušený management zevnitř nevidí, co je pro vnějšího pozorovatele zřejmé",
    category: "Analýza",
    readingTime: 10,
    publishedAt: "2025-11-28",
    featured: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85",
    imageAlt: "Datová analýza a business intelligence",
    tags: ["procesy", "efektivita", "provoz", "zlepšení"],
    excerpt:
      "Každá firma starší pěti let trpí určitou mírou provozní slepoty. Procesy, které kdysi dávaly smysl, se staly zažitými rituály. Výsledek? Skrytá ztráta v řádu procent obratu, která se dá odstranit — pokud ji vůbec vidíte.",
    content: [
      {
        type: "paragraph",
        text: "V roce 2019 přijal jeden středně velký výrobce plastových komponentů externího interim manažera pro oblast supply chain. Firma fungovala 17 let, měla 230 zaměstnanců a solidní marže. Vedení si myslelo, že jde pouze o optimalizaci skladové logistiky.",
      },
      {
        type: "paragraph",
        text: "Interim manažer za prvních 30 dní identifikoval sedm procesních anomálií, které stály firmu odhadem 8,4 milionu Kč ročně. Žádná z nich nebyla způsobena nedbalostí nebo špatnou vůlí — byly to sedimentovaný zvyky, které se nikdy nepodrobily racionální revizi.",
      },
      {
        type: "heading2",
        text: "Co je provozní slepota?",
      },
      {
        type: "paragraph",
        text: "Provozní slepota je psychologický a organizační fenomén. Vzniká tehdy, kdy lidé pracující v systému přestávají být schopni systém objektivně posoudit. Vědí, jak věci fungují — ale zapomněli otázku, proč tak fungují a zda to tak musí být.",
      },
      {
        type: "paragraph",
        text: "Neurologicky jde o standardní mechanismus: mozek optimalizuje kognitivní zátěž tím, že opakující se vstupy přestane aktivně zpracovávat. To, co děláme každý den, přestaneme \"vidět\". Manažer, který prochází výrobní halou 200krát ročně, si za dva roky přestane všímat věcí, které návštěvník vidí okamžitě.",
      },
      {
        type: "blockquote",
        text: "\"Nejtěžší část mé práce není najít problémy. Ty jsou téměř vždy viditelné. Nejtěžší je přesvědčit management, který problém sám nevnímá, že existuje.\" — zkušený interim manažer",
      },
      {
        type: "heading2",
        text: "Pět symptomů, které signalizují provozní slepotu",
      },
      {
        type: "list",
        items: [
          "Procesy, které \"vždy tak fungovaly\" a nikdo nezpochybnil jejich efektivitu déle než 3 roky",
          "Mezioddělové tření, které vedení vnímá jako 'normální součást chodu firmy'",
          "Spoléhání na klíčové jedince – procesy, které 'zná jen Petr' nebo 'fungují, dokud je tu Jana'",
          "Manuální přepisování dat mezi systémy, na které si zvykli všichni zúčastnění",
          "Zákazníci, kteří odcházejí bez jasné zpětné vazby – a firma to nepovažuje za urgentní",
        ],
      },
      {
        type: "heading2",
        text: "Kde firma ztrácí peníze, aniž to ví",
      },
      {
        type: "paragraph",
        text: "Na základě analýz provedených v desítkách středních firem lze identifikovat pět nejčastějších oblastí skrytých ztrát:",
      },
      {
        type: "heading3",
        text: "1. Duplikace práce",
      },
      {
        type: "paragraph",
        text: "Různá oddělení vykonávají paralelně stejné nebo překrývající se aktivity. Nejčastěji v oblasti reportingu, zákaznické komunikace a schvalovacích procesů. Průměrná ztráta: 4–7 % kapacity FTE.",
      },
      {
        type: "heading3",
        text: "2. Nepopsané procesy a jejich důsledky",
      },
      {
        type: "paragraph",
        text: "Každý zaměstnanec dělá totéž trochu jinak. Bez standardizace vznikají chyby, reklamace a onboarding nových lidí trvá neúměrně dlouho. Firmy s nepopsanými procesy utrácejí o 20–40 % více za zákaznický servis než firmy se zdokumentovanými postupy.",
      },
      {
        type: "heading3",
        text: "3. Špatná struktura nákladů",
      },
      {
        type: "paragraph",
        text: "Produkty nebo služby, které jsou na první pohled ziskové, mohou při plném nákladovém přepočtu generovat ztrátu. Firmy, které nemají zavedenu nákladovou alokaci na produkt/zákazník, tuto anomálii neodhalí bez externího pohledu.",
      },
      {
        type: "heading3",
        text: "4. Zastaralá organizační struktura",
      },
      {
        type: "paragraph",
        text: "Firma vyrostla z 15 na 80 lidí, ale organizační struktura zůstala z doby, kdy fungovala s 15. Rozhodovací procesy se scházejí v jednom bodě, informace se nedostanou tam, kam mají, a middle management nemá jasné pravomoci.",
      },
      {
        type: "heading3",
        text: "5. Ztráty v dodavatelsko-odběratelských vztazích",
      },
      {
        type: "paragraph",
        text: "Rámcové smlouvy, které se nepřejednaly 4 roky. Dodavatelé, u nichž nikdo neporovnával cenové podmínky s trhem. Odběratelé s platebními podmínkami, které firma interně cross-subsiduje bez toho, aby si to uvědomovala.",
      },
      {
        type: "heading2",
        text: "Jak provozní slepotu překonat?",
      },
      {
        type: "paragraph",
        text: "Řešení není složité v principu, ale vyžaduje ochotu vidět nepohodlnou pravdu. Existují tři osvědčené přístupy:",
      },
      {
        type: "list",
        items: [
          "Strukturovaný zewnętrzní audit procesů — nezávislý pohled s jasným mandátem dokumentovat, co vidí",
          "Cross-functional workshops — setkání lidí z různých oddělení, kteří popisují, jak vnímají procesy svých kolegů",
          "Interim manažer s executive mandátem — nejefektivnější přístup pro situace, kdy nestačí auditu, ale je třeba rovnou jednat",
        ],
      },
      {
        type: "callout",
        text: "Klíčový faktor úspěchu: Ten, kdo odhaluje slepota, musí mít pravomoc a mandát věci také změnit. Analýza bez exekuce je opět jen konzultace.",
      },
      {
        type: "heading2",
        text: "Závěr: Cena za pohled zvenčí",
      },
      {
        type: "paragraph",
        text: "Provozní slepota je přirozená. Není příznakem špatného managementu — je příznakem normálního lidského fungování v systému. Otázkou tedy není, zda vaše firma trpí provozní slepotou (trpí). Otázka je, jak rychle jste ochotni získat pohled zvenčí a co s ním hodláte udělat.",
      },
    ],
  },
  {
    slug: "freelancer-nebo-agentura",
    title: "Freelancer nebo agentura? Rizika výběru interim manažera",
    subtitle: "Proč záleží na tom, kdo za interim manažera ručí a co se stane, když onemocní",
    category: "Průvodce",
    readingTime: 9,
    publishedAt: "2025-12-08",
    featured: false,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=85",
    imageAlt: "Profesionální spolupráce v moderní kanceláři",
    tags: ["výběr", "freelancer", "agentura", "rizika", "zastupitelnost"],
    excerpt:
      "Interim management nabývá na popularitě. S tím roste i počet samostatných freelancerů, kteří se za interim manažery označují. Jak poznat rozdíl? A proč záleží na tom, zda stojí za vaším manažerem tým, nebo je sám?",
    content: [
      {
        type: "paragraph",
        text: "Zavoláte na číslo doporučeného interim manažera. Odpoví sympatický odborník s impozantním CV, dvaceti lety praxe a přehledem referenčních projektů. Podepíšete smlouvu, manažer nastoupí — a za šest týdnů onemocní. Nebo dostane lepší nabídku. Nebo zjistíte, že jeho zkušenosti sice jsou skvělé, ale ne pro váš konkrétní problém.",
      },
      {
        type: "paragraph",
        text: "Scénář není výjimečný. Je to systémové riziko modelu, na který spoléhají stovky firem: závislost na jedné nenahraditelné osobě.",
      },
      {
        type: "heading2",
        text: "Freelancer: výhody a limity",
      },
      {
        type: "paragraph",
        text: "Samostatný interim manažer přináší rychlost a přímočarost. Žádná byrokracie agentury, žádné marže navíc, osobní angažmá v každém projektu. Pro dobře definovaný, ohraničený úkol to může být efektivní řešení.",
      },
      {
        type: "paragraph",
        text: "Problém nastává u komplexnějších a delších zakázek. Freelancer pracuje sám. Nemá koho se poradit. Nemá tým, který by ho zastoupil. Nemá kolegy, kteří by po jeho odchodu přebrali znalosti. A především: není nikdo, kdo by za jeho výsledky ručil, pokud on sám selže.",
      },
      {
        type: "list",
        items: [
          "Žádná zastupitelnost: onemocnění, osobní krize nebo lepší nabídka zastaví váš projekt",
          "Omezená šíře kompetencí: jeden člověk nemůže být expert na finance, HR, operativu i IT zároveň",
          "Bez interní kvality: nikdo neprověřuje jeho metodiky, výstupy ani přístup",
          "Závislost na dobré vůli: smluvní vymáhání výsledků u freelancera je složité a zdlouhavé",
        ],
      },
      {
        type: "heading2",
        text: "Agenturní model: co musí splňovat",
      },
      {
        type: "paragraph",
        text: "Ne každá \"agentura interim managementu\" je skutečnou agenturou. Mnohé jsou pouhými zprostředkovatelskými platformami — databázemi freelancerů s tenkou vrstvou brandingu. Skutečný agenturní model vyžaduje více.",
      },
      {
        type: "blockquote",
        text: "\"Ptejte se: Když váš manažer zítra onemocní, kdo přijde pozítří a odkud bude vědět, kde váš projekt skončil?\" — zásadní otázka při výběru poskytovatele",
      },
      {
        type: "heading3",
        text: "Znaky skutečného agenturního modelu",
      },
      {
        type: "list",
        items: [
          "Zastupitelnost manažera: agentura má pool manažerů, kteří si předávají znalosti a jsou schopni projekt převzít",
          "Týmový přístup k zakázce: za výsledek neručí jen jeden člověk, ale celý tým se sdílenou znalostí vašeho projektu",
          "Interní kvalita: metodiky, šablony a best practices jsou sdílené a validované celým týmem",
          "Smluvní odpovědnost: agentura — ne fyzická osoba — ručí za výsledky a nese smluvní závazky",
          "Diverzita kompetencí: různí manažeři pokrývají různé obory, takže agentura přiřadí toho správného, ne jen dostupného",
        ],
      },
      {
        type: "heading2",
        text: "Klíčová otázka: Kdo nese zodpovědnost za výsledek?",
      },
      {
        type: "paragraph",
        text: "Tato otázka by měla být prvním bodem každého výběrového procesu. Freelancer nese osobní zodpovědnost — ale má omezenou kapacitu ji splnit. Zprostředkovatelská platforma nenese zodpovědnost žádnou: jejím produktem je kontakt, ne výsledek.",
      },
      {
        type: "paragraph",
        text: "Skutečná agentura interim managementu by měla být schopna odpovědět jasně: \"Za výsledky projektu ručí naše společnost. Konkrétní manažer je naším reprezentantem, jehož práci průběžně monitorujeme a jsme schopni přizpůsobit tým potřebám projektu.\"",
      },
      {
        type: "heading2",
        text: "Checklist pro výběr poskytovatele interim managementu",
      },
      {
        type: "list",
        items: [
          "Má poskytovatel tým manažerů, nebo je to jeden člověk pod firemním logem?",
          "Jak probíhá zastupování manažera v případě výpadku?",
          "Jak se měří a vykazují výsledky projektu?",
          "Kdo nese smluvní zodpovědnost — fyzická osoba, nebo právní subjekt?",
          "Má poskytovatel zkušenosti s firmami podobné velikosti a sektoru?",
          "Existují reference od klientů z podnikání srovnatelného s vaším?",
          "Jak probíhá předání projektu po ukončení angažmá?",
        ],
      },
      {
        type: "heading2",
        text: "SME segment: Specifická rizika",
      },
      {
        type: "paragraph",
        text: "Střední a malé firmy jsou vůči těmto rizikům obzvláště citlivé. Nemají interní HR tým, který by výpadek manažera zvládl administrativně. Nemají záložní vedení, které by projekt zachránilo. A jejich kritické transformační okno — krizové řízení, skalování, generační předání — má zpravidla úzký časový rámec, kde každý výpadek stojí neúměrně mnoho.",
      },
      {
        type: "paragraph",
        text: "Pro SME je proto klíčové vybírat poskytovatele, který specificky rozumí tomuto segmentu — jeho rychlosti rozhodování, neformálním kulturám, omezeným zdrojům a potřebě skutečného výsledku, ne sady doporučení.",
      },
      {
        type: "callout",
        text: "Závěr: Pro krátkodobý, jasně ohraničený úkol může freelancer postačit. Pro strategické angažmá v kritické situaci vaší firmy hledejte poskytovatele, který je schopen nést zodpovědnost za výsledek celým týmem — ne jen jednou osobou.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

// ── Additional articles ────────────────────────────────────────────────────

const additionalArticles: Article[] = [
  {
    slug: "kpi-interim-manazera-90-dni",
    title: "5 klíčových KPI pro hodnocení interim manažera v prvních 90 dnech",
    subtitle: "Jak nastavit měřitelné cíle, které odhalí výkon hned od začátku",
    category: "Průvodce",
    readingTime: 7,
    publishedAt: "2025-12-15",
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85",
    imageAlt: "KPI dashboard a metriky",
    tags: ["KPI", "měření", "hodnocení", "90 dní"],
    excerpt: "Prvních 90 dní interim angažmá je kritické. Bez jasně definovaných KPI nemáte nástroj k hodnocení ani základ pro odměňování. Zde je pět metrik, které by neměly chybět v žádné smlouvě.",
    content: [
      { type: "paragraph", text: "Smlouva bez KPI je vstupenka do neurčitosti. Mnoho majitelů firem podepíše interim smlouvu s dobrou vůlí a vágními cíli — a pak se diví, proč po šesti měsících neumějí říct, zda angažmá přineslo hodnotu." },
      { type: "heading2", text: "Proč 90 dní?" },
      { type: "paragraph", text: "Prvních 90 dní je diagnostická fáze. Manažer se orientuje, identifikuje klíčové problémy a nastavuje baseline. Zároveň je to okno, kdy je nejjasnější, zda je správnou volbou pro danou situaci." },
      { type: "heading2", text: "KPI #1: Stabilizační index" },
      { type: "paragraph", text: "Pro krizová angažmá: měřte počet odvrácených eskalací — zákaznických stížností, výpadků provozu nebo personálních krizí, které manažer identifikoval a řešil před tím, než eskalovaly na vyšší úroveň." },
      { type: "heading2", text: "KPI #2: Time-to-decision" },
      { type: "paragraph", text: "Průměrná doba od identifikace problému po rozhodnutí. Dobrý interim manažer zkracuje tuto metriku o 30–50 % během prvních 60 dní. Pokud se prodlužuje, jde o varovný signál." },
      { type: "heading2", text: "KPI #3: Team adoption rate" },
      { type: "paragraph", text: "Procento týmu aktivně pracujícího podle nových procesů a pravidel zavedených manažerem. Cíl na 90 dní: minimálně 70 %. Nižší číslo naznačuje buď špatný change management, nebo nevhodný leadership styl." },
      { type: "heading2", text: "KPI #4: Procesní dokumentace" },
      { type: "paragraph", text: "Počet zdokumentovaných procesů vs. plán. Každý interim manažer by měl po sobě zanechat písemné záznamy. Pokud ke konci 90 dní není nic dokumentovaného, firma zůstane závislá na přítomnosti jedné osoby." },
      { type: "heading2", text: "KPI #5: CEO time liberation" },
      { type: "paragraph", text: "Pro skalovací angažmá klíčová metrika: o kolik hodin týdně se snížil čas, který CEO tráví operativou. Cíl: 30–50 % redukce do 90 dní." },
      { type: "callout", text: "Praktický tip: Definujte KPI před nástupem, nikoli po prvním reportu. Manažer, který se zaváže na metriky dopředu, přijímá zodpovědnost. Ten, co souhlasí až po nástupu, má vždy výmluvu." },
    ],
  },
  {
    slug: "interim-cfo-kdy-financni-reditel",
    title: "Interim CFO: Kdy finanční ředitel nestačí a kdy je dočasný správnou volbou",
    subtitle: "Finance jsou nervovým systémem firmy. Kdy si to žádá zkušenou dočasnou posilu?",
    category: "Finance",
    readingTime: 8,
    publishedAt: "2025-12-20",
    featured: true,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=85",
    imageAlt: "Finanční analýza a reporting",
    tags: ["CFO", "finance", "řízení", "fundraising"],
    excerpt: "Interní finanční manažer zvládne rutinu. Ale IPO přípravu, komplexní restrukturalizaci dluhu nebo integraci po akvizici? Na to je třeba jiná kalibrace. Interim CFO není záplata — je to strategický nástroj.",
    content: [
      { type: "paragraph", text: "Většina středních firem má jednoho finančního manažera, který zvládá účetnictví, cash-flow a základní reporting. V klidném období to stačí. Ve chvíli strategické změny nestačí vůbec." },
      { type: "heading2", text: "Kdy interní finance nestačí" },
      { type: "list", items: ["Firma vstupuje do procesu externího financování (bankovní úvěr, PE investor, IPO)", "Probíhá akvizice nebo fúze vyžadující finanční due diligence", "Firma prochází restrukturalizací s dopadem na strukturu závazků", "Interní CFO odchází a nástupce není připraven", "Firma poprvé zavádí manažerský reporting pro investory nebo board"] },
      { type: "heading2", text: "Co interim CFO přináší" },
      { type: "paragraph", text: "Zkušený interim CFO přichází s hotovou sadou nástrojů: modelovacích šablon, reporting frameworků a vztahů s věřiteli. Nepotřebuje 3 měsíce na orientaci — do 2 týdnů by měl mít plnou přehled o finanční situaci firmy." },
      { type: "blockquote", text: "\"Interim CFO nezaplatíte za přítomnost. Zaplatíte za to, že firma dělá v krizovém okamžiku správná finanční rozhodnutí.\"" },
      { type: "heading2", text: "Typické angažmá interim CFO" },
      { type: "paragraph", text: "Příprava na fundraising: 6–9 měsíců. Post-M&A integrace: 12–18 měsíců. Krizová restrukturalizace: 3–9 měsíců. Dočasné pokrytí mezery: 2–4 měsíce. V každém případě jde o definovaný výstup, ne otevřenou smlouvu." },
      { type: "callout", text: "Klíčová otázka: Není problémem, zda si interim CFO dovolit. Problémem je špatné finanční rozhodnutí v kritickém okamžiku — to stojí mnohonásobně více." },
    ],
  },
  {
    slug: "case-study-vyrobni-firma-marze",
    title: "Případová studie: Jak výrobní firma zachránila marži o 12 % za 6 měsíců",
    subtitle: "Reálný příběh provozní transformace bez propouštění a bez externího kapitálu",
    category: "Případová studie",
    readingTime: 11,
    publishedAt: "2026-01-08",
    featured: true,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=85",
    imageAlt: "Výrobní hala a průmysl",
    tags: ["případová studie", "výroba", "marže", "provoz"],
    excerpt: "Anonymizovaný případ středně velké výrobní firmy se 180 zaměstnanci. Bez propouštění, bez externího kapitálu, bez zkratek. Pouze systematická práce interim manažera s mandátem a daty.",
    content: [
      { type: "paragraph", text: "Firma vyrábí průmyslové komponenty pro automotive sektor. V roce 2024 čelila kombinaci rostoucích nákladů na energie, tlaku odběratelů na ceny a zastaralé organizace výrobního procesu. Marže klesla za 18 měsíců z 19 % na 13 %. Majitel kontaktoval externího interim manažera s mandátem provozní ředitel." },
      { type: "heading2", text: "Fáze 1: Diagnostika (dny 1–30)" },
      { type: "paragraph", text: "Interim manažer strávil první týden na výrobní hale, v expedici a v accountingu. Bez prezentací, bez workshopů. Výsledkem bylo 14 identifikovaných anomálií v procesech, z nichž 6 mělo přímý dopad na marži." },
      { type: "list", items: ["Výrobní linka č. 3 běžela 60 % kapacity kvůli neoptimálnímu plánování směn", "Přejímka reklamací probíhala manuálně — průměrná doba řešení 23 dní místo standardních 5", "Dodavatel obalového materiálu fakturoval o 14 % nad tržní cenou bez renegociace 3 roky", "Skladové zásoby hotových výrobků odpovídaly 11 týdnům — standard odvětví je 4–5 týdnů", "Overtime mzdy tvořily 18 % mzdových nákladů kvůli chybám v plánování výroby"] },
      { type: "heading2", text: "Fáze 2: Prioritizace a quick wins (dny 31–60)" },
      { type: "paragraph", text: "Manažer zavedl týdenní S&OP meeting (Sales & Operations Planning) — 90minutové setkání výroby, obchodu a logistiky. Efekt byl viditelný za 3 týdny: overtime klesl o 40 %, přejímka reklamací se zkrátila na 6 dní." },
      { type: "heading2", text: "Fáze 3: Strukturální změny (dny 61–180)" },
      { type: "paragraph", text: "Renegociace dodavatelských smluv přinesla úsporu 2,1 milionu Kč ročně. Optimalizace skladových zásob uvolnila 8,4 milionu Kč vázaného kapitálu. Přesun výroby na nový plánovací systém (Kaizen workshop + 12 týdnů implementace) zvýšil kapacitní využití z 60 % na 84 %." },
      { type: "blockquote", text: "\"Nic z toho nebylo raketová věda. Bylo to systematické odstraňování věcí, které se nakupily za léta bez kritického pohledu zvenčí.\" — interim manažer projektu" },
      { type: "heading2", text: "Výsledek po 6 měsících" },
      { type: "list", items: ["Hrubá marže: z 13 % na 15,6 % (cíl byl 14,5 %)", "Overhead náklady sníženy o 3,2 milionu Kč ročně", "Overtime podíl na mzdových nákladech: z 18 % na 7 %", "Zásoby hotových výrobků: ze 11 na 5,2 týdne", "NPS interních zákazníků (obchod ↔ výroba): z 22 na 61"] },
      { type: "callout", text: "Klíčový faktor úspěchu: Mandát. Manažer měl přístup ke všem datům, právo měnit procesy bez schvalování každého kroku a přímý reporting majiteli. Bez toho by projekt trval dvojnásob." },
    ],
  },
  {
    slug: "generacni-predani-rodinny-podnik",
    title: "Generační předání v rodinném podniku: Zkušenosti tří majitelů",
    subtitle: "Tři různé přístupy, tři různé výsledky — a co z toho plyne pro vás",
    category: "Příběhy",
    readingTime: 9,
    publishedAt: "2026-01-20",
    featured: false,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=85",
    imageAlt: "Setkání generací v podnikání",
    tags: ["generační předání", "rodinný podnik", "nástupnictví", "tradice"],
    excerpt: "Generační předání je jedno z nejobtížnějších manažerských témat. Tři anonymizované příběhy z praxe ukazují, co rozhodlo o úspěchu nebo neúspěchu — a proč interim management hrál klíčovou roli ve dvou z nich.",
    content: [
      { type: "paragraph", text: "Každé generační předání je jedinečné. Přesto se v příbězích opakují vzorce — rozhodnutí, chyby a přístupy, které předurčují výsledek. Níže jsou tři příběhy z praxe, anonymizované se svolením zúčastněných." },
      { type: "heading2", text: "Příběh 1: Rychlé předání bez přípravy" },
      { type: "paragraph", text: "Zakladatel stavební firmy (220 zaměstnanců) předal vedení synovi přes víkend. Doslova. V pondělí seděl syn v kanceláři otce bez handoveru, bez dokumentace, bez přechodového plánu. Za 14 měsíců firma přišla o tři klíčové zakázky kvůli koordinačním chybám a jeden z pilířů middle managementu odešel." },
      { type: "heading2", text: "Příběh 2: Plánované předání s interim mostem" },
      { type: "paragraph", text: "Majitelka potravinářského výrobce zahájila přechodový plán 18 měsíců před plánovaným odchodem. Angažovala interim generálního ředitele, jehož úkolem bylo dokumentovat procesy, stabilizovat klíčové vztahy a připravit nástupkyni (dceru) na roli. Předání proběhlo postupně — nejprve COO, pak CEO. Firma dnes roste o 22 % YoY." },
      { type: "heading2", text: "Příběh 3: Prodej místo předání" },
      { type: "paragraph", text: "Zakladatel technologické firmy zjistil po hloubkové analýze, že žádný ze tří synů nemá zájem o provozní roli. Interim manažer byl angažován na 12 měsíců s cílem připravit firmu na prodej strategickému investorovi — zprůhlednit procesy, normalizovat EBITDA a připravit data room. Firma se prodala za 2,3× původní nabídku." },
      { type: "callout", text: "Společný jmenovatel úspěšných předání: čas a mandát. Přechod, který začal alespoň 18 měsíců před datem předání, s jasně definovaným přechodovým plánem, měl ve sledovaném souboru 4× vyšší pravděpodobnost úspěchu." },
    ],
  },
  {
    slug: "predani-projektu-konec-interim",
    title: "Exit strategie: Jak zvládnout předání projektu na konci interim angažmá",
    subtitle: "Závěr angažmá rozhoduje o tom, zda firma zůstane soběstačná, nebo závislá",
    category: "Průvodce",
    readingTime: 6,
    publishedAt: "2026-01-30",
    featured: false,
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&q=85",
    imageAlt: "Předání dokumentů a projektu",
    tags: ["exit", "předání", "dokumentace", "kontinuita"],
    excerpt: "Špatně zvládnutý exit interim manažera může smazat veškeré výsledky angažmá. Co musí být hotovo před posledním dnem, aby firma nezůstala na holičkách?",
    content: [
      { type: "paragraph", text: "Paradox interim managementu: čím lepší je manažer, tím obtížnější je jeho odchod — firma si na něho zvykla. Dobře strukturovaný exit tento problém eliminuje od prvního dne." },
      { type: "heading2", text: "Exit plán od dne jedna" },
      { type: "paragraph", text: "Každé interim angažmá by mělo začít s definovaným exit plánem. Ne jako formality, ale jako pracovní dokument. Interim manažer, který ví, jaký stav má firma mít v den jeho odchodu, pracuje jinak než ten, který žije přítomností." },
      { type: "heading2", text: "Povinná dokumentace před exitem" },
      { type: "list", items: ["Procesní manuály pro všechny klíčové operace, které manažer zavedl nebo změnil", "Databáze rozhodnutí — proč bylo co rozhodnuto (decision log)", "Kontakty a vztahy — klíčoví dodavatelé, klienti, institucionální kontakty", "KPI baseline a dosažené výsledky s metodikou měření", "Otevřené projekty a jejich stav k datu předání", "Doporučení pro nástupce — top 3 priority na prvních 90 dní"] },
      { type: "heading2", text: "Přechodové období" },
      { type: "paragraph", text: "Ideální exit trvá 4–6 týdnů. První 2 týdny souběžné práce s nástupcem nebo interním týmem. Druhé 2 týdny postupné předávání odpovědnosti. Závěrečný týden konzultační role. Okamžité odchody jsou vždy riziko." },
      { type: "callout", text: "Test soběstačnosti: Pokud firma po odchodu manažera potřebuje jeho telefonní číslo víc než jednou týdně, exit nebyl dobře zvládnutý." },
    ],
  },
  {
    slug: "digitalni-transformace-sme",
    title: "Digitální transformace v SME: Proč 70 % selže a jak to změnit",
    subtitle: "Technologie je nejmenší problém digitalizace. Největší problém jsou procesy a lidé",
    category: "Analýza",
    readingTime: 10,
    publishedAt: "2026-02-10",
    featured: false,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=85",
    imageAlt: "Digitální technologie a transformace",
    tags: ["digitalizace", "transformace", "SME", "change management"],
    excerpt: "Průzkumy konzistentně ukazují, že 65–70 % digitálních transformací v malých a středních firmách nenaplní původní cíle. Důvod není technický. Je organizační.",
    content: [
      { type: "paragraph", text: "Firma koupí ERP systém, najmě IT konzultanty a oznámí 'digitální transformaci'. Za rok a půl je implementace o 8 měsíců za harmonogramem, náklady jsou dvojnásobné a zaměstnanci systém obcházejí, protože je 'složitý'." },
      { type: "heading2", text: "Proč technologie není problém" },
      { type: "paragraph", text: "Software se v roce 2025 implementuje relativně spolehlivě. Skutečné selhání digitálních transformací je vždy organizační: nepopsané procesy, které se digitalizují v původním chaosu; odpor zaměstnanců, který nikdo neřídil; chybějící vlastník projektu s mandátem." },
      { type: "heading2", text: "Tři selhání, která se opakují" },
      { type: "list", items: ["Digitalizace špatného procesu: firma automatizuje to, co by měla zrušit nebo přepsat", "Change management jako příloha, ne jako projekt: komunikace probíhá emailem, ne face-to-face", "Chybějící interní šampion: IT projekt bez business ownera s autoritou vždy ztratí prioritu"] },
      { type: "heading2", text: "Role interim manažera v digitální transformaci" },
      { type: "paragraph", text: "Interim manažer v roli transformation lead má tři klíčové úkoly: zmapovat a standardizovat procesy před implementací technologie, řídit change management jako primární prioritu (ne vedlejší aktivitu), a zajistit kontinuitu projektu přes organizační odpor a personální změny." },
      { type: "callout", text: "Pravidlo transformace: Digitalizujte jen to, co funguje. Chaos v Excelu se stane chaosem v ERP — jen dražším a hůře viditelným." },
    ],
  },
];

articles.push(...additionalArticles);

// ── Category fill-out articles ─────────────────────────────────────────────

articles.push(
  // ── ZÁKLADY ───────────────────────────────────────────────────────────────
  {
    slug: "co-je-interim-management-pruvodce",
    title: "Co je interim management? Průvodce pro majitele firem",
    subtitle: "Od definice po první kroky — vše, co potřebujete vědět před rozhodnutím",
    category: "Základy",
    readingTime: 6,
    publishedAt: "2025-10-05",
    featured: false,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=85",
    imageAlt: "Manažer v moderní kanceláři",
    tags: ["definice", "základy", "co je", "úvod"],
    excerpt: "Interim management je jedna z nejrychleji rostoucích forem executive řízení v Evropě. Přesto ho mnoho majitelů firem stále zaměňuje s konzultingem nebo agenturním staffingem. Zde je přesná definice a praktický rámec.",
    content: [
      { type: "paragraph", text: "Interim management je dočasné obsazení výkonné manažerské pozice zkušeným externím odborníkem s plným mandátem k řízení — nikoliv k doporučování. Klíčové slovo je mandát: interim manažer rozhoduje, řídí tým a nese zodpovědnost za výsledky." },
      { type: "heading2", text: "Interim management vs. konzulting" },
      { type: "paragraph", text: "Konzultant analyzuje a doporučuje. Interim manažer přebírá řídící roli a sám realizuje. To je fundamentální rozdíl, který se projeví v ceně, struktuře smlouvy i v tom, kdo zodpovídá za výsledek." },
      { type: "heading2", text: "Interim management vs. executive search" },
      { type: "paragraph", text: "Executive search hledá trvalého zaměstnance — proces trvá 3–6 měsíců. Interim management řeší situaci okamžitě a nevyžaduje trvalý závazek. Po skončení angažmá manažer odchází; firma zůstává soběstačná." },
      { type: "heading2", text: "Jak vypadá typické interim angažmá?" },
      { type: "list", items: ["Definice mandátu a KPI před nástupem (1–2 týdny)", "Onboarding a diagnostická fáze (prvních 30 dní)", "Implementace a řízení změny (2–16 měsíců dle situace)", "Exit fáze — dokumentace, předání, odchod (4–6 týdnů)"] },
      { type: "callout", text: "Interim management dává smysl tehdy, kdy firma potřebuje výsledek v definovaném čase — ne trvalého zaměstnance a ne sadu doporučení." },
    ],
  },
  {
    slug: "prvni-tyden-interim-manazera",
    title: "Jak probíhá první týden interim manažera ve firmě",
    subtitle: "Přijde cizí člověk a začne řídit. Co se skutečně děje v prvních pěti dnech?",
    category: "Základy",
    readingTime: 5,
    publishedAt: "2025-10-28",
    featured: false,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=85",
    imageAlt: "První pracovní den vedoucího pracovníka",
    tags: ["onboarding", "první dny", "nástup", "praxe"],
    excerpt: "Příchod interim manažera do firmy je vždy napjatý okamžik. Zaměstnanci nevědí, co čekat. Vedení doufá v rychlé výsledky. A manažer potřebuje co nejrychleji porozumět realitě — bez předsudků a bez politiky.",
    content: [
      { type: "paragraph", text: "Den první není o impozantním úvodu. Je o naslouchání. Dobrý interim manažer tráví první dny tak, že mluví s lidmi napříč hierarchií — od účetní po skladníka. Hledá rozpory mezi tím, co říká vedení, a tím, co říká operativa." },
      { type: "heading2", text: "Den 1–2: Orientace v terénu" },
      { type: "paragraph", text: "Prohlídka provozů, neformální rozhovory, čtení interních zpráv a výsledků. Žádné prezentace — ta přijde až po důkladném pochopení. Manažer si dělá vlastní poznámky, nezávislé na briefingu od majitele." },
      { type: "heading2", text: "Den 3: Strukturované rozhovory" },
      { type: "paragraph", text: "Každý klíčový vedoucí dostane 30 minut. Otázky jsou stejné pro všechny: co funguje, co nefunguje, co byste změnili jako první? Odpovědi se nekříží — interim manažer sbírá perspektivy, ne konsenzus." },
      { type: "heading2", text: "Den 4–5: První hypotézy" },
      { type: "paragraph", text: "Na konci prvního týdne by měl mít interim manažer tři až pět pracovních hypotéz o klíčových problémech. Ne závěry — hypotézy, které v dalších týdnech ověří daty." },
      { type: "callout", text: "Red flag: Pokud interim manažer přichází s hotovými závěry před koncem prvního týdne, pravděpodobně nepoznal vaši firmu — jen potvrdil svou předchozí zkušenost." },
    ],
  },

  // ── FINANCE ───────────────────────────────────────────────────────────────
  {
    slug: "cena-interim-managementu-roi",
    title: "Kolik stojí interim management a jak počítat ROI",
    subtitle: "Denní sazby, struktura odměňování a jak obhájit investici před boardem",
    category: "Finance",
    readingTime: 7,
    publishedAt: "2025-11-05",
    featured: false,
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=85",
    imageAlt: "Finanční kalkulace a investice",
    tags: ["cena", "ROI", "sazby", "náklady"],
    excerpt: "Interim management je dražší než průměrný zaměstnanec na stejné pozici — ale je to správné srovnání? Při správném pohledu na celkové náklady a výsledky je interim angažmá velmi často levnější než alternativa.",
    content: [
      { type: "paragraph", text: "Denní sazba seniornějšího interim manažera v ČR se pohybuje od 8 000 do 20 000 Kč. Na první pohled výrazně více než interní zaměstnanec. Na druhý pohled: žádné odvody, žádná výpovědní lhůta, žádný onboarding, okamžitý výkon." },
      { type: "heading2", text: "Skutečné náklady interního manažera" },
      { type: "paragraph", text: "Hrubá mzda CFO na úrovni 120 000 Kč měsíčně stojí firmu reálně 160–180 000 Kč včetně odvodů. Přidejte benefity, zaškolení, výpovědní dobu a potenciální náklady špatného náboru — a dostanete se na čísla srovnatelná s interim angažmá." },
      { type: "heading2", text: "Jak počítat ROI" },
      { type: "paragraph", text: "ROI interim angažmá = (hodnota dosažených výsledků − náklady angažmá) / náklady angažmá × 100. Hodnota výsledků zahrnuje: ušetřené náklady, zvýšené tržby, odvrácené ztráty, zrychlené rozhodnutí." },
      { type: "list", items: ["Krizové řízení: průměrné ROI 5–15× (závisí na zachráněném portfoliu)", "Provozní optimalizace: průměrné ROI 3–8× (závisí na identifikovaných ztrátách)", "Transformační projekt: ROI se měří v horizontu 2–3 let od dokončení"] },
      { type: "callout", text: "Praktické pravidlo: Pokud interim manažer v prvních 90 dnech neidentifikuje úspory nebo příjmy alespoň ve výši svého honoráře, buď nebyl správně vybrán, nebo nemá správný mandát." },
    ],
  },
  {
    slug: "interim-management-pred-prodejem-firmy",
    title: "Interim management před prodejem firmy: Jak maximalizovat hodnotu",
    subtitle: "Proč kupující platí prémii za firmy s popsanými procesy a stabilním managementem",
    category: "Finance",
    readingTime: 8,
    publishedAt: "2026-01-15",
    featured: false,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=85",
    imageAlt: "Podpis smlouvy o prodeji firmy",
    tags: ["prodej firmy", "M&A", "ocenění", "exit"],
    excerpt: "Firma, která vstoupí do M&A procesu nepřipravena, prodává se o 20–40 % levněji než firma se standardizovanými procesy a profesionálním managementem. Interim manažer je nejrychlejší cesta ke zvýšení násobku ocenění.",
    content: [
      { type: "paragraph", text: "Due diligence odhalí vše. Kupující vidí chaotické procesy, závislost na zakladateli a chybějící dokumentaci jako přímé riziko — a srážejí cenu. Interim management před prodejem tato rizika odstraňuje." },
      { type: "heading2", text: "Co kupující znehodnocuje" },
      { type: "list", items: ["Procesy závislé na konkrétní osobě (tzv. key person risk)", "Absence písemné dokumentace klíčových operací", "Nestandardní účetní postupy nebo špatně čitelný management reporting", "Nestabilní middle management bez jasných pravomocí"] },
      { type: "heading2", text: "Co interim manažer připraví za 12 měsíců" },
      { type: "paragraph", text: "Zkušený interim generální nebo finanční ředitel dokáže za 12 měsíců: normalizovat EBITDA (očistit jednorázové položky), zdokumentovat klíčové procesy, stabilizovat management tým, připravit data room a vytvořit investiční příběh." },
      { type: "blockquote", text: "\"Firma, která prodává přípravu, dostane nabídku. Firma, která prodává výsledky, dostane prémium.\"" },
      { type: "callout", text: "Timing je klíčový: Interim přípravu je ideální zahájit 18–24 měsíců před plánovaným prodejem. Změny implementované méně než 12 měsíců před transakcí kupující zpravidla diskontují jako nezralé." },
    ],
  },

  // ── PŘÍPADOVÁ STUDIE ──────────────────────────────────────────────────────
  {
    slug: "case-study-eshop-sklovani",
    title: "E-shop s obratem 80M: Jak zvládl skalování bez chaosu",
    subtitle: "Interim COO přišel, když rostl obrat i problémy. Odešel, když firma šla sama",
    category: "Případová studie",
    readingTime: 8,
    publishedAt: "2025-12-01",
    featured: false,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=85",
    imageAlt: "E-commerce a logistika",
    tags: ["e-commerce", "skalování", "COO", "operativy"],
    excerpt: "Zásilkový e-shop s módou přerostl z 20M na 80M obratu za tři roky. Zakladatelka zvládala vše sama — dokud nezačala chybovat. Interim COO přišel na 14 měsíců a nastavil firmu na další zdvojnásobení.",
    content: [
      { type: "paragraph", text: "Zakladatelka módního e-shopu vybudovala firmu z hobby projektu na 80 milionů ročního obratu. Ale stejně jak rostly tržby, rostly i chyby: zpožděné expedice, problémy s vratkami, odchod klíčových lidí. Nebyla to krize — byl to nezvládnutý úspěch." },
      { type: "heading2", text: "Diagnóza: Zakladatelčin čas = úzké hrdlo" },
      { type: "paragraph", text: "Interim COO strávil první tři týdny mapováním časové investice zakladatelky. Výsledek: 60 % jejího pracovního času šlo do operativy, kterou mohli řídit jiní. Firma nerostla proto, že zakladatelka nestačila být strategická." },
      { type: "heading2", text: "14 měsíců: Co se změnilo" },
      { type: "list", items: ["Implementace WMS (warehouse management system) — expedice z 2,5 dne na 18 hodin", "Sestavení operations týmu 8 lidí s jasnými odpovědnostmi", "Zavedení týdenního cadence meetingu místo každodenní hasičiny", "Automatizace reportingu — zakladatelka dostává dashboard každé pondělí ráno", "SLA pro vrátky: z průměrných 22 dní na 6 dní"] },
      { type: "heading2", text: "Výsledek" },
      { type: "paragraph", text: "Zakladatelka uvolnila 70 % svého času pro strategii a produktový rozvoj. Obrat v prvním roce po odchodu COO vzrostl na 118M. Firma přijala strategického investora, který ocenil zavedenou operativu jako klíčové aktivum." },
      { type: "callout", text: "Klíčový poznatek: Skalování není o přidávání lidí. Je o vytváření systémů, které fungují bez zakladatele." },
    ],
  },
  {
    slug: "case-study-logisticka-firma-fuse",
    title: "Logistická firma po fúzi: 14 měsíců integrace dvou kultur",
    subtitle: "Jak se spojily dvě rodinné firmy s 25 lety tradice a odlišnými hodnotami",
    category: "Případová studie",
    readingTime: 10,
    publishedAt: "2026-02-20",
    featured: true,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=85",
    imageAlt: "Logistika a skladování",
    tags: ["fúze", "integrace", "kultura", "logistika"],
    excerpt: "Dvě rodinné logistické firmy se sloučily. Na papíře šlo o synergii — společné zákazníky, komplementární flotilu, silnější pozici na trhu. V praxi: dvě zcela odlišné kultury, systémy a způsoby práce. Bez interim manažera by fúze skončila rozpadem.",
    content: [
      { type: "paragraph", text: "Firma A: rodinný dopravce se 45 lety tradice, patriarchální styl řízení, loajalita nade vše. Firma B: modernizovaná logistika se 30 lety, procesně orientovaná, KPI kultura. Majitelé se dohodli na fúzi. Zaměstnanci ne." },
      { type: "heading2", text: "Měsíce 1–3: Mapování kulturního střetu" },
      { type: "paragraph", text: "Interim integrační manažer začal od lidí, ne od procesů. Strukturované rozhovory s 40 zaměstnanci z obou firem odhalily tři klíčová třecí plochy: systémy odměňování, rozhodovací pravomoci a zákaznické standardy." },
      { type: "heading2", text: "Měsíce 4–9: Budování společné kultury" },
      { type: "list", items: ["Sjednocení mzdové struktury — nejbolestivější část integrace, trvala 3 měsíce vyjednávání", "Společný onboarding nový vs. starý zaměstnanec — cross-company mentoring", "Unifikace dispečerských systémů — ztráta produktivity v prvních 6 týdnech plánovaná a komunikovaná", "Zavedení společného NPS měření zákaznické spokojenosti"] },
      { type: "heading2", text: "Měsíce 10–14: Stabilizace a exit" },
      { type: "paragraph", text: "Interim manažer postupně předával operativu nově jmenovanému COO, který přišel interně z Firmy B. Klíčová podmínka: COO absolvoval 3 měsíce mentoringu od zakladatele Firmy A, aby pochopil kulturní kořeny." },
      { type: "blockquote", text: "\"Největší chybou v post-merge integracích je jmenovat vítěze. My jsme pojmenovali třetí kulturu — novou společnou identitu. To změnilo vše.\" — interim integrační manažer" },
    ],
  },

  // ── PŘÍBĚHY ───────────────────────────────────────────────────────────────
  {
    slug: "ceo-ktery-predal-firmu",
    title: "CEO, který předal firmu: Jak vypadá život po 30 letech v ředitelském křesle",
    subtitle: "Rozhovor s anonymizovaným zakladatelem o tom, co nikdo neřekne dopředu",
    category: "Příběhy",
    readingTime: 7,
    publishedAt: "2025-11-15",
    featured: false,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=85",
    imageAlt: "Zkušený podnikatel v zamyšlení",
    tags: ["předání", "zakladatel", "odchod", "osobní příběh"],
    excerpt: "Třicet let budoval firmu. Pak ji předal. A nikdo ho nepřipravil na to, co přijde. Anonymizovaný rozhovor s 68letým zakladatelem výrobní firmy o identitě, smyslu a o tom, proč interim manažer zachránil nejen firmu, ale i jeho manželství.",
    content: [
      { type: "paragraph", text: "Setkali jsme se v kavárně nedaleko jeho někdejší firmy. Dnes tam chodí příležitostně jako člen dozorčí rady. Říkejme mu Pavel — jméno je smyšlené, příběh ne." },
      { type: "heading2", text: "\"Myslel jsem, že to zvládnu za tři měsíce\"" },
      { type: "paragraph", text: "Pavel plánoval předat firmu synovi přesně tři roky. Přesně. Na papíře. V realitě se předání táhlo sedm let. Syn nastoupil jako obchodní ředitel, Pavel stále řídil strategii, finance i HR. Teprve angažmá interim generálního ředitele na 18 měsíců nastavilo jasnou dělicí čáru." },
      { type: "blockquote", text: "\"Interim manažer mi dal to, co mi syn nikdy nemohl dát: autoritu říct ne. Já jsem stále byl otec. On byl šéf.\"" },
      { type: "heading2", text: "\"Nikdo mě nepřipravil na prázdnotu\"" },
      { type: "paragraph", text: "Den po podpisu předávacích dokumentů Pavel neměl co dělat. Firma fungovala. Bez něho. Přesně jak chtěl. A přesto to byl nejhorší den za posledních třicet let." },
      { type: "heading2", text: "Co by poradil ostatním" },
      { type: "list", items: ["Zahajte předání dřív, než si myslíte, že je čas — ideálně o 3–5 let dřív", "Interim manažer není zpochybnění vašeho odkazu — je to most", "Definujte si dopředu, jaká bude vaše role po předání. Bez toho je prázdnota nevyhnutelná", "Mluvte se svou rodinou o tom, co předání znamená pro vás osobně, ne jen pro firmu"] },
    ],
  },
  {
    slug: "interim-manazer-pohled-zevnitr",
    title: "Interim manažer o své práci: Co vás nikdo neřekne dopředu",
    subtitle: "Anonymní výpověď zkušeného interim manažera o tom, co se děje za zavřenými dveřmi",
    category: "Příběhy",
    readingTime: 8,
    publishedAt: "2026-02-01",
    featured: false,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=85",
    imageAlt: "Manažer přemýšlí u okna",
    tags: ["interim manažer", "pohled zevnitř", "realita", "praxe"],
    excerpt: "Dvanáct let, čtyřiadvacet angažmá, šest zemí. Co se interim manažer naučí, co žádná business škola neprobírá? Anonymní rozhovor s člověkem, který zná vaši firmu lépe než vy — a odejde dřív, než si zvyknete.",
    content: [
      { type: "paragraph", text: "Říkejme mu Martin. Čtyřiapadesát let, klidný hlas, přesné formulace. Za 12 let odvedl 24 angažmá v Česku, Polsku, Německu a Francii. Nikde nezůstal déle než 22 měsíců." },
      { type: "heading2", text: "\"Prvních 30 dní jsou vždy stejné\"" },
      { type: "paragraph", text: "\"Přijdu do firmy a všichni mi říkají, v čem je problém. A všichni říkají různé věci. To mi říká víc o firmě než jakákoli analýza. Kde je největší rozdíl mezi tím, co tvrdí management a co tvrdí operativa — tam je skutečný problém.\"" },
      { type: "heading2", text: "\"Nejtěžší část? Odcházet.\"" },
      { type: "paragraph", text: "\"Většina interim manažerů vám neřekne, že odchod bolí. Investujete se do lidí, do firmy. A pak přijde den, kdy je práce hotová a musíte jít. Lidé na vás spoléhají — a vy jim říkáte, že si to musí poradit sami. To je záměr. Ale není to snadné.\"" },
      { type: "heading2", text: "\"Majitelé dělají stále stejné chyby\"" },
      { type: "list", items: ["Angažují interim manažera příliš pozdě — po 2 letech krize místo na jejím začátku", "Nedávají dostatečný mandát — manažer nemůže rozhodovat, jen doporučovat", "Nezahrnou tým do onboardingu — zaměstnanci vidí externisty jako hrozbu, ne pomoc", "Ukončují angažmá dřív, než je předána znalost — výsledky se pak rozpadnou"] },
      { type: "blockquote", text: "\"Nejlepší angažmá je to, po jehož skončení firma o mně za rok neví. Vše funguje samo. To je cíl. Ne aby vzpomínali, jak jsem byl skvělý — ale aby si nevzpomněli vůbec.\"" },
    ],
  }
);

// ── Exports ────────────────────────────────────────────────────────────────

export const CATEGORIES = ["Vše", "Základy", "Analýza", "Finance", "Průvodce", "Případová studie", "Příběhy"] as const;
export type Category = typeof CATEGORIES[number];

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getAllArticles(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getArticlesByCategory(category: string): Article[] {
  if (category === "Vše") return getAllArticles();
  return getAllArticles().filter((a) => a.category === category);
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatDateShort(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("cs-CZ", { day: "numeric", month: "short" });
}
