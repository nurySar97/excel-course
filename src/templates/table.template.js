import {getArrayByCount} from '@core';


const CODES = {A: 65, Z: 90};
const COLUMNS_COUNT = CODES['Z'] - CODES['A'];


export function createTableTemplate(rowsCount = 30) {
  const rows = getArrayByCount(rowsCount + 1).map((_, idxRow) => {
    if (idxRow === 0) {
      return createRow('', getColumns())
    }
    const cols = getArrayByCount(COLUMNS_COUNT+1).map((_, col) => {
      const COLUMN = String.fromCharCode(CODES['A'] + col);
      return createCell('', COLUMN + idxRow)
    }).join('');
    return createRow(idxRow, cols);
  }).join('');

  return rows
}


function createRow(rowInfo='', cols='') {
  return `
  <div class="row">
    <div class="row-info">${rowInfo}</div>

    <div class="row-data">
      ${cols}
    </div>
  </div>`
}


function createCol(textContent='') {
  return `<div class="column">${textContent}</div>`
}


function createCell(textContent='', dataCell='') {
  return `<div class="cell" data-cell=${dataCell} contenteditable>${textContent}</div>`
}


function getColumns() {
  return getArrayByCount(COLUMNS_COUNT+1).map((_, idxCol) => {
    return createCol(String.fromCharCode(CODES.A + idxCol))
  }).join('');
}
