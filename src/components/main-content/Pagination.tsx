import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
  
interface PaginationProps {
    currentPage: number
    totalPages: number
    rowsPerPage: number
    totalEntries: number
    onPageChange: (page: number) => void
    onRowsPerPageChange: (rows: number) => void
}
  
export function TablePagination({
    currentPage,
    totalPages,
    rowsPerPage,
    totalEntries,
    onPageChange,
    onRowsPerPageChange,
  }: PaginationProps) {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-between px-2 gap-4">
        <div className="text-sm text-muted-foreground order-2 sm:order-1">{totalEntries} total entries</div>
        <div className="flex flex-col sm:flex-row items-center gap-4 order-1 sm:order-2">
          <div className="flex items-center gap-2">
            <span className="text-sm">Rows per page</span>
            <Select
              value={rowsPerPage.toString()}
              onValueChange={(value) => {
                onRowsPerPageChange(Number.parseInt(value))
                onPageChange(1)
              }}
            >
              <SelectTrigger className="w-[70px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[5, 10, 20, 50].map((value) => (
                  <SelectItem key={value} value={value.toString()}>
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" onClick={() => onPageChange(Math.max(1, currentPage - 1))} />
              </PaginationItem>
              <PaginationItem className="hidden sm:inline-block">
                <PaginationLink href="#" onClick={() => onPageChange(1)} isActive={currentPage === 1}>
                  1
                </PaginationLink>
              </PaginationItem>
              {currentPage > 3 && (
                <PaginationItem className="hidden sm:inline-block">
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              {currentPage > 2 && (
                <PaginationItem className="hidden sm:inline-block">
                  <PaginationLink href="#" onClick={() => onPageChange(currentPage - 1)}>
                    {currentPage - 1}
                  </PaginationLink>
                </PaginationItem>
              )}
              {currentPage !== 1 && currentPage !== totalPages && (
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    {currentPage}
                  </PaginationLink>
                </PaginationItem>
              )}
              {currentPage < totalPages - 1 && (
                <PaginationItem className="hidden sm:inline-block">
                  <PaginationLink href="#" onClick={() => onPageChange(currentPage + 1)}>
                    {currentPage + 1}
                  </PaginationLink>
                </PaginationItem>
              )}
              {currentPage < totalPages - 2 && (
                <PaginationItem className="hidden sm:inline-block">
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              {totalPages > 1 && (
                <PaginationItem className="hidden sm:inline-block">
                  <PaginationLink href="#" onClick={() => onPageChange(totalPages)} isActive={currentPage === totalPages}>
                    {totalPages}
                  </PaginationLink>
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationNext href="#" onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    )
}
  