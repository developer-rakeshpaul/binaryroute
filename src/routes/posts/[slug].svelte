<script context="module">
	export const load = async ({ params }) => {
		const { slug } = params;
		return { props: { slug } };
	};
</script>

<script>
	export let slug;
	import { marked } from 'marked';
	import { query } from '@urql/svelte';
	import { postStore } from '$lib/queries/post';

	// slug is passed as a parameter in the operationStore function
	const post = postStore(slug);
	query(post);
</script>

<svelte:head>
	<title>Blog | {$post?.data?.post.title}</title>
</svelte:head>

{#if $post.fetching}
	<p>Loading...</p>
{:else if $post.error}
	<p>Oh no... {$post.error.message}</p>
{:else}
	<div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
		<img
			class="rounded-xl"
			src={$post.data.post.coverImage.url}
			alt={`Cover image for ${$post?.data?.post.title}`}
		/>
	</div>

	<div class="prose prose-xl">
		<h1>{$post?.data?.post.title}</h1>
	</div>

	<p class="text-secondary text-xs tracking-widest font-semibold">
		{new Date($post?.data?.post.date).toDateString()}
	</p>

	<div class="mb-5 flex justify-between">
		<div>
			{#if $post?.data?.post.tags}
				<div class="mt-5 space-x-2">
					{#each $post?.data?.post.tags as tag}
						<span class="badge badge-primary">{tag}</span>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<article class="prose prose-lg">
		{@html marked($post?.data?.post.content)}
	</article>
{/if}
