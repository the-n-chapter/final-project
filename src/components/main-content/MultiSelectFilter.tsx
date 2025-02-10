// MultiSelectFilter.tsx
import { useState, useMemo, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface MultiSelectFilterProps<T> {
  label: string;
  items: T[];
  selected: T[];
  onChange: (items: T[]) => void;
  toString?: (item: T) => string;
  placeholder?: string;
}

export function MultiSelectFilter<T>({
  label,
  items,
  selected,
  onChange,
  toString = (item: T) => String(item),
  placeholder
}: MultiSelectFilterProps<T>) {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const dropdownOptions = useMemo(() => {
    if (!input.trim()) return [];
    
    const searchTerm = input.toLowerCase();
    return items.filter(item => {
      const str = toString(item).toLowerCase();
      return str.includes(searchTerm) && !selected.includes(item);
    }).slice(0, 10); // Limit display to 10 items for performance
  }, [items, input, selected, toString]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setIsOpen(true);
  }, []);

  const handleSelect = useCallback((item: T) => {
    onChange([...selected, item]);
    setInput("");
    setIsOpen(false);
  }, [selected, onChange]);

  const handleRemove = useCallback((itemToRemove: T) => {
    onChange(selected.filter(item => item !== itemToRemove));
  }, [selected, onChange]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      return;
    }
    
    if (e.key === 'Enter' && dropdownOptions.length > 0) {
      e.preventDefault();
      handleSelect(dropdownOptions[0]);
    }
  }, [dropdownOptions, handleSelect]);

  return (
    <div className="w-full sm:w-[calc(50%-0.5rem)]">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <div className="relative">
        <Input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full"
          aria-label={label}
        />
        
        {isOpen && dropdownOptions.length > 0 && (
          <div 
            className="absolute z-10 w-full mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-auto"
            role="listbox"
          >
            {dropdownOptions.map((item, idx) => (
              <div
                key={`${toString(item)}-${idx}`}
                className="px-4 py-2 hover:bg-muted cursor-pointer"
                onClick={() => handleSelect(item)}
                role="option"
              >
                {toString(item)}
              </div>
            ))}
          </div>
        )}
      </div>
      
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {selected.map((item, idx) => (
            <Badge
              key={`${toString(item)}-${idx}`}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {toString(item)}
              <button
                type="button"
                onClick={() => handleRemove(item)}
                className="ml-1 h-4 w-4 p-0 hover:text-destructive"
                aria-label={`Remove ${toString(item)}`}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}