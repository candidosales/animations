<script lang="ts">
	let showExtraContent = false;
</script>

<button class="button" on:click={() => (showExtraContent = !showExtraContent)}>
	Toggle height
</button>
<div class="element">
	<div class="inner">
		<h1>Fake Family Drawer</h1>
		<p>This is a fake family drawer. Animating height is tricky, but satisfying when it works.</p>
		{#if showExtraContent}
			<p>
				This extra content will change the height of the drawer. Some even more content to make the
				drawer taller and taller and taller...
			</p>
		{/if}
	</div>
</div>

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
