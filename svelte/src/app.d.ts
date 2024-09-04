// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {

		type UIState = 'idle' | 'loading' | 'success';


		interface CardImage {
			id: string;
			title: string;
			subtitle: string;
			description: string;
			longDescription: string;
			image: string;
			logo: string;
		}


	interface Game {
		id: string;
		title: string;
		description: string;
		longDescription: string;
		image: string;
	}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
