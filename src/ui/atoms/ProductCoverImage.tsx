import Image from "next/image";

export const ProductCoverImage = ({
	src,
	alt,
}: {
	src: string;
	alt: string;
}) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
			<Image
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
				src={src}
				alt={alt}
				width={320}
				height={320}
			/>
		</div>
	);
};
