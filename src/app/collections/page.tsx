import Link from "next/link";
import { getCollections } from "@/api/collections";

const CollectionsPage = async () => {
	const collections = await getCollections();
	return (
		<div data-testid="collections">
			<ul>
				{collections.map((collection) => (
					<li key={collection.id}>
						<Link
							href={`/collections/${collection.name.toLocaleLowerCase()}`}
							className="text-blue-400 hover:underline"
						>
							{collection.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default CollectionsPage;
