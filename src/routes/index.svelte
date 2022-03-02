<script>
	import { query } from '@urql/svelte';
	import Project from '$lib/components/project.svelte';
	import projects from '$lib/queries/projects';
	import authors from '$lib/queries/authors';

	query(projects);
	query(authors);
</script>

<svelte:head>
	<title>My Portfolio project</title>
</svelte:head>

<h1 class="font-bold text-center mb-20 text-5xl">Welcome to my Portfolio</h1>
{#if $authors.fetching}
	<p>Loading...</p>
{:else if $authors.error}
	<p>Oh no... {$projects.error.message}</p>
{:else}
	{#each $authors.data.authors as { name, intro, picture: { url } }}
		<div class="flex mb-40 items-end">
			<div class="mr-6">
				<h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
				<p class="text-xl mb-4">{intro}</p>
			</div>

			<img class="mask mask-squircle h-48" src={url} alt={name} />
		</div>
	{/each}
{/if}
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
