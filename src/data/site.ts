export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: "completed" | "in-progress" | "maintained";
  github?: string;
  demo?: string;
  featured: boolean;
  /** Year of completion. */
  year: number;
  /** Short tag used as the card accent. */
  tag: string;
  /** Accent hue for the card. */
  accent: "ember" | "sage" | "gold" | "coral" | "sky";
}

export const projects: Project[] = [
  {
    id: "nexomed",
    title: "NexoMed",
    description:
      "Plataforma de gestión clínica hospitalaria que centraliza medicación, cuidados de enfermería e información del paciente. Panel unificado por rol con mapa de camas en tiempo real y traspaso de turno digitalizado.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Tailwind", "Zustand"],
    status: "completed",
    github: "https://github.com/sebastianmalbaceda/nexomed",
    featured: true,
    year: 2024,
    tag: "Healthtech",
    accent: "sky",
  },
  {
    id: "gold-price-prediction",
    title: "Gold Price Prediction",
    description:
      "Trabajo de Fin de Grado sobre predicción del precio del oro con machine learning. Análisis de ~60 variables macroeconómicas, selección rigurosa de características y comparativa de modelos hasta XGBoost.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "Jupyter", "Time Series"],
    status: "completed",
    github: "https://github.com/sebastianmalbaceda/gold-price-prediction",
    featured: true,
    year: 2025,
    tag: "TFG · ML",
    accent: "gold",
  },
  {
    id: "fixmyroad",
    title: "FixMyRoad",
    description:
      "Detección de baches en carreteras mediante visión por computador y deep learning. Redes convolucionales para identificar y clasificar el estado del asfalto en tiempo real desde un dispositivo móvil.",
    technologies: ["Python", "OpenCV", "PyTorch", "YOLOv5", "Deep Learning"],
    status: "completed",
    github: "https://github.com/sebastianmalbaceda/fixmyroad",
    featured: true,
    year: 2024,
    tag: "Computer Vision",
    accent: "sage",
  },
  {
    id: "orionway",
    title: "OrionWay",
    description:
      "Robot guía asistencial para personas con discapacidad visual. Integra sensores ultrasónicos, cámara de profundidad y algoritmos de navegación autónoma para detectar obstáculos y guiar con seguridad.",
    technologies: ["Python", "Robotics", "OpenCV", "Computer Vision", "IoT"],
    status: "completed",
    github: "https://github.com/sebastianmalbaceda/orionway",
    featured: true,
    year: 2024,
    tag: "Robotics",
    accent: "coral",
  },
  {
    id: "gravity-sphere",
    title: "Gravity Sphere",
    description:
      "Videojuego 3D educativo que enseña física gravitacional. Simulación interactiva de cuerpos celestes, órbitas y fuerzas gravitatorias con fines didácticos.",
    technologies: ["C++", "Unity", "3D", "Game Dev"],
    status: "completed",
    github: "https://github.com/sebastianmalbaceda/gravity-sphere",
    featured: true,
    year: 2023,
    tag: "Game Dev",
    accent: "ember",
  },
  {
    id: "kaggle-alcohol",
    title: "CasKaggle — Student Alcohol",
    description:
      "Caso práctico de Kaggle sobre consumo de alcohol en estudiantes. EDA exhaustivo, feature engineering con variables demográficas y socioeconómicas, y comparativa de modelos de clasificación.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Seaborn", "Kaggle"],
    status: "completed",
    github: "https://github.com/sebastianmalbaceda/CasKaggleStudentAlcoholConsumption",
    featured: true,
    year: 2024,
    tag: "Data Science",
    accent: "sky",
  },
];

export interface Capability {
  title: string;
  icon: string;
  summary: string;
  items: string[];
  accent: "ember" | "sage" | "gold" | "coral" | "sky";
}

export const capabilities: Capability[] = [
  {
    title: "Lenguajes",
    icon: "⌨",
    summary: "Multiparadigma, de bajo a alto nivel",
    accent: "ember",
    items: ["Python", "C / C++", "R", "Java", "TypeScript", "JavaScript", "PHP", "SQL", "Bash", "Assembly"],
  },
  {
    title: "Inteligencia Artificial",
    icon: "✦",
    summary: "ML, visión y lenguaje",
    accent: "gold",
    items: ["PyTorch", "TensorFlow", "LangChain", "RAG", "LLMs", "Scikit-learn", "OpenCV", "NumPy", "Pandas", "Hugging Face"],
  },
  {
    title: "Frontend",
    icon: "◑",
    summary: "Interfaces rápidas y accesibles",
    accent: "coral",
    items: ["React", "Next.js", "Astro", "Tailwind CSS", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Backend",
    icon: "◐",
    summary: "APIs y sistemas distribuidos",
    accent: "sage",
    items: ["Node.js", "Express", "NestJS", "Python", "PHP", "REST APIs", "GraphQL", "WebSockets"],
  },
  {
    title: "Datos & Cloud",
    icon: "◈",
    summary: "Del dato al despliegue",
    accent: "sky",
    items: ["PostgreSQL", "MySQL", "Redis", "Prisma", "Docker", "GitHub Actions", "Cloudflare", "Google Cloud"],
  },
  {
    title: "Métodos",
    icon: "△",
    summary: "Ingeniería con criterio",
    accent: "ember",
    items: ["Álgebra Lineal", "Probabilidad", "Estadística", "Optimización", "System Design", "CI/CD", "Git", "Linux"],
  },
];

export interface JourneyEntry {
  year: string;
  title: string;
  place: string;
  description: string;
  kind: "education" | "project" | "milestone";
}

export const journey: JourneyEntry[] = [
  {
    year: "2022",
    title: "Ingeniería Informática — mención Computación",
    place: "Universitat Autònoma de Barcelona",
    description: "Inicio de grado. Fundamentos de programación, matemáticas y arquitectura de computadores.",
    kind: "education",
  },
  {
    year: "2023",
    title: "Gravity Sphere · CheckByte",
    place: "Proyectos académicos",
    description: "Primeros proyectos completos: un videojuego 3D educativo de física y una plataforma e-commerce MVC.",
    kind: "project",
  },
  {
    year: "2024",
    title: "Visión, robótica y data science",
    place: "UAB · Kaggle · hackathons",
    description: "FixMyRoad (visión por computador), OrionWay (robótica asistencial), NexoMed (healthtech) y CasKaggle.",
    kind: "project",
  },
  {
    year: "2025",
    title: "Trabajo de Fin de Grado",
    place: "UAB",
    description: "Gold Price Prediction: pipeline de ML end-to-end con ~60 variables y comparativa de modelos hasta XGBoost.",
    kind: "milestone",
  },
  {
    year: "Ahora",
    title: "Investigando LLMs, RAG y agentes",
    place: "Barcelona, remoto",
    description: "Construyendo este portfolio y nuevos side-projects alrededor de IA aplicada. Abierto a prácticas.",
    kind: "milestone",
  },
];

export interface Principle {
  title: string;
  body: string;
}

export const principles: Principle[] = [
  {
    title: "Pensamiento de sistemas",
    body: "Diseño desde la arquitectura hasta el píxel: modelos, APIs, datos e interfaz como un solo sistema coherente.",
  },
  {
    title: "Rigor sobre ruido",
    body: "Prefiero experimentos bien diseñados y métricas honestas a resultados impresionantes sin fundamento.",
  },
  {
    title: "Producto, no demo",
    body: "Construyo para que se use: accesible, mantenible y con atención al detalle en cada interacción.",
  },
];

export const allTechnologies: string[] = [...new Set(capabilities.flatMap((c) => c.items))];

export const social = {
  github: "https://github.com/sebastianmalbaceda",
  linkedin: "https://www.linkedin.com/in/sebastiánmalbaceda/",
  email: "sebastian.malbaceda.leyva@gmail.com",
};

export const me = {
  name: "Sebastián Malbaceda Leyva",
  shortName: "Sebastián Malbaceda",
  firstName: "Sebastián",
  role: "Ingeniero de software enfocado en IA",
  university: "Universitat Autònoma de Barcelona",
  location: "Barcelona, España",
  status: "Disponible para prácticas y colaboraciones",
  initials: "SM",
  tagline:
    "Diseño y construyo software que une inteligencia artificial, datos y producto — con rigor y cuidado por el detalle.",
  description:
    "Estudiante de Ingeniería Informática en la UAB apasionado por la inteligencia artificial, el desarrollo de software y la creación de soluciones tecnológicas con impacto real.",
  stats: {
    projects: projects.length,
    technologies: allTechnologies.length,
    yearStarted: 2022,
  },
  now: [
    { label: "Estudiando", value: "Ingeniería Informática — mención Computación" },
    { label: "Investigando", value: "LLMs, RAG y agentes autónomos" },
    { label: "Construyendo", value: "Este portfolio + nuevos side-projects" },
  ],
};
