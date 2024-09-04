<script lang="ts">
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import { AnimateSharedLayout } from 'svelte-motion';

	let showSecond = false;

	const setShowSecond = () => {
		showSecond = !showSecond;
	};
</script>

<AnimateSharedLayout>
	<button class="button" on:click={() => setShowSecond()}> Animate </button>
	{#if showSecond}
		<Motion let:motion layoutId="rectangle" style={{ borderRadius: 12 }}>
			<div use:motion class="layout-second-element" />
		</Motion>
	{:else}
		<Motion let:motion layoutId="rectangle" style={{ borderRadius: 12 }}>
			<div use:motion class="layout-element" />
		</Motion>
	{/if}
</AnimateSharedLayout>

<style lang="scss">
	.layout-element {
		width: 48px;
		height: 48px;
		background: #fad658;
		border-radius: 12px;
	}

	.layout-second-element {
		height: 96px;
		width: 96px;
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
