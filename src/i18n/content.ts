export type Lang = 'en' | 'es';

export const languages: Record<Lang, string> = {
  en: 'EN',
  es: 'ES',
};

export const defaultLang: Lang = 'en';

// Tokens that render as fake API/CLI output (badges, `//` comments read as
// terminal chrome, endpoint paths, function-call notation) stay identical in
// both languages on purpose — translating them would break the "agent trace"
// conceit the whole page is built on. Only reader-facing prose is bilingual.
const shared = {
  site: {
    name: 'Thomas Jutinico',
    email: 'thomasjuti1210@gmail.com',
    github: 'https://github.com/ThomasJuti',
    linkedin: 'https://www.linkedin.com/in/thomasjutinico/',
  },
  agent: {
    name: 'match-copilot',
    session: {
      region: 'LATAM',
      status: 'match found',
    },
  },
  toolCalls: {
    tool: 'TOOL CALL',
    final: 'FINAL ANSWER',
  },
  traceSteps: [
    { id: 'step1', label: '01 → fetch_profile()' },
    { id: 'step2', label: '02 → list_projects()' },
    { id: 'step3', label: '03 → scan_skills()' },
    { id: 'step4', label: '04 → verify_wins()' },
    { id: 'step5', label: '05 → recommend()' },
  ],
  audienceMeta: [
    { id: 'recruiter', from: 'recruiter@company ~ %', task: 'find_dev', filters: 'ai_agents' },
    { id: 'startup', from: 'founder@startup ~ %', task: 'find_cofounder', filters: '0_to_1' },
    { id: 'partnership', from: 'partner@agency ~ %', task: 'find_partner', filters: 'contract' },
  ],
  calls: {
    profile: 'fetch_profile("thomas-jutinico")',
    profileStatus: '200 OK',
    projectsSpotlight: 'list_projects(sort="impact")',
    projectsSpotlightStatus: '5 results',
    skills: 'scan_skills(depth="production")',
    skillsStatus: 'verified in prod',
    wins: 'verify_wins()',
    winsStatus: '3 verified',
    recommend: 'recommend()',
  },
  skillGroups: [
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
  rawDataEndpoint: 'GET /api/site-data',
} as const;

export const content = {
  en: {
    ...shared,
    titleSuffix: '— Fullstack Developer',
    description:
      'An AI recruiter agent traces its own reasoning to recommend Thomas Jutinico: fullstack developer, systems engineering student, and LATAM hackathon winner.',
    ui: {
      skipToContent: 'Skip to content',
      viewingAsAriaLabel: 'Viewing as',
      commentViewingAs: '// viewing as',
      commentSession: '// session',
      commentTraceSteps: '// trace steps',
      commentRawDataHint: '// press ` for raw data',
      sessionTask: 'task:',
      sessionFilters: 'filters:',
      sessionRegion: 'region:',
      sessionStatus: 'status:',
      traceStepsAriaLabel: 'Trace steps',
      sectionsReadAriaLabel: 'Sections read',
      contextLabel: 'context',
      nowViewingAs: (label: string) => `Now viewing as: ${label}`,
      profileAlt: (name: string) => `Portrait of ${name}`,
      projectsHeading: 'Projects',
      liveDemo: 'Live demo ↗',
      viewRepo: 'View repo ↗',
      skillsHeading: 'Skills',
      achievementsHeading: 'Achievements',
      github: 'GitHub ↗',
      linkedin: 'LinkedIn ↗',
      copy: 'Copy',
      copied: 'Copied',
      copyEmailAriaLabel: (email: string) => `Copy email address ${email}`,
      rawDataAriaLabel: 'Raw site data',
      closeRawDataAriaLabel: 'Close raw data panel',
      finePrint: (year: number) =>
        `© ${year} thomas jutinico · this portfolio is itself an agent trace 🤖`,
      langToggleAriaLabel: 'Switch language',
      plainLabels: {
        loadingProfile: 'loading profile',
        sortingProjects: 'sorting projects by impact',
        checkingSkills: 'checking skills used in real production code',
        confirmingWins: 'confirming actual wins, not claims',
        makingCall: 'making the call',
      },
    },
    profile: {
      tagline: 'fullstack developer · AI agent builder · bogotá, co',
      bio: "Systems engineering student (8th semester, U. Libre) who goes looking for the hard technical problems: hexagonal architecture on AWS, infrastructure as code, and AI-assisted PR review pipelines. Currently shipping internal banking apps at Banco de Bogotá, plus a LATAM hackathon win with an AI voice-agent platform.",
    },
    projects: [
      {
        layout: 'spotlight',
        badge: '🏆 1st place · GTM Hackathon LATAM',
        title: 'GoTom — AI Sales Prospecting',
        description:
          'Scrapes public business data, scores leads by conversion likelihood, and trains sales teams with an AI voice agent that throws realistic objections. Team of 4, 1st across LATAM.',
        stack: 'python · react · llm apis · web scraping · rest',
        repo: undefined as string | undefined,
        demo: undefined as string | undefined,
      },
      {
        layout: 'wide',
        badge: '🤖 AI-reviewed PRs · rules + Gemini',
        title: 'LifeCicleApp — Customer Management Console',
        description:
          'Customer console for banking environments — hexagonal architecture, Spring Boot 3 + React on AWS (ECS, RDS, CloudFront), provisioned with Terraform. Every PR runs through a two-layer review agent: deterministic rules, then Gemini AI.',
        stack: 'spring boot · react · aws · terraform · gemini ai',
        repo: 'https://github.com/ThomasJuti/AppLifeCicle' as string | undefined,
        demo: undefined as string | undefined,
      },
      {
        layout: 'wide',
        badge: undefined as string | undefined,
        title: 'Gatekeeper — Approval Workflow Platform',
        description:
          'Enterprise platform that centralizes and audits technical approval workflows, replacing ad-hoc email/chat approvals for deployments and access changes. JWT auth, role-based access (requester/approver/admin), immutable audit trail. Spring Boot 3 + React on AWS.',
        stack: 'spring boot · react · aws · mysql · rbac',
        repo: 'https://github.com/ThomasJuti/Gatekeeper-BdB' as string | undefined,
        demo: undefined as string | undefined,
      },
      {
        layout: 'default',
        badge: undefined as string | undefined,
        title: 'Velaza Landing',
        description: 'Conversion-focused landing page shipped for the Velaza brand.',
        stack: 'html · css · js',
        repo: 'https://github.com/ThomasJuti/LandingVelaza' as string | undefined,
        demo: 'https://landing-velaza.vercel.app' as string | undefined,
      },
      {
        layout: 'default',
        badge: undefined as string | undefined,
        title: 'BikeTracking — Maintenance Predictor',
        description:
          'Registers motorcycles, logs maintenance and predicts upcoming service from usage patterns, benchmarking against similar vehicles.',
        stack: 'angular · nestjs · mysql',
        repo: 'https://github.com/ThomasJuti/BikeTracking' as string | undefined,
        demo: undefined as string | undefined,
      },
    ],
    wins: [
      {
        emoji: '🏆',
        title: '1st Place — GTM Hackathon LATAM',
        description:
          "May 2026 — we won LATAM's first GTM hackathon with GoTom, against teams from across the region.",
        highlighted: true,
      },
      {
        emoji: '🥈',
        title: 'Top 2 — Banco de Bogotá Hackathon',
        description:
          'Jul 2026 — built an AI-voice-driven sales pipeline for corporate credit cards, from file matching to delivery follow-up.',
        highlighted: true,
      },
      {
        emoji: '🏦',
        title: 'Production code at a Banco de Bogotá',
        description:
          'Jan–Jul 2026 — Angular + Node/TS + AWS apps shipped to production at Banco de Bogotá, while in university.',
        highlighted: false,
      },
    ],
    recommendation: {
      headline: 'Recommendation:',
      reasoning: [
        'checking production wins...',
        'checking real deploys...',
        'cross-referencing persona filters...',
      ],
    },
    audiences: [
      {
        id: 'recruiter',
        label: 'Recruiter',
        query:
          '"Find me a fullstack developer who actually builds AI agents — not just talks about them."',
        accent: 'reach out.',
        body: 'Ships in production, wins hackathons, builds the agent stack himself. Confidence: 0.98.',
        cta: 'Email Thomas →',
      },
      {
        id: 'startup',
        label: 'Startup',
        query: '"Find someone who can own the whole stack from day one — no hand-holding."',
        accent: 'loop him in.',
        body: 'Builds fast, ships to production, and already took a product from idea to 1st place. Confidence: 0.95.',
        cta: 'Start the conversation →',
      },
      {
        id: 'partnership',
        label: 'Partnership',
        query:
          '"Find a technical partner who can plug into our team and ship reliable AI features."',
        accent: 'bring him on.',
        body: 'Comfortable in production codebases, communicates clearly, bank-grade backend experience. Confidence: 0.97.',
        cta: 'Start a project →',
      },
    ],
  },
  es: {
    ...shared,
    titleSuffix: '— Desarrollador Fullstack',
    description:
      'Un agente de IA reclutador traza su propio razonamiento para recomendar a Thomas Jutinico: desarrollador fullstack, estudiante de ingeniería de sistemas y ganador de un hackathon en LATAM.',
    ui: {
      skipToContent: 'Saltar al contenido',
      viewingAsAriaLabel: 'Viendo como',
      commentViewingAs: '// viendo como',
      commentSession: '// sesión',
      commentTraceSteps: '// traza de pasos',
      commentRawDataHint: '// presiona ` para ver los datos',
      sessionTask: 'tarea:',
      sessionFilters: 'filtros:',
      sessionRegion: 'región:',
      sessionStatus: 'estado:',
      traceStepsAriaLabel: 'Pasos de traza',
      sectionsReadAriaLabel: 'Secciones leídas',
      contextLabel: 'contexto',
      nowViewingAs: (label: string) => `Ahora viendo como: ${label}`,
      profileAlt: (name: string) => `Retrato de ${name}`,
      projectsHeading: 'Proyectos',
      liveDemo: 'Demo en vivo ↗',
      viewRepo: 'Ver repositorio ↗',
      skillsHeading: 'Habilidades',
      achievementsHeading: 'Logros',
      github: 'GitHub ↗',
      linkedin: 'LinkedIn ↗',
      copy: 'Copiar',
      copied: 'Copiado',
      copyEmailAriaLabel: (email: string) => `Copiar dirección de correo ${email}`,
      rawDataAriaLabel: 'raw data del sitio',
      closeRawDataAriaLabel: 'cerrar panel de datos',
      finePrint: (year: number) =>
        `© ${year} thomas jutinico · este portafolio es en sí mismo una traza de agente 🤖`,
      langToggleAriaLabel: 'Cambiar idioma',
      plainLabels: {
        loadingProfile: 'cargando perfil',
        sortingProjects: 'ordenando proyectos por impacto',
        checkingSkills: 'verificando habilidades usadas en producción real',
        confirmingWins: 'confirmando logros reales, no solo afirmaciones',
        makingCall: 'tomando la decisión',
      },
    },
    profile: {
      tagline: 'desarrollador fullstack · IA agent builder · bogotá, co',
      bio: 'Estudiante de ingeniería de sistemas (8vo semestre, U. Libre) en busca de problemas tecnicos difíciles: arquitectura hexagonal en AWS, infraestructura como código y pipelines de revisión de PRs asistidos por IA. Actualmente construyendo aplicaciones bancarias internas en Banco de Bogotá, ganador de GTM hackathon LATAM con una plataforma de agentes de voz con IA.',
    },
    projects: [
      {
        layout: 'spotlight',
        badge: '🏆 1er lugar · Hackathon GTM LATAM',
        title: 'GoTom — Prospección de Ventas con IA',
        description:
          'Extrae datos públicos de empresas, califica leads por probabilidad de conversión y entrena equipos de ventas con un agente de voz de IA que plantea objeciones realistas. Equipo de 4, 1er lugar en toda LATAM.',
        stack: 'python · react · apis de llm · web scraping · rest',
        repo: undefined as string | undefined,
        demo: undefined as string | undefined,
      },
      {
        layout: 'wide',
        badge: '🤖 PRs revisados por IA · reglas + Gemini',
        title: 'LifeCicleApp — Consola de Gestión de Clientes',
        description:
          'Consola de clientes para entornos bancarios — arquitectura hexagonal, Spring Boot 3 + React en AWS (ECS, RDS, CloudFront), provisionada con Terraform. Cada PR pasa por un agente de revisión de dos capas: reglas deterministas y luego IA con Gemini.',
        stack: 'spring boot · react · aws · terraform · gemini ai',
        repo: 'https://github.com/ThomasJuti/AppLifeCicle' as string | undefined,
        demo: undefined as string | undefined,
      },
      {
        layout: 'wide',
        badge: undefined as string | undefined,
        title: 'Gatekeeper — Plataforma de Flujos de Aprobación',
        description:
          'Plataforma empresarial que centraliza y auditar los flujos de aprobación técnica, reemplazando las aprobaciones ad-hoc por correo/chat para despliegues y cambios de acceso. Autenticación JWT, acceso basado en roles (solicitante/aprobador/admin), registro de auditoría inmutable. Spring Boot 3 + React en AWS.',
        stack: 'spring boot · react · aws · mysql · rbac',
        repo: 'https://github.com/ThomasJuti/Gatekeeper-BdB' as string | undefined,
        demo: undefined as string | undefined,
      },
      {
        layout: 'default',
        badge: undefined as string | undefined,
        title: 'Velaza Landing',
        description: 'Landing page enfocada en conversión, entregada para la marca Velaza.',
        stack: 'html · css · js',
        repo: 'https://github.com/ThomasJuti/LandingVelaza' as string | undefined,
        demo: 'https://landing-velaza.vercel.app' as string | undefined,
      },
      {
        layout: 'default',
        badge: undefined as string | undefined,
        title: 'BikeTracking — Predictor de Mantenimiento',
        description:
          'Registra motocicletas, lleva el historial de mantenimiento y predice el próximo servicio según patrones de uso, comparando con vehículos similares.',
        stack: 'angular · nestjs · mysql',
        repo: 'https://github.com/ThomasJuti/BikeTracking' as string | undefined,
        demo: undefined as string | undefined,
      },
    ],
    wins: [
      {
        emoji: '🏆',
        title: '1er Lugar — Hackathon GTM LATAM',
        description:
          'Mayo 2026 — ganamos el primer hackathon GTM de LATAM con GoTom, compitiendo contra equipos de toda la región.',
        highlighted: true,
      },
      {
        emoji: '🥈',
        title: 'Top 2 — Hackathon Banco de Bogotá',
        description:
          'Jul 2026 — construimos un pipeline de ventas impulsado por voz con IA para tarjetas de crédito corporativas, desde el cruce de archivos hasta el seguimiento de entregas.',
        highlighted: true,
      },
      {
        emoji: '🏦',
        title: 'Código en producción en Banco de Bogota',
        description:
          'Ene–Jul 2026 — aplicaciones Angular + Node/TS + AWS llevadas a producción en Banco de Bogotá.',
        highlighted: false,
      },
    ],
    recommendation: {
      headline: 'Recomendación:',
      reasoning: [
        'verificando logros en producción...',
        'verificando despliegues reales...',
        'cruzando filtros de la persona...',
      ],
    },
    audiences: [
      {
        id: 'recruiter',
        label: 'Reclutador',
        query:
          '"Encuéntrame un desarrollador fullstack que realmente construya agentes de IA"',
        accent: 'contáctalo.',
        body: 'Lleva código a producción, gana hackathons y construye él mismo el stack de agentes. Confianza: 0.98.',
        cta: 'Enviar correo a Thomas →',
      },
      {
        id: 'startup',
        label: 'Startup',
        query:
          '"Encuentra a alguien que pueda hacerse cargo de todo el stack desde el día uno, sin necesitar guía."',
        accent: 'inclúyelo.',
        body: 'Construye rápido, lleva código a producción y ya llevó un producto desde la idea hasta el 1er lugar. Confianza: 0.95.',
        cta: 'Iniciar la conversación →',
      },
      {
        id: 'partnership',
        label: 'Alianza',
        query:
          '"Encuentra un socio técnico que pueda integrarse a nuestro equipo y entregar funciones de IA confiables."',
        accent: 'súmalo.',
        body: 'Cómodo en bases de código en producción, comunica con claridad, experiencia backend de nivel bancario. Confianza: 0.97.',
        cta: 'Iniciar un proyecto →',
      },
    ],
  },
} as const;

export function isLang(value: string | null | undefined): value is Lang {
  return value === 'en' || value === 'es';
}

export function detectLang(navigatorLanguage: string): Lang {
  return navigatorLanguage.toLowerCase().startsWith('es') ? 'es' : 'en';
}
