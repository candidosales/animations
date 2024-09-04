<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	const menu = [
		{
			href: '/first-example',
			label: 'First Example'
		},
		{
			href: '/button-copy',
			label: 'Button Copy'
		},
		{
			href: '/button-login',
			label: 'Button Login'
		},
		{
			href: '/layout-box',
			label: '[Layout] Box'
		},
		{
			href: '/layout-tabs',
			label: '[Layout] Tabs'
		},
		{
			href: '/layout-active-game',
			label: '[Layout] Active Game'
		},
		{
			href: '/resize-height',
			label: 'Resize height'
		},
		{
			href: '/drag-example',
			label: 'Drag example'
		},
		{
			href: '/use-transform',
			label: 'Use transform'
		},
		{
			href: '/card-playground',
			label: 'Card playground'
		},
		{
			href: '/popover',
			label: 'Popover'
		}
	];
</script>

<div class="flex flex-col">
	<nav class="rounded-md p-2">
		<ul class="flex flex-row flex-wrap">
			{#each menu as item}
				<li class="p-2 text-sm hover:text-blue-500" class:active={$page.url.pathname === item.href}>
					<a href={item.href}>{item.label}</a>
				</li>
			{/each}
		</ul>
	</nav>
	<main>
		<slot></slot>
	</main>
</div>

<style lang="scss">
	:global(.wrapper-black, .wrapper-white) {
		display: grid;
		height: 100vh;
		width: 100vw;
		place-items: center;
		background: black;
	}

	:global(.wrapper-white) {
		background: white;
	}

	:global(li.active) {
		padding: 8px 12px;
		background: #dbeafe;
		font-weight: 600;
		color: #2563eb;
		border-radius: 14px;
	}
</style>
