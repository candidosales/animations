<script lang="ts">
	import { onMount } from 'svelte';
	import anime from 'animejs';
	import Checkmark from './icons/Checkmark.svelte';
	import Copy from './icons/Copy.svelte';

	onMount(() => {
		anime({
			targets: '.element',
			translateX: 100,
			easing: 'spring',
			duration: 500
		});
	});

	const click = () => {
		// Framer Motion
		// transition: { type: "spring", duration: 0.5, bounce: 0.2 },

		// spring - animejs
		// mass, stiffness (tension), damping (friction), velocity
		// spring is pretty slow
		const timeline = anime.timeline({
			easing: 'easeOutExpo',
			autoplay: false,
			duration: 300
		});

		timeline
			.add({
				targets: '.copy',
				opacity: [1, 0],
				scale: [1, 0.5]
			})
			.add({
				targets: '.checkmark',
				opacity: [0, 1],
				scale: [0.5, 1]
			})
			.add({
				targets: '.checkmark',
				opacity: [1, 0],
				scale: [1, 0.5],
				delay: 300
			})
			.add({
				targets: '.copy',
				opacity: [0, 1],
				scale: [0.5, 1]
			});

		timeline.play();
	};
</script>

<div class="wrapper">
	<div class="element" />
	<button on:click={click}>
		<Copy class="copy size-6" />
		<Checkmark class="checkmark size-6" />
	</button>
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

	button {
		background: white;
		padding: 8px 16px;
		border-radius: 8px;
		font-size: 14px;
		@apply relative flex h-12 w-12 cursor-pointer items-center justify-center;
	}

	:global(.copy, .checkmark) {
		@apply absolute size-6;
	}

	:global(.checkmark) {
		opacity: 0;
	}
</style>
