import { type Metadata } from "next";
import { Suspense } from "react";
import { revalidateTag } from "next/cache";
import { AddToCartButton } from "./AddToCartButton";
import { getProduct, getProducts } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { formatMoney, prodOnly } from "@/utils";
import { SuggestedProducts } from "@/ui/organism/SuggestedProducts";
import { getColors } from "@/api/colors";
import { getSizes } from "@/api/sizes";
import { addToCart, getOrCreateCart } from "@/api/cart";
import { Reviews } from "@/ui/organism/Reviews";

export const generateMetadata = prodOnly(
	async ({
		params,
	}: {
		params: { productId: string };
	}): Promise<Metadata> => {
		const product = await getProduct(params.productId);

		if (!product) {
			return {};
		}

		const image = product.images[0] ? product.images[0].url : "";

		return {
			title: `${product.name}`,
			description: `${product.description}`,
			openGraph: {
				title: `${product.name}`,
				description: `${product.description}`,
				images: [image],
			},
		};
	},
);

const SingleProductPage = async ({
	params,
}: {
	params: { productId: string };
}) => {
	const { productId } = params;
	const product = await getProduct(productId);
	const colors = await getColors();
	const sizes = await getSizes();

	async function addToCartAction() {
		"use server";
		const cart = await getOrCreateCart();
		await addToCart(cart.id, params.productId);
		revalidateTag("cart");
	}

	if (!product) {
		return <div className="text-center">Not founds any product</div>;
	}

	const { id, name, categories, images, description, price } =
		product;
	const category = categories[0] ? categories[0].name : "";
	return (
		<div data-testid="single-product">
			<div>Id: {id}</div>
			<h1>{name}</h1>
			<h2>Category: {category}</h2>
			<div>Description: {description}</div>
			<div>Price: {formatMoney(price / 100)}</div>
			<div className="mt-10 flex flex-row gap-4">
				{images.map((image) => (
					<div className="h-96 w-96" key={image.url}>
						<ProductCoverImage src={image.url} alt={name} />
					</div>
				))}
			</div>
			<div className="my-10 flex flex-row gap-8">
				<div className="w-fit rounded-lg border p-2">
					<select>
						{colors.map((color) => (
							<option key={color.id}>{color.name}</option>
						))}
					</select>
				</div>
				<div className="w-fit rounded-lg border p-2">
					<select>
						{sizes.map((size) => (
							<option key={size.id}>{size.name}</option>
						))}
					</select>
				</div>
				<form action={addToCartAction}>
					<AddToCartButton />
				</form>
			</div>
			<Suspense fallback={<div aria-busy="true">Loading...</div>}>
				<Reviews productId={id} reviews={product.reviews} />
				<SuggestedProducts />
			</Suspense>
		</div>
	);
};

export const generateStaticParams = prodOnly(async () => {
	const products = await getProducts({
		first: 5,
		offset: 0,
		orderBy: undefined,
	});
	const productsIdsList = products.data.map((product) => ({
		productId: product.id,
	}));
	return productsIdsList;
});

export default SingleProductPage;
