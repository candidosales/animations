# Animations lab

## Course

- [Animations](https://animations.dev/)


The course provides exercices using React with Framer Motion, and I tried to convert them to Svelte with Svelte Motion, but I found some issues.

- Svelte Motion uses implementation from Framer Motion version [4.1.1](https://github.com/micha-lmxt/svelte-motion/blob/master/src/render/index.js#L2C10-L2C29) ([Framer Motion - 2021](https://github.com/framer/motion/blob/main/CHANGELOG.md#4111-2021-04-28)), so many features isn't implemented or have bugs, for example `<AnimatePresence>` hasn't option for `mode="popLayout"`;
- The `style` in the `Motion` tag not works as expected with `<AnimatePresence>`;
- The order of the elements when using `<AnimateSharedLayout>` and `<AnimatePresence>` indicates how the animation will work, so this can bring bugs;