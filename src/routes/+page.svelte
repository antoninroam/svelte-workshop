<script lang="ts">
	import { elasticOut } from 'svelte/easing';
	import type { TransitionConfig } from 'svelte/transition';

	interface SpinParams {
		duration: number;
	}

	function spin(node: Element, { duration }: SpinParams): TransitionConfig {
		return {
			duration,
			css: (t) => {
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					);`;
			}
		};
	}

	let w, h;
</script>

<div bind:clientWidth={w} bind:clientHeight={h} style="display: inline">
	<h1 in:spin={{ duration: 100 }}>This is our bank</h1>
	<p>width: {w}</p>
	<p>height: {h}</p>
</div>

<svelte:element this="span">I'm a title</svelte:element>
