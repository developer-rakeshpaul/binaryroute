import { operationStore } from '@urql/svelte';

export const project = (slug: string) =>
	operationStore(
		`
    query GetProject($slug: String!) {
      project(where: {slug: $slug}) {
        name
        description
        tags
        demo
        sourceCode
        image {
          url
        }
      }
    },
  `,
		{ slug }
	);
