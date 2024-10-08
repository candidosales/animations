/** Dispatch event on click outside of node */
export function clickOutside(node: HTMLElement) {
  
	const handleClick = (event: PointerEvent) => {
		console.log('node', node, 'event', event)
	  if (node && !node.contains(event.target) && !event.defaultPrevented) {
		node.dispatchEvent(
		  new CustomEvent('clickOutside', node)
		)
	  }
	}
  
	  document.addEventListener('click', handleClick, true);
	
	return {
	  destroy() {
		document.removeEventListener('click', handleClick, true);
	  }
	}
  }