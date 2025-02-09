// Filter.tsx

"use client";

import { useState, useMemo } from "react";
import useWinners, { IgNobelWinner } from "../../data/winners-data";
import WinnersTable from "./WinnersTable";
import { YearFilter } from "./YearFilter";
import { FieldFilter } from "./FieldFilter";

export function Filter() {
  const winners = useWinners();

  // Filter states, which year/ field is being selected
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [selectedFields, setSelectedFields] = useState<string[]>([]);

  // Compute filtered winners based on selected years and fields
  // useMemo(): recalculate only when winners, selectedYears, selectedFields change
  const filteredWinners = useMemo(() => {
    return winners.filter((winner: IgNobelWinner) => {
      // Check if a year filter is applied
      const isYearSelected = selectedYears.length > 0;
      const isYearMatch = isYearSelected ? selectedYears.includes(winner.year) : true;

      // if no year/field is selected, isYearMatch/isFieldMatch = true
  
      // Check if a field filter is applied
      const isFieldSelected = selectedFields.length > 0;
      const isFieldMatch = isFieldSelected ? selectedFields.includes(winner.field) : true;
  
      // Include the winner only if it matches both filters
      return isYearMatch && isFieldMatch;
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
