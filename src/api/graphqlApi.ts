import { type TypedDocumentString } from "@/gql/graphql";

export const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw new Error("Missing GRAPHQL_URL environment variable");
	}

	const response = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			query,
			variables,
		}),
	});

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlResponse =
		(await response.json()) as GraphQLResponse<TResult>;

	if (graphqlResponse.errors) {
		throw TypeError("GraphQL Error", {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};