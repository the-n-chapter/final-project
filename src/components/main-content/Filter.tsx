// Filter.tsx

"use client";

import { useState, useMemo } from "react";
import useWinners, { IgNobelWinner } from "../../data/winners-data";
import WinnersTable from "./WinnersTable";
import { YearFilter } from "./YearFilter";
import { FieldFilter } from "./FieldFilter";

export function Filter() {
  // Load all winners from your data source.
  const winners = useWinners();

  // Filter states.
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [selectedFields, setSelectedFields] = useState<string[]>([]);

  // Compute filtered winners based on the selected years and fields.
  const filteredWinners = useMemo(() => {
    return winners.filter((winner: IgNobelWinner) => {
      const matchesYear =
        selectedYears.length === 0 || selectedYears.includes(winner.year);
      const matchesField =
        selectedFields.length === 0 || selectedFields.includes(winner.field);
      return matchesYear && matchesField;
    });
  }, [winners, selectedYears, selectedFields]);

  return (
    <div>
      {/* Filter controls */}
      <div className="flex flex-wrap gap-4 p-4 rounded-lg border mb-4">
        <YearFilter
          winners={winners}
          selectedYears={selectedYears}
          onChange={setSelectedYears}
        />
        <FieldFilter
          winners={winners}
          selectedFields={selectedFields}
          onChange={setSelectedFields}
        />
      </div>

      {/* Display the table with filtered data */}
      <WinnersTable winners={filteredWinners} />
    </div>
  );
}
