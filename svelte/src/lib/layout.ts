// layoutAction.js
export function layout(node: HTMLElement, params = {}) {
	const {
	  duration = 300,
	  easing = t => t,
	  delay = 0
	} = params;
  
	let first;
	let last;
  
	return {
	  delay,
	  duration,
	  tick: (t, u) => {
		if (!first) {
		  first = node.getBoundingClientRect();
		}
  
		last = node.getBoundingClientRect();
  
		const deltaX = first.left - last.left;
		const deltaY = first.top - last.top;
		const deltaW = first.width / last.width;
		const deltaH = first.height / last.height;
  
		const eased = easing(t);
  
		node.style.transform = `
		  translate(${deltaX * (1 - eased)}px, ${deltaY * (1 - eased)}px)
		  scale(${1 + (deltaW - 1) * (1 - eased)}, ${1 + (deltaH - 1) * (1 - eased)})
		`;
		node.style.transformOrigin = 'top left';
		node.style.transition = `transform ${duration}ms ${easing}`;
	  },
	  end: () => {
		node.style.transform = '';
		node.style.transformOrigin = '';
		node.style.transition = '';
	  }
	};
  }