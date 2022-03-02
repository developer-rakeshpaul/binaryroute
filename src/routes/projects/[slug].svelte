<script context="module">
	export const load = async ({ page: { params } }) => {
		const { slug } = params;
		return { props: { slug } };
	};
</script>

<script>
	import { marked } from 'marked';
	export let slug;
	import { gql, operationStore, query } from '@urql/svelte';
	import { project as getProjectStore } from '$lib/queries/project';

	// slug is passed as a parameter in the operationStore function
	const project = getProjectStore(slug);
	query(project);
</script>

<svelte:head>
	<title>My Portfolio | {project.data.name}</title>
</svelte:head>

{#if project.fetching}
	<p>Loading...</p>
{:else if project.error}
	<p>Oh no... {project.error.message}</p>
{:else}
	<div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
		<img class="rounded-lg" src={$project.data.project.image[0].url} alt={project.data.title} />
	</div>

	<h1 class="text-4xl font-semibold mb-5">{project.data.name}</h1>

	<div class="mb-5 flex justify-between">
		<div>
			{#if project.data.tags}
				{#each project.data.tags as tag}
					<span class="badge badge-primary mr-2 hover:bg-primary-focus cursor-pointer">{tag}</span>
				{/each}
			{/if}
		</div>
	</div>

	<div class="mb-5 prose flex prose-a:text-primary hover:prose-a:text-primary-focus">
		<a class="mr-5" href={project.data.demo}>Demo</a>
		<a href={project.data.sourceCode}>Source Code</a>
	</div>

	<article class="prose prose-xl">
		{@html marked(project.data.description)}
	</article>
{/if}
