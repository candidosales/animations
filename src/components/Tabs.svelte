<script lang="ts">
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import { fade, slide } from 'svelte/transition';

	let activeTab = '';
	const tabs = ['Home', 'Menu', 'Collections', 'Contact'];

	const setActiveTab = (name: string) => {
		activeTab = name;
	};
</script>

<div class="relative">
	<ul>
		{#each tabs as tab}
			<li
				class="relative cursor-pointer px-2 py-1 text-sm outline-none transition-colors"
				style="anchor-name: {activeTab === tab ? '--anchor-el' : ''}"
				on:focus={() => setActiveTab(tab)}
				on:mouseover={() => setActiveTab(tab)}
				on:mouseleave={() => setActiveTab(tab)}
			>
				<span class="relative text-inherit">{tab}</span>
			</li>
		{/each}
	</ul>
	<div class="bg-item absolute inset-0 h-7 rounded-lg bg-black/5" transition:slide|local />
</div>

<ul>
	{#each tabs as tab}
		<Motion layout let:motion>
			<li
				use:motion
				class="relative cursor-pointer px-2 py-1 text-sm outline-none transition-colors"
				on:focus={() => setActiveTab(tab)}
				on:mouseover={() => setActiveTab(tab)}
				on:mouseleave={() => setActiveTab(tab)}
			>
				<Motion layout let:tabIndicator>
					{#if activeTab === tab}
						<div
							use:tabIndicator
							layoutId="tab-indicator"
							class="absolute inset-0 h-7 rounded-lg bg-black/5"
						/>
					{/if}
				</Motion>
				<span class="relative text-inherit">{tab}</span>
			</li>
		</Motion>
	{/each}
</ul>

<style lang="scss">
	.bg-item {
		transition: all 0.3s ease-in;
		position: absolute;
		/*  anchor reference  */
		position-anchor: --anchor-el;
		bottom: anchor(top);
		justify-self: anchor-center;
	}
</style>
