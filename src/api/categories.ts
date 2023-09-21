import { executeGraphql } from "./graphqlApi";
import {
	CategoryListDocument,
	CategoryBySlugDocument,
} from "@/gql/graphql";

export const getCategories = async () => {
	const graphqlResponse = await executeGraphql(
		CategoryListDocument,
		{},
	);

	return graphqlResponse.categories;
};

export const getCategory = async ({
	slug,
	first,
	offset,
}: {
	slug: string;
	first: number;
	offset: number;
}) => {
	const graphqlResponse = await executeGraphql(
		CategoryBySlugDocument,
		{
			slug,
			first,
			offset,
		},
	);

	return graphqlResponse.categoryBySlug;
};
