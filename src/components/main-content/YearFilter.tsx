"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import type { IgNobelWinner } from "../../data/winners-data";

interface YearFilterProps {
  winners: IgNobelWinner[];
  selectedYears: number[];
  onChange: (years: number[]) => void;
}

export function YearFilter({ winners, selectedYears, onChange }: YearFilterProps) {
  const [yearInput, setYearInput] = useState<string>("");

  // Extract unique available years from winners.
  const availableYears = useMemo(() => {
    return Array.from(new Set(winners.map((w) => w.year))).sort((a, b) => a - b);
  }, [winners]);

  // Filter options based on the current input and already selected years.
  const dropdownYears = availableYears.filter(
    (year) => year.toString().includes(yearInput) && !selectedYears.includes(year)
  );

  // Add year(s) from the input when the user presses Enter.
  const addYearsFromInput = () => {
    const parsedYears = yearInput
      .split(/[\s,]+/)
      .map((str) => parseInt(str.trim(), 10))
      .filter(
        (num) =>
          !isNaN(num) &&
          availableYears.includes(num) &&
          !selectedYears.includes(num)
      );
    if (parsedYears.length > 0) {
      onChange([...selectedYears, ...parsedYears]);
      setYearInput("");
    }
  };

  return (
    <div className="w-full sm:w-[calc(50%-0.5rem)]">
      <label htmlFor="year-input" className="block text-sm font-medium">
        Years
      </label>
      <div className="relative">
        <Input
          id="year-input"
          type="text"
          value={yearInput}
          onChange={(e) => setYearInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addYearsFromInput();
            }
          }}
          className="mt-1"
        />
        {yearInput && dropdownYears.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-auto">
            {dropdownYears.map((year) => (
              <div
                key={year}
                className="px-4 py-2 hover:bg-muted cursor-pointer"
                onClick={() => {
                  onChange([...selectedYears, year]);
                  setYearInput("");
                }}
              >
                {year}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {selectedYears.map((year) => (
          <div
            key={year}
            className="flex items-center bg-primary/10 text-primary text-sm font-medium px-2.5 py-0.5 rounded"
          >
            {year}
            <button
              type="button"
              onClick={() => onChange(selectedYears.filter((y) => y !== year))}
              className="ml-1 h-4 w-4 p-0"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
