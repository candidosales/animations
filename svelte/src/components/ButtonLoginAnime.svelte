<script lang="ts">
	import anime from 'animejs';
	import Spinner from './Spinner.svelte';

	let button: HTMLButtonElement;

	export let idleLabel = 'Send me a login link';
	export let successLabel = 'Login link sent!';

	const click = () => {
		button.disabled = true;

		const variants = {
			hidden: { opacity: [1, 0], translateY: [0, 25] },
			visible: { opacity: [0, 1], translateY: [-25, 0] }
		};

		const timeline = anime.timeline({
			easing: 'easeOutExpo',
			autoplay: false,
			duration: 300
		});

		timeline
			.add({
				targets: '.idle',
				translateY: variants.hidden.translateY,
				opacity: variants.hidden.opacity
			})
			.add({
				targets: '.loading-anime',
				translateY: variants.visible.translateY,
				opacity: variants.visible.opacity
			})
			.add({
				targets: '.loading-anime',
				translateY: variants.hidden.translateY,
				opacity: variants.hidden.opacity,
				delay: 600
			})
			.add({
				targets: '.success',
				translateY: variants.visible.translateY,
				opacity: variants.visible.opacity
			});

		timeline.play();
		timeline.finished.then(() => {
			button.disabled = false;
		});
	};
</script>

<button bind:this={button} class="blue-button" on:click={click}>
	<p class="idle">{idleLabel}</p>
	<Spinner class="loading-anime" size={16} />
	<p class="success">{successLabel}</p>
</button>

<style lang="scss">
	.blue-button {
		border-radius: 8px;
		font-weight: 500;
		font-size: 13px;
		height: 32px;
		width: 148px;
		overflow: hidden;
		background: linear-gradient(180deg, #1994ff 0%, #157cff 100%);
		box-shadow:
			0px 0px 1px 1px rgba(255, 255, 255, 0.08) inset,
			0px 1px 1.5px 0px rgba(0, 0, 0, 0.32),
			0px 0px 0px 0.5px #1a94ff;
		position: relative;
		color: white;
	}

	button {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.idle,
	:global(.loading-anime),
	.success {
		position: absolute;
	}

	:global(.loading-anime),
	.success {
		opacity: 0;
	}
</style>
