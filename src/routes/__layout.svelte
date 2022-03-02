<script>
	import '../app.css';
	import { initClient } from '@urql/svelte';

	initClient({
		url: import.meta.env.VITE_GRAPHQL_API
	});
</script>

<main class="container max-w-3xl mx-auto px-4 mb-20">
	<slot />
</main>
