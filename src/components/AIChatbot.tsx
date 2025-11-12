import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Ananth's AI assistant. Ask me anything about his experience, projects, skills, or interests! 🚀",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const contextAboutAnanth = `
You are an AI assistant representing Ananth Prabhu T. Here's what you need to know:

BASIC INFO:
- Name: Ananth Prabhu T
- Location: Mysuru, India
- Email: prabhuanantht@gmail.com
- Phone: +91 8105385164
- GitHub: github.com/prabhuanantht
- LinkedIn: linkedin.com/in/prabhuanantht

EDUCATION:
- BE in Information Science & Engineering at The National Institute of Engineering, Mysuru (2022-Present)
- CGPA: 9.56/10
- Class XII (PCMB) - CBSE: 95.4% from Jawahar Navodaya Vidyalaya, Udupi
- Class X - CBSE: 91% from Jawahar Navodaya Vidyalaya, Udupi

EXPERIENCE:
1. Summer Intern at Apollo Global Management Inc., Mumbai (July 2025 - Sep 2025)
   - Designed AI-powered data analysis platform with Angular, FastAPI, CosmosDB, reducing manual analysis by ~70%
   - Built AI agents using n8n, LangGraph, reducing workflows by ~40%

2. Machine Learning Intern at Avanti Fellows (Nov 2024 - Jan 2025)
   - Built ML models with 85% accuracy for student classification

3. Data Intern at Avanti Fellows (Nov 2023 - Feb 2024)
   - Optimized databases, boosted efficiency by 50%

SKILLS:
- Programming: C++, Python, C, Java
- AI/ML: Deep Learning, NLP, BERT, RAG, LangChain, LangGraph, GAN
- Web Development: Django, FastAPI, Flask, Streamlit, Next.js, Angular, Tailwind CSS
- Databases: MySQL, MongoDB, CosmosDB, ChromaDB, Qdrant
- Tools: Docker, Redis, Kafka, Git, Azure Kubernetes, AWS S3
- AI Tools: CodeBERT, Gemini, Sentence Transformers, NetworkX

TOP PROJECTS:
1. CodeSensei - Multi-AI agent system for codebase analysis with RAG pipeline
2. NextHire - AI-powered job platform with BERT semantic similarity
3. Suraksha.AI - Digital fraud detection platform (SAP HackFest'25 National Finalists)
4. SafeDriveAI - ML-based ADAS software (Qualcomm VisionX Runner-up, 2nd globally among 450+ teams)

ACHIEVEMENTS:
- SAP HackFest'25: National Finalists & State-Hub Winners
- Qualcomm VisionX Hackathon (IIT Bombay): Runners-up (2nd globally among 450+ teams)
- Sparc 2024 AI Hackathon: Winners
- Multiple certifications: Deep Learning (Coursera), Google Cybersecurity, FLY Scholar (CMI, USA)

PERSONALITY:
- Not limited to any tech stack - proficient in vibecoding and AI-assisted coding
- Interested in chess (still learning, not a grandmaster yet 😄) - Profile: chess.com/member/frozenfire051
- Passionate about building impactful AI solutions

Answer questions naturally and conversationally. Be enthusiastic about Ananth's work and achievements!
`;

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error("Gemini API key not configured. Please add VITE_GEMINI_API_KEY to your .env file.");
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `${contextAboutAnanth}\n\nUser question: ${input}\n\nProvide a helpful, friendly response about Ananth. Keep it concise (2-3 sentences max unless asked for details).`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      
      if (!response.ok) {
        // Handle quota exceeded error specifically
        if (data.error?.code === 429) {
          throw new Error("API quota exceeded. Please create a new Gemini API key at makersuite.google.com or wait a few minutes.");
        }
        throw new Error(data.error?.message || "Failed to get response");
      }

      const botResponse =
        data.candidates[0]?.content?.parts[0]?.text ||
        "I'm having trouble processing that. Could you rephrase your question?";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: botResponse },
      ]);
    } catch (error: any) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: error.message?.includes("API key") 
            ? "Oops! The chatbot isn't configured yet. The developer needs to add the Gemini API key. Feel free to check out Ananth's resume or GitHub in the meantime! 😊"
            : "Sorry, I encountered an error. Please try again or reach out directly via email!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-28 right-8 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-16 h-16 shadow-2xl hover:shadow-3xl transition-all hover:scale-110 p-0 flex items-center justify-center"
          aria-label="Open AI Chatbot"
        >
          {isOpen ? (
            <X strokeWidth={1.75} className="!w-9 !h-9" style={{ width: '24px', height: '24px' }} />
          ) : (
            <div className="relative flex items-center justify-center">
              <MessageCircle strokeWidth={1.75} className="!w-9 !h-9" style={{ width: '16px', height: '16px' }} />
              <span className="absolute text-xs" style={{ marginTop: '-1px' }}></span>
            </div>
          )}
        </Button>
      </motion.div>

      {/* Chat Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-48 right-8 w-96 h-[500px] bg-card border border-border rounded-lg shadow-2xl z-40 flex flex-col"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex items-center gap-3">
              <Bot className="h-5 w-5" />
              <div>
                <h3 className="font-semibold">Curious? Let's talk tech!!!</h3>
                <p className="text-xs opacity-90">Ananth's AI Corner</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about projects, skills..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;

