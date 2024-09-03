<script lang="ts">
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

	export let card: App.CardImage;
</script>

<Motion
	layoutId={`card-${card.title}`}
	whileTap={{ scale: 0.98 }}
	on:click={() => setActiveCard(card)}
	style={{ borderRadius: 20 }}
	let:motion
>
	<div use:motion class="card">
		<Motion let:motion layoutId={`image-${card.title}`} style={{ borderRadius: 20 }}>
			<img use:motion src={card.image} alt="image" />
		</Motion>
	</div>
</Motion>
