import { ProductList } from "@/ui/organism/ProductList";
import { type ProductItemType } from "@/ui/types";

const products: ProductItemType[] = [
	{
		id: "1",
		name: "Product 1",
		price: 6.99,
		category: "Category 1",
		coverImage: {
			alt: "Product 1",
			src: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
		},
	},
	{
		id: "2",
		name: "Product 2",
		price: 2137,
		category: "Category 2",
		coverImage: {
			alt: "Product 1",
			src: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
		},
	},
	{
		id: "3",
		name: "Product 3",
		price: 87,
		category: "Category 3",
		coverImage: {
			alt: "Product 1",
			src: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
		},
	},
	{
		id: "4",
		name: "Product 4",
		price: 129,
		category: "Category 4",
		coverImage: {
			alt: "Product 1",
			src: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
		},
	},
];

const Home = () => {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl">
			<ProductList products={products} />
		</section>
	);
};

export default Home;
