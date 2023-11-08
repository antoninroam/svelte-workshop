<script lang="ts">
	import { enhance } from '$app/forms';
	import { createEventDispatcher, tick } from 'svelte';
	import type { ActionData } from './$types';
	import type { SubmitFunction } from '@sveltejs/kit';

	let isCreatingAccount = false;
	let loading = false;
	let inputRef: HTMLInputElement;

	const dispatch = createEventDispatcher();

	export let accountName = '';

	export let form: ActionData;

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

	const handleClose = () => {
		isCreatingAccount = false;
	};

	const handleEnhance: SubmitFunction = () => {
		loading = true;
		return async ({ update, result }) => {
			await update();
			loading = false;
			if (result.status === 204) {
				isCreatingAccount = false;
			}
		};
	};
</script>

{#if form?.error}
	<p class="error">{form.error}</p>
{/if}

{#if !isCreatingAccount}
	<button on:click={handleClick}>Create an account</button>
{:else}
	<form method="post" action="?/create" use:enhance={handleEnhance}>
		<label for="account-name">Account name</label>
		<input
			bind:this={inputRef}
			name="account-name"
			type="text"
			id="account-name"
			required
			value={form?.accountName ?? ''}
		/>
		<label
			><input type="checkbox" name="is-agreed" checked={!!form?.isAgreed} /> I agree to everything
		</label>
		<div>
			<button disabled={loading}>Submit</button>
			<button type="button" on:click={handleClose}>Cancel</button>
		</div>
	</form>
{/if}
