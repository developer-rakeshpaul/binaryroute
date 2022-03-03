<script>
	import { query } from '@urql/svelte';
	import { authorStore } from '$lib/queries/author';

	const author = authorStore('rakesh-paul');
	query(author);
</script>

<svelte:head>
	<title>My Portfolio project</title>
</svelte:head>

<h1 class="font-bold text-center mb-20 text-5xl">Welcome to binaryroute</h1>
{#if $author.fetching}
	<p>Loading...</p>
{:else if $author.error}
	<p>Oh no... {$author.error.message}</p>
{:else}
	<div class="flex flex-col space-y-2">
		<div class="flex mb-40 items-end">
			<div class="mr-6">
				<h2 class="text-3xl mb-4 font-bold tracking-wider">{$author.data.author.name}</h2>
				<p class="text-xl mb-4">{$author.data.author.intro}</p>
				<p class="text-xl mb-4">{$author.data.author.bio}</p>
			</div>
			<!-- {#if $author.data.author.picture?.url} -->
			<img
				class="mask mask-squircle h-48"
				src={$author.data.author.picture.url}
				alt={$author.data.author.naame}
			/>
			<!-- {/if} -->
		</div>
	</div>
{/if}
