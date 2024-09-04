<script lang="ts">
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import { useMotionValue, useTransform } from 'svelte-motion';

	const y = useMotionValue(0);
	// if the y value is 100 or more, the opacity will be 0
	const opacity = useTransform(y, [0, 100], [1, 0]);
</script>

<div class="wrapper-white">
	<div class="h-1/2">
		<Motion
			onPan={(_, info) => {
				y.set(info.offset.y);
			}}
			onPanEnd={() => y.set(0)}
			style={{ y, opacity }}
			let:motion
		>
			<div use:motion class="h-10 w-10 cursor-grab rounded-full bg-gray-400" />
		</Motion>
	</div>
</div>
