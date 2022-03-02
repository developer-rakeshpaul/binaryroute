import { operationStore } from '@urql/svelte';
import { gql } from '@urql/core';
import { PostDetailsFragment } from './post.detail.fragment';

export const PostsQuery = gql`
	${PostDetailsFragment}
	query GetPosts {
		posts {
			...PostDetails
		}
	}
`;

export const posts = operationStore(PostsQuery);

export default posts;
