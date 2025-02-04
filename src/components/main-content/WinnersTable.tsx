"use client"

import { useState, useMemo } from "react"
import type { IgNobelWinner } from "../../data/winners-data"
import { TableHeader } from "./TableHeader"
import { TableBody } from "./TableBody"
import { TablePagination } from "./Pagination"
import { Table, TableCaption } from "@/components/ui/table"

type SortDirection = "asc" | "desc" | null

interface WinnersTableProps {
  winners: IgNobelWinner[]
}

export default function WinnersTable({ winners }: WinnersTableProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc")

  const filteredWinners = useMemo(() => {
    const filtered = winners

    if (sortDirection) {
      filtered.sort((a, b) => {
        const modifier = sortDirection === "asc" ? 1 : -1
        return (a.year - b.year) * modifier
      })
    }

    return filtered
  }, [winners, sortDirection])

  const paginatedWinners = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage
    return filteredWinners.slice(startIndex, startIndex + rowsPerPage)
  }, [filteredWinners, currentPage, rowsPerPage])

  const totalPages = Math.ceil(filteredWinners.length / rowsPerPage)

  const toggleSort = () => {
    setSortDirection((current) => {
      if (current === null) return "asc"
      if (current === "asc") return "desc"
      return null
    })
  }

  return (
    <div className="space-y-4">
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableCaption>
            A list of Ig Nobel Prize winners.
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
        totalEntries={filteredWinners.length}
        onPageChange={setCurrentPage}
        onRowsPerPageChange={setRowsPerPage}
      />
    </div>
  )
}

