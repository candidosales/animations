import CardGame from "../ui/examples/card-game/card-game";

export const metadata = {
	title: "Card Game"
}

export default function Page() {
	return (
	
	<div className="grid w-full h-[100vh] place-items-center bg-white">
		<CardGame/>
	</div>);
  }