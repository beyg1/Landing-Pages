// Purpose: The final Call to Action section. Uses stark typography, an intense neon green accent block, and raw layout structures to force user interaction.

export default function CTA() {
	return (
		<section className="bg-void py-32 relative overflow-hidden flex items-center justify-center border-b border-t border-steel">
			{/* Container */}
			<div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center">
				{/* Glitch Target Reticle (CSS drawing) */}
				<div className="relative w-32 h-32 mb-12 flex items-center justify-center opacity-80">
					<div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-toxic-green"></div>
					<div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-toxic-green"></div>
					<div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-toxic-green"></div>
					<div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-toxic-green"></div>

					<div className="w-2 h-2 bg-toxic-green rounded-full animate-ping"></div>
				</div>

				{/* Text Content */}
				<h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
					Terminate <br />
					<span
						className="text-transparent stroke-white"
						style={{ WebkitTextStroke: "1px white" }}
					>
						The Boilerplate
					</span>
				</h2>

				<p className="max-w-xl mx-auto text-lg text-gray-400 font-mono font-light leading-relaxed mb-16 tracking-tight">
					&gt; EXECUTING DEPLOYMENT PROTOCOL...
					<br />
					&gt; TANSTACK START ENGINE READY.
					<br />
					&gt; WAITING FOR USER INPUT.
				</p>

				{/* Action Controls */}
				<div className="flex flex-col sm:flex-row gap-0 w-full sm:w-auto border border-steel bg-charcoal">
					<a
						href="https://mirza-dev.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex-1 relative group px-12 py-6 bg-toxic-green text-charcoal shrink-0 transition-transform active:scale-[0.98]"
					>
						{/* The harsh black scanline effect */}
						<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy5wMy5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSIyIiBmaWxsPSJyZ2JhKDAsMCwwLDAuMSkiLz4KPC9zdmc+')] opacity-20 pointer-events-none mix-blend-multiply"></div>
						<span className="relative z-10 font-sans font-bold text-sm md:text-base tracking-[0.2em] uppercase w-full flex items-center justify-center">
							Contact Dev
						</span>
					</a>

					<button
						type="button"
						className="flex-1 px-12 py-6 font-mono font-medium text-xs md:text-sm tracking-widest text-gray-500 uppercase hover:text-white hover:bg-steel transition-colors shrink-0"
					>
						View Source Log
					</button>
				</div>
			</div>
		</section>
	);
}
