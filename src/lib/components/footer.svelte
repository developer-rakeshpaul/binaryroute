<script>
	import TwitterIcon from './twitter-icon.svelte';
	import GithubIcon from './github-icon.svelte';
</script>

<footer class="text-gray-100 body-font max-w-3xl  mx-auto">
	<div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
		<div class="flex items-center flex-shrink-0">
			<a
				class="flex title-font font-medium items-center md:justify-start justify-center text-gray-100"
				href="/"
			>
				<span class="ml-3 text-xl">Binary Route</span>
			</a>
			<p
				class="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"
			>
				Copyright &copy; {`${new Date().getFullYear()}`} —
				<a
					href="https://twitter.com/rakesh_paul"
					class="text-gray-200 ml-1"
					rel="noopener noreferrer"
					target="_blank">@rakesh_paul</a
				>
			</p>
		</div>
		<div class="flex flex-1 space-x-2 items-center justify-center">
			<a class="link link-hover" href="/projects">Portfolio</a>
			<a class="link link-hover" href="/posts">Blog</a>
			<a class="link link-hover" href="/about">About</a>
		</div>
		<div class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
			<a href="https://twitter.com" class="h-6 w-6 ml-3 text-gray-100">
				<TwitterIcon />
			</a>
			<a href="https://github.com" class="h-6 w-6  ml-3 text-gray-100">
				<GithubIcon />
			</a>
		</div>
	</div>
</footer>
