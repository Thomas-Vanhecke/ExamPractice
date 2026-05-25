const ictai = {
  id: "ictai",
  title: "ICT in de Organisatie & AI",
  icon: "🤖",
  color: "#a855f7",
  accent: "#c084fc",
  questions: [
    {
      id: "ictq1",
      question: "Wat is een ERP-systeem?",
      options: [
        "Een systeem voor e-mailbeheer",
        "Een geïntegreerd softwaresysteem dat kernbedrijfsprocessen (financiën, HR, inkoop, productie) in één platform beheert",
        "Een cyberbeveiligingstool",
        "Een projectmanagementsoftware",
      ],
      answer: 1,
      explanation: "ERP (Enterprise Resource Planning) integreert alle kernprocessen van een organisatie in één systeem met een gedeelde database.",
    },
    {
      id: "ictq2",
      question: "Wat is het verschil tussen ERP en CRM?",
      options: [
        "Ze zijn identiek",
        "ERP beheert interne bedrijfsprocessen; CRM focust op klantrelaties, sales en marketing",
        "CRM beheert interne processen; ERP focust op klanten",
        "ERP is voor grote bedrijven; CRM voor kleine",
      ],
      answer: 1,
      explanation: "ERP = interne processen (financiën, HR, logistiek). CRM (Customer Relationship Management) = klantrelaties, verkoopkansen, klantenservice.",
    },
    {
      id: "ictq3",
      question: "Wat is digitale transformatie?",
      options: [
        "Het vervangen van papieren documenten door digitale versies",
        "Het fundamenteel herontwerpen van bedrijfsprocessen, cultuur en klantervaringen door het integreren van digitale technologie",
        "Het installeren van nieuwe hardware",
        "Het overstappen naar een cloudprovider",
      ],
      answer: 1,
      explanation: "Digitale transformatie gaat verder dan digitalisering: het herdenkt hoe een organisatie waarde creëert voor klanten door technologie centraal te stellen.",
    },
    {
      id: "ictq4",
      question: "Wat is het verschil tussen AI en Machine Learning?",
      options: [
        "Ze zijn hetzelfde",
        "AI is het brede veld van intelligente systemen; Machine Learning is een deelgebied waarbij systemen leren uit data zonder expliciet geprogrammeerd te worden",
        "Machine Learning is breder dan AI",
        "AI gebruikt altijd neurale netwerken; ML niet",
      ],
      answer: 1,
      explanation: "AI = breed begrip voor machines die intelligent gedrag tonen. ML = subset van AI waarbij algoritmes patronen leren uit data.",
    },
    {
      id: "ictq5",
      question: "Wat is een algoritme in de context van AI?",
      options: [
        "Een computerprogramma",
        "Een reeks instructies of regels die een computer volgt om een taak uit te voeren of een probleem op te lossen",
        "Een database",
        "Een grafische gebruikersinterface",
      ],
      answer: 1,
      explanation: "Een algoritme is een gedefinieerde reeks stappen of regels voor het oplossen van een probleem of het uitvoeren van een berekening.",
    },
    {
      id: "ictq6",
      question: "Wat is de cloud in de context van ICT?",
      options: [
        "Een fysieke server in het bedrijf",
        "Het leveren van IT-diensten (computing, opslag, databases, software) via het internet op aanvraag",
        "Een draadloos netwerk",
        "Een back-upsysteem op USB",
      ],
      answer: 1,
      explanation: "Cloud computing levert IT-resources als dienst via het internet: Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Software as a Service (SaaS).",
    },
    {
      id: "ictq7",
      question: "Wat zijn ethische aandachtspunten bij het gebruik van AI?",
      options: [
        "Snelheid en kostprijs",
        "Bias en discriminatie, privacy, transparantie, aansprakelijkheid en de impact op werkgelegenheid",
        "Alleen de accuraatheid van het model",
        "De keuze van programmeertaal",
      ],
      answer: 1,
      explanation: "AI-ethiek omvat: eerlijkheid (geen bias), transparantie (uitlegbaarheid), privacy (databescherming), aansprakelijkheid en sociale impact.",
    },
    {
      id: "ictq8",
      question: "Wat is het verschil tussen SaaS, PaaS en IaaS?",
      options: [
        "Ze zijn identiek",
        "SaaS = volledige applicatie als dienst; PaaS = platform voor ontwikkelaars; IaaS = basisinfrastructuur (servers, opslag, netwerk)",
        "IaaS = applicatie; SaaS = infrastructuur; PaaS = platform",
        "SaaS is voor kleine bedrijven, IaaS voor grote",
      ],
      answer: 1,
      explanation: "IaaS (bv. AWS EC2): virtuele servers. PaaS (bv. Heroku): platform voor deployment. SaaS (bv. Office 365): kant-en-klare applicatie.",
    },
  ],
};

export default ictai;