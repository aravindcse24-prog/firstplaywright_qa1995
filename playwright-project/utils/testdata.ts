import * as XLSX from 'xlsx';

// Read Excel
export function readExcel(filePath: string, sheetName: string) {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[sheetName];

  if (!sheet) {
    throw new Error(`Sheet ${sheetName} not found`);
  }

  return XLSX.utils.sheet_to_json(sheet);
}

// Write Excel
export function writeExcel(
  filePath: string,
  sheetName: string,
  data: any[]
) {
  const workbook = XLSX.readFile(filePath);

  const newSheet = XLSX.utils.json_to_sheet(data);
  workbook.Sheets[sheetName] = newSheet;

  XLSX.writeFile(workbook, filePath);
}