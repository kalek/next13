"use server";

import { revalidateTag } from "next/cache";
import { addReview } from "@/api/products";

interface Review {
	productId: string;
	title: string;
	description: string;
	rating: number;
	name: string;
	email: string;
}

export const addReviewToProduct = async ({
	productId,
	title,
	description,
	rating,
	name,
	email,
}: Review) => {
	await addReview({
		productId,
		title,
		description,
		rating,
		name,
		email,
	});
	revalidateTag("product");
};
