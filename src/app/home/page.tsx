import getCompetitions from "@/lib/api";

export default async function HomePage() {
  const competitions = await getCompetitions();
  return (
    <div>
      <h2 className="text-2xl font-bold">Competitions</h2>
      <ul>
        {competitions.map((competition: any) => (
          <li key={competition.id}>{competition.name}</li>
        ))}
      </ul>
    </div>
  );
}
