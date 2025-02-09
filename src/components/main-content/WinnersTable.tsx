// WinnersTable.tsx

"use client";

import { useState, useMemo } from "react";
import type { IgNobelWinner } from "../../data/winners-data";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import { TablePagination } from "./Pagination";
import { Table, TableCaption } from "@/components/ui/table";

type SortDirection = "asc" | "desc" | null;

interface WinnersTableProps {
  winners: IgNobelWinner[];
}

export default function WinnersTable({ winners }: WinnersTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10); // initial state = 10
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc"); // most recent years first

  // Sort winners based on year
  const sortedWinners = useMemo(() => {
    const sorted = [...winners]; // create a shallow copy to avoid mutating props
    if (sortDirection) {
      sorted.sort((a, b) => {
        // 1 = smallest -> largest
        // -1 = largest -> smallest
        const modifier = sortDirection === "asc" ? 1 : -1;
        return (a.year - b.year) * modifier;
      });
    }
    return sorted;
  }, [winners, sortDirection]);

  // Paginate sorted winners
  const paginatedWinners = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    return sortedWinners.slice(startIndex, startIndex + rowsPerPage);
  }, [sortedWinners, currentPage, rowsPerPage]);

  const totalPages = Math.ceil(sortedWinners.length / rowsPerPage);

  const toggleSort = () => {
    setSortDirection((current) => {
      if (current === null) return "asc";
      if (current === "asc") return "desc";
      return null;
    });
  };

  return (
    <div className="space-y-4">
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableCaption>
            <span className="text-slate-400">A list of Ig Nobel Prize winners</span>
            <div className="h-4"></div>
          </TableCaption>
          <TableHeader toggleSort={toggleSort} />
          <TableBody winners={paginatedWinners} />
        </Table>
      </div>
      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        rowsPerPage={rowsPerPage}
        totalEntries={sortedWinners.length}
        onPageChange={setCurrentPage}
        onRowsPerPageChange={setRowsPerPage}
      />
    </div>
  );
}
