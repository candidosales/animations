<script lang="ts">
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	export let activeCard: App.CardImage;
	export let selected;
</script>

<Motion let:motion layoutId={`card-${activeCard.title}`} style={{ borderRadius: 0 }}>
	<div use:motion class="card card-active">
		<div className="card-inner">
			<Motion let:motion layoutId={`image-${activeCard.title}`} style={{ borderRadius: 0 }}>
				<img use:motion src={activeCard.image} alt="image" />
			</Motion>
			<Motion let:motion layoutId={`close-button-${activeCard.title}`}>
				<button
					use:motion
					class="close-button"
					aria-label="Close button"
					on:click={() => (selected = null)}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="2"
						height="20"
						width="20"
						stroke="currentColor"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>
				</button>
			</Motion>
			<Motion let:motion layoutId={`card-content-${activeCard.title}`}>
				<div use:motion class="card-content active-card-content">
					<div className="card-text">
						<Motion let:motion layoutId={`card-heading-${activeCard.title}`} layout>
							<h2 use:motion class="card-heading">Game of the day</h2>
						</Motion>
					</div>
				</div>
			</Motion>
		</div>
	</div>
</Motion>
