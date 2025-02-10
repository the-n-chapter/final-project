export const excelRead = async (filePath: string) => {
  try {
    // Dynamically import 'xlsx' to reduce bundle size
    const XLSX = await import('xlsx');

    // Fetch file from given filePath
    const res = await fetch(filePath);
    if (!res.ok) throw new Error('Failed to fetch file');

    const data = await res.arrayBuffer(); // Convert response to an ArrayBuffer

    const workbook = XLSX.read(data, { type: 'array' });
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]; // Extract 1st worksheet
    return XLSX.utils.sheet_to_json(worksheet); // Convert worksheet to JSON
  } catch (err) {
    console.error("Error reading Excel file:", err);
    return []; // Return empty array on failure
  }
};
