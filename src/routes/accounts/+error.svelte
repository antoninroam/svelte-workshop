<script>
	import { page } from '$app/stores';
</script>

<h3>{$page.status}</h3>
<p>{$page.error?.message}</p>
