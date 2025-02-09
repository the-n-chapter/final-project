import { Title } from "./Title";
import { Filter } from "./Filter";

export function MainContent() {
  return (
    <div className="container mx-auto py-8">
      <Title />
      {/* Filter will control state of WinnersTable, filtered or unfiltered (original data) */}
      <Filter />
    </div>
  );
}
