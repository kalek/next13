import { type Product } from "@/ui/types";

const TAKE_COUNT = 20;

export const getProducts = async (
	page: number,
): Promise<Product[]> => {
	const offset = (page - 1) * TAKE_COUNT;
	const url = `https://naszsklep-api.vercel.app/api/products?take=${TAKE_COUNT}&offset=${offset}`;
	const response = await fetch(url);
	const products = (await response.json()) as Product[];

	return products;
};

export const getProduct = async (id: string): Promise<Product> => {
	const response = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);
	const product = (await response.json()) as Product;

	return product;
};
