/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query CategoryBySlug($slug: String!, $first: Int, $offset: Int) {\n  categoryBySlug(slug: $slug) {\n    name\n    products(first: $first, offset: $offset) {\n      data {\n        ...ProductListItemFragment\n      }\n      total\n    }\n  }\n}": types.CategoryBySlugDocument,
    "query CategoryList {\n  categories {\n    id\n    name\n  }\n}": types.CategoryListDocument,
    "query CollectionBySlug($slug: String!) {\n  collectionBySlug(slug: $slug) {\n    name\n    products {\n      ...ProductListItemFragment\n    }\n  }\n}": types.CollectionBySlugDocument,
    "query CollectionsGetList {\n  collections {\n    id\n    name\n    slug\n  }\n}": types.CollectionsGetListDocument,
    "query ColorsGetList {\n  colors {\n    id\n    name\n  }\n}": types.ColorsGetListDocument,
    "query ProductGetItem($productId: ID!) {\n  product(id: $productId) {\n    id\n    name\n    categories {\n      id\n      name\n    }\n    images {\n      url\n    }\n    description\n    price\n    reviews {\n      id\n      description\n      rating\n      title\n    }\n  }\n}": types.ProductGetItemDocument,
    "query ProductsGetList($first: Int, $offset: Int) {\n  products(first: $first, offset: $offset) {\n    data {\n      ...ProductListItemFragment\n    }\n    total\n  }\n}": types.ProductsGetListDocument,
    "query SearchProducts($query: String!) {\n  searchProducts(query: $query) {\n    ...ProductListItemFragment\n  }\n}": types.SearchProductsDocument,
    "query SizesGetList {\n  sizes {\n    id\n    name\n  }\n}": types.SizesGetListDocument,
    "query SuggestedProductGetList {\n  suggestedProducts {\n    ...ProductListItemFragment\n  }\n}": types.SuggestedProductGetListDocument,
    "fragment ProductListItemFragment on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}": types.ProductListItemFragmentFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryBySlug($slug: String!, $first: Int, $offset: Int) {\n  categoryBySlug(slug: $slug) {\n    name\n    products(first: $first, offset: $offset) {\n      data {\n        ...ProductListItemFragment\n      }\n      total\n    }\n  }\n}"): typeof import('./graphql').CategoryBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryList {\n  categories {\n    id\n    name\n  }\n}"): typeof import('./graphql').CategoryListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionBySlug($slug: String!) {\n  collectionBySlug(slug: $slug) {\n    name\n    products {\n      ...ProductListItemFragment\n    }\n  }\n}"): typeof import('./graphql').CollectionBySlugDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList {\n  collections {\n    id\n    name\n    slug\n  }\n}"): typeof import('./graphql').CollectionsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ColorsGetList {\n  colors {\n    id\n    name\n  }\n}"): typeof import('./graphql').ColorsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetItem($productId: ID!) {\n  product(id: $productId) {\n    id\n    name\n    categories {\n      id\n      name\n    }\n    images {\n      url\n    }\n    description\n    price\n    reviews {\n      id\n      description\n      rating\n      title\n    }\n  }\n}"): typeof import('./graphql').ProductGetItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($first: Int, $offset: Int) {\n  products(first: $first, offset: $offset) {\n    data {\n      ...ProductListItemFragment\n    }\n    total\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SearchProducts($query: String!) {\n  searchProducts(query: $query) {\n    ...ProductListItemFragment\n  }\n}"): typeof import('./graphql').SearchProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SizesGetList {\n  sizes {\n    id\n    name\n  }\n}"): typeof import('./graphql').SizesGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query SuggestedProductGetList {\n  suggestedProducts {\n    ...ProductListItemFragment\n  }\n}"): typeof import('./graphql').SuggestedProductGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItemFragment on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}"): typeof import('./graphql').ProductListItemFragmentFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
