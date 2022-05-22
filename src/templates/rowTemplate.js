export function rowTemplate(columns, info = '') {
  const newColumns = Array.isArray(columns) ? columns.join('') : columns
  return `
    <div class="row">
      <div class="row-info">
      ${info}
      ${info && '<div class="resize row-resize"></div>'}
      </div>
      <div class="row-data">
        ${newColumns}
      </div>
    </div>`
}
