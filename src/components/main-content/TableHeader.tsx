// TableHeader.tsx
import { memo } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { TableHead, TableHeader as UITableHeader, TableRow } from "@/components/ui/table";

interface TableHeaderProps {
  toggleSort: () => void;
  sortDirection: 'asc' | 'desc';
}

export default memo(function TableHeader({ toggleSort, sortDirection }: TableHeaderProps) {
  return (
    <UITableHeader>
      <TableRow>
        <TableHead className="w-[100px] min-w-[100px] pl-2">
          <div className="flex items-center gap-0.5">
          #️⃣ Year
            <Button 
              variant="ghost" 
              onClick={toggleSort} 
              className="h-8 w-6 p-0"
              aria-label={`Sort by year ${sortDirection === 'asc' ? 'descending' : 'ascending'}`}
            >
              <ArrowUpDown className="h-4 w-4" />
            </Button>
          </div>
        </TableHead>
        <TableHead className="min-w-[100px]">#️⃣ Field</TableHead>
        <TableHead className="min-w-[200px]">#️⃣ Work</TableHead>
        <TableHead className="min-w-[150px]">#️⃣ Author(s)</TableHead>
      </TableRow>
    </UITableHeader>
  );
});

