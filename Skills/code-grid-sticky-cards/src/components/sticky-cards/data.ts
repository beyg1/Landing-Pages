export interface StickyCardData {
  index: number
  title: string
  image: string
  description: string
}

export const stickyCardsData: StickyCardData[] = [
  {
    index: 1,
    title: "Intelligent Automation",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format",
    description: "AI-driven systems that learn, adapt, and optimize workflows in real time."
  },
  {
    index: 2,
    title: "Human + Machine Collaboration",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop&auto=format",
    description: "Seamless synergy between people and autonomous agents for faster innovation."
  },
  {
    index: 3,
    title: "Predictive Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format",
    description: "Advanced data intelligence that anticipates market trends and customer needs."
  },
  {
    index: 4,
    title: "Next-Gen Computing",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=500&fit=crop&auto=format",
    description: "Quantum-inspired algorithms and edge computing for unprecedented performance."
  }
]