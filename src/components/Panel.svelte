<script lang="ts">
	import ButtonCopy from './ButtonCopy.svelte';
	import ButtonLogin from './ButtonLogin.svelte';
	import FirstExample from './FirstExample.svelte';
	import LayoutTabs from './LayoutTabs.svelte';
	import LayoutBox from './LayoutBox.svelte';
	import LayoutActiveGame from './LayoutActiveGame.svelte';
	import ResizeHeight from './ResizeHeight.svelte';
</script>

<div class="wrapper">
	<FirstExample />
	<ButtonCopy />
	<ButtonLogin />
	<LayoutTabs />
	<LayoutBox />
	<LayoutActiveGame />
	<ResizeHeight />
</div>

<style lang="postcss">
	.wrapper {
		display: grid;
		height: 100vh;
		width: 100vw;
		place-items: center;
		background: white;
	}
</style>
