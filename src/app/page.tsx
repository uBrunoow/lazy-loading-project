import Image from "next/image";
import HistoryComponent from "../components/history/history";

export default function Home() {
  return (
    <main className="h-screen w-full items-center justify-center flex">
      <HistoryComponent />
    </main>
  );
}
