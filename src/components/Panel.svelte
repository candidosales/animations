<script lang="ts">
	import ButtonCopy from './ButtonCopy.svelte';
	import ButtonLogin from './ButtonLogin.svelte';
	import FirstExample from './FirstExample.svelte';
	import Layoult from './Layoult.svelte';
	import Tabs from './Tabs.svelte';
</script>

<div class="wrapper">
	<FirstExample />
	<ButtonCopy />
	<ButtonLogin />
	<Tabs />
	<Layoult />
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
