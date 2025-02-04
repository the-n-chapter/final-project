import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function YearFilter() {
  const [yearInput, setYearInput] = useState<string>("")
  const [selectedYears, setSelectedYears] = useState<number[]>([])

  // This is a placeholder. In a real application, you'd get this from props or context
  const years = [2020, 2021, 2022, 2023]

  return (
    <div className="w-full sm:w-[calc(50%-0.5rem)]">
      <label htmlFor="year-input" className="block text-sm font-medium">
        Years
      </label>
      <div className="relative">
        <Input
          id="year-input"
          type="text"
          placeholder="Search years..."
          value={yearInput}
          onChange={(e) => setYearInput(e.target.value)}
          className="mt-1"
        />
        {yearInput && (
          <div className="absolute z-10 w-full mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-auto">
            {years
              .filter((year) => year.toString().includes(yearInput) && !selectedYears.includes(year))
              .map((year) => (
                <div
                  key={year}
                  className="px-4 py-2 hover:bg-muted cursor-pointer"
                  onClick={() => {
                    setSelectedYears((prev) => [...prev, year])
                    setYearInput("")
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
            <Button
              variant="ghost"
              size="sm"
              className="ml-1 h-4 w-4 p-0"
              onClick={() => setSelectedYears((prev) => prev.filter((y) => y !== year))}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

