import { ActiveLink } from "../atoms/ActiveLink";
import { Search } from "@/ui/organism/Search";
import { getCategories } from "@/api/categories";
import { getCollections } from "@/api/collections";
import { getCartFromCookies } from "@/api/cart";

const productsLink = {
	pathname: "/products",
};

export const NavBar = async () => {
	const categories = await getCategories();
	const collections = await getCollections();
	const cart = await getCartFromCookies();
	const quantity = cart?.orderItems.length ?? 0;

	return (
		<nav className="mb-12 flex flex-row items-center justify-between">
			<ul className="flex gap-4" role="navigation">
				<li>
					<ActiveLink
						className="text-blue-400 hover:text-blue-600"
						activeClassName="border-b border-blue-600"
						href="/"
						exact
					>
						Homepage
					</ActiveLink>
				</li>
				<li>
					<ActiveLink
						className="text-blue-400 hover:text-blue-600"
						activeClassName="border-b border-blue-600"
						href={productsLink}
					>
						All
					</ActiveLink>
				</li>
				<li>
					<ActiveLink
						className="text-blue-400 hover:text-blue-600"
						activeClassName="border-b border-blue-600"
						href="/categories"
					>
						Categories
					</ActiveLink>
				</li>
				<li>
					<ActiveLink
						className="text-blue-400 hover:text-blue-600"
						activeClassName="border-b border-blue-600"
						href="/collections"
					>
						Collections
					</ActiveLink>
				</li>
				<li>
					<ActiveLink
						className="text-blue-400 hover:text-blue-600"
						activeClassName="border-b border-blue-600"
						href="/static/regulamin"
					>
						Regulamin
					</ActiveLink>
				</li>
				<li>
					<ActiveLink
						className="text-blue-400 hover:text-blue-600"
						activeClassName="border-b border-blue-600"
						href="/static/polityka-prywatnosci"
					>
						Polityka prywatnosci
					</ActiveLink>
				</li>
				{collections.map((collection) => (
					<li key={collection.id}>
						<ActiveLink
							href={`/collections/${collection.name.toLocaleLowerCase()}`}
							className="text-blue-400 hover:text-blue-600"
							activeClassName="border-b border-blue-600"
						>
							{collection.name}
						</ActiveLink>
					</li>
				))}
				{categories.map((category) => (
					<li key={category.id}>
						<ActiveLink
							href={`/categories/${category.name.toLocaleLowerCase()}`}
							className="text-blue-400 hover:text-blue-600"
							activeClassName="border-b border-blue-600"
						>
							{category.name}
						</ActiveLink>
					</li>
				))}
			</ul>
			<ActiveLink
				href="/cart"
				className="text-blue-400 hover:text-blue-600"
				activeClassName="border-b border-blue-600"
			>
				Koszyk {quantity}
			</ActiveLink>
			<Search />
		</nav>
	);
};
