import { type Metadata } from "next";
import { getCollection } from "@/api/collections";
import { ProductList } from "@/ui/organism/ProductList";
import { prodOnly } from "@/utils";

export const generateMetadata = prodOnly(
	async ({
		params,
	}: {
		params: { slug: string };
	}): Promise<Metadata> => {
		const collection = await getCollection({
			slug: params.slug,
		});

		if (!collection) {
			return {};
		}

		return {
			title: `${collection.name}`,
		};
	},
);

const CollectionPage = async ({
	params,
}: {
	params: { slug: string };
}) => {
	const { slug } = params;
	const collection = await getCollection({
		slug,
	});
	const products = collection?.products;

	if (products?.length === 0) {
		return <div className="text-center">Not founds any products</div>;
	}

	return (
		<>
			<h2>{collection?.name}</h2>
			<ProductList products={products || []} />
		</>
	);
};

export default CollectionPage;
