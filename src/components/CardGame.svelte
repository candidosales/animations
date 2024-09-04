<script lang="ts">
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

	export let game: App.Game;
	export let selected: string | null;
</script>

<Motion let:motion layoutId={`card-${game.id}`} style={{ borderRadius: 8 }}>
	<!-- svelte-ignore a11y-no-noninteractive-element-to-interactive-role -->
	<li
		use:motion
		role="button"
		on:click={() => (selected = game.id)}
		on:keypress={() => (selected = game.id)}
	>
		<Motion let:motion layoutId={`image-${game.id}`} style={{ borderRadius: 12 }}>
			<img use:motion height={56} width={56} alt="Game" src={game.image} />
		</Motion>
		<div class="game-wrapper">
			<div class="content-wrapper">
				<Motion let:motion layoutId={`title-${game.id}`}>
					<h2 use:motion class="game-title">{game.title}</h2>
				</Motion>
				<Motion let:motion layoutId={`description-${game.id}`}>
					<p use:motion class="game-description">{game.description}</p>
				</Motion>
			</div>
			<Motion let:motion layoutId={`button-${game.id}`}>
				<button use:motion class="button">Get</button>
			</Motion>
		</div>
	</li>
</Motion>
