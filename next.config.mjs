/** @type {import('next').NextConfig} */

// When deploying to GitHub Pages, the Actions workflow sets these env vars.
// Locally (dev) and on Vercel they're undefined → normal behaviour, no basePath.
const isStaticExport = process.env.STATIC_EXPORT === "true";
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig = {
  // GitHub Pages needs a fully static site; Vercel/dev ignore this.
  output: isStaticExport ? "export" : undefined,
  // GitHub Pages serves under /<repo-name>; supplied by the workflow.
  basePath: isStaticExport ? basePath : undefined,
  images: {
    // Required for static export; harmless elsewhere. Avatars are external.
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "i.pravatar.cc" }],
  },
};

export default nextConfig;
