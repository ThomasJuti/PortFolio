export const site = {
  name: 'Thomas Jutinico',
  email: 'thomasjuti1210@gmail.com',
  github: 'https://github.com/ThomasJuti',
  linkedin: 'https://www.linkedin.com/in/thomasjutinico/',
  description:
    'An AI recruiter agent traces its own reasoning to recommend Thomas Jutinico: fullstack developer, systems engineering student, and LATAM hackathon winner.',
} as const;

export const agent = {
  name: 'recruiter-copilot',
  model: 'thomas-v1.0',
  tokensUsed: '42,010',
  latency: '8 semesters',
  session: {
    task: 'find_fullstack_dev',
    filters: 'ai_agents, backend',
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

export const query = {
  from: 'recruiter@company ~ %',
  text: '"Find me a fullstack developer who actually builds AI agents — not just talks about them."',
} as const;

export const profile = {
  call: 'fetch_profile("thomas-jutinico")',
  status: '200 OK',
  tagline: 'fullstack developer · AI agent builder · bogotá, co',
  bio: 'Systems engineering student (8th semester, U. Libre) who ships production software: 6 months building internal banking apps at Banco de Bogotá, and a LATAM hackathon win with an AI voice-agent platform.',
} as const;

export const projects = [
  {
    call: 'list_projects(sort="impact")',
    status: '4 results',
    layout: 'spotlight',
    badge: '🏆 1st place · GTM Hackathon LATAM',
    title: 'GoTom — AI Sales Prospecting',
    description:
      'Scrapes public business data, scores leads by conversion likelihood, and trains sales teams with an AI voice agent that throws realistic objections. Team of 4, 1st across LATAM.',
    stack: 'python · react · llm apis · web scraping · rest',
  },
  {
    layout: 'default',
    title: 'LifeCicleApp',
    description:
      'Life-cycle management — track, plan and organize personal goals end to end.',
    stack: 'react · node.js',
  },
  {
    layout: 'default',
    title: 'Velaza Landing',
    description: 'Conversion-focused landing page shipped for the Velaza brand.',
    stack: 'html · css · js',
  },
  {
    layout: 'wide',
    title: 'BikeTracking — Maintenance Predictor',
    description:
      'Registers motorcycles, logs maintenance and predicts upcoming service from usage patterns, benchmarking against similar vehicles.',
    stack: 'angular · nestjs · mysql',
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
      items: ['AWS Lambda', 'AWS RDS', 'PostgreSQL', 'MySQL', 'Docker', 'Kubernetes', 'CI/CD'],
    },
    { key: 'ai', items: ['LLM APIs', 'AI voice agents', 'web scraping + scoring'] },
  ],
} as const;

export const wins = {
  call: 'verify_wins()',
  status: '2 verified',
  items: [
    {
      emoji: '🏆',
      title: '1st Place — GTM Hackathon LATAM',
      description:
        "May 2026 — won LATAM's first GTM hackathon with GoTom, against teams from across the region.",
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
  headlineAccent: 'reach out.',
  body: 'Ships in production, wins hackathons, builds the agent stack himself. Confidence: 0.98.',
} as const;
