// Purpose: Demonstrates a dynamic route (/services/$serviceId) with data loading. It shows how to use loaders to fetch data based on the dynamic URL parameter.

import { createFileRoute, Link } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

// Mock database function running on the server
const fetchServiceMetadata = createServerFn({ method: "GET" })
	.inputValidator((id: string) => id)
	.handler(async ({ data: id }) => {
		// Simulate network delay
		await new Promise((resolve) => setTimeout(resolve, 500));

		const db: Record<
			string,
			{ title: string; description: string; price: string }
		> = {
			"1": {
				title: "Premium Web Hosting",
				description:
					"Blazing fast NVMe storage with 99.99% uptime guarantee and edge caching.",
				price: "$29/mo",
			},
			"2": {
				title: "Managed Database",
				description:
					"Auto-scaling PostgreSQL clusters with point-in-time recovery and read replicas.",
				price: "$49/mo",
			},
		};

		return (
			db[id] || {
				title: "Unknown Service",
				description: "Service not found.",
				price: "N/A",
			}
		);
	});

export const Route = createFileRoute("/services/$serviceId")({
	// The loader securely fetches data before the component renders
	loader: async ({ params }) => {
		const service = await fetchServiceMetadata({ data: params.serviceId });
		return {
			serviceId: params.serviceId,
			service,
		};
	},
	component: ServiceComponent,
});

function ServiceComponent() {
	// 100% Type-safe access to loader data
	const { serviceId, service } = Route.useLoaderData();

	return (
		<div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
			<div className="max-w-2xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-2xl relative overflow-hidden group">
				<div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
					<span className="text-6xl font-black text-slate-800">
						#{serviceId}
					</span>
				</div>

				<div className="relative z-10">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
						Dynamic Route
					</div>

					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
						{service.title}
					</h1>

					<p className="text-xl text-slate-400 font-light leading-relaxed mb-8">
						{service.description}
					</p>

					<div className="flex items-center justify-between border-t border-slate-800 pt-8 mt-8">
						<div>
							<p className="text-sm text-slate-500 tracking-wider uppercase font-semibold">
								Price
							</p>
							<p className="text-2xl font-bold text-white mt-1">
								{service.price}
							</p>
						</div>

						<Link
							to="/"
							className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium transition-colors border border-slate-700"
						>
							Start Building
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
