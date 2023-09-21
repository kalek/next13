import { getProducts } from "@/api/products";
import { Pagination } from "@/ui/organism/Pagination";
import { ProductList } from "@/ui/organism/ProductList";
import { prodOnly } from "@/utils";

const PAGE_SIZE = 5;

const Products = async ({ params }: { params: { page: string } }) => {
	const { page } = params;
	const products = await getProducts({
		first: PAGE_SIZE,
		offset: (parseInt(page) - 1) * PAGE_SIZE,
	});

	if (products.data.length === 0) {
		return <div className="text-center">Not founds any products</div>;
	}

	return (
		<>
			<ProductList products={products.data} />
			<Pagination
				currentPage={parseInt(page)}
				totalCount={products.total}
				pageSize={PAGE_SIZE}
			/>
		</>
	);
};

export const generateStaticParams = prodOnly(async () => {
	const products = await getProducts({ first: 1, offset: 0 });
	const pagesAmount = Math.ceil(products.total / PAGE_SIZE);
	const pages = [];
	for (let i = 1; i <= pagesAmount; i++) {
		pages.push({ page: i.toString() });
	}
	return pages.slice(0, 5);
});

export default Products;
