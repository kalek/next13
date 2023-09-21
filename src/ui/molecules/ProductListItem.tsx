import Link from "next/link";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

type ProductListItemProps = {
	product: ProductListItemFragmentFragment;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	const image = product.images ? product.images[0] : null;
	return (
		<li>
			<Link href={`/product/${product.id}`} prefetch={false}>
				<article>
					{image && (
						<ProductCoverImage src={image.url} alt={product.name} />
					)}
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
