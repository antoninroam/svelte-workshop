<script lang="ts">
	import { tick } from 'svelte';

	let isCreatingAccount = false;
	let inputRef: HTMLInputElement;

	export let accountName = '';

	const handleClick = async () => {
		isCreatingAccount = true;
		await tick();
		inputRef?.focus();
	};
	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			console.log(accountName);
		}
	};
</script>

{#if !isCreatingAccount}
	<button on:click={handleClick}>Create an account</button>
{:else}
	<label for="account-name">Account name</label>
	<input
		bind:this={inputRef}
		type="text"
		id="account-name"
		on:keypress={handleKeyPress}
		bind:value={accountName}
	/>
{/if}
