// Purpose: The global navigation header and sidebar menu. Redesigned to fit the Industrial Monochrome & Neon aesthetic with sharp borders, mono-spaced fonts, and glitchy hover states.

import { Link } from "@tanstack/react-router";
import { FileText, Home, Menu, Server, Terminal, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* Top Navbar */}
			<header className="fixed w-full top-0 z-40 px-6 py-4 flex items-center justify-between bg-void/90 backdrop-blur-md border-b border-steel">
				{/* Logo / Brand */}
				<div className="flex items-center gap-4">
					<button
						type="button"
						onClick={() => setIsOpen(true)}
						className="p-2 text-white hover:text-toxic-green hover:bg-white/5 border border-transparent hover:border-steel transition-colors group"
						aria-label="Open menu"
					>
						<Menu
							size={24}
							className="group-active:scale-95 transition-transform"
						/>
					</button>
					<h1 className="text-xl font-bold tracking-tight">
						<Link
							to="/"
							className="flex items-center gap-2 hover:opacity-80 transition-opacity"
						>
							{/* Tanstack Logo - using CSS filter for hard white */}
							<img
								src="/tanstack-word-logo-white.svg"
								alt="TanStack Logo"
								className="h-8 brightness-200 contrast-200"
							/>
							<span className="font-mono text-toxic-green text-xs tracking-widest uppercase mt-1 hidden sm:inline-block">
								v1.0_ALPHA
							</span>
						</Link>
					</h1>
				</div>

				{/* Right Side Actions */}
				<div className="hidden md:flex items-center gap-6">
					<span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">
						SYS: ONLINE
					</span>
					<div className="w-2 h-2 rounded-full bg-toxic-green animate-pulse shadow-[0_0_8px_#39ff14]"></div>
				</div>
			</header>

			{/* Sidebar Overlay */}
			{isOpen && (
				<button
					type="button"
					className="fixed inset-0 w-full h-full bg-black/60 backdrop-blur-sm z-40 transition-opacity cursor-default"
					onClick={() => setIsOpen(false)}
					onKeyDown={(e) => e.key === "Escape" && setIsOpen(false)}
					aria-label="Close menu overlay"
				/>
			)}

			{/* Sidebar Navigation */}
			<aside
				className={`fixed top-0 left-0 h-full w-80 bg-charcoal border-r border-steel text-white z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				{/* Sidebar Header */}
				<div className="flex items-center justify-between p-6 border-b border-steel bg-void">
					<h2 className="font-mono text-sm tracking-[0.2em] uppercase text-toxic-green">
						{"//"} Directory
					</h2>
					<button
						type="button"
						onClick={() => setIsOpen(false)}
						className="p-2 text-gray-400 hover:text-white hover:bg-steel border border-transparent transition-colors group"
						aria-label="Close menu"
					>
						<X
							size={20}
							className="group-active:scale-95 transition-transform"
						/>
					</button>
				</div>

				{/* Navigation Links */}
				<nav className="flex-1 p-6 overflow-y-auto flex flex-col gap-2">
					<Link
						to="/"
						onClick={() => setIsOpen(false)}
						className="group flex items-center gap-4 p-4 border border-transparent hover:border-steel hover:bg-steel/30 transition-colors"
						activeProps={{
							className:
								"flex items-center gap-4 p-4 border border-toxic-green bg-toxic-green/10 text-toxic-green transition-colors",
						}}
					>
						<Home size={18} className="text-gray-400 group-hover:text-white" />
						<span className="font-sans font-medium uppercase tracking-wider text-sm">
							Index
						</span>
					</Link>

					<Link
						to="/about"
						onClick={() => setIsOpen(false)}
						className="group flex items-center gap-4 p-4 border border-transparent hover:border-steel hover:bg-steel/30 transition-colors"
						activeProps={{
							className:
								"flex items-center gap-4 p-4 border border-toxic-green bg-toxic-green/10 text-toxic-green transition-colors",
						}}
					>
						<FileText
							size={18}
							className="text-gray-400 group-hover:text-white"
						/>
						<span className="font-sans font-medium uppercase tracking-wider text-sm">
							Static Page
						</span>
					</Link>

					<Link
						to="/services/$serviceId"
						params={{ serviceId: "1" }}
						onClick={() => setIsOpen(false)}
						className="group flex items-center gap-4 p-4 border border-transparent hover:border-steel hover:bg-steel/30 transition-colors"
						activeProps={{
							className:
								"flex items-center gap-4 p-4 border border-toxic-green bg-toxic-green/10 text-toxic-green transition-colors",
						}}
					>
						<Server
							size={18}
							className="text-gray-400 group-hover:text-white"
						/>
						<span className="font-sans font-medium uppercase tracking-wider text-sm">
							Dynamic Route
						</span>
					</Link>
				</nav>

				{/* Sidebar Footer */}
				<div className="p-6 border-t border-steel text-xs font-mono text-gray-500 uppercase bg-void flex items-center gap-3">
					<Terminal size={14} className="text-toxic-green" />
					<span>Waiting for input_</span>
				</div>
			</aside>
		</>
	);
}
