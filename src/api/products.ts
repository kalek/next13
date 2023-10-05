import { executeGraphQl } from "./graphqlApi";
import {
	ProductsGetListDocument,
	ProductGetItemDocument,
	SuggestedProductGetListDocument,
	SearchProductsDocument,
	ReviewCreateDocument,
} from "@/gql/graphql";

export const getProducts = async ({
	first,
	offset,
	orderBy,
}: {
	first: number;
	offset: number;
	orderBy:
		| { price: "asc" | "desc" }
		| { avgRating: "asc" | "desc" }
		| undefined;
}) => {
	const graphqlResponse = await executeGraphQl({
		query: ProductsGetListDocument,
		variables: {
			first,
			offset,
			orderBy,
		},
		next: {
			revalidate: 15,
		},
	});

	return graphqlResponse.products;
};

export const getProduct = async (id: string) => {
	const graphqlResponse = await executeGraphQl({
		query: ProductGetItemDocument,
		variables: {
			productId: id,
		},
		next: {
			tags: ["product"],
		},
	});

	return graphqlResponse.product;
};

export const getSuggestedProducts = async () => {
	const graphqlResponse = await executeGraphQl({
		query: SuggestedProductGetListDocument,
	});

	return graphqlResponse.suggestedProducts;
};

export const searchProducts = async (query: string) => {
	const graphqlResponse = await executeGraphQl({
		query: SearchProductsDocument,
		variables: {
			query,
		},
	});

	return graphqlResponse.searchProducts;
};

export const addReview = async ({
	productId,
	title,
	description,
	rating,
	name,
	email,
}: {
	productId: string;
	title: string;
	description: string;
	rating: number;
	name: string;
	email: string;
}) => {
	const graphqlResponse = await executeGraphQl({
		query: ReviewCreateDocument,
		variables: {
			productId,
			title,
			description,
			rating,
			name,
			email,
		},
	});

	return graphqlResponse.addReview;
};
