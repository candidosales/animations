<script lang="ts">
	import ButtonCopy from './ButtonCopy.svelte';
	import FirstExample from './FirstExample.svelte';
</script>

<div class="wrapper">
	<div class="element" />
	<FirstExample />
	<ButtonCopy />
</div>

<style lang="postcss">
	.wrapper {
		display: grid;
		height: 100vh;
		width: 100vw;
		place-items: center;
		background: #0d0d0d;
	}
</style>
