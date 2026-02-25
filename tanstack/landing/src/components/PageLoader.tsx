import { useEffect, useState } from "react";
import { Terminal } from "lucide-react";

export function PageLoader() {
	const [loading, setLoading] = useState(true);
	const [text, setText] = useState("");
	const [progress, setProgress] = useState(0);
	const [step, setStep] = useState(0);

	const steps = [
		"INITIALIZING KERNEL...",
		"MOUNTING VIRTUAL FILE SYSTEM...",
		"ESTABLISHING SECURE UPLINK...",
		"DECRYPTING PAYLOAD...",
		"SYSTEM ONLINE",
	];

	useEffect(() => {
		let currentStep = 0;

		const progressInterval = setInterval(() => {
			setProgress((p) => {
				const newP = p + Math.random() * 20;
				if (newP >= 100) return 100;
				return newP;
			});
		}, 150);

		const stepInterval = setInterval(() => {
			currentStep++;
			if (currentStep < steps.length) {
				setStep(currentStep);
				setText("");
			}
		}, 600);

		return () => {
			clearInterval(progressInterval);
			clearInterval(stepInterval);
		};
	}, []);

	useEffect(() => {
		let i = 0;
		const currentText = steps[step];

		// Typing effect for the current step
		const typeInterval = setInterval(() => {
			setText(currentText.slice(0, i));
			i++;
			if (i > currentText.length) {
				clearInterval(typeInterval);

				// If it's the last step and progress is done, finish loading
				if (step === steps.length - 1) {
					setTimeout(() => setLoading(false), 800);
				}
			}
		}, 25);

		return () => clearInterval(typeInterval);
	}, [step]);

	if (!loading) return null;

	return (
		<div className="fixed inset-0 z-[100] bg-void bg-grid-white flex flex-col items-center justify-center font-mono overflow-hidden">
			{/* Background Ambient Glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] bg-toxic-green/5 blur-[120px] rounded-full pointer-events-none" />

			<div className="relative z-10 w-full max-w-md mx-auto px-6 flex flex-col gap-10">
				{/* Core Reactor Animation */}
				<div className="relative w-32 h-32 mx-auto flex items-center justify-center">
					{/* Outer rings */}
					<div className="absolute inset-0 border border-toxic-green/30 rounded-full animate-[spin_4s_linear_infinite]" />
					<div className="absolute inset-2 border-t-2 border-r-2 border-toxic-green rounded-full shadow-neon animate-[spin_1.5s_linear_infinite]" />
					<div className="absolute inset-5 border border-dashed border-toxic-green/50 rounded-full animate-[spin_3s_linear_reverse_infinite]" />
					<div className="absolute inset-8 border-b-2 border-l-2 border-hazard-orange/80 rounded-full animate-[spin_2s_linear_infinite]" />

					{/* Center Eye */}
					<div className="w-5 h-5 bg-toxic-green rounded-full shadow-[0_0_25px_#39ff14] animate-pulse relative flex items-center justify-center">
						<div className="absolute inset-0 bg-toxic-green rounded-full animate-ping opacity-50"></div>
					</div>

					{/* Icon Overlay inside glow */}
					<Terminal
						className="absolute text-void/90 w-8 h-8 z-20 pointer-events-none"
						strokeWidth={1.5}
					/>
				</div>

				{/* Terminal Text Output */}
				<div className="flex flex-col gap-3 min-h-[80px]">
					<div className="flex items-center gap-2 text-toxic-green text-sm sm:text-base tracking-widest uppercase text-shadow-neon font-bold">
						<span className="text-hazard-orange">&gt;</span>
						{text}
						<span className="animate-[pulse_0.8s_cubic-bezier(0.4,0,0.6,1)_infinite] inline-block w-2 sm:w-3 h-4 sm:h-5 bg-toxic-green translate-y-[1px]" />
					</div>

					<div className="flex justify-between items-center text-xs text-steel font-medium">
						<span>
							MEM: 0x
							{Math.floor(progress * 1024)
								.toString(16)
								.toUpperCase()
								.padStart(4, "0")}
						</span>
						<span>CPU: {Math.floor(progress)}%</span>
					</div>
				</div>

				{/* Loading Bar */}
				<div className="w-full h-1 sm:h-1.5 bg-steel/50 rounded-full overflow-hidden relative">
					<div
						className="absolute top-0 left-0 h-full bg-toxic-green shadow-[0_0_15px_#39ff14] transition-all duration-150 ease-out"
						style={{ width: `${Math.min(progress, 100)}%` }}
					/>
				</div>

				{/* Decorative brackets */}
				<div className="absolute -left-4 -top-8 w-8 h-8 border-t-2 border-l-2 border-toxic-green/40 rounded-tl-lg" />
				<div className="absolute -right-4 -top-8 w-8 h-8 border-t-2 border-r-2 border-toxic-green/40 rounded-tr-lg" />
				<div className="absolute -left-4 -bottom-8 w-8 h-8 border-b-2 border-l-2 border-toxic-green/40 rounded-bl-lg" />
				<div className="absolute -right-4 -bottom-8 w-8 h-8 border-b-2 border-r-2 border-toxic-green/40 rounded-br-lg" />
			</div>
		</div>
	);
}
