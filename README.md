# Animations lab

## Course

- [Animations](https://animations.dev/)

## How to use

- Simple animations - AnimeJS
- Complex animations involving layout or shared layouts - Svelte Motion
  - `style={{ opacity: 0}}` not works in `<Motion>` tags, you should replace in the div by `style={opacity:0}`;
  - The order of the elements when using `AnimateSharedLayout` indicates how the animation will work. Recommendation: Always <AnimatePresence> as the last component. Example below:

  ```html
	<AnimateSharedLayout type="crossfade">
			{#each cards as card (card.title)}
				<Card {card} bind:selected />
			{/each}
			<AnimatePresence list={cards.filter((c) => c.id === selected)} let:item>
				<ActiveCard activeCard={item} bind:selected />
			</AnimatePresence>
		</AnimateSharedLayout>
  ```


## Tools

- [Svelte](https://svelte.dev/)
- [Svelte Motion](https://svelte-motion.gradientdescent.de/)
- [AnimeJS](https://animejs.com/)
- [Motion](https://motion.dev/)
- [Popmotion](https://popmotion.io/)

## Order

- FirstExample
- ButtonCopy
- ButtonLogin
- LayoutTabs
- LayoutBox
- LayoutActiveGame
- ResizeHeight

## AnimeJS documentations

- CSS transformations: https://animejs.com/documentation/#CSStransforms
- From to: https://animejs.com/documentation/#fromToValues





### Extra

- https://www.programmingtil.com/contents/a-quick-tour-of-the-svelte-motion-library