<script lang="ts">
	import { AnimatePresence, AnimateSharedLayout } from 'svelte-motion';
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

	import { clickOutside } from '$lib/click-outside';
	import { onMount } from 'svelte';

	interface Game {
		id: string;
		title: string;
		description: string;
		longDescription: string;
		image: string;
	}

	let selected: string | null = null;

	const games: Game[] = [
		{
			id: '1',
			title: 'The Oddysey',
			description: 'Explore unknown galaxies.',
			longDescription:
				'Throughout their journey, players will encounter diverse alien races, each with their own unique cultures and technologies. Engage in thrilling space combat, negotiate complex diplomatic relations, and make critical decisions that affect the balance of power in the galaxy.',
			image:
				'https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/space.png'
		},
		{
			id: '2',
			title: 'Angry Rabbits',
			description: 'They are coming for you.',
			longDescription:
				'The rabbits are angry and they are coming for you. You have to defend yourself with your carrot gun. The game is not simple, you have to be fast and accurate to survive.',
			image:
				'https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/rabbit.png'
		},
		{
			id: '3',
			title: 'Ghost town',
			description: 'Find the ghosts.',
			longDescription:
				'You are in a ghost town and you have to find the ghosts. But be careful, they are dangerous.',
			image:
				'https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/ghost.webp'
		},
		{
			id: '4',
			title: 'Pirates in the jungle',
			description: 'Find the treasure.',
			longDescription:
				'You are a pirate and you have to find the treasure in the jungle. But be careful, there are traps and wild animals.',
			image:
				'https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/pirate.png'
		},
		{
			id: '5',
			title: 'Lost in the mountains',
			description: 'Find your way home.',
			longDescription:
				'You are lost in the mountains and you have to find your way home. But be careful, there are dangerous animals and you can get lost.',
			image:
				'https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/how-i-code-animations/boy.webp'
		}
	];

	const handleClickOutside = () => {
		selected = null;
	};
	const onKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			selected = null;
		}
	};

	onMount(() => {
		window.addEventListener('keydown', onKeyDown);
	});
</script>

<AnimateSharedLayout type="crossfade">
	<AnimatePresence list={games.filter((g) => g.id === selected)} let:item>
		<Motion
			let:motion
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			on:click={() => (selected = null)}
		>
			<div use:motion class="overlay" />
		</Motion>
		<div class="active-game">
			<Motion let:motion layoutId={`card-${item?.id}`} style={{ borderRadius: 12 }} layout>
				<div use:motion class="inner" use:clickOutside on:clickOutside={handleClickOutside}>
					<div class="header">
						<Motion let:motion layoutId={`image-${item?.id}`} style={{ borderRadius: 12 }}>
							<img use:motion height={56} width={56} alt="Game" src={item?.image} />
						</Motion>

						<div class="header-inner">
							<div class="content-wrapper">
								<Motion let:motion layoutId={`title-${item?.id}`}>
									<h2 use:motion class="game-title">{item?.title}</h2>
								</Motion>
								<Motion let:motion layoutId={`description-${item?.id}`}>
									<p use:motion class="game-description">{item?.description}</p>
								</Motion>
							</div>
							<Motion let:motion layoutId={`button-${item?.id}`}>
								<button use:motion class="button">Get</button>
							</Motion>
						</div>
					</div>
					<Motion
						let:motion
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { duration: 0.05 } }}
					>
						<p use:motion class="long-description">{item?.longDescription}</p>
					</Motion>
				</div>
			</Motion>
		</div>
	</AnimatePresence>
	<Motion let:motion={list} layout>
		<ul use:list class="list">
			{#each games as game (game.id)}
				<Motion let:motion layoutId={`card-${game.id}`} style={{ borderRadius: 8 }} layout>
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
			{/each}
		</ul>
	</Motion>
</AnimateSharedLayout>

<style lang="scss">
	.list {
		position: relative;
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		padding: 0;
		margin: 48px 0;
	}

	.list li {
		display: flex;
		width: 386px;
		cursor: pointer;
		align-items: center;
		gap: 16px;
		padding: 0;
	}

	.game-wrapper {
		display: flex;
		flex-grow: 1;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #d4d6d861;
	}

	.list li:last-of-type .game-wrapper {
		border: none;
	}

	.content-wrapper {
		display: flex;
		flex-direction: column;
		padding: 16px 0;
	}

	.active-game .content-wrapper {
		padding: 0;
	}

	.game-title {
		font-size: 14px;
		font-weight: 500;
	}

	.game-description {
		font-size: 14px;
		color: #63635d;
	}

	.button {
		border-radius: 9999px;
		background: #f1f0ef;
		padding: 4px 12px;
		font-size: 12px;
		font-weight: 600;
		color: #007aff;
	}

	.active-game {
		position: absolute;
		inset: 0;
		display: grid;
		place-items: center;
		z-index: 10;
	}

	.active-game .inner {
		display: flex;
		height: fit-content;
		width: 500px;
		cursor: pointer;
		flex-direction: column;
		align-items: flex-start;
		gap: 16px;
		overflow: hidden;
		background: white;
		padding: 16px;
	}

	.header {
		display: flex;
		width: 100%;
		align-items: center;
		gap: 16px;
	}

	.header-inner {
		display: flex;
		flex-grow: 1;
		align-items: center;
		justify-content: space-between;
	}

	.long-description {
		font-size: 14px;
		color: #63635d;
	}

	.overlay {
		pointer-events: none;
		position: absolute;
		inset: 0;
		z-index: 10;
		background: rgba(0, 0, 0, 0.2);
	}
</style>
