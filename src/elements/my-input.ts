import { html, render } from 'lit-html';
import { MyRouteMixin } from '../my-route-mixin';
import { MyAttributeMixin } from '../my-attribute-mixin';

class MyInput extends MyAttributeMixin(MyRouteMixin(HTMLElement)) {
  connectedCallback() {
    this.render();
  }

  render() {
    const attributeName = this.getAttribute('attr');
    const template = html`<div class="py-8">${input(attributeName)}</div>`;
    render(template, this);
  }
}

function input(attributeName: string) {
  return html` <label>
    Text
    <input
      class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
      type="text"
      @input=${(evt: InputEvent) => {
        const yeet = document.querySelector('my-yeet');
        yeet?.setAttribute(attributeName, evt?.target?.value);
      }}
    />
  </label>`;
}

window.customElements.define('my-input', MyInput);
