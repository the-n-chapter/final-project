"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import type { IgNobelWinner } from "../../data/winners-data";

// This prop receives 3 props
interface YearFilterProps {
  winners: IgNobelWinner[]; // list of winners, an array of IgNobelWinner object
  selectedYears: number[]; // currently selected years, an array of numbers
  onChange: (years: number[]) => void; // function to update selected years from users
}

export function YearFilter({ winners, selectedYears, onChange }: YearFilterProps) {
  const [yearInput, setYearInput] = useState<string>("");
  // store user's input in the text box
  // update yearInput when the user types

  // Step 1: Extracts and sorts unique years from the data winners
  // useMemo to prevent recalculating unless winners changes
  const availableYears = useMemo(() => {
    // Extract years from winners list
    const years = winners.map((winner) => winner.year);
  
    // Create a new Set object which contains unique years from years
    // Then convert Set back to Array
    const uniqueYears = Array.from(new Set(years));
  
    // Sort ascending order
    uniqueYears.sort((a, b) => a - b);
  
    return uniqueYears;
  }, [winners]);

  // Step 2: Suggest years that match the input (not selected yet)
  // Filter options based on current input and already selected years
  const dropdownYears = availableYears.filter((year) => {
    const yearString = year.toString(); // Convert number (year) to a string
    const isMatchingInput = yearString.includes(yearInput); // Check if it matches user input
    const isNotSelected = !selectedYears.includes(year); // Ensure it's not already selected
  
    return isMatchingInput && isNotSelected; // Only keep years that match input & not selected yet
  });  

  // Step 3: Parses input and updates selected years (onChange)
  // Add year(s) from the input when the user presses Enter
  // Useful when users do not type each year per time, but multiple years
  // Eg: 2022 2024 2005
  const addYearsFromInput = () => {
    const parsedYears = yearInput
      .split(/[\s,]+/) // Spaces (\s), commas (,), one or more (+) spaces or commas in a row
      .map((str) => parseInt(str.trim(), 10)) // Convert each piece into a number, trim() remove any spaces
      .filter(
        (num) =>
          !isNaN(num) && // ignore invalid numbers
          availableYears.includes(num) && // // only allow years exist in the list
          !selectedYears.includes(num) // ignore already selected years
      );
    if (parsedYears.length > 0) {
      onChange([...selectedYears, ...parsedYears]); // add new years to selected
      setYearInput(""); // clear input box
    }
  };

  return (
    <div className="w-full sm:w-[calc(50%-0.5rem)]">
      <label htmlFor="year-input" className="block text-sm font-medium">
       ⌕ Years
      </label>
      <div className="relative">
        <Input
          id="year-input"
          type="text"
          value={yearInput}
          onChange={(e) => setYearInput(e.target.value)} // when user types input, it changes the yearInput state
          onKeyDown={(e) => {
            if (e.key === "Enter") { // when user presses Enter key
              e.preventDefault(); // default = form submission
              addYearsFromInput(); // Step 3
            }
          }}
          className="mt-1" // small margin to the top of the input
        />
        {/* UI: Shows filtered years as a dropdown list
        Dropdown only appears when: yearInput not empty + dropdrownYears not empty */ } 
        {yearInput && dropdownYears.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-background border rounded-md max-h-60 overflow-auto">
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
              onClick={() => {
                // Create a new array without the current year
                const updatedYears = selectedYears.filter((currentYear) => {
                  return currentYear !== year;
                });
                // Update the selected years with the new array
                onChange(updatedYears);
              }}
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
