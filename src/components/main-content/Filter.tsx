// Filter.tsx
import { useState, useMemo, Suspense } from "react";
import dynamic from 'next/dynamic';
import useWinners from "../../data/winners-data";
import { MultiSelectFilter } from "./MultiSelectFilter";
import { useFilteredWinners } from "../../lib/filter-hook";
import { Skeleton } from "@/components/ui/skeleton";

const WinnersTable = dynamic(() => import('./WinnersTable'), {
  loading: () => <Skeleton className="h-96 w-full" />,
  ssr: false
});

export default function Filter() {
  const winners = useWinners();
  const [selectedYears, setSelectedYears] = useState<number[]>([]);
  const [selectedFields, setSelectedFields] = useState<string[]>([]);

  const availableYears = useMemo(() => (
    Array.from(new Set(winners.map(w => w.year))).sort((a, b) => b - a)
  ), [winners]);

  const availableFields = useMemo(() => (
    Array.from(new Set(winners.map(w => w.field))).sort()
  ), [winners]);

  const filteredWinners = useFilteredWinners(winners, selectedYears, selectedFields);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4 p-4 rounded-lg border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <MultiSelectFilter
          label="Filter by Year"
          items={availableYears}
          selected={selectedYears}
          onChange={setSelectedYears}
          placeholder="Enter year..."
        />
        <MultiSelectFilter
          label="Filter by Field"
          items={availableFields}
          selected={selectedFields}
          onChange={setSelectedFields}
          placeholder="Enter field..."
        />
      </div>
      
      <Suspense fallback={<Skeleton className="h-96 w-full" />}>
        <WinnersTable winners={filteredWinners} />
      </Suspense>
    </div>
  );
}