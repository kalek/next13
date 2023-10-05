/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		typedRoutes: true,
		mdxRss: true,
		serverActions: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "plus.unsplash.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "media.graphassets.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "loremflickr.com",
				port: "",
				pathname: "/**",
			},
		],
	},
	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
		];
	},
	env: {
		GRAPHQL_API_URL: "http://localhost:4000/graphql",
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
