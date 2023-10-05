import { NextResponse } from "next/server";
import { executeGraphQl } from "@/api/graphqlApi";
import { GetAllProductsDocument } from "@/gql/graphql";

export async function GET(): Promise<Response> {
	const graphqlResponse = await executeGraphQl({
		query: GetAllProductsDocument,
		variables: undefined,
	});

	return NextResponse.json(graphqlResponse.products.data, {
		status: 200,
	});
}
