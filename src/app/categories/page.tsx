import Link from "next/link";
import { getCategories } from "@/api/categories";

const CategoriesPage = async () => {
	const categories = await getCategories();
	return (
		<div data-testid="categories">
			<ul>
				{categories.map((category) => (
					<li key={category.id}>
						<Link
							href={`/categories/${category.name.toLocaleLowerCase()}`}
							className="text-blue-400 hover:underline"
						>
							{category.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CategoriesPage;
