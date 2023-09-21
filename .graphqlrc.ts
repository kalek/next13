import { loadEnvConfig } from "@next/env";
import type { CodegenConfig } from "@graphql-codegen/cli";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
	overwrite: true,
	schema: process.env.GRAPHQL_URL,
	documents: [
		"src/**/*.graphql",
		"src/{app,ui,api,lib}/**/*.{ts,tsx}",
	],
	ignoreNoDocuments: true,
	generates: {
		"src/gql/": {
			preset: "client",
			presetConfig: {
				fragmentMasking: false,
			},
			config: {
				defaultScalarType: "unknown",
				useTypeImports: true,
				enumsAsTypes: true,
				skipTypename: true,
				documentMode: "string",
			},
		},
	},
};

export default config;
