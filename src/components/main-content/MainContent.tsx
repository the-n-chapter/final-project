import { Title } from "./Title";
import { Filter } from "./Filter";

const MainContent = () => {
  return (
    <div className="container mx-auto py-8">
      <Title />
      {/* Filter will control state of WinnersTable, filtered or unfiltered (original data) */}
      <Filter />
    </div>
  );
}

export default MainContent;