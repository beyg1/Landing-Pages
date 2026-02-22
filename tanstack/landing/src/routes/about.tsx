// Purpose: Demonstrates a simple static route (/about) in TanStack Start. It renders without any data loading requirements.

import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
	component: AboutComponent,
});

function AboutComponent() {
	return (
		<div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 text-center">
			<div className="max-w-3xl space-y-6">
				<div className="w-20 h-20 bg-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-indigo-500/30">
					<span className="text-4xl">📄</span>
				</div>

				<h1 className="text-5xl font-extrabold tracking-tight">
					Static Route Example
				</h1>

				<p className="text-xl text-slate-400 font-light leading-relaxed">
					This is a static route at{" "}
					<code className="bg-slate-800 px-2 py-1 rounded text-cyan-400">
						/about
					</code>
					. Unlike Next.js App Router where you put a{" "}
					<code className="bg-slate-800 px-2 py-1 rounded text-cyan-400">
						page.tsx
					</code>{" "}
					inside an{" "}
					<code className="bg-slate-800 px-2 py-1 rounded text-cyan-400">
						about
					</code>{" "}
					folder, in TanStack start you just create a file named{" "}
					<code className="bg-slate-800 px-2 py-1 rounded text-cyan-400">
						about.tsx
					</code>{" "}
					in the routes directory.
				</p>

				<div className="pt-8">
					<Link
						to="/"
						className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4"
					>
						&larr; Back to Home
					</Link>
				</div>
			</div>
		</div>
	);
}
