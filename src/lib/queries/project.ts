import { ProjectDetailsFragment } from './project.detail.fragment';
import { gql } from '@urql/core';
import { operationStore } from '@urql/svelte';

const ProjectQuery = gql`
	query GetProject($slug: String!) {
		project(where: { slug: $slug }) {
			...ProjectDetails
		}
	}
	${ProjectDetailsFragment}
`;
export const project = (slug: string) => operationStore(ProjectQuery, { slug });
