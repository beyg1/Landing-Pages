// Purpose: Displays platform capabilities using a brutalist grid, mono-spaced typography accents, and high-contrast interactions.

import { ChevronRight, Cpu, Layers, ShieldCheck, Zap } from "lucide-react";

const services = [
	{
		status: "ACTIVE_PROTOCOL",
		title: "TYPE_SAFE ROUTING",
		description:
			"End-to-end type safety eliminates dead links and parameter ambiguity. Compile-time guarantees for every dynamic segment.",
		icon: <Layers className="h-6 w-6 text-void" />,
		stat: "100%",
		statLabel: "TYPE COVERAGE",
	},
	{
		status: "MODULE_LOADED",
		title: "RPC SERVER FNS",
		description:
			"Direct client-to-server execution vectors. Bypass REST/GraphQL boilerplate entirely. Secure, typed, immediate.",
		icon: <Zap className="h-6 w-6 text-void" />,
		stat: "0",
		statLabel: "API ROUTES WRITTEN",
	},
	{
		status: "SYS_OPTIMIZED",
		title: "CORE STABILITY",
		description:
			"Built atop the battle-tested TanStack engine. Designed for mission-critical interfaces requiring zero downtime.",
		icon: <ShieldCheck className="h-6 w-6 text-void" />,
		stat: "V1.0",
		statLabel: "ENGINE VERSION",
	},
	{
		status: "FEATURE_FLAG_ON",
		title: "STREAM RESPONSE",
		description:
			"Progressive enhancement integrated at the foundation. Render instantly, hydrate intelligently. Built for the Edge.",
		icon: <Cpu className="h-6 w-6 text-void" />,
		stat: "<50ms",
		statLabel: "TIME TO FIRST BYTE",
	},
];

export default function Services() {
	return (
		<section className="relative py-32 bg-void text-white border-b border-steel overflow-hidden">
			{/* Background Dot Matrix */}
			<div className="absolute inset-0 bg-dot-white opacity-40 pointer-events-none"></div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
				{/* Brutalist Section Header */}
				<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
					<div className="max-w-3xl">
						<h2 className="font-mono text-toxic-green text-sm tracking-[0.2em] mb-4 uppercase">
							{/* Capabilities_Matrix */}
						</h2>
						<h3 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-[0.9]">
							Architectural <br />
							<span
								className="text-transparent"
								style={{ WebkitTextStroke: "1px white" }}
							>
								Supremacy
							</span>
						</h3>
					</div>

					<div className="font-mono text-xs text-gray-500 uppercase flex flex-col gap-1 text-right">
						<span>GRID_COLUMNS: 04</span>
						<span>CAPACITY: MAXIMUM</span>
					</div>
				</div>

				{/* Industrial CSS Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-steel border border-steel">
					{services.map((service) => (
						<div
							key={service.title}
							className="group relative bg-void p-10 md:p-14 transition-all duration-300 hover:bg-charcoal flex flex-col justify-between overflow-hidden"
						>
							{/* Top Meta info */}
							<div className="flex items-center justify-between mb-16 relative z-10 w-full">
								<div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
									[{service.status}]
								</div>
								<div className="p-3 bg-white group-hover:bg-toxic-green transition-colors duration-300">
									{service.icon}
								</div>
							</div>

							{/* Main Content */}
							<div className="relative z-10 max-w-sm w-full">
								<h4 className="font-display text-3xl font-bold uppercase tracking-tight text-white mb-4 group-hover:text-toxic-green transition-colors">
									{service.title}
								</h4>
								<p className="font-sans text-gray-400 font-light leading-relaxed mb-12">
									{service.description}
								</p>
							</div>

							{/* Bottom Stat Bar */}
							<div className="flex items-center justify-between pt-6 border-t border-steel group-hover:border-gray-600 transition-colors w-full">
								<div>
									<div className="font-display text-2xl font-bold text-white tracking-widest">
										{service.stat}
									</div>
									<div className="font-mono text-[10px] text-gray-500 mt-1 uppercase tracking-wider">
										{service.statLabel}
									</div>
								</div>

								<div className="w-10 h-10 border border-steel flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-toxic-green group-hover:text-toxic-green transition-all duration-300">
									<ChevronRight className="w-5 h-5" />
								</div>
							</div>

							{/* Harsh Glitch Hover Graphic */}
							<div className="absolute -bottom-24 -right-24 w-64 h-64 bg-toxic-green opacity-0 group-hover:opacity-[0.03] rounded-full blur-3xl transition-opacity duration-700 pointer-events-none"></div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
