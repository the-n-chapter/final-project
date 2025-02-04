import { YearFilter } from "./YearFilter"
import { FieldFilter } from "./FieldFilter"

export function Filter() {
  return (
    <div className="flex flex-wrap gap-4 p-4 rounded-lg border mb-4">
      <YearFilter />
      <FieldFilter />
    </div>
  )
}

