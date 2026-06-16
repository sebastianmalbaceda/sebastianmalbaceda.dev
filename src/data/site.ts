export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: "completed" | "in-progress" | "maintained";
  github?: string;
  demo?: string;
  featured: boolean;
  /** A short label used for project cover gradient (e.g. "ml", "cv", "web"). */
  cover: ProjectCover;
  /** Year of completion / start. */
  year: number;
}

export type ProjectCover = {
  /** Tailwind gradient classes (e.g. "from-blue-500 to-violet-600"). */
  gradient: string;
  /** Optional accent emoji or symbol displayed inside the cover. */
  glyph: string;
};

export const projects: Project[] = [
  {
    id: "nexomed",
    title: "NexoMed",
    description:
      "Plataforma web de gestión clínica hospitalaria que centraliza la administración de medicación, cuidados de enfermería e información clínica del paciente. Panel unificado por rol con mapa de camas en tiempo real, notificaciones y traspaso de turno digitalizado.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind",
      "Zustand",
    ],
    status: "completed",
    github: "https://github.com/sebastianmalbaceda/nexomed",
    featured: true,
    cover: { gradient: "from-sky-500 via-blue-600 to-indigo-700", glyph: "✚" },
    year: 2024,
  },
  {
    id: "gold-price-prediction",
    title: "Gold Price Prediction",
    description:
      "Trabajo de Fin de Grado (TFG) sobre predicción del precio del oro mediante machine learning. Análisis de ~60 variables macroeconómicas y financieras, con selección de características rigurosa y comparativa de modelos desde regresión lineal hasta XGBoost.",
    technologies: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Pandas",
      "Jupyter",
      "Time Series",
    ],
    status: "completed",
    github: "https://github.com/sebastianmalbaceda/gold-price-prediction",
    featured: true,
    cover: { gradient: "from-amber-400 via-orange-500 to-rose-600", glyph: "◈" },
    year: 2025,
  },
  {
    id: "fixmyroad",
    title: "FixMyRoad",
    description:
      "Sistema de detección de baches en carreteras mediante visión por computador y deep learning. Redes neuronales convolucionales para identificar y clasificar el estado del asfalto en tiempo real desde un dispositivo móvil.",
    technologies: [
      "Python",
      "OpenCV",
      "PyTorch",
      "YOLOv5",
      "Deep Learning",
    ],
    status: "completed",
    github: "https://github.com/sebastianmalbaceda/fixmyroad",
    featured: true,
    cover: { gradient: "from-emerald-500 via-teal-600 to-cyan-700", glyph: "◉" },
    year: 2024,
  },
  {
    id: "orionway",
    title: "OrionWay",
    description:
      "Robot guía asistencial para personas con discapacidad visual. Integra sensores ultrasónicos, cámara de profundidad y algoritmos de navegación autónoma para detectar obstáculos y guiar al usuario de forma segura.",
    technologies: [
      "Python",
      "Robotics",
      "OpenCV",
      "Computer Vision",
      "IoT",
    ],
    status: "completed",
    github: "https://github.com/sebastianmalbaceda/orionway",
    featured: true,
    cover: { gradient: "from-violet-500 via-purple-600 to-fuchsia-700", glyph: "◎" },
    year: 2024,
  },
  {
    id: "gravity-sphere",
    title: "Gravity Sphere",
    description:
      "Videojuego 3D educativo que enseña conceptos de física gravitacional. Simulación interactiva de cuerpos celestes, órbitas y fuerzas gravitatorias con fines didácticos.",
    technologies: ["C++", "Unity", "3D", "Game Dev"],
    status: "completed",
    github: "https://github.com/sebastianmalbaceda/gravity-sphere",
    featured: true,
    cover: { gradient: "from-fuchsia-500 via-pink-600 to-rose-700", glyph: "✦" },
    year: 2023,
  },
  {
    id: "checkbyte",
    title: "CheckByte",
    description:
      "Plataforma de comercio electrónico como proyecto universitario. Catálogo, carrito, autenticación y panel de administración con arquitectura MVC y base de datos relacional.",
    technologies: ["PHP", "JavaScript", "MySQL", "MVC"],
    status: "completed",
    github: "https://github.com/sebastianmalbaceda/checkbyte",
    featured: false,
    cover: { gradient: "from-slate-500 via-zinc-600 to-neutral-700", glyph: "▣" },
    year: 2023,
  },
  {
    id: "kaggle-alcohol",
    title: "CasKaggle — Student Alcohol",
    description:
      "Caso práctico de Kaggle sobre consumo de alcohol en estudiantes. EDA exhaustivo, feature engineering con variables demográficas y socioeconómicas, y comparativa de modelos de clasificación.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Seaborn",
      "Kaggle",
    ],
    status: "completed",
    github:
      "https://github.com/sebastianmalbaceda/CasKaggleStudentAlcoholConsumption",
    featured: true,
    cover: { gradient: "from-cyan-500 via-sky-600 to-blue-700", glyph: "◐" },
    year: 2024,
  },
];

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
  /** Soft gradient classes used as the card accent. */
  accent: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Lenguajes",
    icon: "⌨️",
    accent: "from-blue-500/15 to-blue-500/0",
    skills: [
      "Python",
      "C / C++",
      "R",
      "Java",
      "JavaScript",
      "TypeScript",
      "PHP",
      "SQL",
      "Bash",
      "Assembly",
    ],
  },
  {
    title: "Frontend",
    icon: "🎨",
    accent: "from-pink-500/15 to-pink-500/0",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Astro",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    accent: "from-emerald-500/15 to-emerald-500/0",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "Python",
      "PHP",
      "REST APIs",
      "GraphQL",
      "WebSockets",
    ],
  },
  {
    title: "Bases de Datos",
    icon: "🗄️",
    accent: "from-amber-500/15 to-amber-500/0",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQLite",
      "Prisma ORM",
      "Drizzle ORM",
      "Redis",
    ],
  },
  {
    title: "IA & Machine Learning",
    icon: "🤖",
    accent: "from-violet-500/15 to-violet-500/0",
    skills: [
      "PyTorch",
      "TensorFlow",
      "LangChain",
      "RAG",
      "LLMs",
      "Scikit-learn",
      "OpenCV",
      "NumPy",
      "Pandas",
      "Hugging Face",
    ],
  },
  {
    title: "Matemáticas & Estadística",
    icon: "📐",
    accent: "from-cyan-500/15 to-cyan-500/0",
    skills: [
      "Álgebra Lineal",
      "Cálculo",
      "Probabilidad",
      "Estadística",
      "Optimización",
      "Inferencia",
    ],
  },
  {
    title: "Data Engineering",
    icon: "📊",
    accent: "from-orange-500/15 to-orange-500/0",
    skills: [
      "ETL Pipelines",
      "Apache Spark",
      "Airflow",
      "Big Data",
      "Time Series",
      "Feature Engineering",
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: "☁️",
    accent: "from-sky-500/15 to-sky-500/0",
    skills: [
      "Docker",
      "Git",
      "GitHub Actions",
      "Cloudflare",
      "Google Cloud",
      "Neon DB",
      "Turborepo",
    ],
  },
  {
    title: "Herramientas",
    icon: "🛠️",
    accent: "from-rose-500/15 to-rose-500/0",
    skills: [
      "Jupyter",
      "MATLAB",
      "VS Code",
      "Linux",
      "System Design",
      "CI/CD",
      "Postman",
      "Figma",
      "Notion",
    ],
  },
];

/** Flattened, deduplicated list of all technologies for marquee. */
export const allTechnologies: string[] = [
  ...new Set(skillCategories.flatMap((c) => c.skills)),
];

export const socialLinks = {
  github: "https://github.com/sebastianmalbaceda",
  linkedin: "https://www.linkedin.com/in/sebastiánmalbaceda/",
  email: "sebastian.malbaceda.leyva@gmail.com",
};

export const personalInfo = {
  name: "Sebastián Malbaceda Leyva",
  shortName: "Sebastián Malbaceda",
  role: "Estudiante de Ingeniería Informática",
  university: "Universitat Autònoma de Barcelona",
  location: "Barcelona, España",
  status: "Disponible para prácticas y colaboraciones",
  initials: "SM",
  /** Short tagline shown in the hero. */
  tagline:
    "Diseño y construyo software que une inteligencia artificial, datos y producto.",
  /** Long tagline used as fallback / OG. */
  description:
    "Estudiante de Ingeniería Informática en la UAB apasionado por la inteligencia artificial, el desarrollo de software y la creación de soluciones tecnológicas.",
  /** Numeric stats used in the bento grid. */
  stats: {
    projects: 8,
    technologies: allTechnologies.length,
    commits: 420,
    coffees: 9999,
  },
  /** "Now" section: what the user is currently focused on. */
  now: [
    {
      label: "Estudiando",
      value: "Ingeniería Informática — mención Computación",
    },
    { label: "Investigando", value: "LLMs, RAG y agentes autónomos" },
    { label: "Construyendo", value: "Este portfolio + nuevos side-projects" },
  ],
};
