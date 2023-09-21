import { executeGraphql } from "./graphqlApi";
import {
	ProductsGetListDocument,
	ProductGetItemDocument,
	SuggestedProductGetListDocument,
	SearchProductsDocument,
} from "@/gql/graphql";

export const getProducts = async ({
	first,
	offset,
}: {
	first: number;
	offset: number;
}) => {
	const graphqlResponse = await executeGraphql(
		ProductsGetListDocument,
		{
			first,
			offset,
		},
	);

	return graphqlResponse.products;
};

export const getProduct = async (id: string) => {
	const graphqlResponse = await executeGraphql(
		ProductGetItemDocument,
		{
			productId: id,
		},
	);

	return graphqlResponse.product;
};

export const getSuggestedProducts = async () => {
	const graphqlResponse = await executeGraphql(
		SuggestedProductGetListDocument,
		{},
	);

	return graphqlResponse.suggestedProducts;
};

export const searchProducts = async (query: string) => {
	const graphqlResponse = await executeGraphql(
		SearchProductsDocument,
		{
			query,
		},
	);

	return graphqlResponse.searchProducts;
};
