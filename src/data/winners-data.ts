'use client';

import { useEffect, useState } from 'react';
import { excelRead } from './excel-reader';  

export interface IgNobelWinner {
  year: number;
  field: string;
  work: string;
  author: string;
}

const useWinners = () => {
  const [winners, setWinners] = useState<IgNobelWinner[]>([]);

  useEffect(() => {
    const filePath = '/data.xlsx';  // Ensure this file exists in the 'public' directory
    excelRead(filePath).then((excelData) => {
      setWinners(excelData as IgNobelWinner[]);
    });
  }, []);

  return winners;
};

export default useWinners;