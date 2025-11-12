import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import {
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Download,
} from "lucide-react";
import LazyImage from "./LazyImage";
import { Links } from "@/data/links";
import ExperienceDialog from "./ExperienceDialog";

const AboutSection = () => {
  const resumeUrl = Links.resume;
  const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const handledownload = () => {
    toast({
      title: "Redirecting to Resume",
      description: "Your can download from the drive.",
    });
  };

  return (
    <section id="about" className="py-14 relative bg-background">
      <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-primary/5 to-background -z-10"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-heading text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* Content Column */}
          <motion.div
            className="lg:col-span-8 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" /> Bio
              </h3>
              <p className="text-muted-foreground mb-3">
                Software engineering student at The National Institute of Engineering, Mysuru, 
                specializing in AI/ML and full-stack development. With hands-on experience at 
                Apollo Global Management and Avanti Fellows, I combine technical expertise with 
                innovative problem-solving to build intelligent, user-centric applications that 
                make a real impact.
              </p>
              <p className="text-sm text-muted-foreground italic">
                💡 Not limited to any tech stack - I believe in vibecoding and AI-assisted 
                development to quickly adapt to any technology. Also, I enjoy chess (though I'm 
                still working on that grandmaster title 😄) -{" "}
                <a
                  href="https://www.chess.com/member/frozenfire051"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  challenge me!
                </a>
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-primary" />{" "}
                      Education
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium">BE in Information Science & Engineering</p>
                        <p className="text-sm text-muted-foreground">
                          The National Institute of Engineering, Mysuru
                        </p>
                        <p className="text-sm text-muted-foreground">
                          2022 - Present | CGPA: 9.56/10
                        </p>
                      </div>
                      <div className="border-t pt-3">
                        <p className="font-medium text-sm">Class XII (PCMB) - CBSE</p>
                        <p className="text-sm text-muted-foreground">
                          Jawahar Navodaya Vidyalaya, Udupi
                        </p>
                        <p className="text-sm text-muted-foreground">
                          2022 | 95.4%
                        </p>
                      </div>
                      <div className="border-t pt-3">
                        <p className="font-medium text-sm">Class X - CBSE</p>
                        <p className="text-sm text-muted-foreground">
                          Jawahar Navodaya Vidyalaya, Udupi
                        </p>
                        <p className="text-sm text-muted-foreground">
                          2020 | 91%
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Card className="h-full border-primary/10 bg-card/50 backdrop-blur-sm">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" /> Experience
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">
                          Software Engineering Intern
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Apollo Global Management Inc., Mumbai
                        </p>
                        <p className="text-sm text-muted-foreground">
                          July 2025 - Sep 2025
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Machine Learning Intern</p>
                        <p className="text-sm text-muted-foreground">
                          Avanti Fellows
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Nov 2024 - Jan 2025
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">Data Intern</p>
                        <p className="text-sm text-muted-foreground">
                          Avanti Fellows
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Nov 2023 - Feb 2024
                        </p>
                      </div>
                    </div>
                    <ExperienceDialog />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Column */}
          <motion.div
            className="lg:col-span-4 flex flex-col items-center lg:items-start gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div
              className="relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Avatar className="w-40 h-40 border-4 border-primary/20">
                <AvatarImage
                  src="/imgs/me.png"
                  alt="Ananth Prabhu T"
                  loading="lazy"
                />
                <AvatarFallback>AP</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                🎓 2026 Grad!
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <h3 className="text-2xl font-bold">Ananth Prabhu T</h3>
              <p className="text-muted-foreground">
                A Software Engineer
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              <Badge variant="outline" className="bg-primary/10">
                AI/ML
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                Python
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                Agentic AI
              </Badge>
              <Badge variant="outline" className="bg-primary/10">
                Full Stack
              </Badge>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="gap-2" asChild onClick={handledownload}>
                <a href={resumeUrl} download="Ananth_Prabhu_T_Resume.pdf">
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

