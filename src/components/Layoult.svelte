<script lang="ts">
	import { layout } from '$lib/layout';
	import { fade } from 'svelte/transition';

	let items = [1, 2, 3, 4, 5];
	let columns = 3;

	function toggleLayout() {
		columns = columns === 3 ? 2 : 3;
	}

	function addItem() {
		items = [...items, items.length + 1];
	}

	function removeItem() {
		items = items.slice(0, -1);
	}
</script>

<button on:click={toggleLayout}>Toggle Layout</button>
<button on:click={addItem}>Add Item</button>
<button on:click={removeItem}>Remove Item</button>

<div class="container" style="--columns: {columns}">
	{#each items as item (item)}
		<div class="item" use:layout in:fade out:fade>
			{item}
		</div>
	{/each}
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(var(--columns), 1fr);
		gap: 10px;
		max-width: 600px;
		margin: 20px auto;
	}
	.item {
		background-color: #f0f0f0;
		border-radius: 4px;
		padding: 20px;
		text-align: center;
		font-size: 18px;
	}
</style>
