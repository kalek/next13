import { executeGraphQl } from "./graphqlApi";
import { ColorsGetListDocument } from "@/gql/graphql";

export const getColors = async () => {
	const graphqlResponse = await executeGraphQl({
		query: ColorsGetListDocument,
	});

	return graphqlResponse.colors;
};
