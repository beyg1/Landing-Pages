// Purpose: Vite build configuration. Registers TanStack Start, Tailwind, Nitro (server runtime), Cloudflare Workers, and React plugins.
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { cloudflare } from '@cloudflare/vite-plugin';

const config = defineConfig({
	plugins: [
		devtools(),
		nitro({ rollupConfig: { external: [/^@sentry\//] } }),
		tsconfigPaths({ projects: ["./tsconfig.json"] }),
		tailwindcss(),
		cloudflare({ viteEnvironment: { name: 'ssr' } }),
		tanstackStart(),
		viteReact(),
	],
});

export default config;
