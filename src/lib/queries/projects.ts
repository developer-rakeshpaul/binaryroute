import { gql } from '@urql/core';
import { operationStore } from '@urql/svelte';
import { ProjectDetailsFragment } from './project.detail.fragment';

const ProjectsQuery = gql`
	query GetProjects {
		projects {
			...ProjectDetails
		}
	}
	${ProjectDetailsFragment}
`;

export const projectsStore = operationStore(ProjectsQuery);

export default projectsStore;
