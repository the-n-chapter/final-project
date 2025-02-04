import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function FieldFilter() {
  const [fieldInput, setFieldInput] = useState<string>("")
  const [selectedFields, setSelectedFields] = useState<string[]>([])

  // This is a placeholder. In a real application, you'd get this from props or context
  const fields = ["Physics", "Chemistry", "Medicine", "Literature", "Peace"]

  return (
    <div className="w-full sm:w-[calc(50%-0.5rem)]">
      <label htmlFor="field-input" className="block text-sm font-medium">
        Fields
      </label>
      <div className="relative">
        <Input
          id="field-input"
          type="text"
          placeholder="Search fields..."
          value={fieldInput}
          onChange={(e) => setFieldInput(e.target.value)}
          className="mt-1"
        />
        {fieldInput && (
          <div className="absolute z-10 w-full mt-1 bg-background border rounded-md shadow-lg max-h-60 overflow-auto">
            {fields
              .filter(
                (field) => field.toLowerCase().includes(fieldInput.toLowerCase()) && !selectedFields.includes(field),
              )
              .map((field) => (
                <div
                  key={field}
                  className="px-4 py-2 hover:bg-muted cursor-pointer"
                  onClick={() => {
                    setSelectedFields((prev) => [...prev, field])
                    setFieldInput("")
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
            <Button
              variant="ghost"
              size="sm"
              className="ml-1 h-4 w-4 p-0"
              onClick={() => setSelectedFields((prev) => prev.filter((f) => f !== field))}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

