import { Title } from "./Title";
import { Filter } from "./Filter";
import WinnersTable from "./WinnersTable";
import useWinners from "../../data/winners-data";

export function MainContent() {
  const winners = useWinners();

  return (
    <div className="container mx-auto py-8">
      <Title />
      <Filter />
      <WinnersTable winners={winners} />
    </div>
  );
}
