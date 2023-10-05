"use client";
import {
	experimental_useOptimistic as useOptimistic,
	useRef,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { type Review } from "@/gql/graphql";
import { addReviewToProduct } from "@/app/product/[productId]/actions";

export const Reviews = ({
	reviews,
	productId,
}: {
	reviews: Review[];
	productId: string;
}) => {
	const [optimisticReviews, setOptimisticReviews] = useOptimistic(
		reviews,
		(_state, newReviews: Review[]) => newReviews,
	);
	const ref = useRef<HTMLFormElement>(null);

	return (
		<div
			className="mt-12 border-t-2 pt-12"
			data-testid="review-products"
		>
			<div className="text-2xl font-bold">Reviews</div>
			<form className="mb-10" data-testid="add-review-form" ref={ref}>
				<div>
					<label htmlFor="headline">Title</label>
					<input
						required
						className="border"
						type="text"
						name="headline"
					/>
				</div>
				<div>
					<label htmlFor="content">Content</label>
					<input
						required
						className="border"
						type="text"
						name="content"
					/>
				</div>
				<div>
					<label htmlFor="rating">Rating</label>
					<input
						className="border"
						type="number"
						defaultValue={5}
						min={1}
						max={5}
						name="rating"
						required
					/>
				</div>
				<div>
					<label htmlFor="name">Username</label>
					<input
						required
						className="border"
						type="text"
						name="name"
					/>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input
						required
						className="border"
						type="text"
						name="email"
					/>
				</div>
				<button
					className="mt-4 rounded-lg border-2 p-2"
					type="submit"
					formAction={async (formData: FormData) => {
						const data = {
							// eslint-disable-next-line @typescript-eslint/no-unsafe-call
							id: uuidv4(),
							title: formData.get("headline") as string,
							description: formData.get("content") as string,
							rating: parseInt(formData.get("rating") as string),
							name: formData.get("name") as string,
							email: formData.get("email") as string,
							createdAt: new Date().toISOString(),
						};
						setOptimisticReviews([...optimisticReviews, data]);
						ref.current?.reset();
						await addReviewToProduct({
							productId: productId,
							title: data.title,
							description: data.description,
							rating: data.rating,
							name: data.name,
							email: data.email,
						});
					}}
				>
					Add review
				</button>
			</form>
			{optimisticReviews.map((review) => (
				<div
					key={review.id}
					className="mt-4 flex flex-col rounded-lg border p-5"
				>
					<div>Title: {review.title}</div>
					<div>Rating: {review.rating}</div>
					<div>Description: {review.description}</div>
					<div>Name: {review.name}</div>
					<div>Email: {review.email}</div>
				</div>
			))}
		</div>
	);
};
