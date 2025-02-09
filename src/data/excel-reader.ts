// excel-reader.ts

import * as XLSX from 'xlsx';

export const excelRead = (filePath: string) => {
  // Fetches the file from the given filePath
  return fetch(filePath)
    .then((res) => {
      if (!res.ok) { // if response is not ok, throw an error
        throw new Error('Failed to fetch file');
      }
      return res.arrayBuffer();  // Convert response to an ArrayBuffer (binary format required by XLSX)
    })
    .then((data) => {
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]]; // Extract the 1st worksheet
      const jsonData = XLSX.utils.sheet_to_json(worksheet); // Convert worksheet to JSON
      return jsonData; // returns JSON data if success
    })
    .catch((err) => {
      console.error("Error reading Excel file:", err); // returns error or empty array if fails
      return [];
    });
};
