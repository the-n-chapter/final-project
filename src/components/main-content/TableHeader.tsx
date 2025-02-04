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
        <TableHead className="w-[80px] min-w-[80px]">
          <div className="flex items-center justify-between">
            Year
            <Button variant="ghost" onClick={toggleSort} className="h-8 w-8 p-0">
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </div>
        </TableHead>
        <TableHead className="min-w-[100px]">Field</TableHead>
        <TableHead className="min-w-[200px]">Work</TableHead>
        <TableHead className="min-w-[150px]">Author(s)</TableHead>
      </TableRow>
    </UITableHeader>
  )
}

