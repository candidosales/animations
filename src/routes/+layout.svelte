<script>
	import '../app.css';

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
		}
	];
</script>

<div class="flex flex-col">
	<nav class="rounded-md p-2">
		<ul class="flex flex-row">
			{#each menu as item}
				<li class="py-2 pr-4 text-sm hover:text-blue-500"><a href={item.href}>{item.label}</a></li>
			{/each}
		</ul>
	</nav>
	<main>
		<slot></slot>
	</main>
</div>

<style lang="scss">
	:global(.wrapper, .wrapper-white) {
		display: grid;
		height: 100vh;
		width: 100vw;
		place-items: center;
		background: black;
	}

	:global(.wrapper-white) {
		background: white;
	}
</style>
