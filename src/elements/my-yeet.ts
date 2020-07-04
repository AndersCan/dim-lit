import { html, render } from 'lit-html';
import { MyRouteMixin } from '../my-route-mixin';
import { MyAttributeMixin } from '../my-attribute-mixin';

// YEEET
class MyYeet extends MyAttributeMixin(MyRouteMixin(HTMLElement)) {
  static get observedAttributes() {
    return ['text', 'size', 'backgroundcolor', 'color'];
  }
  connectedCallback() {
    this.render();
  }

  render() {
    //@ts-expect-error
    const { text, size, backgroundcolor, color } = this;
    const template = html`${trokk(text, size, backgroundcolor, color)} `;
    render(template, this);
  }
}

function trokk(
  text: string,
  size: string,
  backgroundcolor: string,
  color: string
) {
  const bg = `background-image: url(${svgText(text, size, color)})`;
  return html`<div
    class="yeet-container relative overflow-hidden bg-orange-300"
    style="height:40px;"
  >
    <div class="yeet yeet-1" style="${bg}"></div>
  </div>`;
}

function svgText(text: string, size = '20', color = 'red') {
  return `"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' height='50px' width='${
    16 * text.length + 16
  }px'><text style='font-weight:900;font-style: italic;' x='0' y='35px' fill='${color}' font-size='${size}px'>${text}</text></svg>"`;
}
window.customElements.define('my-yeet', MyYeet);
