<script>
	import { query } from '@urql/svelte';
	import projects from '$lib/queries/projects';
	import Project from '$lib/components/project.svelte';

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
