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

<div class="wrapper">
	<div class="element" />
</div>

<style lang="scss">
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

	.button {
		background: white;
		padding: 8px 16px;
		border-radius: 8px;
		font-size: 14px;
	}
</style>
