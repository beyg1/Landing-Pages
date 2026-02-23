# TanStack Start for Next.js Developers ⚡️

Welcome to TanStack Start! Since you already know Next.js (App Router), here is the ultra-concise cheat sheet to map your Next.js brain to TanStack Start.

## 📂 1. Routing & Files (The Big Difference)

TanStack Start uses **file-based routing**, but it's completely **Type-Safe**. Every time you create a route, `src/routeTree.gen.ts` is auto-generated. **Do not touch `routeTree.gen.ts`.**

| Next.js App Router | TanStack Start (`src/routes/`) | Purpose |
| :--- | :--- | :--- |
| `app/layout.tsx` | `__root.tsx` | The global layout. Wraps the whole app. |
| `app/page.tsx` | `index.tsx` | The home page (`/`). |
| `app/about/page.tsx` | `about.tsx` | Static route (`/about`). |
| `app/blog/[id]/page.tsx`| `blog/$id.tsx` | Dynamic route (`/blog/123`). |

*Notice the `$` instead of `[]` for dynamic routes.*

## ⚙️ 2. Server vs Client Components

Next.js defaults to Server Components. TanStack Start defaults to **Client Components**, but uses a powerful `loader` pattern to fetch server data before the page renders (similar to Remix or Next.js Pages Router `getServerSideProps`).

### How to fetch data (The TanStack Way)

Instead of making the component `async`, you define a `loader` in the route definition.

```tsx
// src/routes/services/$serviceId.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/$serviceId')({
  // 1. Fetch data on the server
  loader: async ({ params }) => {
    const data = await fetch(`https://api.example.com/services/${params.serviceId}`)
    return data.json()
  },
  // 2. Render the component
  component: ServicePage,
})

function ServicePage() {
  // 3. Consume the data with 100% type safety
  const data = Route.useLoaderData()
  return <div>{data.name}</div>
}
```

## 🚀 3. Server Functions (RPC)

In Next.js you use Server Actions (`"use server"`).
In TanStack Start, you use `createServerFn`. This creates an RPC endpoint automatically.

```tsx
import { createServerFn } from '@tanstack/react-start'

const submitForm = createServerFn({ method: 'POST' })
  .handler(async ({ data }) => {
    // This runs securely on the server
    await db.insert(data)
    return { success: true }
  })
```

## 🎨 4. Tailwind & Styling

Tailwind CSS v4 is already configured. 
- Global styles go in `src/styles.css`.
- Just use standard Tailwind utility classes in your `.tsx` components.

---

## ☁️ 5. Deploying to Cloudflare

Deploying a TanStack Start app to Cloudflare Workers is extremely straightforward.

**Step 1. Create an Account**
Sign up at [Cloudflare Dashboard](https://dash.cloudflare.com) if you don't have an account.

**Step 2. Install Dependencies**
```bash
pnpm add -D @cloudflare/vite-plugin wrangler
```

**Step 3. Configure Vite (`vite.config.ts`)**
*Note: Even though TanStack Start uses Nitro (which can build for Cloudflare natively), we still need the `@cloudflare/vite-plugin`. Nitro handles the production build, but this Vite plugin allows your local `pnpm dev` server to simulate the Cloudflare runtime (Miniflare) so you can test KV/D1 databases locally!*

Import the cloudflare plugin and add it to your plugins array:
```ts
import { cloudflare } from '@cloudflare/vite-plugin'

export default defineConfig({
  plugins: [
    cloudflare({ viteEnvironment: { name: 'ssr' } }), // <--- Add this
    tanstackStart(),
  ],
})
```

**Step 4. Update Scripts (`package.json`)**
Add the deploy command replacing the default start command:
```json
"scripts": {
  "preview": "vite preview",
  "deploy": "pnpm run build && wrangler deploy",
  "cf-typegen": "wrangler types"
}
```

**Step 5. Authenticate & Deploy**
```bash
# 1. Login to your Cloudflare account (opens browser)
npx wrangler login

# 2. Deploy your application
pnpm run deploy
```

---

## What we built in this project:

1. **`src/routes/index.tsx`**: A sleek Landing Page with Hero, Services, and CTA sections.
2. **`src/routes/about.tsx`**: A static route example.
3. **`src/routes/services/$serviceId.tsx`**: A dynamic route example.

*Run `pnpm dev` to start the server at `http://localhost:3000`.*
