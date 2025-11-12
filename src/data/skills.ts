
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
    skills: ["C++", "Python", "C", "Java"],
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
      "LangChain",
      "LangGraph",
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
    skills: ["MySQL", "MongoDB", "CosmosDB", "ChromaDB", "Qdrant"],
  },
  {
    name: "Tools & Technologies",
    icon: Layout,
    skills: [
      "Docker",
      "Redis",
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
      "CodeBERT",
      "Gemini",
      "Sentence Transformers",
      "NetworkX",
      "n8n",
      "Vapi",
      "Twilio",
    ],
  },
];
