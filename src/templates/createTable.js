import {rowTemplate, columnTemplate, cellTemplate} from '@/templates';

// createRow => creates row template
// createColumn => createColumn row template
// createCell => createCell row template

const {fromCharCode} = String;
// Char codes range
const CODES = {A: 65, Z: 90};
const COLUMNS_COUNT = CODES['Z'] - CODES['A'];

// Create Table
export function createTable(rowsCount = 30) {
  const rows = [];
  let columns = [];
  let newRow = ''; let newColumn = '';


  const store = new Proxy({}, {
    get(target, key) {
      return target[key] || ''
    }
  });


  // Start create rows
  for (let row = 0; row <= rowsCount; ++row) {
    // Start create column
    for (let column = 0; column <= COLUMNS_COUNT; ++column) {
      const columnIndex = fromCharCode(column + CODES['A']);

      // When create first column content equal to letters [A-Z] and other cells
      newColumn = (row === 0)
        ? columnTemplate(columnIndex)
        : cellTemplate(store[columnIndex + row], columnIndex + row);
      columns.push(newColumn);
    }
    // End create column


    // When create row first row info will me empty string
    newRow = rowTemplate(columns, row === 0 ? '' : row);

    rows.push(newRow);
    columns = [];
  }
  // End create table
  return rows.join('')
}
