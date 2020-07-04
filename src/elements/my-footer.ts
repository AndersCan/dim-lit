import { html, render } from 'lit-html';

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const template = html`
      <!-- FOOTER -->
      ${footer()}
    `;

    render(template, this);
  }
}

function footer() {
  return html`<footer class="bg-gray-600 w-full">
    <div class="relative"
      ><p class="text-white p-2 text-center">Copyright</p></div
    >
  </footer>`;
}

window.customElements.define('my-footer', Footer);
