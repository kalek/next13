import { executeGraphql } from "./graphqlApi";
import {
	CollectionsGetListDocument,
	CollectionBySlugDocument,
} from "@/gql/graphql";

export const getCollections = async () => {
	const graphqlResponse = await executeGraphql(
		CollectionsGetListDocument,
		{},
	);

	return graphqlResponse.collections;
};

export const getCollection = async ({ slug }: { slug: string }) => {
	const graphqlResponse = await executeGraphql(
		CollectionBySlugDocument,
		{
			slug,
		},
	);

	return graphqlResponse.collectionBySlug;
};
