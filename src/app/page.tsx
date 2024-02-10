import { redirect } from "next/navigation";

export default function Home() {
  redirect("/team_builder");
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-between p-24"></main>
  );
}
