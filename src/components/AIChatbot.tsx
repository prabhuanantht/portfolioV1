import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Send, Sparkles, Bot, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getPortfolioContext } from "@/lib/portfolio-context";
import ReactMarkdown from "react-markdown";

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
  const [thinkingStep, setThinkingStep] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, thinkingStep]);

  const simulateThinking = async () => {
    const steps = [
      "Reading Ananth's bio...",
      "Analyzing your request...",
      "Checking project details...",
      "Formulating response...",
    ];

    for (const step of steps) {
      setThinkingStep(step);
      // Random delay between 500ms and 1000ms
      await new Promise((resolve) => setTimeout(resolve, 500 + Math.random() * 500));
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Start thinking simulation in background
    const thinkingPromise = simulateThinking();

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

      if (!apiKey) {
        throw new Error("Gemini API key not configured. Please add VITE_GEMINI_API_KEY to your .env file.");
      }

      const context = getPortfolioContext();

      const apiCallPromise = fetch(
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
                    text: `${context}\n\nUser question: ${input}\n\nProvide a helpful, friendly response about Ananth.`,
                  },
                ],
              },
            ],
          }),
        }
      );

      // Wait for both thinking simulation and API call
      const [_, response] = await Promise.all([thinkingPromise, apiCallPromise]);

      const data = await response.json();

      if (!response.ok) {
        if (data.error?.code === 429) {
          throw new Error("API quota exceeded. Please create a new Gemini API key or wait a few minutes.");
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
      setThinkingStep("");
    }
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        className="fixed right-8 z-50"
        initial={{ bottom: "2rem", scale: 0 }} // 2rem = bottom-8
        animate={{
          bottom: isScrolled ? "6rem" : "2rem", // Move up when scrolled (6rem = bottom-24)
          scale: 1
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          bottom: { duration: 0.3 } // Smooth transition for position
        }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all hover:scale-105 p-0 flex items-center justify-center bg-primary text-primary-foreground"
          aria-label="Open AI Chatbot"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Sparkles className="w-8 h-8" />
          )}
        </Button>
      </motion.div>

      {/* Chat Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed right-8 w-[90vw] md:w-96 h-[500px] max-h-[80vh] bg-card border border-border rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              bottom: isScrolled ? "10.5rem" : "6.5rem" // Adjust window position too
            }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="bg-primary p-4 flex items-center gap-3 text-primary-foreground">
              <div className="bg-primary-foreground/20 p-2 rounded-full">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Ananth's AI Assistant</h3>
                <p className="text-xs opacity-90">Ask me anything!</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm ${message.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none"
                      }`}
                  >
                    {message.role === "assistant" ? (
                      <div className="prose prose-sm dark:prose-invert max-w-none prose-p:leading-relaxed prose-pre:bg-secondary/50 prose-pre:text-secondary-foreground text-foreground">
                        <ReactMarkdown
                          components={{
                            a: ({ node, ...props }) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4 hover:text-primary/80" />,
                            p: ({ node, ...props }) => <p {...props} className="text-foreground" />,
                            li: ({ node, ...props }) => <li {...props} className="text-foreground" />,
                            strong: ({ node, ...props }) => <strong {...props} className="text-foreground font-semibold" />,
                          }}
                        >
                          {message.content}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Thinking Indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted p-3 rounded-2xl rounded-bl-none flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                    <span className="text-xs text-muted-foreground animate-pulse">{thinkingStep}</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t bg-card">
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
                  className="flex-1 bg-background border-input focus-visible:ring-primary"
                />
                <Button type="submit" size="icon" disabled={isLoading || !input.trim()} className="shrink-0">
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

