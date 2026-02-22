// Purpose: The main entry point for the landing page (/). Imports and renders the Hero, Services, and CTA components.

import { createFileRoute } from "@tanstack/react-router";
import CTA from "../components/CTA";
import Hero from "../components/Hero";
import Services from "../components/Services";

export const Route = createFileRoute("/")({ component: App });

function App() {
	return (
		<div className="min-h-screen bg-slate-950">
			<Hero />
			<Services />
			<CTA />
		</div>
	);
}
