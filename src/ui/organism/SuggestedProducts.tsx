import { ProductList } from "./ProductList";
import { getSuggestedProducts } from "@/api/products";

export const SuggestedProducts = async () => {
	const products = await getSuggestedProducts();

	return (
		<div
			className="mt-12 border-t-2 pt-12"
			data-testid="related-products"
		>
			<div>Suggested Products</div>
			<ProductList products={products} />
		</div>
	);
};
