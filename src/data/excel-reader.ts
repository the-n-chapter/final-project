import * as XLSX from 'xlsx';

export const excelRead = (filePath: string) => {
  // Using fetch to access the file in the public directory
  return fetch(filePath)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch file');
      }
      return res.arrayBuffer();  // Convert the response to ArrayBuffer
    })
    .then((data) => {
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet);
      return jsonData;
    })
    .catch((err) => {
      console.error("Error reading Excel file:", err);
      return [];
    });
};
