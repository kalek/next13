import { searchProducts } from "@/api/products";
import { ProductList } from "@/ui/organism/ProductList";

type SearchPageProps = {
	searchParams: {
		query: string;
	};
};

const SearchPage = async ({ searchParams }: SearchPageProps) => {
	const query = searchParams.query;
	const products = await searchProducts(query);
	return (
		<div>
			{products.length === 0 ? (
				<p className="text-center">No products found</p>
			) : (
				<ProductList products={products} />
			)}
		</div>
	);
};

export default SearchPage;
