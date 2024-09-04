<script lang="ts">
	import anime from 'animejs';
	import Checkmark from './icons/Checkmark.svelte';
	import Copy from './icons/Copy.svelte';

	let button: HTMLButtonElement;

	const click = () => {
		button.disabled = true;
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

		// Reuse animations - Inspiratin Framer Motion
		const variants = {
			hidden: { opacity: [1, 0], scale: [1, 0.5] },
			visible: { opacity: [0, 1], scale: [0.5, 1] }
		};

		timeline
			.add({
				targets: '.copy',
				opacity: variants.hidden.opacity,
				scale: variants.hidden.scale
			})
			.add({
				targets: '.checkmark',
				opacity: variants.visible.opacity,
				scale: variants.visible.scale
			})
			.add({
				targets: '.checkmark',
				opacity: variants.hidden.opacity,
				scale: variants.hidden.scale,
				delay: 300
			})
			.add({
				targets: '.copy',
				opacity: variants.visible.opacity,
				scale: variants.visible.scale
			});

		timeline.play();

		// Avoid multiple clicks
		timeline.finished.then(() => {
			button.disabled = false;
		});
	};
</script>

<button bind:this={button} on:click={click}>
	<Copy class="copy size-6" />
	<Checkmark class="checkmark size-6" />
</button>

<style lang="postcss">
	button {
		border-radius: 8px;
		font-size: 14px;
		@apply relative flex h-12 w-12 cursor-pointer items-center justify-center bg-white px-4 py-2;
	}

	:global(.copy, .checkmark) {
		@apply absolute size-6;
	}

	:global(.checkmark) {
		opacity: 0;
	}
</style>
