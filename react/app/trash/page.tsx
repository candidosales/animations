import { TrashAnimation } from "../ui/examples/trash/trash-animation";

export const metadata = {
	title: "Trash"
}


export default function Page() {
  return (
    <div className="h-screen items-center justify-center flex">
      <TrashAnimation />
    </div>
  );
}
