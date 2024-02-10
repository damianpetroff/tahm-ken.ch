import { Champion, getChampions, getVersions } from "@/lib/@ddragon";
import Image from "next/image";

export default async function Home() {
  const versions: Array<string> = await getVersions();
  const champions: Array<Champion> = await getChampions(versions[0]);
  return (
    <main className="flex flex-row justify-between p-12">
      <div className="flex flex-col h-full w-1/3 justify-start">
        <h1>Challenges</h1>
      </div>
      <div className="flex flex-wrap w-2/3 min-h-48 gap-1 justify-center">
        {Array.isArray(champions) &&
          champions.map((champion) => (
            <div
              key={champion.id}
              className="relative w-16 h-16 ring-yellow-400 hover:ring-2"
            >
              <Image
                src={`https://ddragon.leagueoflegends.com/cdn/${versions[0]}/img/champion/${champion.image.full}`}
                alt={champion.name}
                fill
                sizes="(max-width: 768px) 25vw, (max-width: 1200px) 25vw, 11vw"
              />
            </div>
          ))}
      </div>
    </main>
  );
}
