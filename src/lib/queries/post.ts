import { operationStore } from '@urql/svelte';
import { PostDetailsFragment } from './post.detail.fragment';
import { gql } from '@urql/core';

export const PostQuery = gql`
	${PostDetailsFragment}
	query GetPost($slug: String!) {
		post(where: { slug: $slug }) {
			...PostDetails
		}
	}
`;

export const post = (slug: string) => operationStore(PostQuery, { slug });

export default post;
