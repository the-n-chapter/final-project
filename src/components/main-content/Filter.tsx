// Filter.tsx
"use client";

import { useState, useMemo, Suspense } from "react";
import useWinners from "../../data/winners-data";
import WinnersTable from "./WinnersTable";
import { MultiSelectFilter } from "./MultiSelectFilter";

export function Filter() {
  const winners = useWinners();

  // Extract unique years and fields
  const availableYears = useMemo(() => {
    return Array.from(new Set(winners.map(w => w.year))).sort((a, b) => a - b);
  }, [winners]);

  const availableFields = useMemo(() => {
    return Array.from(new Set(winners.map(w => w.field))).sort();
  }, [winners]);

  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [selectedFields, setSelectedFields] = useState<string[]>([]);

  // Filter winners based on selected years and fields
  const filteredWinners = useMemo(() => {
    return winners.filter(winner => {
      const yearMatch = selectedYears.length ? selectedYears.includes(winner.year) : true;
      const fieldMatch = selectedFields.length ? selectedFields.includes(winner.field) : true;
      return yearMatch && fieldMatch;
    });
  }, [winners, selectedYears, selectedFields]);

  return (
    <div>
      <div className="flex flex-wrap gap-4 p-4 rounded-lg border mb-4">
        <MultiSelectFilter
          label="⌕ Years"
          items={availableYears}
          selected={selectedYears}
          onChange={setSelectedYears}
          toString={item => String(item)}
        />
        <MultiSelectFilter
          label="⌕ Fields"
          items={availableFields}
          selected={selectedFields}
          onChange={setSelectedFields}
          toString={item => item}
        />
      </div>
      <Suspense fallback={<div className="text-slate-400">Loading data…</div>}>
        <WinnersTable winners={filteredWinners} />
      </Suspense>    
    </div>
  );
}

export default Filter;
