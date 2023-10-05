"use server";

import { revalidateTag } from "next/cache";
import { v4 as uuidv4 } from "uuid";
import { executeGraphQl } from "@/api/graphqlApi";
import {
	CartSetProductQuantityDocument,
	CartRemoveProductDocument,
} from "@/gql/graphql";

export const removeItem = async (itemId: string) => {
	await executeGraphQl({
		query: CartRemoveProductDocument,
		variables: {
			itemId,
		},
	});
};

export const changeItemQuantity = async (
	itemId: string,
	quantity: number,
) => {
	await executeGraphQl({
		query: CartSetProductQuantityDocument,
		variables: {
			itemId,
			quantity,
			hash: uuidv4(),
		},
	});
	revalidateTag("cart");
};
