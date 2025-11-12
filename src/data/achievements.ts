
import { Trophy, Star, Award } from "lucide-react";
import { LucideIcon } from "lucide-react";

export type Achievement = {
  title: string;
  type: "competition" | "academic" | "certification";
  year: string;
  description: string;
  icon: LucideIcon;
  link?: string;
  rank?: "winner" | "runner-up" | "finalist";
};

export const achievements: Achievement[] = [
  {
    title: "National Finalists & State-Hub Winners - SAP HackFest'25",
    type: "competition",
    year: "2025",
    description: "Pitched Suraksha.AI, an AI-powered end-to-end digital fraud detection platform for public, businesses and cybercells.",
    icon: Trophy,
    rank: "winner",
  },
  {
    title: "Runners-up - Qualcomm VisionX Hackathon (IIT Bombay)",
    type: "competition", 
    year: "2025",
    description: "Built SafeDriveAI, an ML-based ADAS software. Ranked 2nd globally among 450+ elite teams with special recognition from Qualcomm's Senior ML Engineers.",
    icon: Trophy,
    rank: "runner-up",
  },
  {
    title: "Winners - Sparc 2024 AI Hackathon",
    type: "competition",
    year: "2024",
    description: "Built HackML for resume-job matching using BERT. Organized by Entelika LLP & CSI.",
    icon: Trophy,
    rank: "winner",
  },
  {
    title: "Runners-up - Inceptrix'25 Hackathon (Jain University)",
    type: "competition",
    year: "2025",
    description: "Built NextHire, a smart career development platform with AI-powered features.",
    icon: Trophy,
    rank: "runner-up",
  },
  {
    title: "Finalists - Hacksagon'25 (IIIT Gwalior)",
    type: "competition",
    year: "2025",
    description: "Competed in AI Medical Imaging and Video Processing challenge.",
    icon: Trophy,
    rank: "finalist",
  },
  {
    title: "Academic Excellence - 9.56/10 CGPA",
    type: "academic",
    year: "2022-Present",
    description: "Maintaining exceptional academic performance at The National Institute of Engineering, Mysuru.",
    icon: Star,
  },
  {
    title: "Deep Learning and Neural Networks - Coursera",
    type: "certification",
    year: "2024",
    description: "Completed comprehensive deep learning specialization covering neural networks and advanced ML techniques.",
    icon: Award,
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    type: "certification",
    year: "2024",
    description: "Earned Google's professional certificate in cybersecurity fundamentals and practices.",
    icon: Award,
  },
  {
    title: "FLY Scholar (CMI, USA)",
    type: "certification",
    year: "2024",
    description: "Recognized as FLY Scholar by CMI, USA for academic and leadership excellence.",
    icon: Award,
  },
  {
    title: "ISAC Certified CCIO & CPEW",
    type: "certification",
    year: "2024",
    description: "Earned ISAC certifications in CCIO and CPEW demonstrating professional competency.",
    icon: Award,
  },
  {
    title: "Web Development Fundamentals - IBM",
    type: "certification",
    year: "2024",
    description: "Completed IBM's web development fundamentals certification.",
    icon: Award,
  },
  {
    title: "Open Source Software Development - Coursera",
    type: "certification",
    year: "2024",
    description: "Mastered open source development practices and collaborative coding.",
    icon: Award,
  },
];
