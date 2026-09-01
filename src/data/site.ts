export const site = {
  name: 'Thomas Jutinico',
  email: 'thomasjuti1210@gmail.com',
  github: 'https://github.com/ThomasJuti',
  linkedin: 'https://www.linkedin.com/in/thomasjutinico/',
  description:
    'An AI recruiter agent traces its own reasoning to recommend Thomas Jutinico: fullstack developer, systems engineering student, and LATAM hackathon winner.',
} as const;

export const agent = {
  name: 'match-copilot',
  model: 'thomas-v1.0',
  tokensUsed: '42,010',
  latency: '8 semesters',
  session: {
    region: 'LATAM',
    status: 'match found',
  },
} as const;

export const traceSteps = [
  { id: 'step1', label: '01 → fetch_profile()' },
  { id: 'step2', label: '02 → list_projects()' },
  { id: 'step3', label: '03 → scan_skills()' },
  { id: 'step4', label: '04 → verify_wins()' },
  { id: 'step5', label: '05 → recommend()' },
] as const;

// Swappable personas: AgentSidebar renders a toggle that swaps these values
// into the DOM (by element id) client-side. audiences[0] is the SSR default.
export const audiences = [
  {
    id: 'recruiter',
    label: 'Recruiter',
    from: 'recruiter@company ~ %',
    task: 'find_dev',
    filters: 'ai_agents',
    query:
      '"Find me a fullstack developer who actually builds AI agents — not just talks about them."',
    accent: 'reach out.',
    body: 'Ships in production, wins hackathons, builds the agent stack himself. Confidence: 0.98.',
    cta: 'Email Thomas →',
  },
  {
    id: 'startup',
    label: 'Startup',
    from: 'founder@startup ~ %',
    task: 'find_cofounder',
    filters: '0_to_1',
    query: '"Find someone who can own the whole stack from day one — no hand-holding."',
    accent: 'loop him in.',
    body: 'Builds fast, ships to production, and already took a product from idea to 1st place. Confidence: 0.95.',
    cta: 'Start the conversation →',
  },
  {
    id: 'partnership',
    label: 'Partnership',
    from: 'partner@agency ~ %',
    task: 'find_partner',
    filters: 'contract',
    query:
      '"Find a technical partner who can plug into our team and ship reliable AI features."',
    accent: 'bring him on.',
    body: 'Comfortable in production codebases, communicates clearly, bank-grade backend experience. Confidence: 0.97.',
    cta: 'Start a project →',
  },
] as const;

export const profile = {
  call: 'fetch_profile("thomas-jutinico")',
  status: '200 OK',
  tagline: 'fullstack developer · AI agent builder · bogotá, co',
  bio: "Systems engineering student (8th semester, U. Libre) who goes looking for the hard technical problems: hexagonal architecture on AWS, infrastructure as code, and AI-assisted PR review pipelines. 6 months shipping internal banking apps at Banco de Bogotá, plus a LATAM hackathon win with an AI voice-agent platform.",
} as const;

export const projects = [
  {
    call: 'list_projects(sort="impact")',
    status: '5 results',
    layout: 'spotlight',
    badge: '🏆 1st place · GTM Hackathon LATAM',
    title: 'GoTom — AI Sales Prospecting',
    description:
      'Scrapes public business data, scores leads by conversion likelihood, and trains sales teams with an AI voice agent that throws realistic objections. Team of 4, 1st across LATAM.',
    stack: 'python · react · llm apis · web scraping · rest',
    repo: undefined,
    demo: undefined,
  },
  {
    layout: 'wide',
    badge: '🤖 AI-reviewed PRs · rules + Gemini',
    title: 'LifeCicleApp — Customer Management Console',
    description:
      'Customer console for banking environments — hexagonal architecture, Spring Boot 3 + React on AWS (ECS, RDS, CloudFront), provisioned with Terraform. Every PR runs through a two-layer review agent: deterministic rules, then Gemini AI.',
    stack: 'spring boot · react · aws · terraform · gemini ai',
    repo: 'https://github.com/ThomasJuti/AppLifeCicle',
    demo: undefined,
  },
  {
    layout: 'wide',
    badge: undefined,
    title: 'Gatekeeper — Approval Workflow Platform',
    description:
      'Enterprise platform that centralizes and audits technical approval workflows, replacing ad-hoc email/chat approvals for deployments and access changes. JWT auth, role-based access (requester/approver/admin), immutable audit trail. Spring Boot 3 + React on AWS.',
    stack: 'spring boot · react · aws · mysql · rbac',
    repo: 'https://github.com/ThomasJuti/Gatekeeper-BdB',
    demo: undefined,
  },
  {
    layout: 'default',
    badge: undefined,
    title: 'Velaza Landing',
    description: 'Conversion-focused landing page shipped for the Velaza brand.',
    stack: 'html · css · js',
    repo: 'https://github.com/ThomasJuti/LandingVelaza',
    demo: 'https://landing-velaza.vercel.app',
  },
  {
    layout: 'default',
    badge: undefined,
    title: 'BikeTracking — Maintenance Predictor',
    description:
      'Registers motorcycles, logs maintenance and predicts upcoming service from usage patterns, benchmarking against similar vehicles.',
    stack: 'angular · nestjs · mysql',
    repo: 'https://github.com/ThomasJuti/BikeTracking',
    demo: undefined,
  },
] as const;

export const skills = {
  call: 'scan_skills(depth="production")',
  status: 'verified in prod',
  groups: [
    { key: 'languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'C#'] },
    { key: 'frontend', items: ['React', 'Angular'] },
    { key: 'backend', items: ['Express', 'NestJS', 'Spring Boot', 'WebSockets', 'REST'] },
    {
      key: 'cloud_data',
      items: [
        'AWS Lambda',
        'AWS ECS/RDS',
        'Terraform',
        'PostgreSQL',
        'MySQL',
        'Docker',
        'Kubernetes',
        'CI/CD',
      ],
    },
    {
      key: 'ai',
      items: ['LLM APIs', 'AI voice agents', 'web scraping + scoring', 'AI-assisted PR review'],
    },
  ],
} as const;

export const wins = {
  call: 'verify_wins()',
  status: '3 verified',
  items: [
    {
      emoji: '🏆',
      title: '1st Place — GTM Hackathon LATAM',
      description:
        "May 2026 — won LATAM's first GTM hackathon with GoTom, against teams from across the region.",
      highlighted: true,
    },
    {
      emoji: '🥈',
      title: 'Top 2 — Banco de Bogotá Hackathon',
      description:
        'Jul 2026 — built Banca Empresas, an AI-voice-driven sales pipeline for corporate credit cards, from file matching to delivery follow-up.',
      highlighted: true,
    },
    {
      emoji: '🏦',
      title: 'Production code at a major bank',
      description:
        'Jan–Jul 2026 — Angular + Node/TS + AWS apps shipped to production at Banco de Bogotá, while in university.',
      highlighted: false,
    },
  ],
} as const;

export const recommendation = {
  call: 'recommend()',
  headline: 'Recommendation:',
} as const;
