export function rowTemplate(columns, info = '') {
  const newColumns = Array.isArray(columns) ? columns.join('') : columns
  return `
    <div class="row">
      <div class="row-info">
      ${info}
      ${info &&
        `<div class="resize resize-row">
            <div class="resize__inner resize-row__inner"></div>
          </div>`}
      </div>
      <div class="row-data">
        ${newColumns}
      </div>
    </div>`
}
