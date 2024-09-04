<script lang="ts">
	import { AnimatePresence, AnimateSharedLayout } from 'svelte-motion';
	import Card from '../../components/Card.svelte';
	import ActiveCard from '../../components/ActiveCard.svelte';
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

	const cards: App.CardImage[] = [
		{
			id: '1',
			title: 'Vikings',
			subtitle: 'Clash of the Norse Warriors',
			description: 'A game about vikings',
			longDescription:
				'A game about vikings, where you can play as a viking and fight other vikings. You can also build your own viking village and explore the world.',
			image:
				'https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game.webp',
			logo: 'https://animations-on-the-web-git-how-i-use-3066e1-emilkowalski-s-team.vercel.app/how-i-use-framer-motion/app-store-like-cards/game-logo.webp'
		}
	];

	let selected: string | null = null;
</script>

<div class="wrapper-white">
	<div class="cards-wrapper">
		<AnimateSharedLayout>
			{#each cards as card (card.id)}
				<Card {card} bind:selected />
			{/each}
			<AnimatePresence list={cards.filter((c) => c.id === selected)} let:item>
				<ActiveCard activeCard={item} bind:selected />
			</AnimatePresence>
		</AnimateSharedLayout>
	</div>
</div>

<style lang="scss">
	.cards-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: relative;
		height: 675px;
		width: 100%;
		margin: auto 0;
	}

	:global(.card) {
		height: 370px;
		width: 320px;
		border-radius: 20px;
		overflow: hidden;
		margin: auto 0;
		position: relative;
		outline: none;
		user-select: none;
		cursor: pointer;
	}

	:global(.card-inner) {
		height: 430px;
		width: 360px;
		position: relative;
	}

	:global(.card-inner > img) {
		height: 100%;
		width: 100%;
		object-fit: cover;
		pointer-events: none;
	}

	:global(.card > img) {
		height: 100%;
		width: 100%;
		position: absolute;
		inset: 0;
	}

	:global(.card-active) {
		width: 360px;
		position: absolute;
		top: 0;
		height: 100%;
		margin: 0;
		background: white;
		display: flex;
		border-radius: 0;
		flex-direction: column;
	}

	:global(.long-description) {
		padding: 16px;
		flex: 1;
	}

	:global(.long-description p) {
		line-height: 1.6;
		color: #666666;
		margin-bottom: 16px;
	}

	:global(.long-description b) {
		color: black;
		font-weight: 600;
	}

	:global(.card-heading) {
		font-size: 40px;
		line-height: 0.9;
		font-weight: 800;
		max-width: 160px;
		text-align: left;
		text-transform: uppercase;
		color: white;
		margin-bottom: 4px;
	}

	:global(.card-description) {
		font-size: 13px;
		color: white;
		opacity: 0.9;
	}

	:global(.card-content) {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}

	:global(.extra-info) {
		position: relative;
		display: flex;
		width: 100%;
		align-items: center;
		gap: 8px;
		background: rgba(0, 0, 0, 0.2);
		padding: 12px 16px;
		backdrop-filter: blur(2px);
	}

	:global(.extra-info img) {
		border-radius: 8px;
	}

	:global(.card-content .card-text) {
		padding: 0 16px 12px;
	}

	:global(.game-title) {
		font-size: 12px;
		font-weight: 600;
		color: white;
	}

	:global(.game-subtitle) {
		font-size: 12px;
		color: #c4c5cd;
	}

	:global(.get-button) {
		margin-left: auto;
		border-radius: 9999px;
		background: rgba(255, 255, 255, 0.3);
		padding: 4px 16px;
		font-size: 14px;
		font-weight: 600;
		color: white;
	}

	:global(.bottom-bar) {
		height: 64px;
		width: 100%;
		padding: 12px 16px;
		display: flex;
		align-items: center;
		gap: 8px;
		backdrop-filter: blur(2px);
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		background-color: rgb(0 0 0 / 0.15);
	}

	:global(.bottom-bar img) {
		border-radius: 8px;
	}

	:global(.card-title) {
		font-size: 12px;
		font-weight: 500;
		color: white;
	}

	:global(.card-subtitle) {
		font-size: 12px;
		color: #b9babc;
	}

	:global(.bottom-bar-content) {
		display: flex;
		flex-direction: column;
	}

	:global(.button) {
		font-weight: 600;
		padding: 4px 16px;
		font-size: 14px;
		background: rgba(255, 255, 255, 0.3);
		border-radius: 9999px;
		margin-left: auto;
		color: white;
	}

	:global(.cards-wrapper) {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		position: relative;
		height: 675px;
		width: 100%;
		margin: auto 0;
	}

	:global(.overlay) {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.2);
	}

	:global(.close-button) {
		position: absolute;
		top: 16px;
		right: 16px;
		height: 32px;
		width: 32px;
		border-radius: 50%;
		backdrop-filter: blur(4px);
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.2);
	}

	:global(.positioner) {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	:global(.desc-wrapper) {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
</style>
