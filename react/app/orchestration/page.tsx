import Orchestration from "../ui/examples/orchestration/orchestration";

export const metadata = {
	title: "Orchestration"
}


export default function Page() {
  return (
    <div className="grid w-full h-[100vh] place-items-center bg-white">
      <Orchestration />
    </div>
  );
}
