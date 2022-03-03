<script>
	import { marked } from 'marked';
	import { query } from '@urql/svelte';
	import posts from '$lib/queries/posts';

	query(posts);
</script>

{#if $posts.fetching}
	<p>Loading...</p>
{:else if $posts.error}
	<p>Oh no... {$posts.error.message}</p>
{:else}
	<div>
		<h1 class="text-4xl mb-10 font-extrabold">Blog posts</h1>

		{#each $posts.data.posts as { title, slug, content, coverImage, tags }}
			<div class="card text-center shadow-2xl mb-20">
				<figure class="">
					<img class="" src={coverImage.url} alt={`Cover image for ${title}`} />
				</figure>
				<div class="card-body prose">
					<h2 class="title">{title}</h2>
					{@html marked(content).slice(0, 150)}
					<div class="flex justify-center mt-5 space-x-2">
						{#each tags as tag}
							<span class="badge badge-primary">{tag}</span>
						{/each}
					</div>
					<div class="justify-center card-actions">
						<a href={`/posts/${slug}`} class="btn btn-outline btn-primary">Read &rArr;</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
{/if}
