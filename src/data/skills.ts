
import { Code, Database, Layout, Terminal, Cpu, Palette } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    icon: Terminal,
    skills: ["C++", "Python", "C", "Java", "TypeScript", "JavaScript"],
  },
  {
    name: "AI & Machine Learning",
    icon: Cpu,
    skills: [
      "Supervised Learning",
      "Deep Learning",
      "GAN",
      "NLP",
      "BERT",
      "RAG",
      "CNNs",
      "RNNs",
      "LSTM",
      "GRU",
      "Transformers",
      "Autoencoders"
    ],
  },
  {
    name: "Web Development",
    icon: Code,
    skills: [
      "Django",
      "FastAPI",
      "Flask",
      "Streamlit",
      "React",
      "Next.js",
      "Angular",
      "Tailwind CSS",
    ],
  },
  {
    name: "Databases",
    icon: Database,
    skills: [
      "MySQL",
      "MongoDB",
      "CosmosDB",
      "ChromaDB",
      "Qdrant",
      "Redis",
      "PostgreSQL",
      "Prisma",
      "SQLite",
      "Firebase"],
  },
  {
    name: "Tools & Technologies",
    icon: Layout,
    skills: [
      "Docker",
      "Kafka",
      "Git & GitHub",
      "Node.js",
      "Azure Kubernetes Services",
      "AWS S3",
    ],
  },
  {
    name: "AI Tools & Frameworks",
    icon: Palette,
    skills: [
      "Gemini",
      "LangGraph",
      "LangChain",
      "CrewAI",
      "n8n",
      "Vapi",
    ],
  },
];
