import {createRow, createColumn, createCell} from '@/templates';


const {fromCharCode} = String;
const CODES = {A: 65, Z: 90};
const COLUMNS_COUNT = CODES['Z'] - CODES['A'];


export function createTable(rowsCount = 30) {
  const rows = [];
  let columns = [];
  let newRow = ''; let newColumn ='';


  for (let row = 0; row <= rowsCount; ++row) {
    // Start create column
    for (let column = 0; column <= COLUMNS_COUNT; ++column) {
      const columnIndex = fromCharCode(column + CODES['A']);


      newColumn = (row === 0)
        ? createColumn(columnIndex)
        : createCell('', columnIndex + row);
      columns.push(newColumn);
    }
    // End create column


    newRow = (row === 0)
      ? createRow(columns, '')
      : createRow(columns, row)


    rows.push(newRow);
    columns = []
  }
  return rows.join('')
}
