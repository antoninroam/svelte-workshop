<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';

	console.log($page);
</script>

<h1>Account details</h1>
<h2>{$page.params.accountId}</h2>

<button
	on:click={async () => {
		await fetch(`/accounts/${$page.params.accountId}`, { method: 'DELETE' });
		invalidateAll();
	}}>Delete account</button
>
