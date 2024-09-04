<script lang="ts">
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import { AnimateSharedLayout } from 'svelte-motion';

	let activeTab = '';
	const tabs = ['Home', 'Menu', 'Collections', 'Contact'];

	const setActiveTab = (name: string) => {
		activeTab = name;
	};
</script>

<ul>
	<AnimateSharedLayout>
		{#each tabs as tab}
			<li
				class="relative cursor-pointer px-2 py-1 text-sm outline-none transition-colors"
				on:focus={() => setActiveTab(tab)}
				on:mouseover={() => setActiveTab(tab)}
				on:mouseleave={() => setActiveTab(tab)}
			>
				{#if activeTab === tab}
					<Motion let:motion layoutId="tab-indicator">
						<div use:motion class=" absolute inset-0 h-7 rounded-lg bg-black/5" />
					</Motion>
				{/if}
				<span class="relative text-inherit">{tab}</span>
			</li>
		{/each}
	</AnimateSharedLayout>
</ul>

<style lang="scss">
</style>
