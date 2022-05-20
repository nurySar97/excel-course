export function createCell(content='', dataCell='') {
  return `<div class="cell" data-cell=${dataCell} contenteditable>${content}</div>`
}
