export function columnTemplate(content) {
  return `
  <div class="column" data-type='resizeable-column'>
    ${content}
    <div class="resize resize-col" data-resize="col=${content}">
    </div>
  </div>`
}

