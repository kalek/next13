import Link from "next/link";
// import { type ProductItemType } from "../types";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type Product } from "@/ui/types";

type ProductListItemProps = {
	product: Product;
};

export const ProductListItem = ({
	product,
}: ProductListItemProps) => {
	return (
		<li>
			<Link href={`/product/${product.id}`} prefetch={false}>
				<article>
					<ProductCoverImage
						src={product.image}
						alt={product.title}
					/>
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
