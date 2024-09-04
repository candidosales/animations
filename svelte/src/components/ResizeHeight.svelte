<script lang="ts">
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import { onDestroy, onMount } from 'svelte';

	let showExtraContent = false;

	let innerContent: HTMLElement | null = null;

	let height = 0;

	let observer: ResizeObserver | null = null;

	onMount(() => {
		observer = new ResizeObserver((entries) => {
			for (let entry of entries) {
				const rect = entry.target.getBoundingClientRect();

				height = rect.height;
			}
		});

		if (innerContent) {
			observer.observe(innerContent);
		}
	});

	onDestroy(() => {
		if (observer !== null) {
			observer.disconnect();
			observer = null;
		}
	});
</script>

<button class="button" on:click={() => (showExtraContent = !showExtraContent)}>
	Toggle height
</button>
<Motion let:motion animate={{ height }}>
	<div use:motion class="element">
		<div class="inner" bind:this={innerContent}>
			<h1>Fake Family Drawer</h1>
			<p>This is a fake family drawer. Animating height is tricky, but satisfying when it works.</p>
			{#if showExtraContent}
				<p>
					This extra content will change the height of the drawer. Some even more content to make
					the drawer taller and taller and taller...
				</p>
			{/if}
		</div>
	</div>
</Motion>

<style lang="scss">
	.element {
		background: white;
		border-radius: 16px;
		width: 320px;
		display: flex;
		flex-direction: column;
		gap: 8px;
		overflow: hidden;
	}

	.inner {
		padding: 13px 16px;
	}

	.element h1 {
		font-weight: 600;
	}

	.element p {
		color: #63635d;
	}

	.button {
		background: white;
		padding: 8px 16px;
		border-radius: 8px;
		font-size: 14px;
	}
</style>
