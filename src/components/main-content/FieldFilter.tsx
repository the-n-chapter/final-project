"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import type { IgNobelWinner } from "../../data/winners-data";

interface FieldFilterProps {
  winners: IgNobelWinner[];
  selectedFields: string[];
  onChange: (fields: string[]) => void;
}

export function FieldFilter({ winners, selectedFields, onChange }: FieldFilterProps) {
  const [fieldInput, setFieldInput] = useState<string>("");

  // Extract unique fields from winners.
  const availableFields = useMemo(() => {
    return Array.from(new Set(winners.map((w) => w.field))).sort();
  }, [winners]);

  // Filter options based on the current input and already selected fields.
  const dropdownFields = availableFields.filter(
    (field) =>
      field.toLowerCase().includes(fieldInput.toLowerCase()) &&
      !selectedFields.includes(field)
  );

  // Add field(s) from the input when the user presses Enter.
  const addFieldsFromInput = () => {
    const parsedFields = fieldInput
      .split(/[\s,]+/)
      .map((str) => str.trim())
      .filter(
        (field) =>
          field &&
          availableFields.includes(field) &&
          !selectedFields.includes(field)
      );
    if (parsedFields.length > 0) {
      onChange([...selectedFields, ...parsedFields]);
      setFieldInput("");
    }
  };

  return (
    <div className="w-full sm:w-[calc(50%-0.5rem)]">
      <label htmlFor="field-input" className="block text-sm font-medium">
       🔎 Fields
      </label>
      <div className="relative">
        <Input
          id="field-input"
          type="text"
          value={fieldInput}
          onChange={(e) => setFieldInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addFieldsFromInput();
            }
          }}
          className="mt-1"
        />
        {fieldInput && dropdownFields.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-auto">
            {dropdownFields.map((field) => (
              <div
                key={field}
                className="px-4 py-2 hover:bg-muted cursor-pointer"
                onClick={() => {
                  onChange([...selectedFields, field]);
                  setFieldInput("");
                }}
              >
                {field}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {selectedFields.map((field) => (
          <div
            key={field}
            className="flex items-center bg-primary/10 text-primary text-sm font-medium px-2.5 py-0.5 rounded"
          >
            {field}
            <button
              type="button"
              onClick={() => onChange(selectedFields.filter((f) => f !== field))}
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
