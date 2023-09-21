import { executeGraphql } from "./graphqlApi";
import { ColorsGetListDocument } from "@/gql/graphql";

export const getColors = async () => {
	const graphqlResponse = await executeGraphql(
		ColorsGetListDocument,
		{},
	);

	return graphqlResponse.colors;
};
