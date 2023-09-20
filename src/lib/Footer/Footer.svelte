<script>
	import { onMount } from 'svelte';

	export let data = '';

	let currentDate = new Date().toISOString();

	onMount(() => {
		const interval = setInterval(() => {
			currentDate = new Date().toISOString();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<footer><span>Hello Underworld - {data}</span><span>{currentDate}</span></footer>

<style>
	footer {
		display: flex;
		justify-content: space-between;
	}
</style>
