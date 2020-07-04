import { html } from 'lit-html';

export function Image(imageSrc: string) {
  return html`<div class="relative pb-2/3">
    <div class="absolute left-0 top-0 h-full w-full">
      <img class="w-full h-full object-cover" src="${imageSrc}" alt="" />
    </div>
  </div>`;
}
