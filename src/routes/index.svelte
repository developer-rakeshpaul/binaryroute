<script>
	import { initClient, operationStore, query } from '@urql/svelte';
	import Project from '$lib/components/project.svelte';

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
	<div>
		{#each $projects.data.projects as { name, slug, description, image }}
			<Project {name} {slug} {description} url={image[0].url} />
		{/each}
	</div>
{/if}
