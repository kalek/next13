import { redirect } from "next/navigation";

const CategoryPage = async ({
	params,
}: {
	params: { slug: string };
}) => {
	redirect(`/categories/${params.slug}/1`);
};

export default CategoryPage;
