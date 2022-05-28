export function columnTemplate(content) {
  return `
  <div class="column">
    ${content}
    <div class="resize resize-col">
    <div class="resize__inner resize-col__inner"></div>
    </div>
  </div>`
}

