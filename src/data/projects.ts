
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
};

export const projects: Project[] = [
  {
    id: 1,
    title: "CodeSensei",
    description: "A multi-AI agent system for codebase analysis and comprehension. Generates interactive chapter-wise tutorials with embedded software architecture diagrams in under 10 minutes. Features ML-based code analysis using CodeBERT to detect complexity hotspots, code patterns, and security vulnerabilities.",
    image: "/imgs/p1.png",
    tags: ["Python", "Streamlit", "MongoDB", "ChromaDB", "CodeBERT", "Gemini", "RAG", "NLP"],
    links: {
      github: "https://github.com/prabhuanantht/CodeSensei",
      live: "",
    },
  },
  {
    id: 2,
    title: "NextHire",
    description: "An all-in-one AI-powered platform for job applicants and recruiters. Features AI interviewer, resume builder, resume analyzer, and on-call AI career counseling. Includes resume shortlisting system using BERT to compute semantic similarity across 40k+ job descriptions and 2k+ resumes.",
    image: "/imgs/p2.png",
    tags: ["Python", "Streamlit", "Next.js", "Tailwind CSS", "AWS S3", "BERT", "Twilio", "Vapi"],
    links: {
      github: "https://github.com/prabhuanantht/Next-Hire",
      live: ""
    },
  },
  {
    id: 3,
    title: "Suraksha.AI",
    description: "An AI-powered end-to-end digital fraud detection platform for public, businesses and cybercells. Presented at SAP HackFest'25 as National Finalists and State-Hub Round Winners.",
    image: "/imgs/p3.png",
    tags: ["AI", "Machine Learning", "Fraud Detection", "Python", "FastAPI"],
    links: {
      github: "https://github.com/prabhuanantht/SurakshaAI",
      live: "",
    },
  },
  {
    id: 4,
    title: "SafeDriveAI",
    description: "ML-based ADAS (Advanced Driver Assistance System) software. Ranked 2nd globally among 450+ elite teams at Qualcomm VisionX Hackathon (IIT Bombay) with special recognition from Qualcomm's Senior ML Engineers.",
    image: "/imgs/p4.png",
    tags: ["Machine Learning", "Computer Vision", "Python", "Deep Learning"],
    links: {
      github: "https://github.com/prabhuanantht/SafeDriveAI",
      live: "",
    },
  },
  {
    id: 5,
    title: "Unified Inbox",
    description: "A full-stack multi-channel communication platform for managing customer communications across SMS, WhatsApp, Email, and social media in a unified inbox. Features message scheduling, team notes with @mentions, analytics dashboard, and role-based access control.",
    image: "/imgs/p5.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Twilio", "React Query", "Tailwind CSS", "Better Auth"],
    links: {
      github: "https://github.com/prabhuanantht/Unified-Inbox",
      live: "",
    },
  },
];
