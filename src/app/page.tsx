import { SuggestedProducts } from "@/ui/organism/SuggestedProducts";

const Home = async () => {
	return (
		<>
			<h1 className="mb-8 text-3xl">Next13 Master</h1>
			<div data-testid="products-list">
				<SuggestedProducts />
			</div>
		</>
	);
};

export default Home;
