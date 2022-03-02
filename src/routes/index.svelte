<script>
	import { initClient, operationStore, query } from '@urql/svelte';

	initClient({
		url: import.meta.env.VITE_GRAPHQL_API
	});

	const projects = operationStore(`
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

	query(projects);
</script>

{#if $projects.fetching}
	<p>Loading...</p>
{:else if $projects.error}
	<p>Oh no... {$projects.error.message}</p>
{:else}
	<ul>
		{#each $projects.data.projects as project}
			<li>{project.name}</li>
		{/each}
	</ul>
{/if}
