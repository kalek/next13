export type ProductItemType = {
	id: string;
	category: string;
	name: string;
	price: number;
	coverImage: {
		src: string;
		alt: string;
	};
};

// TODO - remove this type
export type Product = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};
