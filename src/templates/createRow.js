export function createRow(columns, info = '') {
  const newColumns = Array.isArray(columns) ? columns.join('') : columns
  return `
    <div class="row">
      <div class="row-info">${info}</div>
      <div class="row-data">
        ${newColumns}
      </div>
    </div>`
}
