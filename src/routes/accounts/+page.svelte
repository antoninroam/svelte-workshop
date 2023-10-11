<script lang="ts">
	import { enhance } from '$app/forms';
	import { fly, slide } from 'svelte/transition';

	// import { accounts } from '$lib/store';

	import CreateAccount from './CreateAccount.svelte';

	let name = '';
	export let data;

	const handleCreate = (event: CustomEvent<string>) => {
		// accounts.update(() => [...$accounts, { name: event.detail }]);
	};
</script>

<h1>Accounts</h1>

<ul>
	{#each data.accounts as account}
		<li in:fly={{ y: 20 }} out:slide>
			<a href={`/accounts/${account.id}`}>{account.name}</a>
			<form method="post" action="?/delete" use:enhance>
				<input type="hidden" name="account-id" value={account.id} /><button>Remove</button>
			</form>
		</li>
	{/each}
</ul>

<CreateAccount bind:accountName={name} on:create={handleCreate} />

<style>
	li {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
