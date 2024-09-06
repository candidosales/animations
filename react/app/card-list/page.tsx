import CardList from "../ui/examples/card-list/card-list";

export const metadata = {
	title: "Card List"
}

export default function Page() {
	return (
	
	<div className="grid w-full h-[100vh] place-items-center bg-white">
		<CardList/>
	</div>);
  }