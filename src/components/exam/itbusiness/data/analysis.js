const analysis = {
  id: "analysis",
  title: "Business & Root Cause Analysis",
  icon: "🔍",
  color: "#ec4899",
  accent: "#f472b6",
  questions: [
    {
      id: "anaq1",
      question: "Wat is het doel van een Root Cause Analysis (RCA)?",
      options: [
        "Het beschrijven van een probleem zonder oplossing te zoeken",
        "De grondliggende oorzaak van een probleem identificeren zodat het structureel opgelost kan worden",
        "Het probleem tijdelijk omzeilen",
        "De financiële impact van een probleem berekenen",
      ],
      answer: 1,
      explanation: "RCA gaat verder dan symptomen en zoekt de werkelijke oorzaak zodat het probleem niet opnieuw optreedt.",
    },
    {
      id: "anaq2",
      question: "Wat is de '5 Whys' techniek?",
      options: [
        "Een methode waarbij je 5 oplossingen bedenkt",
        "Een techniek waarbij je vijf keer 'waarom?' vraagt om door te dringen tot de grondoorzaak",
        "Een evaluatiemethode met 5 criteria",
        "Een planningstechniek met 5 fasen",
      ],
      answer: 1,
      explanation: "De 5 Whys-techniek stelt herhaaldelijk 'Waarom?' om laag voor laag door te dringen tot de echte oorzaak van een probleem.",
    },
    {
      id: "anaq3",
      question: "Wat is een visgraatdiagram (Ishikawa/fishbone diagram)?",
      options: [
        "Een diagram om processen te modelleren",
        "Een diagram dat oorzaken van een probleem categoriseert in takken (bv. Mens, Machine, Methode, Materiaal)",
        "Een diagram voor klassenrelaties",
        "Een tijdsplanning voor projecten",
      ],
      answer: 1,
      explanation: "Het visgraatdiagram (Ishikawa) visualiseert alle mogelijke oorzaken van een probleem gegroepeerd in categorieën zoals de 6M's.",
    },
    {
      id: "anaq4",
      question: "Wat zijn de 6M's in een visgraatdiagram?",
      options: [
        "Marketing, Management, Money, Methods, Machines, Materials",
        "Man, Machine, Method, Material, Measurement, Mother Nature (Milieu)",
        "Mission, Model, Market, Money, Machine, Method",
        "Management, Motivation, Money, Metrics, Methods, Materials",
      ],
      answer: 1,
      explanation: "De 6M's zijn: Man (Mens), Machine, Method (Methode), Material (Materiaal), Measurement (Meting), Mother Nature (Omgeving).",
    },
    {
      id: "anaq5",
      question: "Wat is een AS-IS proces?",
      options: [
        "Het toekomstige gewenste proces",
        "Het huidige proces zoals het nu echt verloopt",
        "Een ideaal proces zonder fouten",
        "Een processjabloon uit een bibliotheek",
      ],
      answer: 1,
      explanation: "AS-IS beschrijft hoe een proces nu werkelijk verloopt, inclusief knelpunten en inefficiënties.",
    },
    {
      id: "anaq6",
      question: "Wat is een TO-BE proces?",
      options: [
        "Het huidige proces met alle fouten",
        "Het verbeterde of gewenste toekomstige proces na optimalisatie",
        "Een back-up van het AS-IS proces",
        "Een technisch implementatieplan",
      ],
      answer: 1,
      explanation: "TO-BE beschrijft het gewenste toekomstige proces na verbetering of redesign op basis van de AS-IS analyse.",
    },
    {
      id: "anaq7",
      question: "Wat is een business requirement?",
      options: [
        "Een technische specificatie voor een ontwikkelaar",
        "Een beschrijving van wat de organisatie nodig heeft om haar doelen te bereiken, onafhankelijk van technologie",
        "Een UML-diagram",
        "Een databaseschema",
      ],
      answer: 1,
      explanation: "Business requirements beschrijven wat de organisatie wil bereiken, zonder te bepalen hoe de technologie het oplost.",
    },
    {
      id: "anaq8",
      question: "Wat is het verschil tussen een functionele en een niet-functionele requirement?",
      options: [
        "Ze zijn identiek",
        "Functioneel = wat het systeem doet (gedrag); niet-functioneel = hoe goed het dat doet (kwaliteit: snelheid, beveiliging)",
        "Niet-functioneel = wat het systeem doet; functioneel = kwaliteitseisen",
        "Functioneel = voor managers; niet-functioneel = voor ontwikkelaars",
      ],
      answer: 1,
      explanation: "Functionele requirements beschrijven functionaliteit (wat). Niet-functionele requirements beschrijven kwaliteitseisen (hoe goed): performance, security, schaalbaarheid.",
    },
  ],
};

export default analysis;