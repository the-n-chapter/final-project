// winners-data.ts

'use client'; // include this because without this, useEffect and useState cannot run (client-side hooks)

import { useEffect, useState } from 'react';
import { excelRead } from './excel-reader';  

// Define data structure
export interface IgNobelWinner {
  year: number;
  field: string;
  work: string;
  author: string;
}

const useWinners = () => {
  const [winners, setWinners] = useState<IgNobelWinner[]>([]); // empty array at first
  // use <IgNobelWinner[]> so TypeScript will warn when I use wrong type of data

  useEffect(() => { // Load only once when we open the browser
    const filePath = '/data.xlsx';  // Tell the browser where to find the file -> public 
    excelRead(filePath).then((excelData) => { // Read the file and convert into JSON (JavaScript object)
      setWinners(excelData as IgNobelWinner[]); // Update 'winners' state with new data  
    });
  }, []);

  return winners; // Can reuse winners whenever calls userWinners()
};

export default useWinners;