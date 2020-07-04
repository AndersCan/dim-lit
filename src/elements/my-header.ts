import { html, render } from 'lit-html';
import { MyRouteMixin } from '../my-route-mixin';

class MyBanner extends MyRouteMixin(HTMLElement) {
  connectedCallback() {
    this.render();
  }

  render() {
    if (!this.enabled) {
      return
    }

    const template = html`${header()} `;

    render(template, this);
  }
}

function header() {
  return html` <header class="block w-full h-full bg-blue-100">
        <h1
          class="text-xl"
        >
          Dim-lit
        </h1>
  </header>`;
}
window.customElements.define('my-header', MyBanner);
