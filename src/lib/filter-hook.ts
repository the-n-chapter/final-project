import { useMemo } from 'react';
import type { IgNobelWinner } from '../data/winners-data';

export function useFilteredWinners(
  winners: IgNobelWinner[],
  selectedYears: number[],
  selectedFields: string[]
) {
  return useMemo(() => {
    if (!selectedYears.length && !selectedFields.length) return winners;
    
    return winners.filter(winner => {
      const yearMatch = selectedYears.length === 0 || selectedYears.includes(winner.year);
      const fieldMatch = selectedFields.length === 0 || selectedFields.includes(winner.field);
      return yearMatch && fieldMatch;
    });
  }, [winners, selectedYears, selectedFields]);
}
