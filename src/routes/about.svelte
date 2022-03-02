<script>
	import { query } from '@urql/svelte';
	import { marked } from 'marked';
	import authors from '$lib/queries/authors';

	query(authors);
</script>

<svelte:head>
	<title>My Portfolio project | About {$authors.data?.authors[0]?.name}</title>
</svelte:head>

{#if $authors.fetching}
	<p>Loading...</p>
{:else if $authors.error}
	<p>Oh no... {$authors.error.message}</p>
{:else}
	<h1 class="font-bold text-center mb-20 text-5xl">About Me</h1>
	<div class="flex mb-40 items-end">
		<div class="mr-6">
			<h2 class="text-3xl mb-4 font-bold tracking-wider">{$authors.data?.authors[0]?.name}</h2>
			<p class="text-xl mb-4">{$authors.data?.authors[0]?.intro}</p>
		</div>

		<img
			class="mask mask-squircle h-48"
			src={$authors.data?.authors[0]?.url}
			alt={$authors.data?.authors[0]?.name}
		/>
	</div>

	<article class="prose prose-lg">
		{@html marked($authors.data?.authors[0]?.bio)}
	</article>
{/if}
