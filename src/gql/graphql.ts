/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: unknown; output: unknown; }
};

export type Category = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: ProductResponse;
  slug: Scalars['String']['output'];
};


export type CategoryProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Collection = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<Product>;
  slug: Scalars['String']['output'];
};

export type Color = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Image = {
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
};

export type Product = {
  categories: Array<Category>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  images: Array<Image>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  reviews: Array<Review>;
  updatedAt: Scalars['DateTime']['output'];
};


export type ProductCategoriesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductImagesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductResponse = {
  data: Array<Product>;
  total: Scalars['Int']['output'];
};

export type Query = {
  categories: Array<Category>;
  category?: Maybe<Category>;
  categoryBySlug?: Maybe<Category>;
  collection?: Maybe<Collection>;
  collectionBySlug?: Maybe<Collection>;
  collections: Array<Collection>;
  colors: Array<Color>;
  product?: Maybe<Product>;
  products: ProductResponse;
  searchProducts: Array<Product>;
  sizes: Array<Size>;
  suggestedProducts: Array<Product>;
};


export type QueryCategoriesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCategoryBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryCollectionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCollectionBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySearchProductsArgs = {
  query: Scalars['String']['input'];
};

export type Review = {
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
  title: Scalars['String']['output'];
};

export type Size = {
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CategoryBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type CategoryBySlugQuery = { categoryBySlug?: { name: string, products: { total: number, data: Array<{ id: string, name: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } } | null };

export type CategoryListQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoryListQuery = { categories: Array<{ id: string, name: string }> };

export type CollectionBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CollectionBySlugQuery = { collectionBySlug?: { name: string, products: Array<{ id: string, name: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } | null };

export type CollectionsGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionsGetListQuery = { collections: Array<{ id: string, name: string, slug: string }> };

export type ColorsGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type ColorsGetListQuery = { colors: Array<{ id: string, name: string }> };

export type ProductGetItemQueryVariables = Exact<{
  productId: Scalars['ID']['input'];
}>;


export type ProductGetItemQuery = { product?: { id: string, name: string, description: string, price: number, categories: Array<{ id: string, name: string }>, images: Array<{ url: string }>, reviews: Array<{ id: string, description: string, rating: number, title: string }> } | null };

export type ProductsGetListQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
}>;


export type ProductsGetListQuery = { products: { total: number, data: Array<{ id: string, name: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> }> } };

export type SearchProductsQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;


export type SearchProductsQuery = { searchProducts: Array<{ id: string, name: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> }> };

export type SizesGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type SizesGetListQuery = { sizes: Array<{ id: string, name: string }> };

export type SuggestedProductGetListQueryVariables = Exact<{ [key: string]: never; }>;


export type SuggestedProductGetListQuery = { suggestedProducts: Array<{ id: string, name: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> }> };

export type ProductListItemFragmentFragment = { id: string, name: string, price: number, categories: Array<{ name: string }>, images: Array<{ url: string }> };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any>) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const ProductListItemFragmentFragmentDoc = new TypedDocumentString(`
    fragment ProductListItemFragment on Product {
  id
  name
  categories(first: 1) {
    name
  }
  images(first: 1) {
    url
  }
  price
}
    `, {"fragmentName":"ProductListItemFragment"}) as unknown as TypedDocumentString<ProductListItemFragmentFragment, unknown>;
export const CategoryBySlugDocument = new TypedDocumentString(`
    query CategoryBySlug($slug: String!, $first: Int, $offset: Int) {
  categoryBySlug(slug: $slug) {
    name
    products(first: $first, offset: $offset) {
      data {
        ...ProductListItemFragment
      }
      total
    }
  }
}
    fragment ProductListItemFragment on Product {
  id
  name
  categories(first: 1) {
    name
  }
  images(first: 1) {
    url
  }
  price
}`) as unknown as TypedDocumentString<CategoryBySlugQuery, CategoryBySlugQueryVariables>;
export const CategoryListDocument = new TypedDocumentString(`
    query CategoryList {
  categories {
    id
    name
  }
}
    `) as unknown as TypedDocumentString<CategoryListQuery, CategoryListQueryVariables>;
export const CollectionBySlugDocument = new TypedDocumentString(`
    query CollectionBySlug($slug: String!) {
  collectionBySlug(slug: $slug) {
    name
    products {
      ...ProductListItemFragment
    }
  }
}
    fragment ProductListItemFragment on Product {
  id
  name
  categories(first: 1) {
    name
  }
  images(first: 1) {
    url
  }
  price
}`) as unknown as TypedDocumentString<CollectionBySlugQuery, CollectionBySlugQueryVariables>;
export const CollectionsGetListDocument = new TypedDocumentString(`
    query CollectionsGetList {
  collections {
    id
    name
    slug
  }
}
    `) as unknown as TypedDocumentString<CollectionsGetListQuery, CollectionsGetListQueryVariables>;
export const ColorsGetListDocument = new TypedDocumentString(`
    query ColorsGetList {
  colors {
    id
    name
  }
}
    `) as unknown as TypedDocumentString<ColorsGetListQuery, ColorsGetListQueryVariables>;
export const ProductGetItemDocument = new TypedDocumentString(`
    query ProductGetItem($productId: ID!) {
  product(id: $productId) {
    id
    name
    categories {
      id
      name
    }
    images {
      url
    }
    description
    price
    reviews {
      id
      description
      rating
      title
    }
  }
}
    `) as unknown as TypedDocumentString<ProductGetItemQuery, ProductGetItemQueryVariables>;
export const ProductsGetListDocument = new TypedDocumentString(`
    query ProductsGetList($first: Int, $offset: Int) {
  products(first: $first, offset: $offset) {
    data {
      ...ProductListItemFragment
    }
    total
  }
}
    fragment ProductListItemFragment on Product {
  id
  name
  categories(first: 1) {
    name
  }
  images(first: 1) {
    url
  }
  price
}`) as unknown as TypedDocumentString<ProductsGetListQuery, ProductsGetListQueryVariables>;
export const SearchProductsDocument = new TypedDocumentString(`
    query SearchProducts($query: String!) {
  searchProducts(query: $query) {
    ...ProductListItemFragment
  }
}
    fragment ProductListItemFragment on Product {
  id
  name
  categories(first: 1) {
    name
  }
  images(first: 1) {
    url
  }
  price
}`) as unknown as TypedDocumentString<SearchProductsQuery, SearchProductsQueryVariables>;
export const SizesGetListDocument = new TypedDocumentString(`
    query SizesGetList {
  sizes {
    id
    name
  }
}
    `) as unknown as TypedDocumentString<SizesGetListQuery, SizesGetListQueryVariables>;
export const SuggestedProductGetListDocument = new TypedDocumentString(`
    query SuggestedProductGetList {
  suggestedProducts {
    ...ProductListItemFragment
  }
}
    fragment ProductListItemFragment on Product {
  id
  name
  categories(first: 1) {
    name
  }
  images(first: 1) {
    url
  }
  price
}`) as unknown as TypedDocumentString<SuggestedProductGetListQuery, SuggestedProductGetListQueryVariables>;