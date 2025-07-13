import type { NextConfig } from "next";

const securityHeaders = [
	{
		key: "X-DNS-Prefetch-Control",
		value: "on",
	},
	{
		key: "X-XSS-Protection",
		value: "1; mode=block",
	},
	{
		key: "X-Content-Type-Options",
		value: "nosniff",
	},
	{
		key: "Referrer-Policy",
		value: "strict-origin",
	},
	{
		key: "Content-Security-Policy",
		value: `frame-ancestors 'self';`,
	},
	{
		key: "X-Frame-Options",
		value: "SAMEORIGIN",
	},
	{
		key: "Strict-Transport-Security",
		value: "max-age=31536000; includeSubDomains; preload",
	},
	{
		key: "Permissions-Policy",
		value: "camera=(), microphone=(), geolocation=()",
	},
	{
		key: "X-Source",
		value: "github.com/skidoodle/albert.lol",
	},
];

const nextConfig: NextConfig = {
	async headers() {
		return [
			{
				source: "/:path*",
				headers: securityHeaders,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.scdn.co",
			},
			{
				protocol: "https",
				hostname: "placehold.co",
			},
		],
	},
	reactStrictMode: true,
	poweredByHeader: false,
	productionBrowserSourceMaps: false,
};

export default nextConfig;
