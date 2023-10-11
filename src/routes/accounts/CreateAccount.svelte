<script lang="ts">
	import { enhance } from '$app/forms';
	import { createEventDispatcher, tick } from 'svelte';

	let isCreatingAccount = false;
	let loading = false;
	let inputRef: HTMLInputElement;

	const dispatch = createEventDispatcher();

	export let accountName = '';

	const handleClick = async () => {
		isCreatingAccount = true;
		await tick();
		inputRef?.focus();
	};

	const handleSubmit = () => {
		dispatch('create', accountName);
		isCreatingAccount = false;
		accountName = '';
	};
</script>

{#if !isCreatingAccount}
	<button on:click={handleClick}>Create an account</button>
{:else}
	<form
		method="post"
		action="?/create"
		use:enhance={() => {
			loading = true;
			return async ({ update }) => {
				await update();
				loading = false;
			};
		}}
	>
		<label for="account-name">Account name</label>
		<input
			bind:this={inputRef}
			name="account-name"
			type="text"
			id="account-name"
			bind:value={accountName}
		/>
		<button disabled={loading}>Submit</button>
	</form>
{/if}
