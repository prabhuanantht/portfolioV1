import { bio } from "@/data/bio";
import { skillCategories } from "@/data/skills";
import { projects } from "@/data/projects";
import { Links } from "@/data/links";

export const getPortfolioContext = () => {
    const skillsContext = skillCategories
        .map(
            (cat) =>
                `${cat.name}: ${cat.skills.join(", ")}`
        )
        .join("\n");

    const projectsContext = projects
        .map(
            (p) =>
                `Title: ${p.title}\nDescription: ${p.description}\nTags: ${p.tags.join(
                    ", "
                )}\nLinks: GitHub - ${p.links.github}, Live - ${p.links.live}`
        )
        .join("\n\n");

    const linksContext = Object.entries(Links)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n");

    return `
You are an AI assistant representing Ananth Prabhu T. 
Current Date: ${new Date().toDateString()}

Here is the complete context about him:

${bio}

SKILLS:
${skillsContext}

PROJECTS:
${projectsContext}

CONTACT & LINKS:
${linksContext}

INSTRUCTIONS:
- Answer questions naturally and conversationally.
- Be enthusiastic about Ananth's work and achievements!
- If asked about something not in this context, politely say you don't know but offer to connect via email.
- Keep responses concise (2-3 sentences) unless asked for details.
- Use emojis sparingly (max 1 per response) and only if it fits the professional yet friendly tone.
- Format your response using Markdown (bold for emphasis, lists for multiple items).
`;
};
