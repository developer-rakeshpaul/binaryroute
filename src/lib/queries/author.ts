import { operationStore } from '@urql/svelte';
import { gql } from '@urql/core';
import { AuthorDetailsFragment } from './author.detail.fragment';

export const AuthortQuery = gql`
	${AuthorDetailsFragment}
	query GetAuthor($slug: String!) {
		author(where: { slug: $slug }) {
			...AuthorDetails
		}
	}
`;

export const authorStore = (slug: string) => operationStore(AuthortQuery, { slug });

export default authorStore;
