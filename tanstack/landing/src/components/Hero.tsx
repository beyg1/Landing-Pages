// Purpose: A stark, industrial, heavily contrasting Hero component using Syne typography and toxic green neon accents.

export default function Hero() {
	return (
		<section className="relative w-full min-h-[95vh] flex items-center justify-center overflow-hidden bg-void border-b border-steel">
			{/* Background Grid Pattern */}
			<div className="absolute inset-0 bg-grid-white pointer-events-none"></div>

			{/* Intense Radial Mask to fade grid at edges */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,theme(colors.void)_70%)] pointer-events-none"></div>

			<div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center text-center">
				{/* Monospaced Technical Badge */}
				<div className="group inline-flex items-center gap-3 px-4 py-2 border border-steel bg-charcoal mb-10 transition-colors hover:border-toxic-green cursor-pointer">
					<div className="w-2 h-2 bg-toxic-green shadow-[0_0_8px_#39ff14] animate-pulse"></div>
					<span className="font-mono text-xs uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
						SYSTEM_STATUS: ONLINE {"//"} START ALPHA_1.0
					</span>
				</div>

				{/* Brutalist Hero Typography */}
				<h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold leading-[0.9] uppercase tracking-tighter mb-8">
					<span className="block text-gray-100 mix-blend-difference">
						Uncompromising
					</span>
					<span
						className="block text-transparent stroke-white"
						style={{ WebkitTextStroke: "2px white", color: "#050505" }}
					>
						Web Velocity
					</span>
				</h1>

				{/* Clean, readable subtext */}
				<p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-sans font-light leading-relaxed mb-12">
					Deploy fully type-safe, server-first applications directly to the
					edge. Stop writing redundant APIs. Trust the compiler.
				</p>

				{/* High-Contrast CTAs */}
				<div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center">
					<button
						type="button"
						className="relative w-full sm:w-auto group px-8 py-4 bg-toxic-green text-charcoal font-sans font-bold text-sm tracking-widest uppercase overflow-hidden transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_-10px_#39ff14]"
					>
						<span className="relative z-10 flex items-center gap-2">
							Initialize Deployment &rarr;
						</span>
						{/* Hard Glitch hover effect */}
						<div className="absolute inset-0 h-full w-full bg-white opacity-0 group-hover:opacity-20 transform -skew-x-12 translate-x-[150%] group-hover:translate-x-[-150%] transition-transform duration-700 ease-out"></div>
					</button>

					<button
						type="button"
						className="w-full sm:w-auto px-8 py-4 font-mono font-medium text-xs tracking-widest text-gray-300 uppercase border border-steel hover:bg-steel hover:text-white transition-colors"
					>
						[ Read Documentation ]
					</button>
				</div>
			</div>

			{/* Decorative Technical UI Elements */}
			<div className="absolute top-6 left-6 hidden xl:flex flex-col gap-2 opacity-50 font-mono text-[10px] text-gray-500 tracking-wider">
				<span>LAT: 40.7128° N</span>
				<span>LNG: 74.0060° W</span>
				<span>SYS: SECURE</span>
			</div>

			<div className="absolute bottom-6 right-6 hidden xl:flex text-right flex-col gap-2 opacity-50 font-mono text-[10px] text-gray-500 tracking-wider">
				<span>MEM_ALLOC: OPTIMAL</span>
				<span>NET_LATENCY: {"<"} 14MS</span>
				<span className="text-toxic-green">CONN: ESTABLISHED</span>
			</div>
		</section>
	);
}
