import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"
import { TableHead, TableHeader as UITableHeader, TableRow } from "@/components/ui/table"

interface TableHeaderProps {
  toggleSort: () => void
}

export function TableHeader({ toggleSort }: TableHeaderProps) {
  return (
    <UITableHeader>
      <TableRow>
        {/* Year col: shift right and closer arrow */}
        <TableHead className="w-[100px] min-w-[100px] pl-2"> {/* add left padding */}
          <div className="flex items-center gap-0.5"> {/* reduce space between text & arrow */}
          #️⃣ Year
            <Button variant="ghost" onClick={toggleSort} className="h-8 w-6 p-0">
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </div>
        </TableHead>
        <TableHead className="min-w-[100px]">#️⃣ Field</TableHead>
        <TableHead className="min-w-[200px]">#️⃣ Work</TableHead>
        <TableHead className="min-w-[150px]">#️⃣ Author(s)</TableHead>
      </TableRow>
    </UITableHeader>
  )
}

