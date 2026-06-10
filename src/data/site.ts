export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: "completed" | "in-progress" | "maintained";
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "nexomed",
    title: "NexoMed",
    description:
      "Plataforma web de gestión clínica hospitalaria que centraliza la administración de medicación, cuidados de enfermería e información clínica del paciente. Panel unificado por rol (médico, enfermero, TCAE) con mapa de camas en tiempo real, notificaciones, traspaso de turno digitalizado e integración con CIMA/AEMPS.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "Zustand",
    ],
    status: "completed",
    github: "https://github.com/sebastianmalbaceda/nexomed",
    featured: true,
  },
  {
    id: "gold-price-prediction",
    title: "Gold Price Prediction",
    description:
      "Trabajo de Fin de Grado (TFG) sobre predicción del precio del oro mediante machine learning. Análisis de ~60 variables macroeconómicas y financieras de FRED, Investing.com y CBOE. Implementa desde regresores lineales hasta Random Forest, con rigurosa selección de características y validación.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Jupyter",
      "Matplotlib",
      "ML",
      "Time Series",
    ],
    status: "completed",
    github: "https://github.com/sebastianmalbaceda/gold-price-prediction",
    featured: true,
  },
  {
    id: "fixmyroad",
    title: "FixMyRoad",
    description:
      "Sistema de detección de baches en carreteras mediante visión por computador y deep learning. Utiliza redes neuronales convolucionales para identificar y clasificar el estado del asfalto en tiempo real, permitiendo a los conductores reportar incidencias de forma automatizada.",
    technologies: [
      "Python",
      "OpenCV",
      "PyTorch",
      "Deep Learning",
      "Computer Vision",
    ],
    status: "completed",
    github: "https://github.com/sebastianmalbaceda/fixmyroad",
    featured: true,
  },
  {
    id: "orionway",
    title: "OrionWay",
    description:
      "Robot guía asistencial diseñado para personas con discapacidad visual. Integra sensores ultrasónicos, cámaras y algoritmos de navegación autónoma para detectar obstáculos y guiar al usuario de forma segura por entornos interiores y exteriores.",
    technologies: ["Python", "Robotics", "Computer Vision", "OpenCV", "IoT"],
    status: "completed",
    github: "https://github.com/sebastianmalbaceda/orionway",
    featured: true,
  },
  {
    id: "gravity-sphere",
    title: "Gravity Sphere",
    description:
      "Videojuego 3D con enfoque educativo desarrollado para enseñar conceptos de física gravitacional. Implementa simulación de cuerpos celestes, órbitas y fuerzas gravitatorias en un entorno interactivo y lúdico.",
    technologies: ["C++", "Unity", "3D Modeling", "Game Development"],
    status: "completed",
    github: "https://github.com/sebastianmalbaceda/gravity-sphere",
    featured: true,
  },
  {
    id: "checkbyte",
    title: "CheckByte",
    description:
      "Plataforma de comercio electrónico desarrollada como proyecto universitario. Incluye catálogo de productos, carrito de compras, sistema de autenticación y panel de administración. Diseñada con arquitectura MVC y base de datos relacional.",
    technologies: ["PHP", "JavaScript", "HTML", "CSS", "SQL", "MySQL"],
    status: "completed",
    github: "https://github.com/sebastianmalbaceda/checkbyte",
    featured: false,
  },
  {
    id: "kaggle-alcohol",
    title: "CasKaggle — Student Alcohol Consumption",
    description:
      "Caso práctico de Kaggle sobre el consumo de alcohol en estudiantes de secundaria. Análisis exploratorio exhaustivo, feature engineering con variables demográficas y socioeconómicas, y comparativa de múltiples modelos de clasificación para identificar patrones de riesgo y factores predictivos.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "Seaborn",
      "Jupyter",
      "Kaggle",
      "ML",
    ],
    status: "completed",
    github:
      "https://github.com/sebastianmalbaceda/CasKaggleStudentAlcoholConsumption",
    featured: true,
  },
];

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Lenguajes",
    icon: "⌨️",
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

export const socialLinks = {
  github: "https://github.com/sebastianmalbaceda",
  linkedin: "https://www.linkedin.com/in/sebastiánmalbaceda/",
  email: "sebastian.malbaceda.leyva@gmail.com",
};
