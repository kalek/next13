import { executeGraphQl } from "./graphqlApi";
import { SizesGetListDocument } from "@/gql/graphql";

export const getSizes = async () => {
	const graphqlResponse = await executeGraphQl({
		query: SizesGetListDocument,
	});

	return graphqlResponse.sizes;
};
