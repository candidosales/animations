<script lang="ts">
	import { onMount } from 'svelte';
	import anime from 'animejs';
	import ButtonCopy from './ButtonCopy.svelte';

	onMount(() => {
		anime({
			targets: '.element',
			translateX: 100,
			easing: 'spring',
			duration: 500
		});
	});
</script>

<div class="wrapper">
	<div class="element" />
	<ButtonCopy />
</div>

<style lang="postcss">
	.wrapper {
		display: grid;
		height: 100vh;
		width: 100vw;
		place-items: center;
		background: #0d0d0d;
	}

	.element {
		width: 48px;
		height: 48px;
		background: #fad658;
		border-radius: 12px;
	}
</style>
