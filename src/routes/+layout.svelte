<script>
	import Footer from '$lib/Footer/Footer.svelte';
</script>

<nav>
	<a href="/">Home</a>
	<a href="/accounts" data-sveltekit-preload-code>Accounts</a>
</nav>

<main class="content">
	<slot />
</main>

<Footer data="Since 2023" />

<style>
	.content {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
</style>
