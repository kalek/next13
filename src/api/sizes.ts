import { executeGraphql } from "./graphqlApi";
import { SizesGetListDocument } from "@/gql/graphql";

export const getSizes = async () => {
	const graphqlResponse = await executeGraphql(
		SizesGetListDocument,
		{},
	);

	return graphqlResponse.sizes;
};
