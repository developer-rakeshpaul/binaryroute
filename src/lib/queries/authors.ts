import { operationStore } from '@urql/svelte';

export const authors = operationStore(`
  query GetAuthors {
    authors {
      name
      intro
      bio
      slug
      picture {
        url
      }
    }
  }
`);

export default authors;
