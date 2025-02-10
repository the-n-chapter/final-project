// MultiSelectFilter.tsx
"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface MultiSelectFilterProps<T> {
  label: string;
  items: T[];
  selected: T[];
  onChange: (items: T[]) => void;
  // Optionally transform the item to string
  toString?: (item: T) => string;
}

export function MultiSelectFilter<T>({
  label,
  items,
  selected,
  onChange,
  toString = (item: T) => String(item),
}: MultiSelectFilterProps<T>) {
  const [input, setInput] = useState("");

  // Calculate options that are not selected and match input
  const dropdownOptions = useMemo(() => {
    return items.filter(item => {
      const str = toString(item);
      return str.includes(input) && !selected.includes(item);
    });
  }, [items, input, selected, toString]);

  // Parse input into potential new selections (splitting on space/comma)
  const addFromInput = () => {
    const newSelections = input
      .split(/[\s,]+/)
      .map(s => s.trim())
      .filter(s => s && items.map(toString).includes(s))
      .map(s => {
        // Convert string back to T if T is number; otherwise assume string
        return (typeof items[0] === "number" ? Number(s) : s) as T;
      });
    if (newSelections.length > 0) {
      onChange([...selected, ...newSelections]);
      setInput("");
    }
  };

  return (
    <div className="w-full sm:w-[calc(50%-0.5rem)]">
      <label className="block text-sm font-medium">{label}</label>
      <div className="relative">
        <Input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter") {
              e.preventDefault();
              addFromInput();
            }
          }}
          className="mt-1"
        />
        {input && dropdownOptions.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-auto">
            {dropdownOptions.map((item, idx) => (
              <div
                key={idx}
                className="px-4 py-2 hover:bg-muted cursor-pointer"
                onClick={() => {
                  onChange([...selected, item]);
                  setInput("");
                }}
              >
                {toString(item)}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {selected.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center bg-primary/10 text-primary text-sm font-medium px-2.5 py-0.5 rounded"
          >
            {toString(item)}
            <button
              type="button"
              onClick={() =>
                onChange(selected.filter(s => s !== item))
              }
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
