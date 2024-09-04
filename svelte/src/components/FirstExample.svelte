<script lang="ts">
	import { onMount } from 'svelte';
	import anime from 'animejs';

	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

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

<Motion
	let:motion
	animate={{
		x: 100,
		transition: { type: 'spring', duration: 1, bounce: 0.6 },
		opacity: 1,
		scale: 1
	}}
>
	<div use:motion class="element-svelte-motion" />
</Motion>

<style lang="postcss">
	.element,
	.element-svelte-motion {
		@apply size-12 rounded-xl bg-yellow-400;
	}
</style>
