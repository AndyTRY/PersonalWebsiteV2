<script>
	import Header from './Header.svelte';
	import './styles.css';

	export const prerender = true;
	export const ssr = true;
	export const trailingSlash = 'ignore';
</script>

<div class="app">
	<!-- <Header /> -->

	<main>
		<slot />
	</main>

	<!-- <footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer> -->
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		background-color: black;
		margin: 0;
		padding: 0;
	}

	main {
		background-color: black;
	}

</style>
