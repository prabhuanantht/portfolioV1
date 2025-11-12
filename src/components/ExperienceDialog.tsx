import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

type Experience = {
  title: string;
  company: string;
  period: string;
  details: string[];
};

const experiences: Experience[] = [
  {
    title: "Summer Intern",
    company: "Apollo Global Management Inc., Mumbai",
    period: "July 2025 - Sep 2025",
    details: [
      "Designed and deployed an AI-powered data analysis and reporting platform using Angular, FastAPI, CosmosDB, Qdrant, Azure Kubernetes Services that automated trend detection, anomaly identification, and cross-file correlation, reducing manual analysis effort by ~70% and now used daily by internal teams.",
      "Built and integrated AI agents using n8n, LangGraph, and Glean, connecting internal applications and MCP servers to streamline operations, reduce repetitive workflows by ~40%, and accelerate decision-making.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "Avanti Fellows",
    period: "Nov 2024 - Jan 2025",
    details: [
      "Built machine learning models (Decision Trees, Random Forest, Gradient Boosting) achieving ~85% accuracy in classifying students into divisions based on test scores and predicting college allotments based on past cut-off data.",
    ],
  },
  {
    title: "Data Intern",
    company: "Avanti Fellows",
    period: "Nov 2023 - Feb 2024",
    details: [
      "Managed and optimized the organization's database, performing data cleaning and analysis to boost efficiency by 50%.",
      "Regularly updated and maintained web content, ensuring real-time accuracy and boosting user engagement.",
    ],
  },
];

export const ExperienceDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="mt-3">
          <ExternalLink className="w-3 h-3 mr-1" />
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Work Experience</DialogTitle>
          <DialogDescription>
            Detailed overview of my professional experience and contributions
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 mt-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-4 border-primary pl-4 space-y-2"
            >
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-muted-foreground font-medium">{exp.company}</p>
              <p className="text-sm text-muted-foreground">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2 mt-3">
                {exp.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground leading-relaxed">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExperienceDialog;

