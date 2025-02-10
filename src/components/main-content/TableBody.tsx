// TableBody.tsx

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
          <TableCell className="pl-6">{winner.year}</TableCell>
          <TableCell className="pr-4">{winner.field}</TableCell>
          <TableCell className="w-[45%] pr-4">{winner.work}</TableCell>
          <TableCell className="w-[35%]">{winner.author}</TableCell>
        </TableRow>
      ))}
    </UITableBody>
  )
}

