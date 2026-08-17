// ============================================================
// EDIT THIS FILE to personalize your resume.
// ============================================================

export const profile = {
  name: 'Mohammad Numan Anwer',
  title: 'Senior People Data Developer · HR Technology & People Analytics Leader',
  location: 'Newcastle upon Tyne, England',
  email: 'anwernuman@gmail.com',
  phone: '+44 788 492 3838',
  // To add a photo: place an image in `public/` (e.g. public/photo.jpg) and set photo: '/photo.jpg'
  photo: '',
  // To offer a downloadable CV: place a PDF in `public/` and set resumeUrl: '/resume.pdf'
  resumeUrl: '',
  summary:
    'I turn complex, sensitive workforce data into trusted, scalable products that shape strategic decisions across a global organisation. I have moved teams from manual, fragmented reporting to automated, governed and self-service analytics — architecting Power Platform applications, Power BI semantic models and Snowflake data pipelines end to end. I pair deep technical delivery with product ownership, stakeholder leadership and a strong governance mindset, and I am now focused on Lead / Manager roles across People Analytics, HR Technology and Data Transformation.',
  socials: [
    { label: 'GitHub', url: 'https://github.com/anwernuman' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/mohammadnumananwer' },
    { label: 'Email', url: 'mailto:anwernuman@gmail.com' },
  ],
}

export const experience = [
  {
    role: 'Senior People Data Developer',
    company: 'Sage',
    period: 'Oct 2025 — Present',
    location: 'Newcastle upon Tyne, UK',
    points: [
      'Lead the end-to-end design and delivery of enterprise people-data products that inform strategic workforce, talent and organisational decisions for global People teams.',
      'Act as product owner and lead developer for Power Platform solutions — architecting data models, role-based security, automation and governance into adoption-ready applications.',
      'Build trusted Power BI semantic models, DAX measures and Snowflake-backed datasets that give leaders consistent, self-service insight in place of manual reporting.',
      'Partner with senior stakeholders across HR, People Analytics and Employee Relations, translating ambiguous, highly sensitive requirements into governed, scalable solutions.',
      'Champion data quality, auditability and secure-by-design patterns, raising governance and data-literacy standards across the function.',
    ],
  },
  {
    role: 'Data Transformation Analyst',
    company: 'Sage',
    period: 'Aug 2022 — Oct 2025',
    location: 'Newcastle upon Tyne, UK',
    points: [
      'Delivered analytical models, automation and reporting across multiple business domains spanning billing, customer, finance and operational data.',
      'Engineered Snowflake and SQL pipelines to integrate and transform large-scale, multi-source datasets, improving performance, reliability and trust in reporting.',
      'Built advanced Power BI dashboards with DAX and Power Query that increased visibility of key operational and commercial metrics for decision-makers.',
      'Replaced manual, repetitive reporting with automated pipelines, reducing effort and turnaround time while improving data quality.',
      'Worked across product, finance, operations and technology to define metrics and standards, strengthening governance and consistency.',
    ],
  },
  {
    role: 'Product Analyst',
    company: 'Global Processing Services',
    period: 'Jun 2021 — May 2022',
    location: 'UK',
    points: [
      'Supported product operations, monitoring and release coordination for high-volume payment platforms in a fast-paced fintech environment.',
      'Built monitoring dashboards, health rules and alerting to surface service issues across the payment lifecycle and protect reliability.',
      'Contributed to release management, resilience exercises and service-improvement initiatives.',
    ],
  },
  {
    role: 'Senior Solutions Engineer / Senior System Analyst',
    company: 'Razorpay',
    period: 'Jan 2019 — Jul 2020',
    location: 'India',
    points: [
      'Owned technical delivery of payment-gateway integrations for enterprise clients across ecommerce, financial services, media, telecoms and retail.',
      'Translated business requirements into integration designs, test strategies and launch plans aligned to security and compliance standards.',
      'Served as lead technical contact through onboarding, solution design, testing and go-live, feeding insights back to product and engineering.',
    ],
  },
  {
    role: 'Assistant Manager',
    company: 'Axis Bank',
    period: 'Jan 2017 — Jan 2019',
    location: 'India',
    points: [
      'Supported mission-critical banking and payment systems (SWIFT, RTGS, NEFT, UPI, internet banking) with responsibility for monitoring, incident resolution and continuity.',
      'Resolved production issues through log analysis, database troubleshooting and controlled patch deployments in a highly regulated environment.',
      'Built strong foundations in SQL, application support and operations that underpin today’s data and governance work.',
    ],
  },
]

export const education = [
  {
    degree: 'MSc Information Science — Data Analytics (Advanced Practice)',
    school: 'Northumbria University, UK',
    period: '2020 — 2022',
    details:
      'Focus: data modelling, business intelligence, statistics, information organisation and interaction design.',
  },
  {
    degree: 'BE, Information Technology',
    school: 'Visvesvaraya Technological University, India',
    period: '2016',
    details:
      'Certifications: AWS Streaming Data Analytics, Data Warehousing on AWS, Foundations of Prompt Engineering, Power BI Data Visualisation.',
  },
]

// Grouped skills — displayed as categorised tag clusters.
export const skills = [
  {
    group: 'Power Platform & HR Tech',
    items: ['Power Apps', 'Power Automate', 'Dataverse', 'Security & Access Models', 'App Governance'],
  },
  {
    group: 'BI & Analytics',
    items: ['Power BI', 'DAX', 'Power Query', 'Semantic Models', 'KPI Design', 'Data Visualisation'],
  },
  {
    group: 'Data Engineering',
    items: ['Snowflake', 'SQL', 'ETL / ELT', 'Data Modelling', 'Data Quality', 'Integration Pipelines'],
  },
  {
    group: 'Cloud & Integration',
    items: ['Azure', 'AWS', 'REST APIs', 'Salesforce', 'Zuora'],
  },
  {
    group: 'Leadership & Delivery',
    items: ['Product Ownership', 'Stakeholder Management', 'Requirements Discovery', 'Agile Delivery', 'Governance', 'Mentoring'],
  },
]

// Capability themes — deliberately generic (no client/project names or internal detail).
export const highlights = [
  {
    name: 'HR Technology Product Ownership',
    description:
      'Own enterprise Power Platform products end to end — from discovery and data modelling to security, automation and release — delivering governed applications that global People teams rely on daily.',
    tech: ['Power Apps', 'Dataverse', 'Power Automate'],
  },
  {
    name: 'Workforce & People Analytics',
    description:
      'Transform complex, sensitive people data into executive-ready dashboards and semantic models that support strategic workforce, talent and organisational decisions.',
    tech: ['Power BI', 'DAX', 'Snowflake'],
  },
  {
    name: 'Reporting Automation & Transformation',
    description:
      'Move teams from manual, fragmented reporting to automated, repeatable and scalable processes, backed by clear documentation and smooth operational handover.',
    tech: ['Automation', 'SQL', 'Power Query'],
  },
  {
    name: 'Data Governance & Security by Design',
    description:
      'Embed data quality, auditability, role-based access and compliance thinking into every solution — keeping trust high in regulated, sensitive data domains.',
    tech: ['Governance', 'Security', 'Data Quality'],
  },
]
