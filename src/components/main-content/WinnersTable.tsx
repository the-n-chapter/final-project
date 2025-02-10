// WinnersTable.tsx
"use client";

import { useState, useMemo } from "react";
import type { IgNobelWinner } from "../../data/winners-data";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import { TablePagination } from "./Pagination";
import { Table, TableCaption } from "@/components/ui/table";

type SortDirection = "asc" | "desc";

interface WinnersTableProps {
  winners: IgNobelWinner[];
}

export default function WinnersTable({ winners }: WinnersTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const sortedWinners = useMemo(() => {
    const sorted = [...winners];
    sorted.sort((a, b) => (a.year - b.year) * (sortDirection === "asc" ? 1 : -1));
    return sorted;
  }, [winners, sortDirection]);

  const paginatedWinners = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return sortedWinners.slice(start, start + rowsPerPage);
  }, [sortedWinners, currentPage, rowsPerPage]);

  const totalPages = Math.ceil(sortedWinners.length / rowsPerPage);

  const toggleSort = () => {
    setSortDirection(prev => (prev === "asc" ? "desc" : "asc"));
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
