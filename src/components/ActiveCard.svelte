<script lang="ts">
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	export let activeCard: App.CardImage;
	export let selected: string | null;

	const closeCard = () => {
		selected = null;
	};
</script>

<Motion
	let:motion
	initial={{ opacity: 0 }}
	animate={{ opacity: 1 }}
	exit={{ opacity: 0 }}
	on:click={closeCard}
>
	<div use:motion class="overlay" />
</Motion>
<Motion
	let:motion
	layoutId={`card-${activeCard.title}`}
	initial={{ borderRadius: 0 }}
	animate={{ borderRadius: 0 }}
	exit={{ borderRadius: 20, transition: { duration: 0.05 } }}
>
	<div use:motion class="card card-active">
		<div class="card-inner">
			<Motion
				let:motion
				layoutId={`image-${activeCard.title}`}
				initial={{ borderRadius: 0 }}
				animate={{ borderRadius: 0 }}
				exit={{ borderRadius: 20, transition: { duration: 0.05 } }}
			>
				<img use:motion src={activeCard.image} alt="image" />
			</Motion>
			<Motion
				let:motion
				layoutId={`close-button-${activeCard.title}`}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0, transition: { duration: 0.05 } }}
			>
				<button use:motion class="close-button" aria-label="Close button" on:click={closeCard}>
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
					<div class="card-text">
						<Motion let:motion layoutId={`card-heading-${activeCard.title}`} layout>
							<h2 use:motion class="card-heading">Game of the day</h2>
						</Motion>
					</div>
					<Motion
						let:motion
						layoutId={`card-extra-info-${activeCard.title}`}
						style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}
					>
						<div class="extra-info" use:motion layoutId={`card-game-image-${activeCard.title}`}>
							<Motion let:motion>
								<img
									use:motion
									src={activeCard.logo}
									width={40}
									height={40}
									alt="play"
									class="rounded-lg"
								/>
							</Motion>
							<div class="desc-wrapper">
								<Motion let:motion layoutId={`card-game-title-${activeCard.title}`}>
									<span use:motion class="game-title">
										{activeCard.title}
									</span>
								</Motion>
								<Motion let:motion layoutId={`card-game-subtitle-${activeCard.title}`}>
									<span use:motion class="game-subtitle">
										{activeCard.description}
									</span>
								</Motion>
							</div>
							<Motion let:motion layoutId={`card-button-${activeCard.title}`} layout>
								<button use:motion class="get-button"> Get </button>
							</Motion>
						</div>
					</Motion>
				</div>
			</Motion>
			<Motion
				let:motion
				layoutId={`card-long-description-${activeCard.title}`}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0, transition: { duration: 0.05 } }}
			>
				<div use:motion class="long-description">
					<div>
						<p>
							<b>Are you ready?</b>
							{activeCard.longDescription}
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
	</div>
</Motion>
