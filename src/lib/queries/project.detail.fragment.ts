import { gql } from '@urql/core';

export const ProjectDetailsFragment = gql`
	fragment ProjectDetails on Project {
		name
		slug
		description
		tags
		demo
		sourceCode
		image {
			url
		}
	}
`;
