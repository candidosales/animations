<script lang="ts">
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import Spinner from './Spinner.svelte';
	import { AnimatePresence } from 'svelte-motion';

	let state: App.UIState = 'idle';

	export let idleLabel = 'Send me a login link';
	export let successLabel = 'Login link sent!';

	const click = () => {
		if (state === 'success') return;

		state = 'loading';

		setTimeout(() => {
			state = 'success';
		}, 1750);

		setTimeout(() => {
			state = 'idle';
		}, 3500);
	};
</script>

<button class="blue-button" on:click={click} disabled={state === 'loading'}>
	<AnimatePresence show={state === 'idle'}>
		<Motion
			let:motion
			transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
			initial={{ opacity: 0, y: -25 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 25, transition: { duration: 0.05 } }}
		>
			<span use:motion>{idleLabel}</span>
		</Motion>
	</AnimatePresence>
	<AnimatePresence show={state === 'loading'}>
		<Motion
			let:motion
			transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
			initial={{ opacity: 0, y: -25 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 25, transition: { duration: 0.05 } }}
		>
			<span use:motion>
				<Spinner class="loading" size={16} />
			</span>
		</Motion>
	</AnimatePresence>
	<AnimatePresence show={state === 'success'}>
		<Motion
			let:motion
			transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
			initial={{ opacity: 0, y: -25 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 25, transition: { duration: 0.01 } }}
		>
			<span use:motion>{successLabel}</span>
		</Motion>
	</AnimatePresence>
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
		color: white;
	}

	button {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
</style>
