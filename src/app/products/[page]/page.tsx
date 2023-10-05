import { getProducts } from "@/api/products";
import { Pagination } from "@/ui/organism/Pagination";
import { ProductList } from "@/ui/organism/ProductList";
import { SortByPrice } from "@/ui/organism/SortByPrice";
import { SortByRating } from "@/ui/organism/SortByRating";
import { prodOnly } from "@/utils";

const PAGE_SIZE = 5;

const Products = async ({
	params,
	searchParams,
}: {
	params: { page: string };
	searchParams: { sortByPrice: string; sortByRating: string };
}) => {
	const { page } = params;
	const { sortByPrice, sortByRating } = searchParams;
	const products = await getProducts({
		first: PAGE_SIZE,
		offset: (parseInt(page) - 1) * PAGE_SIZE,
		orderBy: sortByPrice
			? { price: "asc" }
			: sortByRating
			? { avgRating: "asc" }
			: undefined,
	});

	if (products.data.length === 0) {
		return <div className="text-center">Not founds any products</div>;
	}

	const getQueryParams = () => {
		if (sortByPrice) {
			return "?sortByPrice=true";
		}
		if (sortByRating) {
			return "?sortByRating=true";
		}
		return "";
	};

	return (
		<>
			<div className="flex flex-row gap-4">
				<SortByPrice />
				<SortByRating />
			</div>
			<ProductList products={products.data} />
			<Pagination
				currentPage={parseInt(page)}
				totalCount={products.total}
				pageSize={PAGE_SIZE}
				queryParams={getQueryParams()}
			/>
		</>
	);
};

export const generateStaticParams = prodOnly(async () => {
	const products = await getProducts({
		first: 1,
		offset: 0,
		orderBy: undefined,
	});
	const pagesAmount = Math.ceil(products.total / PAGE_SIZE);
	const pages = [];
	for (let i = 1; i <= pagesAmount; i++) {
		pages.push({ page: i.toString() });
	}
	return pages.slice(0, 5);
});

export default Products;
