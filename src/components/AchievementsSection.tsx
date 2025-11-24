import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronLeft, ChevronRight, ExternalLink, Grip } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { achievements } from "@/data/achievements";

const AchievementsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [
      AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="achievements" className="bg-background/50 py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="section-heading">Achievements</h2>
            <p className="text-muted-foreground">
              A collection of my professional accomplishments, awards, and
              certifications earned throughout my journey.
            </p>
          </motion.div>

          <div className="flex items-center gap-4">
            <div className="flex items-center text-muted-foreground text-sm">
              <Grip className="h-4 w-4 mr-2" />
              <span className="hidden md:inline">Drag to explore</span>
              <span className="md:hidden">Swipe</span>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={scrollPrev}
                variant="outline"
                size="icon"
                className="rounded-full h-9 w-9"
                aria-label="Previous achievement"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                onClick={scrollNext}
                variant="outline"
                size="icon"
                className="rounded-full h-9 w-9"
                aria-label="Next achievement"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden -mx-4 px-4 py-4" ref={emblaRef}>
          <div className="flex gap-6 touch-pan-y">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_350px] min-w-0"
              >
                <div className="h-full bg-card p-6 rounded-lg shadow-sm border border-border select-none transition-all hover:scale-[1.02] hover:shadow-md flex flex-col">
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-2 rounded-full mr-3 shrink-0 ${achievement.rank === "winner"
                        ? "bg-amber-100/80 text-amber-600 dark:bg-amber-950 dark:text-amber-300"
                        : achievement.rank === "runner-up"
                          ? "bg-slate-200/80 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                          : achievement.rank === "finalist"
                            ? "bg-orange-100/80 text-orange-600 dark:bg-orange-950 dark:text-orange-400"
                            : achievement.type === "competition"
                              ? "bg-yellow-100/80 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-300"
                              : achievement.type === "academic"
                                ? "bg-blue-100/80 text-blue-600 dark:bg-blue-950 dark:text-blue-300"
                                : "bg-green-100/80 text-green-600 dark:bg-green-950 dark:text-green-300"
                        }`}
                    >
                      <achievement.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-normal text-muted-foreground">
                        {achievement.year}
                      </p>
                      <h3 className="text-lg font-semibold text-foreground">
                        {achievement.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-base font-normal text-muted-foreground mb-4 flex-grow">
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-2">
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${achievement.rank === "winner"
                        ? "bg-amber-100/80 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
                        : achievement.rank === "runner-up"
                          ? "bg-slate-200/80 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                          : achievement.rank === "finalist"
                            ? "bg-orange-100/80 text-orange-700 dark:bg-orange-950 dark:text-orange-400"
                            : achievement.type === "competition"
                              ? "bg-yellow-100/80 text-yellow-800 dark:bg-yellow-950 dark:text-yellow-300"
                              : achievement.type === "academic"
                                ? "bg-blue-100/80 text-blue-800 dark:bg-blue-950 dark:text-blue-300"
                                : "bg-green-100/80 text-green-800 dark:bg-green-950 dark:text-green-300"
                        }`}
                    >
                      {achievement.rank
                        ? achievement.rank === "runner-up"
                          ? "🥈 Runner-up"
                          : `🏆 ${achievement.rank.charAt(0).toUpperCase() + achievement.rank.slice(1)}`
                        : achievement.type.charAt(0).toUpperCase() + achievement.type.slice(1)}
                    </span>
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline flex items-center gap-1 p-2 -mr-2"
                      >
                        View
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
