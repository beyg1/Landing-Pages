export interface StickyCardData {
  index: number;
  title: string;
  image: string;
  description: string;
  label?: string;
}

export const stickyCardsData: StickyCardData[] = [
  {
    index: 1,
    title: "Intelligent Automation",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    description:
      "AI-driven systems that learn, adapt, and optimize mission-critical workflows in real time across your entire organization.",
    label: "Overview",
  },
  {
    index: 2,
    title: "Human + Machine Collaboration",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    description:
      "Orchestrate seamless collaboration between teams and autonomous agents to ship better ideas to production faster.",
    label: "Collaboration",
  },
  {
    index: 3,
    title: "Predictive Intelligence",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    description:
      "Continuously forecast risk, demand, and opportunity using streaming data and resilient ML pipelines.",
    label: "Signal",
  },
  {
    index: 4,
    title: "Real-Time Visibility",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80",
    description:
      "Unify fragmented data into a single live surface so every decision is informed, auditable, and aligned.",
    label: "Clarity",
  },
];