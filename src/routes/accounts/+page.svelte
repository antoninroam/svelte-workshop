<script>
	import { accounts } from '$lib/store';
	import CreateAccount from './CreateAccount.svelte';

	let name = '';
	let accounts_value;
	accounts.subscribe((value) => (accounts_value = value));
</script>

<h1>Accounts</h1>

<CreateAccount bind:accountName={name} />
