<script lang="ts">
	import { onMount } from 'svelte';
	import anime from 'animejs';

	onMount(() => {
		anime({
			targets: '.element',
			translateX: 100,
			easing: 'spring',
			duration: 500
		});
	});
</script>

<div class="element" />

<style lang="postcss">
	.element {
		@apply size-12 rounded-xl bg-yellow-400;
	}
</style>
