<script lang="ts">
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

	export let card: App.CardImage;
	export let selected;
</script>

<Motion
	layoutId={`card-${card.title}`}
	whileTap={{ scale: 0.98 }}
	style={{ borderRadius: 20 }}
	let:motion
>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		use:motion
		class="card"
		role="button"
		tabindex="-1"
		on:click={() => (selected = card.id)}
		on:keypress={() => (selected = card.id)}
	>
		<Motion let:motion layoutId={`image-${card.title}`} style={{ borderRadius: 20 }}>
			<img use:motion src={card.image} alt="image" />
		</Motion>
		<Motion let:motion layoutId={`close-button-${card.title}`} style={{ opacity: 0 }}>
			<button use:motion aria-hidden tabIndex={-1} class="close-button">
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
		<Motion let:motion layoutId={`card-content-${card.title}`}>
			<div use:motion class="card-content">
				<div class="card-text">
					<Motion let:motion layoutId={`card-heading-${card.title}`}>
						<h2 use:motion class="card-heading">Game of the day</h2>
					</Motion>
				</div>
				<Motion
					let:motion
					layoutId={`card-extra-info-${card.title}`}
					style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
				>
					<div use:motion class="extra-info">
						<Motion let:motion layoutId={`card-game-image-${card.title}`}>
							<img
								use:motion
								src={card.logo}
								width={40}
								height={40}
								alt="play"
								class="rounded-lg"
							/>
						</Motion>
						<div class="desc-wrapper">
							<Motion let:motion layoutId={`card-game-title-${card.title}`}>
								<span use:motion class="game-title">
									{card.title}
								</span>
							</Motion>
							<Motion let:motion layoutId={`card-game-subtitle-${card.title}`}>
								<span use:motion class="game-subtitle">
									{card.description}
								</span>
							</Motion>
						</div>
						<Motion let:motion layoutId={`card-button-${card.title}`}>
							<button use:motion class="get-button"> Get </button>
						</Motion>
					</div>
				</Motion>
			</div>
		</Motion>
		<Motion
			let:motion
			layoutId={`card-long-description-${card.title}`}
			style={{ position: 'absolute', top: '100%', opacity: 0 }}
		>
			<div use:motion class="long-description">
				<div>
					<p>
						<b>Are you ready?</b>
						{card.longDescription}
					</p>
					<p>
						<b>The never ending adventure</b>
						In this game set in a fairy tale world, players embark on a quest through mystical lands
						filled with enchanting forests and towering mountains.
					</p>
				</div>
			</div>
		</Motion>
	</div>
</Motion>
