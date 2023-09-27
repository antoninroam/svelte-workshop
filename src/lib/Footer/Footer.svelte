<script>
	import { onMount } from 'svelte';

	export let data = '';

	let currentDate = new Date();

	$: footerContent = `Hello Underworld - ${data}`;
	$: formattedDate = currentDate.toLocaleTimeString();

	onMount(() => {
		const interval = setInterval(() => {
			currentDate = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});
</script>

<footer><span>{footerContent}</span><span>{formattedDate}</span></footer>

<style>
	footer {
		display: flex;
		justify-content: space-between;
	}
</style>
