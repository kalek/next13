import { type Metadata } from "next";
import { getCategory } from "@/api/categories";
import { Pagination } from "@/ui/organism/Pagination";
import { ProductList } from "@/ui/organism/ProductList";
import { prodOnly } from "@/utils";

const PAGE_SIZE = 3;

export const generateMetadata = prodOnly(
	async ({
		params,
	}: {
		params: { slug: string };
	}): Promise<Metadata> => {
		const category = await getCategory({
			slug: params.slug,
			first: 1,
			offset: 0,
		});

		if (!category) {
			return {};
		}

		return {
			title: `${category.name}`,
		};
	},
);

const CategoryPage = async ({
	params,
}: {
	params: { slug: string; page: string };
}) => {
	const { slug, page } = params;
	const category = await getCategory({
		slug,
		first: PAGE_SIZE,
		offset: (parseInt(page) - 1) * PAGE_SIZE,
	});
	const products = category?.products;

	if (products?.data.length === 0) {
		return <div className="text-center">Not founds any products</div>;
	}

	return (
		<>
			<h2>{category?.name}</h2>
			<ProductList products={products?.data || []} />
			<Pagination
				path={`categories/${slug}`}
				currentPage={parseInt(page)}
				totalCount={products?.total || 0}
				pageSize={PAGE_SIZE}
			/>
		</>
	);
};

export default CategoryPage;
