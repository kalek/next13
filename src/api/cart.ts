import { cookies } from "next/headers";
import { executeGraphQl } from "./graphqlApi";
import {
	CartGetByIdDocument,
	CartCreateDocument,
	CartAddProductDocument,
} from "@/gql/graphql";

export const getOrCreateCart = async () => {
	const existingCart = await getCartFromCookies();
	if (existingCart) {
		return existingCart;
	}
	const cart = await createCart();
	if (!cart.createOrder) {
		throw new Error("Failed to create cart");
	}
	cookies().set("cartId", cart.createOrder.id, {
		httpOnly: true,
		sameSite: "lax",
	});
	return cart.createOrder;
};

export const getCartFromCookies = async () => {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const cart = await executeGraphQl({
			query: CartGetByIdDocument,
			variables: {
				id: cartId,
			},
			cache: "no-store",
			next: {
				tags: ["cart"],
			},
		});
		if (cart.order) {
			return cart.order;
		}
	}
};

export const createCart = async () => {
	return executeGraphQl({ query: CartCreateDocument });
};

export const addToCart = async (
	orderId: string,
	productId: string,
) => {
	await executeGraphQl({
		query: CartAddProductDocument,
		variables: {
			orderId,
			productId,
		},
	});
};
