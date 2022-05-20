const {fromCharCode} = String;


const CODES = {A: 65, Z: 90};
const COLUMNS_COUNT = CODES['Z'] - CODES['A'];


export function createTableTemplate(rowsCount = 30) {
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
      ? createRow('', columns.join(''))
      : createRow(row, columns.join(''))


    rows.push(newRow);
    columns = []
  }
  return rows.join('')
}


function createRow(info='', columns='') {
  return `
  <div class="row">
    <div class="row-info">${info}</div>
    <div class="row-data">
      ${columns}
    </div>
  </div>`
}


function createColumn(content) {
  return `<div class="column">${content}</div>`
}


function createCell(content='', dataCell='') {
  return `<div class="cell" data-cell=${dataCell} contenteditable>${content}</div>`
}
