import { type Metadata } from "next";
import { getProduct, getProducts } from "@/api/products";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { prodOnly } from "@/utils";

export const generateMetadata = prodOnly(
	async ({
		params,
	}: {
		params: { productId: string };
	}): Promise<Metadata> => {
		const product = await getProduct(params.productId);

		return {
			title: `${product.title}`,
			description: `${product.description}`,
			openGraph: {
				title: `${product.title}`,
				description: `${product.description}`,
				images: [product.image],
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
	// const start = Date.now();
	const product = await getProduct(productId);
	// console.log(`Time elapsed: ${Date.now() - start} ms`);
	const { id, title, category, image, description } = product;
	return (
		<div className="max-w-2xl" data-testid="single-product">
			<div>Id: {id}</div>
			<h1>{title}</h1>
			<h2>Category: {category}</h2>
			<div>{description}</div>
			<ProductCoverImage src={image} alt={title} />
			<ProductListItemDescription product={product} />
		</div>
	);
};

export const generateStaticParams = prodOnly(async () => {
	const products = await getProducts(1);
	const productsIdsList = products.map((product) => ({
		productId: product.id,
	}));
	return productsIdsList.slice(0, 5);
});

export default SingleProductPage;
