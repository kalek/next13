import { type ProductListItemFragmentFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";

type ProductListItemDescriptionProps = {
	product: ProductListItemFragmentFragment;
};

export const ProductListItemDescription = ({
	product: { name, price, categories, avgRating },
}: ProductListItemDescriptionProps) => {
	const category = categories ? categories[0] : null;
	return (
		<div className="mt-2 flex flex-col">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">
					{name}
				</h3>
			</div>
			<p
				className="text-sm font-medium text-gray-900"
				data-testid="product-price"
			>
				{formatMoney(price / 100)}
			</p>
			{category && (
				<p className="text-sm font-medium text-gray-900">
					{category.name}
				</p>
			)}
			<p data-testid="product-rating">{avgRating.toFixed(2)}</p>
		</div>
	);
};
