const translations = {
  en: {
    page_title_home: "Derrick Fosu Adofo | Data Analyst",
    page_title_projects: "Projects | Derrick Fosu Adofo",
    page_title_resume: "Resume | Derrick Fosu Adofo",
    page_title_contact: "Contact | Derrick Fosu Adofo",

    brand_role: "Data Analyst",
    nav_projects: "Projects",
    nav_resume: "Resume",
    nav_contact: "Contact",

    hero_title: "Hello",
    hero_subtitle: "A bit about me",
    hero_p1: "I am a process-oriented Data Analyst with a strong foundation in SQL, Excel, Power BI, and automated reporting. My path into analytics began in logistics and operations control, where analyzing daily supply chain workflows and standardizing reporting helped raise on-time fulfillment from 89% to 95%.",
    hero_p2: "After completing my M.Sc. in Applied Geosciences at RWTH Aachen University and working as a Data Consultant in the UK, I focused on consolidating heterogeneous operational datasets, building interactive KPI dashboards, and conducting root cause analyses to eliminate manual bottlenecks across controlling and logistics.",
    hero_p3: "In every project, I start with a practical business question rather than a tool—bridging technical data solutions with clear, actionable decisions. Based in Wittlich, Germany (open to travel and relocation), I am currently expanding my expertise in AI-assisted process optimization and workflow automation.",
    chip_location: "Wittlich, Germany (Open to Travel)",
    chip_certs: "Google Advanced Data Analytics",
    chip_focus: "SQL • Power BI • Excel • Python",

    projects_title: "Projects",
    projects_subtitle: "Each project starts with a practical business question. Projects are grouped by category and primary analytical tool.",
    pill_team: "Team Projects",
    pill_powerbi: "Power BI",
    pill_sql: "SQL",
    pill_excel: "Excel",
    pill_python: "Python",

    sec_team_title: "Team Projects",
    sec_team_desc: "Collaborative end-to-end analytics and business intelligence capstone work.",
    proj1_tool: "Power BI & PostgreSQL",
    proj1_date: "Oct 2026",
    proj1_title: "Supply Chain Management Report & Data Storytelling",
    proj1_callout: "Pinpointed 8,497 late deliveries across global shipping routes (led by Western Europe with 2,717 and Central America with 2,560) and modeled how aggressive discounting erodes net profit margins.",
    proj1_summary: "How do regional bottlenecks and discounting strategies impact supply chain profitability? Using the DataCo Smart Supply Chain dataset, raw operational records were staged in PostgreSQL, normalized into a Star Schema (fact_order_line plus customer, product, shipping, payment, and order dimensions), cleaned in Power Query, and modeled with DAX measures and Time Intelligence calculation groups in Power BI.",
    proj1_link_github: "GitHub Profile ↗",
    upcoming_note: "More individual projects across SQL, Excel, Power BI, and Python are being added shortly.",

    resume_title: "Resume",
    btn_open_pdf: "Open PDF ↗",
    cv_role: "Data Analyst",
    cv_address_line: "Wittlich, Germany (Willing to travel) | +49 1573 7942981 | derrickfosuadofo@gmail.com",
    cv_summary: "Process-oriented Data Analyst with strong expertise in SQL, Excel, data preparation, and automated reporting. Hands-on experience consolidating heterogeneous data sources, building interactive BI dashboards, and eliminating manual process bottlenecks. Skilled at seamlessly connecting technical data and IT solutions with business requirements in logistics and controlling.",

    cv_sec_competencies: "Core Competencies",
    comp1_title: "Controlling & Reporting:",
    comp1_desc: "Data preparation, creation and maintenance of KPI dashboards (Power BI, Excel, Power Query), support for month-end closings and AOP planning.",
    comp2_title: "Process Digitalization & Automation:",
    comp2_desc: "Process analysis, reduction of manual effort, workflow standardization, AI-assisted process optimization.",
    comp3_title: "Data Integration & SQL:",
    comp3_desc: "SQL queries (JOINs, CTEs, aggregations), data consolidation across ERP and relational databases, plausibility and data quality checks.",
    comp4_title: "Process & Logistics Consulting:",
    comp4_desc: "Data-driven process optimization, bottleneck analysis, KPI management (SLA, productivity, quality), automation.",

    cv_sec_experience: "Work Experience",
    exp1_role: "Data Consultant",
    exp1_date: "09/2024 – 10/2025",
    exp1_company: "Leaps and Heights Services, UK",
    exp1_b1: "Independently queried and consolidated heterogeneous operational datasets using SQL to build reliable foundations for analytics and controlling decisions.",
    exp1_b2: "Automated recurring reporting workflows and developed interactive KPI dashboards (Power BI, Excel), significantly reducing manual data preparation effort.",
    exp1_b3: "Translated business requirements from operational teams into functional data and process solutions.",
    exp1_b4: "Conducted Root Cause Analyses to detect bottlenecks and identify process optimization opportunities.",

    exp2_role: "Logistics & Control Associate",
    exp2_date: "10/2017 – 10/2020",
    exp2_company: "Nick Petroleum Ghana Ltd., Ghana",
    exp2_b1: "Created regular controlling and performance reports (Excel, SQL) for data-driven resource and workflow planning.",
    exp2_b2: "Prepared and validated operational data for plausibility during periodic financial closings and operational planning cycles.",
    exp2_b3: "Analyzed and standardized daily supply chain workflows, increasing the on-time fulfillment rate from 89% to 95%.",

    cv_sec_certs: "Further Training & Certificates",
    cert1_title: "Qualification in Digitalization, Process Automation & AI (BAG-funded)",
    cert1_date: "06/2026 – Present",
    cert1_desc: "Focus: AI-assisted process optimization, digital transformation, and automation of operational workflows.",
    cert2_title: "Google Advanced Data Analytics Professional Certificate (Google / Coursera)",
    cert2_date: "01/2025 – 03/2025",
    cert2_desc: "Focus: Advanced data analysis, statistical modeling, Python, SQL, and data visualization.",

    cv_sec_education: "Education",
    edu1_degree: "M.Sc. Applied Geosciences – Energy & Resources",
    edu1_date: "10/2020 – 07/2024",
    edu1_uni: "RWTH Aachen University, Aachen, Germany",
    edu1_desc: "Focus: Quantitative-analytical methods, data modeling, complex resource management, and multivariate data analysis.",
    edu2_degree: "B.Sc. Geological Engineering",
    edu2_date: "10/2011 – 06/2015",
    edu2_uni: "Kwame Nkrumah University for Science and Technology (KNUST), Ghana",
    edu2_desc: "Focus: Engineering fundamentals, mathematical-statistical analysis, and project management.",

    cv_sec_skills: "Technical Skills & Languages",
    skill_db_label: "Databases & BI Tools:",
    skill_db_val: "SQL (PostgreSQL, MSSQL, Azure, SQLite), Excel (Power Query, PivotTables), Power BI (DAX, Power Query, Star Schema), Tableau",
    skill_infra_label: "Data Infrastructure & ERP:",
    skill_infra_val: "ERP Data Structures, Cloud Data Warehouses (Snowflake, BigQuery, Azure), dbt, Python",
    skill_lang_label: "Languages:",
    skill_lang_val: "German (Fluent / B2 – business fluent), English (C1–C2 – full professional proficiency)",
    skill_mob_label: "Mobility:",
    skill_mob_val: "Willing to travel & relocate",

    contact_title: "Contact",
    contact_subtitle: "Looking forward to hearing from you regarding Data Analyst, BI, or Controlling roles and projects.",
    contact_email_label: "Email",
    contact_phone_label: "Phone",
    contact_loc_label: "Location",
    contact_loc_val: "Wittlich, Germany (Open to travel)",
    form_first: "First Name",
    form_last: "Last Name",
    form_email: "Email *",
    form_subject: "Subject",
    form_message: "Message *",
    form_submit: "Submit"
  },

  de: {
    page_title_home: "Derrick Fosu Adofo | Daten Analyst",
    page_title_projects: "Projekte | Derrick Fosu Adofo",
    page_title_resume: "Lebenslauf | Derrick Fosu Adofo",
    page_title_contact: "Kontakt | Derrick Fosu Adofo",

    brand_role: "Daten Analyst",
    nav_projects: "Projekte",
    nav_resume: "Lebenslauf",
    nav_contact: "Kontakt",

    hero_title: "Hallo",
    hero_subtitle: "Über mich",
    hero_p1: "Ich bin ein prozessorientierter Daten Analyst mit fundierten Kenntnissen in SQL, Excel, Power BI und automatisierter Berichterstattung. Mein Weg in die Datenanalyse begann im Logistik- und Ablaufcontrolling, wo ich durch Datenanalysen und Prozessstandardisierung die termingerechte Abwicklungsquote von 89 % auf 95 % steigern konnte.",
    hero_p2: "Nach meinem M.Sc. in Angewandten Geowissenschaften an der RWTH Aachen und meiner Tätigkeit als Data Consultant in Großbritannien habe ich mich auf die Zusammenführung heterogener Betriebsdaten, die Entwicklung interaktiver KPI-Dashboards und Ursachenanalysen (Root Cause Analysis) zur Beseitigung manueller Prozessengpässe spezialisiert.",
    hero_p3: "Bei jedem Projekt starte ich mit einer konkreten betriebswirtschaftlichen Fragestellung statt mit dem Tool – und verknüpfe technische Datenlösungen mit klaren Entscheidungen in Logistik und Controlling. Mit Wohnsitz in Wittlich (reisebereit) vertiefe ich aktuell meine Kompetenzen in KI-gestützter Prozessoptimierung und Automatisierung.",
    chip_location: "Wittlich, Deutschland (Reisebereit)",
    chip_certs: "Google Advanced Data Analytics",
    chip_focus: "SQL • Power BI • Excel • Python",

    projects_title: "Projekte",
    projects_subtitle: "Jedes Projekt beginnt mit einer konkreten betriebswirtschaftlichen Fragestellung – gegliedert nach Kategorie und Hauptwerkzeug.",
    pill_team: "Teamprojekte",
    pill_powerbi: "Power BI",
    pill_sql: "SQL",
    pill_excel: "Excel",
    pill_python: "Python",

    sec_team_title: "Teamprojekte",
    sec_team_desc: "Kollaborative End-to-End-Projekte in Business Intelligence und Management Reporting.",
    proj1_tool: "Power BI & PostgreSQL",
    proj1_date: "Okt. 2026",
    proj1_title: "Power BI Management Report & Data Storytelling (Supply Chain)",
    proj1_callout: "8.497 verspätete Lieferungen entlang globaler Versandwege identifiziert (angeführt von Westeuropa mit 2.717 und Zentralamerika mit 2.560) und den Einfluss hoher Rabatte auf die Nettogewinnmarge modelliert.",
    proj1_summary: "Wie wirken sich regionale Lieferengpässe und Rabattstrategien auf die Profitabilität der Lieferkette aus? Auf Basis des DataCo-Smart-Supply-Chain-Datensatzes wurden Rohdaten in PostgreSQL gestaged, in ein normalisiertes Sternschema (fact_order_line sowie Kunden-, Produkt-, Versand-, Zahlungs- und Bestelldimensionen) überführt, in Power Query bereinigt und in Power BI mit DAX-Measures sowie Time-Intelligence-Calculation-Groups modelliert.",
    proj1_link_github: "GitHub-Profil ↗",
    upcoming_note: "Weitere Einzelprojekte in SQL, Excel, Power BI und Python folgen in Kürze.",

    resume_title: "Lebenslauf",
    btn_open_pdf: "PDF öffnen ↗",
    cv_role: "Daten Analyst",
    cv_address_line: "Friedrichstraße 5, 54516 Wittlich (Reisebereit) | 015737942981 | derrickfosuadofo@gmail.com",
    cv_summary: "Prozessorientierter Daten Analyst mit fundierten Kenntnissen in SQL, Excel, Datenaufbereitung und automatisierter Berichterstattung. Praktische Erfahrung in der Zusammenführung heterogener Datenquellen, der Erstellung interaktiver BI-Dashboards und der Beseitigung manueller Prozessengpässe. Verständnis dafür, technische Daten- und IT-Lösungen nahtlos mit betriebswirtschaftlichen Anforderungen in Logistik und Controlling zu verknüpfen.",

    cv_sec_competencies: "Kernkompetenzen",
    comp1_title: "Controlling & Reporting:",
    comp1_desc: "Datenaufbereitung, Erstellung & Pflege von Reports, Kennzahlen-Dashboards (Power BI, Excel, Power Query), Unterstützung bei Monatsabschlüssen & AOP-Planung.",
    comp2_title: "Prozessdigitalisierung & Automatisierung:",
    comp2_desc: "Prozessanalyse, Reduzierung manueller Tätigkeiten, Standardisierung von Arbeitsabläufen, KI-gestützte Prozessoptimierung.",
    comp3_title: "Datenintegration & SQL:",
    comp3_desc: "SQL-Abfragen (JOINs, CTEs, Aggregationen), Datenkonsolidierung verschiedener Quellen (ERP, Relationale DBs), Plausibilitäts- und Datenqualitätsprüfungen.",
    comp4_title: "Prozess- & Logistikberatung:",
    comp4_desc: "Datenbasierte Prozessoptimierung, Engpassanalyse, KPI-Steuerung (SLA, Productivity, Quality), Automatisierung.",

    cv_sec_experience: "Beruflicher Werdegang",
    exp1_role: "Data Consultant",
    exp1_date: "09/2024 – 10/2025",
    exp1_company: "Leaps and Heights Services, UK",
    exp1_b1: "Eigenverantwortliche Abfrage und Zusammenführung heterogener Betriebsdaten mittels SQL zur Erstellung belastbarer Grundlagen für Analyse- und Controlling-Entscheidungen.",
    exp1_b2: "Automatisierung wiederkehrender Reporting-Abläufe und Entwicklung interaktiver KPI-Dashboards (Power BI, Excel), wodurch manuelle Aufwände in der Datenaufbereitung signifikant reduziert wurden.",
    exp1_b3: "Übersetzen fachlicher Anforderungen operativer Einheiten in funktionale Daten- und Prozesslösungen.",
    exp1_b4: "Durchführung von Ursachenanalysen (Root Cause Analysis) zur Erkennung von Engpässen und Identifikation von Optimierungspotenzialen in Abläufen.",

    exp2_role: "Logistik & Control Associate",
    exp2_date: "10/2017 – 10/2020",
    exp2_company: "Nick Petroleum Ghana Ltd., Ghana",
    exp2_b1: "Regelmäßige Erstellung von Controlling- und Performance-Reports (Excel, SQL) zur datenbasierten Steuerung von Ressourcen- und Ablaufplanungen.",
    exp2_b2: "Aufbereitung und Prüfung von Betriebsdaten auf Plausibilität im Rahmen periodischer Abschlüsse und operativer Planungen.",
    exp2_b3: "Analyse und Standardisierung täglicher Lieferkettenprozesse; Steigerung der termingerechten Abwicklungsquote von 89 % auf 95 %.",

    cv_sec_certs: "Weiterbildungen & Zertifikate",
    cert1_title: "Qualifizierung für Digitalisierung, Prozessautomatisierung & KI (BAG-gefördert)",
    cert1_date: "06/2026 – laufend",
    cert1_desc: "Schwerpunkt: KI-gestützte Prozessoptimierung, digitale Transformation & Automatisierung operativer Abläufe.",
    cert2_title: "Google Advanced Data Analytics Professional Certificate (Google / Coursera)",
    cert2_date: "01/2025 – 03/2025",
    cert2_desc: "Fortgeschrittene Datenanalyse, statistische Modellierung, Python, SQL & Datenvisualisierung.",

    cv_sec_education: "Ausbildung",
    edu1_degree: "M.Sc. Angewandte Geowissenschaften – Energie & Rohstoffe",
    edu1_date: "10/2020 – 07/2024",
    edu1_uni: "RWTH Aachen University, Aachen, Deutschland",
    edu1_desc: "Schwerpunkte: Quantitativ-analytische Methoden, Datenmodellierung, komplexes Ressourcenmanagement und multivariate Datenanalysen.",
    edu2_degree: "B.Sc. Geological Engineering",
    edu2_date: "10/2011 – 06/2015",
    edu2_uni: "Kwame Nkrumah University for Science and Technology (KNUST), Ghana",
    edu2_desc: "Schwerpunkte: Ingenieurwissenschaftliche Grundlagen, mathematisch-statistische Analysen und Projektmanagement.",

    cv_sec_skills: "Fähigkeiten & Sprachkenntnisse",
    skill_db_label: "Datenbanken & Tools:",
    skill_db_val: "SQL (PostgreSQL, MSSQL, Azure, SQLite), Excel (Power Query, Pivot), Power BI (DAX, Power Query, Sternschema), Tableau",
    skill_infra_label: "Data Infrastructure & ERP:",
    skill_infra_val: "Grundkenntnisse von ERP-Datenstrukturen, Cloud Data Warehouses (Snowflake, BigQuery, Azure), dbt, Python",
    skill_lang_label: "Sprachen:",
    skill_lang_val: "Deutsch (Fließend / B2 – verhandlungssicher im Berufsumfeld), Englisch (Verhandlungssicher / C1–C2 – fließend in Wort und Schrift)",
    skill_mob_label: "Mobilität:",
    skill_mob_val: "Reisebereit",

    contact_title: "Kontakt",
    contact_subtitle: "Ich freue mich auf Ihre Nachricht zu Positionen und Projekten in den Bereichen Datenanalyse, BI und Controlling.",
    contact_email_label: "E-Mail",
    contact_phone_label: "Telefon",
    contact_loc_label: "Standort",
    contact_loc_val: "Wittlich, Deutschland (Reisebereit)",
    form_first: "Vorname",
    form_last: "Nachname",
    form_email: "E-Mail *",
    form_subject: "Betreff",
    form_message: "Nachricht *",
    form_submit: "Senden"
  }
};

function applyLanguage(lang) {
  const chosen = translations[lang] ? lang : "en";
  localStorage.setItem("portfolio_lang", chosen);
  document.documentElement.lang = chosen;

  const pageKey = document.body.getAttribute("data-page-title");
  if (pageKey && translations[chosen][pageKey]) {
    document.title = translations[chosen][pageKey];
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[chosen][key] !== undefined) {
      el.textContent = translations[chosen][key];
    }
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === chosen);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("portfolio_lang") || "en";
  applyLanguage(savedLang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.getAttribute("data-lang"));
    });
  });

  // Contact form fallback to mailto if Formspree ID is still placeholder
  const contactForm = document.getElementById("portfolio-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      const action = contactForm.getAttribute("action") || "";
      if (action.includes("your-form-id")) {
        e.preventDefault();
        const first = document.getElementById("first-name").value.trim();
        const last = document.getElementById("last-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim() || "Portfolio Inquiry";
        const message = document.getElementById("message").value.trim();
        const body = `From: ${first} ${last} (${email})\n\n${message}`;
        window.location.href = `mailto:derrickfosuadofo@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }
    });
  }
});
