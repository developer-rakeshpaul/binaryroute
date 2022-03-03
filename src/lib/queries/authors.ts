import { operationStore } from '@urql/svelte';
import { gql } from '@urql/core';
import { AuthorDetailsFragment } from './author.detail.fragment';

export const AuthorsQuery = gql`
	${AuthorDetailsFragment}
	query GetAuthors {
		authors {
			...AuthorDetails
		}
	}
`;

export const authorsStore = operationStore(AuthorsQuery);

export default authorsStore;
