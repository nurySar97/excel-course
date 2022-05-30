export function columnTemplate(content) {
  return `
  <div class="column" data-type='resizeable-column' data-column="${content}">
    ${content}
    <div class="resize resize-col" data-resize="col=${content}">
    </div>
  </div>`
}

