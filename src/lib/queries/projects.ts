import { operationStore } from '@urql/svelte';

export const projects = operationStore(`
  query GetProjects {
    projects {
      name
      slug
      description
      demo
      sourceCode
      image {
        url
      }
    }
  } 
`);

export default projects;
