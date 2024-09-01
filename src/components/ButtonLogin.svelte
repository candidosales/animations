<script lang="ts">
	let button: HTMLButtonElement;
</script>

<button class="blue-button"> </button>

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
	}
</style>
