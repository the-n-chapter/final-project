import { TableBody as UITableBody, TableCell, TableRow } from "@/components/ui/table"
import type { IgNobelWinner } from "../../data/winners-data"

interface TableBodyProps {
  winners: IgNobelWinner[]
}

export function TableBody({ winners }: TableBodyProps) {
  return (
    <UITableBody>
      {winners.map((winner, index) => (
        <TableRow key={index}>
          <TableCell className="font-medium">{winner.year}</TableCell>
          <TableCell>{winner.field}</TableCell>
          <TableCell>{winner.work}</TableCell>
          <TableCell>{winner.author}</TableCell>
        </TableRow>
      ))}
    </UITableBody>
  )
}

