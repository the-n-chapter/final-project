// TableBody.tsx

import type { IgNobelWinner } from "../../data/winners-data"
import { memo } from 'react';
import { TableBody as UITableBody, TableCell, TableRow } from "@/components/ui/table";

interface TableBodyProps {
  winners: IgNobelWinner[];
}

export default memo(function TableBody({ winners }: TableBodyProps) {
  return (
    <UITableBody>
      {winners.map((winner) => (
        <TableRow key={`${winner.year}-${winner.field}-${winner.author}`}>
          <TableCell className="pl-6">{winner.year}</TableCell>
          <TableCell className="pr-4">{winner.field}</TableCell>
          <TableCell className="w-[45%] pr-4">{winner.work}</TableCell>
          <TableCell className="w-[35%]">{winner.author}</TableCell>
        </TableRow>
      ))}
    </UITableBody>
  );
});

