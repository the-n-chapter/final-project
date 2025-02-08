import { Title } from "./Title";
import { Filter } from "./Filter";

export function MainContent() {
  return (
    <div className="container mx-auto py-8">
      <Title />
      {/* The Filter will control the state of the WinnersTable, filtered or unfiltered (original data) */}
      <Filter />
    </div>
  );
}
