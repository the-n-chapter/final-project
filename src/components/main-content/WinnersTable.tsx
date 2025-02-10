// WinnersTable.tsx
import { useState, useMemo, useCallback, Suspense } from "react";
import dynamic from 'next/dynamic';
import { Table, TableCaption } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import type { IgNobelWinner } from "../../data/winners-data"

// Dynamic imports for code splitting
const TableHeader = dynamic(() => import('./TableHeader'), {
  loading: () => <Skeleton className="h-12 w-full" />,
  ssr: false
});

const TableBody = dynamic(() => import('./TableBody'), {
  loading: () => (
    <div className="space-y-2">
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} className="h-12 w-full" />
      ))}
    </div>
  ),
  ssr: false
});

const TablePagination = dynamic(() => import('./Pagination'), {
  loading: () => <Skeleton className="h-10 w-full" />,
  ssr: false
});

interface WinnersTableProps {
  winners: IgNobelWinner[];
}

export default function WinnersTable({ winners }: WinnersTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  // Memoized sorting function
  const sortedWinners = useMemo(() => {
    return [...winners].sort(
      (a, b) => (a.year - b.year) * (sortDirection === "asc" ? 1 : -1)
    );
  }, [winners, sortDirection]);

  // Memoized pagination
  const paginatedWinners = useMemo(() => {
    const start = (currentPage - 1) * rowsPerPage;
    return sortedWinners.slice(start, start + rowsPerPage);
  }, [sortedWinners, currentPage, rowsPerPage]);

  // Memoized calculations
  const totalPages = useMemo(() => 
    Math.ceil(sortedWinners.length / rowsPerPage),
    [sortedWinners.length, rowsPerPage]
  );

  // Callbacks for event handlers
  const toggleSort = useCallback(() => {
    setSortDirection(prev => prev === "asc" ? "desc" : "asc");
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleRowsPerPageChange = useCallback((rows: number) => {
    setRowsPerPage(rows);
    setCurrentPage(1); // Reset to first page when changing rows per page
  }, []);

  return (
    <div className="space-y-4">
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableCaption>
            <span className="text-slate-400">A list of Ig Nobel Prize winners</span>
            <div className="h-4"></div>
          </TableCaption>
          <Suspense fallback={<Skeleton className="h-12 w-full" />}>
            <TableHeader toggleSort={toggleSort} sortDirection={sortDirection} />
          </Suspense>
          <Suspense 
            fallback={
              <div className="space-y-2 p-4">
                {[...Array(rowsPerPage)].map((_, i) => (
                  <Skeleton key={i} className="h-12 w-full" />
                ))}
              </div>
            }
          >
            <TableBody winners={paginatedWinners} />
          </Suspense>
        </Table>
      </div>
      <Suspense fallback={<Skeleton className="h-10 w-full" />}>
        <TablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          rowsPerPage={rowsPerPage}
          totalEntries={sortedWinners.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </Suspense>
    </div>
  );
}