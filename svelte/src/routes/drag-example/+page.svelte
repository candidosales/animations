<script lang="ts">
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

	let boundingBox: HTMLElement | null;
</script>

<div class="drag-area" bind:this={boundingBox} />

<Motion drag dragConstraints={{ current: boundingBox }} let:motion>
	<div use:motion class="box center unselectable">Drag</div>
</Motion>

<style lang="scss">
	.drag-area {
		opacity: 0.2;
		background: rgb(215, 242, 255);
		position: absolute;
		width: 300px;
		height: 300px;
		border-radius: 30px;
		top: calc(50% - 150px);
		left: calc(50% - 150px);
	}

	.unselectable {
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	.center {
		justify-content: center;
		align-items: center;
		display: flex;
	}

	.box {
		background: yellow;
		border-radius: 100px;
		width: 80px;
		height: 80px;
		position: absolute;
		top: calc(50% - 150px / 2);
		left: calc(50% - 150px / 2);
	}
</style>
