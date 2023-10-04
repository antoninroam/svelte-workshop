<script lang="ts">
	import { page } from '$app/stores';

	console.log($page);
</script>

<h1>Account details</h1>
<h2>{$page.params.accountId}</h2>
