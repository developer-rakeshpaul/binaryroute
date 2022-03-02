import { gql } from '@urql/core';

export const PostDetailsFragment = gql`
	fragment PostDetails on Post {
		title
		slug
		date
		content
		tags
		coverImage {
			url
		}
		authors {
			name
		}
	}
`;
