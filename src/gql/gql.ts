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
    "mutation CartAddProduct($orderId: ID!, $productId: ID!) {\n  createOrderItem(orderId: $orderId, productId: $productId, quantity: 1) {\n    id\n  }\n}": types.CartAddProductDocument,
    "mutation CartCreate {\n  createOrder(total: 0) {\n    ...Cart\n  }\n}": types.CartCreateDocument,
    "query CartGetById($id: ID!) {\n  order(id: $id) {\n    ...Cart\n  }\n}": types.CartGetByIdDocument,
    "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(id: $itemId) {\n    id\n  }\n}": types.CartRemoveProductDocument,
    "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!, $hash: String!) {\n  updateOrderItem(id: $itemId, quantity: $quantity, hash: $hash) {\n    id\n  }\n}": types.CartSetProductQuantityDocument,
    "query CategoryBySlug($slug: String!, $first: Int, $offset: Int) {\n  categoryBySlug(slug: $slug) {\n    name\n    products(first: $first, offset: $offset) {\n      data {\n        ...ProductListItemFragment\n      }\n      total\n    }\n  }\n}": types.CategoryBySlugDocument,
    "query CategoryList {\n  categories {\n    id\n    name\n  }\n}": types.CategoryListDocument,
    "query CollectionBySlug($slug: String!) {\n  collectionBySlug(slug: $slug) {\n    name\n    products {\n      ...ProductListItemFragment\n    }\n  }\n}": types.CollectionBySlugDocument,
    "query CollectionsGetList {\n  collections {\n    id\n    name\n    slug\n  }\n}": types.CollectionsGetListDocument,
    "query ColorsGetList {\n  colors {\n    id\n    name\n  }\n}": types.ColorsGetListDocument,
    "query GetAllProducts {\n  products {\n    data {\n      id\n      name\n      description\n      price\n      rating\n      categories {\n        id\n        name\n      }\n    }\n    total\n  }\n}": types.GetAllProductsDocument,
    "query ProductGetItem($productId: ID!) {\n  product(id: $productId) {\n    id\n    name\n    categories {\n      id\n      name\n    }\n    images {\n      url\n    }\n    description\n    price\n    reviews {\n      id\n      description\n      rating\n      title\n      name\n      email\n      createdAt\n    }\n  }\n}": types.ProductGetItemDocument,
    "query ProductsGetList($first: Int, $offset: Int, $orderBy: ProductOrderByInput) {\n  products(first: $first, offset: $offset, orderBy: $orderBy) {\n    data {\n      ...ProductListItemFragment\n    }\n    total\n  }\n}": types.ProductsGetListDocument,
    "mutation ReviewCreate($productId: ID!, $title: String!, $description: String!, $rating: Int!, $name: String!, $email: String!) {\n  addReview(\n    productId: $productId\n    title: $title\n    description: $description\n    rating: $rating\n    name: $name\n    email: $email\n  ) {\n    id\n  }\n}": types.ReviewCreateDocument,
    "query SearchProducts($query: String!) {\n  searchProducts(query: $query) {\n    ...ProductListItemFragment\n  }\n}": types.SearchProductsDocument,
    "query SizesGetList {\n  sizes {\n    id\n    name\n  }\n}": types.SizesGetListDocument,
    "query SuggestedProductGetList {\n  suggestedProducts {\n    ...ProductListItemFragment\n  }\n}": types.SuggestedProductGetListDocument,
    "fragment Cart on Order {\n  id\n  total\n  orderItems {\n    id\n    quantity\n    product {\n      id\n      name\n      price\n    }\n  }\n}": types.CartFragmentDoc,
    "fragment ProductListItemFragment on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  rating\n}": types.ProductListItemFragmentFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartAddProduct($orderId: ID!, $productId: ID!) {\n  createOrderItem(orderId: $orderId, productId: $productId, quantity: 1) {\n    id\n  }\n}"): typeof import('./graphql').CartAddProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate {\n  createOrder(total: 0) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartCreateDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetById($id: ID!) {\n  order(id: $id) {\n    ...Cart\n  }\n}"): typeof import('./graphql').CartGetByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartRemoveProduct($itemId: ID!) {\n  deleteOrderItem(id: $itemId) {\n    id\n  }\n}"): typeof import('./graphql').CartRemoveProductDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartSetProductQuantity($itemId: ID!, $quantity: Int!, $hash: String!) {\n  updateOrderItem(id: $itemId, quantity: $quantity, hash: $hash) {\n    id\n  }\n}"): typeof import('./graphql').CartSetProductQuantityDocument;
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
export function graphql(source: "query GetAllProducts {\n  products {\n    data {\n      id\n      name\n      description\n      price\n      rating\n      categories {\n        id\n        name\n      }\n    }\n    total\n  }\n}"): typeof import('./graphql').GetAllProductsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetItem($productId: ID!) {\n  product(id: $productId) {\n    id\n    name\n    categories {\n      id\n      name\n    }\n    images {\n      url\n    }\n    description\n    price\n    reviews {\n      id\n      description\n      rating\n      title\n      name\n      email\n      createdAt\n    }\n  }\n}"): typeof import('./graphql').ProductGetItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($first: Int, $offset: Int, $orderBy: ProductOrderByInput) {\n  products(first: $first, offset: $offset, orderBy: $orderBy) {\n    data {\n      ...ProductListItemFragment\n    }\n    total\n  }\n}"): typeof import('./graphql').ProductsGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($productId: ID!, $title: String!, $description: String!, $rating: Int!, $name: String!, $email: String!) {\n  addReview(\n    productId: $productId\n    title: $title\n    description: $description\n    rating: $rating\n    name: $name\n    email: $email\n  ) {\n    id\n  }\n}"): typeof import('./graphql').ReviewCreateDocument;
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
export function graphql(source: "fragment Cart on Order {\n  id\n  total\n  orderItems {\n    id\n    quantity\n    product {\n      id\n      name\n      price\n    }\n  }\n}"): typeof import('./graphql').CartFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItemFragment on Product {\n  id\n  name\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n  rating\n}"): typeof import('./graphql').ProductListItemFragmentFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
