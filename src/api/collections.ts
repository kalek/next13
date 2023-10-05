import { executeGraphQl } from "./graphqlApi";
import {
	CollectionsGetListDocument,
	CollectionBySlugDocument,
} from "@/gql/graphql";

export const getCollections = async () => {
	const graphqlResponse = await executeGraphQl({
		query: CollectionsGetListDocument,
	});

	return graphqlResponse.collections;
};

export const getCollection = async ({ slug }: { slug: string }) => {
	const graphqlResponse = await executeGraphQl({
		query: CollectionBySlugDocument,
		variables: {
			slug,
		},
	});

	return graphqlResponse.collectionBySlug;
};
