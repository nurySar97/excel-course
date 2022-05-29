export function cellTemplate(content = '', dataCell = '') {
  return `<div class="cell" data-cell=${dataCell} contenteditable>${content}</div>`
}
