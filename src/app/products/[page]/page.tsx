import { getProducts } from "@/api/products";
import { Pagination } from "@/ui/organism/Pagination";
import { ProductList } from "@/ui/organism/ProductList";
// import { type Product } from "@/ui/types";
import { prodOnly } from "@/utils";
// import { type ProductItemType } from "@/ui/types";

// interface GetProductsResponse {
// 	data: {
// 		products: ProductItemType[];
// 	};
// }

// const getProducts = async (): Promise<GetProductsResponse> => {
// 	const response = await fetch(`${process.env.GRAPHQL_API_URL}`, {
// 		method: "POST",
// 		headers: { "Content-Type": "application/json" },
// 		body: JSON.stringify({
// 			query: `
// 				query {
// 					products {
// 						id
// 						name
// 						price
// 						category
// 						coverImage {
// 							alt
// 							src
// 						}
// 					}
// 				}
// 			`,
// 		}),
// 	});

// 	const data = (await response.json()) as GetProductsResponse;

// 	return data;
// };

// const checkHowManyPages = async (
// 	page: number,
// ): Promise<Product[] | number> => {
// 	const products = await getProducts(page);
// 	if (products.length !== 0) {
// 		page = page + 1;
// 		return checkHowManyPages(page);
// 	} else {
// 		return page - 1;
// 	}
// };

const Products = async ({ params }: { params: { page: string } }) => {
	const { page } = params;
	const products = await getProducts(parseInt(page));

	if (products.length === 0) {
		return <div className="text-center">Not founds any products</div>;
	}

	return (
		<>
			<ProductList products={products} />
			<Pagination
				currentPage={parseInt(page)}
				totalCount={4220}
				pageSize={20}
			/>
		</>
	);
};

export const generateStaticParams = prodOnly(async () => {
	// const pagesAmount = (await checkHowManyPages(1)) as number;
	const pagesAmount = 211;
	const pages = [];
	for (let i = 1; i <= pagesAmount; i++) {
		pages.push({ page: i.toString() });
	}
	return pages;
});

export default Products;
