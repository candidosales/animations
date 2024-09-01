<script lang="ts">
	import Spinner from './Spinner.svelte';

	let button: HTMLButtonElement;
	let buttonState: 'idle' | 'loading' | 'success' = 'idle';

	const click = () => {
		buttonState = 'loading';

		setTimeout(() => {
			buttonState = 'success';
		}, 1750);

		setTimeout(() => {
			buttonState = 'idle';
		}, 3500);
	};
</script>

<button bind:this={button} class="blue-button" disabled={buttonState !== 'idle'} on:click={click}>
	<span>
		{#if buttonState === 'idle'}
			<p>Send me a login link</p>
		{:else if buttonState === 'loading'}
			<Spinner size={16} />
		{:else if buttonState === 'success'}
			<p>Login link sent!</p>
		{/if}
	</span>
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
	}

	.blue-button span {
		display: flex;
		width: 100%;
		align-items: center;
		justify-content: center;
		color: white;
		text-shadow: 0px 1px 1.5px rgba(0, 0, 0, 0.16);
	}
</style>
