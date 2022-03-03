import { gql } from '@urql/core';

export const AuthorDetailsFragment = gql`
	fragment AuthorDetails on Author {
		name
		intro
		bio
		slug
		picture {
			url
		}
	}
`;
