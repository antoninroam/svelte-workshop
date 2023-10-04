<script lang="ts">
	import { accounts } from '$lib/store';

	import CreateAccount from './CreateAccount.svelte';

	let name = '';
	export let data: { accounts: string };

	const handleCreate = (event: CustomEvent<string>) => {
		accounts.update(() => [...$accounts, { name: event.detail }]);
	};
</script>

<h1>Accounts</h1>

<ul>
	{#each data.accounts as account}
		<a href={`/accounts/${account}`}><li>{account}</li></a>
	{/each}
</ul>

<CreateAccount bind:accountName={name} on:create={handleCreate} />
