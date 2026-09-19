/**
 * Portfolio Data Model - Seif Ghozlani
 * Multi-language support (FR / EN)
 */
const portfolioData = {
  fr: {
    personal: {
      name: "Seif Ghozlani",
      role: "Élève Ingénieur en Informatique",
      specialty: "Systèmes Intelligents, Génie Logiciel & Embarqué (IoT)",
      location: "Sousse, Tunisie",
      email: "seif.gholzani@polytechnicien.tn",
      phone: "+216 55 096 929",
      birthDate: "05/07/2003",
      license: "Permis de conduire B",
      github: "https://github.com/seifghozlani-commits",
      githubUser: "seifghozlani-commits",
      status: "🟢 Disponible pour opportunités & stages ingénieur",
      summary: "Élève ingénieur en informatique passionné par la convergence entre développement logiciel de pointe et automatisation industrielle. Fort d'une expérience concrète et éprouvée sur le terrain chez Leoni (systèmes embarqués, traçabilité MySQL et dashboards décisionnels Power BI), je conçois des solutions performantes, robustes et orientées résultats."
    },
    stats: [
      { number: "2+", label: "Ans d'expérience industrielle" },
      { number: "4+", label: "Missions & Stages chez Leoni" },
      { number: "ICPC", label: "Honorable Mention (Mars 2026)" },
      { number: "100%", label: "Solutions testées sur ligne réelle" }
    ],
    rolesTypewriter: [
      "Élève Ingénieur en Informatique",
      "Développeur Systèmes Embarqués & IoT",
      "Concepteur Logiciel & Bases de Données",
      "Passionné de Problem Solving (ICPC)"
    ],
    skillsCategories: [
      {
        id: "embedded",
        title: "Systèmes Embarqués & Matériel",
        icon: "cpu",
        skills: [
          { name: "Raspberry Pi", level: "Expert", desc: "Suivi de production, RFID, lecteurs code-barres & LCD" },
          { name: "STM32 & ESP32", level: "Avancé", desc: "Microcontrôleurs, connectivité IoT, temps réel" },
          { name: "Arduino & Électronique", level: "Avancé", desc: "Capteurs, actionneurs, cartes électroniques" },
          { name: "C & Python Embarqué", level: "Avancé", desc: "Programmation bas niveau et scripts d'automatisation" }
        ]
      },
      {
        id: "software",
        title: "Développement Logiciel & Web",
        icon: "code",
        skills: [
          { name: "Python", level: "Avancé", desc: "Scripts, traitement de données, algorithmes, IA" },
          { name: "C / C++", level: "Avancé", desc: "Programmation système, structures de données (ICPC)" },
          { name: "Web (HTML5 / CSS3 / JS)", level: "Intermédiaire+", desc: "Interfaces modernes, dashboards responsives" },
          { name: "PHP", level: "Intermédiaire+", desc: "Développement backend & API web" },
          { name: "Intelligence Artificielle", level: "Académique", desc: "Modèles d'apprentissage et systèmes intelligents" }
        ]
      },
      {
        id: "data-industrial",
        title: "Data, Traçabilité & Industrie 4.0",
        icon: "database",
        skills: [
          { name: "MySQL & SQL", level: "Avancé", desc: "Modélisation relationnelle, traçabilité des pièces en atelier" },
          { name: "Power BI & Dashboards", level: "Avancé", desc: "Indicateurs clés de performance (KPI), reporting décisionnel" },
          { name: "Automatisation Industrielle", level: "Avancé", desc: "Automatisme, maintenance préventive, lignes de production" },
          { name: "Réseaux Informatiques", level: "Intermédiaire+", desc: "Protocoles de communication industrielle, LAN, TCP/IP" }
        ]
      }
    ],
    experiences: [
      {
        id: "exp-1",
        title: "Ingénieur Systèmes & Développement",
        company: "Leoni",
        location: "Sousse, Tunisie",
        period: "02/2023 – 06/2025",
        badge: "Poste Clé",
        type: "Expérience Professionnelle",
        highlights: [
          "Installation, programmation et maintenance rigoureuse de systèmes automatisés industriels.",
          "Développement complet de solutions Raspberry Pi pour le suivi de production en direct (intégration RFID, scanners code-barres industriels, écrans LCD pour opérateurs).",
          "Gestion et optimisation de bases de données MySQL dédiées à la traçabilité intégrale des flux d'atelier.",
          "Création, publication et maintenance de tableaux de bord Power BI dynamiques pour l'analyse des cadences de production.",
          "Exécution de protocoles de tests et validation sur ligne réelle afin de minimiser les temps d'arrêt et d'améliorer l'efficience des équipes."
        ],
        tags: ["Raspberry Pi", "RFID", "MySQL", "Power BI", "Automatisation", "C/Python"]
      },
      {
        id: "exp-2",
        title: "Stage d'Observation — Service IT",
        company: "Leoni",
        location: "Sousse, Tunisie",
        period: "01/07/2026 – 01/08/2026",
        badge: "Ingénieur IT",
        type: "Stage en Entreprise",
        highlights: [
          "Immersion en cycle ingénieur au cœur du service informatique et infrastructure de Leoni.",
          "Analyse de l'architecture réseau industrielle, administration de serveurs et support des systèmes critiques d'usine."
        ],
        tags: ["Service IT", "Infrastructure", "Réseaux", "Support Industriel"]
      },
      {
        id: "exp-3",
        title: "Stage PFE (Projet de Fin d'Études)",
        company: "Leoni",
        location: "Sousse, Tunisie",
        period: "03/2025 – 06/2025",
        badge: "PFE Validé",
        type: "Stage PFE",
        highlights: [
          "Conception et déploiement d'une solution embarquée complète de suivi de production en atelier industriel.",
          "Interfaçage matériel et logiciel reliant capteurs physiques, lecteur RFID et système central d'enregistrement des données.",
          "Impact direct sur la réduction des erreurs de pointage et la fluidité des postes opérateurs."
        ],
        tags: ["Systèmes Embarqués", "Raspberry Pi", "IoT Industriel", "MySQL", "Traçabilité"]
      },
      {
        id: "exp-4",
        title: "Stage de Perfectionnement",
        company: "Leoni",
        location: "Sousse, Tunisie",
        period: "02/2023 – 03/2023",
        badge: "Perfectionnement",
        type: "Stage Technique",
        highlights: [
          "Approfondissement avancé des compétences en automatisme, automates programmables et systèmes industriels.",
          "Diagnostic de pannes et optimisation des séquences d'actionneurs sur les postes de travail."
        ],
        tags: ["Automatisme", "Diagnostic", "Industrie"]
      },
      {
        id: "exp-5",
        title: "Stage d'Initiation",
        company: "Leoni",
        location: "Sousse, Tunisie",
        period: "02/2023 – 03/2023",
        badge: "Initiation",
        type: "Stage Technique",
        highlights: [
          "Initiation aux standards de maintenance industrielle et aux protocoles de programmation d'équipements de production.",
          "Assimilation des règles de sécurité industrielle et d'assurance qualité automobile."
        ],
        tags: ["Maintenance", "Programmation Industrielle", "Qualité"]
      }
    ],
    education: [
      {
        degree: "Diplôme d'Ingénieur en Informatique",
        school: "École Polytechnique de Sousse",
        period: "2025 – 2028 (En cours)",
        location: "Sousse, Tunisie",
        description: "Formation d'ingénieur d'excellence spécialisée en informatique, systèmes intelligents, intelligence artificielle et architectures logicielles complexes.",
        status: "En cours"
      },
      {
        degree: "Licence en Automatisme & Informatique Industrielle",
        school: "Institut Supérieur des Études Technologiques de Sousse (ISET Sousse)",
        period: "2022 – 2025",
        location: "Sousse, Tunisie",
        description: "Diplôme axé sur les systèmes embarqués, la robotique, l'automatisation de lignes et le développement de solutions logicielles appliquées à l'industrie.",
        status: "Obtenu"
      }
    ],
    distinctions: [
      {
        title: "Honorable Mention — ICPC",
        contest: "International Collegiate Programming Contest (ICPC)",
        event: "2026 ICPC Tunisian Collegiate Programming Contest",
        date: "27 – 28 Mars 2026",
        location: "Polytechnique Sousse",
        description: "Distinction décernée lors de la prestigieuse compétition universitaire de programmation algorithmique et de résolution de problèmes complexes sous contrainte de temps.",
        badge: "Distinction Majeure"
      }
    ],
    projects: [
      {
        id: "proj-pfe",
        title: "Système Embarqué de Suivi de Production (Leoni)",
        category: "embedded",
        badge: "Industrie 4.0 / PFE",
        summary: "Solution IoT complète déployée sur ligne de fabrication pour le suivi en temps réel des opérations de câblage.",
        description: "Développement d'un système intelligent basé sur Raspberry Pi intégrant des lecteurs RFID d'opérateurs, des scanners de codes-barres pour pièces détachées et un affichage LCD interactif. Les données sont instantanément enregistrées dans une base MySQL centrale pour assurer une traçabilité 100% fiable.",
        techStack: ["Raspberry Pi", "Python", "RFID", "Barcodes", "MySQL", "LCD I2C"],
        results: "Zéro perte de données de pointage et temps de saisie opérateur divisé par deux sur le poste testé."
      },
      {
        id: "proj-bi",
        title: "Tableau de Bord Décisionnel & KPI d'Atelier",
        category: "data",
        badge: "Business Intelligence",
        summary: "Suite de dashboards interactifs Power BI connectés en temps réel aux données de production.",
        description: "Conception de pipelines d'extraction SQL et modélisation de métriques de cadence, taux de rendement synthétique (TRS) et alertes d'anomalies. Outil utilisé par les chefs d'atelier pour anticiper les goulots d'étranglement.",
        techStack: ["Power BI", "MySQL", "DAX", "SQL Queries", "Data Modeling"],
        results: "Visualisation immédiate des cadences et prise de décision proactive des superviseurs."
      },
      {
        id: "proj-iot-bench",
        title: "Banc de Test & Automatisation Industrielle",
        category: "embedded",
        badge: "Systèmes Industriels",
        summary: "Plateforme de validation automatisée pour composants et sous-ensembles électroniques.",
        description: "Programmation de microcontrôleurs (STM32, ESP32, Arduino) pour piloter des bancs de test avec détection automatique de continuité, contrôle de tension et validation de conformité avant emballage.",
        techStack: ["STM32", "ESP32", "Arduino", "C/C++", "Automates"],
        results: "Validation automatisée des cartes avec réduction significative des faux rejets."
      },
      {
        id: "proj-icpc",
        title: "Algorithmes de Résolution Avancée (ICPC)",
        category: "software",
        badge: "Compétition & Algorithmique",
        summary: "Implémentation d'algorithmes de graphes, programmation dynamique et structures de données.",
        description: "Préparation et participation au concours international ICPC. Développement de solutions hautement optimisées en temps et en mémoire (C++ / Python) face à des défis algorithmiques de classe mondiale.",
        techStack: ["C++", "Python", "Graph Theory", "Dynamic Programming", "Data Structures"],
        results: "Obtention de la mention honorable au concours national tunisien ICPC 2026."
      }
    ],
    languages: [
      { name: "Arabe", level: "Langue maternelle (Natif)", percent: 100 },
      { name: "Français", level: "Courant (Professionnel)", percent: 90 },
      { name: "Anglais", level: "Intermédiaire (Technique)", percent: 75 }
    ],
    interests: [
      { name: "Technologie & Veille IoT", icon: "cpu" },
      { name: "Photographie", icon: "camera" },
      { name: "Programmation Avancée", icon: "code" },
      { name: "Problem Solving", icon: "zap" }
    ],
    contactInfo: {
      location: "Sousse, Tunisie",
      email: "seif.gholzani@polytechnicien.tn",
      phone: "+216 55 096 929",
      license: "Permis de conduire disponible"
    }
  },

  en: {
    personal: {
      name: "Seif Ghozlani",
      role: "Software Engineering Student",
      specialty: "Intelligent Systems, Software & Embedded Engineering (IoT)",
      location: "Sousse, Tunisia",
      email: "seif.gholzani@polytechnicien.tn",
      phone: "+216 55 096 929",
      birthDate: "05/07/2003",
      license: "Driver's License (Category B)",
      github: "https://github.com/seifghozlani-commits",
      githubUser: "seifghozlani-commits",
      status: "🟢 Open for Internship & Engineering Opportunities",
      summary: "Computer engineering student passionate about software development and industrial automation. Experienced with hands-on industrial projects involving embedded systems, MySQL traceability databases, and Power BI dashboards at Leoni. Autonomous, detail-oriented, and results-driven, ready to contribute to cutting-edge projects."
    },
    stats: [
      { number: "2+", label: "Years of industrial experience" },
      { number: "4+", label: "Roles & Internships at Leoni" },
      { number: "ICPC", label: "Honorable Mention (March 2026)" },
      { number: "100%", label: "Solutions tested on live lines" }
    ],
    rolesTypewriter: [
      "Computer Engineering Student",
      "Embedded Systems & IoT Developer",
      "Software & Database Specialist",
      "ICPC Problem Solving Enthusiast"
    ],
    skillsCategories: [
      {
        id: "embedded",
        title: "Embedded Systems & Hardware",
        icon: "cpu",
        skills: [
          { name: "Raspberry Pi", level: "Expert", desc: "Production tracking, RFID, barcode scanners & LCD" },
          { name: "STM32 & ESP32", level: "Advanced", desc: "Microcontrollers, IoT connectivity, real-time control" },
          { name: "Arduino & Electronics", level: "Advanced", desc: "Sensors, actuators, electronic board design" },
          { name: "C & Embedded Python", level: "Advanced", desc: "Low-level coding, firmware & automation scripts" }
        ]
      },
      {
        id: "software",
        title: "Software & Web Development",
        icon: "code",
        skills: [
          { name: "Python", level: "Advanced", desc: "Scripting, data manipulation, algorithms, AI" },
          { name: "C / C++", level: "Advanced", desc: "System programming, competitive data structures (ICPC)" },
          { name: "Web (HTML5 / CSS3 / JS)", level: "Intermediate+", desc: "Modern interfaces, responsive dashboards" },
          { name: "PHP", level: "Intermediate+", desc: "Backend development & web APIs" },
          { name: "Artificial Intelligence", level: "Academic", desc: "Machine learning models & intelligent systems" }
        ]
      },
      {
        id: "data-industrial",
        title: "Data, Traceability & Industry 4.0",
        icon: "database",
        skills: [
          { name: "MySQL & Relational Databases", level: "Advanced", desc: "Schema design, real-time factory data traceability" },
          { name: "Power BI & Dashboards", level: "Advanced", desc: "KPI dashboards, automated business reporting" },
          { name: "Industrial Automation", level: "Advanced", desc: "PLC automation, preventative maintenance, assembly lines" },
          { name: "Computer Networks", level: "Intermediate+", desc: "Industrial network protocols, LAN, TCP/IP" }
        ]
      }
    ],
    experiences: [
      {
        id: "exp-1",
        title: "Systems & Development Engineer",
        company: "Leoni",
        location: "Sousse, Tunisia",
        period: "02/2023 – 06/2025",
        badge: "Core Position",
        type: "Professional Experience",
        highlights: [
          "Installed, programmed, and maintained automated industrial manufacturing systems.",
          "Developed custom Raspberry Pi solutions for shopfloor production tracking (RFID badges, barcode scanners, operator LCDs).",
          "Managed and tuned MySQL relational databases for complete component traceability.",
          "Designed and maintained Power BI real-time executive and operational dashboards.",
          "Conducted on-site live line validations to streamline workflows and reduce operator idle time."
        ],
        tags: ["Raspberry Pi", "RFID", "MySQL", "Power BI", "Automation", "C/Python"]
      },
      {
        id: "exp-2",
        title: "Observational Internship — IT Department",
        company: "Leoni",
        location: "Sousse, Tunisia",
        period: "01/07/2026 – 01/08/2026",
        badge: "Engineering IT",
        type: "Company Internship",
        highlights: [
          "Engineering observation internship within Leoni's enterprise IT infrastructure department.",
          "Analyzed industrial networking topologies, plant server administration, and mission-critical support."
        ],
        tags: ["IT Service", "Infrastructure", "Networks", "Industrial Support"]
      },
      {
        id: "exp-3",
        title: "Graduation Project (PFE) Internship",
        company: "Leoni",
        location: "Sousse, Tunisia",
        period: "03/2025 – 06/2025",
        badge: "Graduation Project",
        type: "PFE Internship",
        highlights: [
          "Designed and delivered an end-to-end embedded system for factory production monitoring.",
          "Bridged hardware sensors, RFID cards, and central database servers for automatic error-free logging.",
          "Demonstrated measurable reduction in manual logging overhead across production cells."
        ],
        tags: ["Embedded Systems", "Raspberry Pi", "Industrial IoT", "MySQL", "Traceability"]
      },
      {
        id: "exp-4",
        title: "Advanced Practical Internship",
        company: "Leoni",
        location: "Sousse, Tunisia",
        period: "02/2023 – 03/2023",
        badge: "Practical Training",
        type: "Technical Internship",
        highlights: [
          "Advanced training in PLC automation, sensors, and industrial actuator systems.",
          "Troubleshooting and tuning of production line test fixtures."
        ],
        tags: ["Automation", "Diagnostics", "Industry"]
      },
      {
        id: "exp-5",
        title: "Introductory Internship",
        company: "Leoni",
        location: "Sousse, Tunisia",
        period: "02/2023 – 03/2023",
        badge: "Introductory",
        type: "Technical Internship",
        highlights: [
          "Introduction to industrial maintenance standards and production programming practices.",
          "Learned automotive safety standards and strict quality control workflows."
        ],
        tags: ["Maintenance", "Industrial Programming", "Quality"]
      }
    ],
    education: [
      {
        degree: "Computer Engineering Degree",
        school: "École Polytechnique de Sousse",
        period: "2025 – 2028 (In progress)",
        location: "Sousse, Tunisia",
        description: "Rigorous engineering curriculum specializing in computer science, intelligent systems, artificial intelligence, and software architectures.",
        status: "In progress"
      },
      {
        degree: "Bachelor's Degree in Automation & Industrial Computing",
        school: "Higher Institute of Technological Studies of Sousse (ISET Sousse)",
        period: "2022 – 2025",
        location: "Sousse, Tunisia",
        description: "Degree focused on embedded systems, robotics, line automation, and industrial software development.",
        status: "Graduated"
      }
    ],
    distinctions: [
      {
        title: "Honorable Mention — ICPC",
        contest: "International Collegiate Programming Contest (ICPC)",
        event: "2026 ICPC Tunisian Collegiate Programming Contest",
        date: "March 27 – 28, 2026",
        location: "Polytechnique Sousse",
        description: "Honorable distinction awarded in the global collegiate algorithm and competitive programming contest under strict timing constraints.",
        badge: "Major Distinction"
      }
    ],
    projects: [
      {
        id: "proj-pfe",
        title: "Embedded Production Tracking System (Leoni)",
        category: "embedded",
        badge: "Industry 4.0 / PFE",
        summary: "Complete IoT solution deployed on assembly lines for real-time monitoring of harness manufacturing.",
        description: "Engineered a custom Raspberry Pi terminal featuring operator RFID recognition, barcode scanners for components, and crisp LCD status prompts. Logs are synced in real-time to a MySQL cluster.",
        techStack: ["Raspberry Pi", "Python", "RFID", "Barcodes", "MySQL", "LCD I2C"],
        results: "Zero data loss during logging and 50% faster operator check-in times."
      },
      {
        id: "proj-bi",
        title: "Factory KPI & Real-Time Analytics Dashboard",
        category: "data",
        badge: "Business Intelligence",
        summary: "Interactive Power BI dashboard suite connected directly to shopfloor telemetry.",
        description: "Formulated SQL ETL pipelines and DAX calculations to track production cadence, Overall Equipment Effectiveness (OEE), and bottleneck flags.",
        techStack: ["Power BI", "MySQL", "DAX", "SQL Queries", "Data Modeling"],
        results: "Provided supervisors with instantaneous insights for proactive decision-making."
      },
      {
        id: "proj-iot-bench",
        title: "Automated Test Bench & Industrial Rig",
        category: "embedded",
        badge: "Industrial Systems",
        summary: "Automated test platform for testing electronic components and cable harnesses.",
        description: "Programmed microcontrollers (STM32, ESP32, Arduino) with automated electrical continuity checks, voltage tolerance verification, and pass/fail signaling.",
        techStack: ["STM32", "ESP32", "Arduino", "C/C++", "PLCs"],
        results: "Automated board testing with significant reduction in false rejections."
      },
      {
        id: "proj-icpc",
        title: "Competitive Programming & Problem Solving (ICPC)",
        category: "software",
        badge: "Competition & Algorithms",
        summary: "High-performance implementations of graph algorithms, dynamic programming, and data structures.",
        description: "Trained and competed in ICPC contests solving complex mathematical and algorithmic problems with strict time and memory complexity limits in C++ and Python.",
        techStack: ["C++", "Python", "Graph Theory", "Dynamic Programming", "Data Structures"],
        results: "Awarded Honorable Mention at the ICPC Tunisian National Contest 2026."
      }
    ],
    languages: [
      { name: "Arabic", level: "Native Speaker", percent: 100 },
      { name: "French", level: "Fluent (Professional)", percent: 90 },
      { name: "English", level: "Intermediate (Technical)", percent: 75 }
    ],
    interests: [
      { name: "Technology & IoT Watch", icon: "cpu" },
      { name: "Photography", icon: "camera" },
      { name: "Advanced Programming", icon: "code" },
      { name: "Problem Solving", icon: "zap" }
    ],
    contactInfo: {
      location: "Sousse, Tunisia",
      email: "seif.gholzani@polytechnicien.tn",
      phone: "+216 55 096 929",
      license: "Driver's license available"
    }
  }
};
