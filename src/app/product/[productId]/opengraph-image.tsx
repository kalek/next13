/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";
import { getProduct } from "@/api/products";

export const runtime = "edge";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function Image({
	params,
}: {
	params: { productId: string };
}) {
	const { productId } = params;
	const product = await getProduct(productId);
	return new ImageResponse(
		(
			<div
				style={{
					fontSize: 28,
					background: "white",
					width: "100%",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<div tw="flex flex-col items-center justify-center">
					<img
						src={product?.images[0]?.url || ""}
						alt={product?.name}
						width={320}
						height={320}
					/>
					Name: {product?.name}
					Price: {product?.price}
					Desc: {product?.description}
				</div>
			</div>
		),
		{
			...size,
		},
	);
}
