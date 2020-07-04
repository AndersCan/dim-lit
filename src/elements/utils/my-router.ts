import * as Router from '../../router.js';

export class MyRoute extends HTMLElement {
  connectedCallback() {
    const THIS_ROUTE = this.getAttribute('path') || '';
    const EXACT = this.hasAttribute('exact');

    Router.on('change', (location: Location) => {
      if (EXACT) {
        this.toggle(location.pathname === THIS_ROUTE);
        return;
      }
      
      this.toggle(location.pathname.startsWith(THIS_ROUTE));
    });
  }

  toggle(enable: boolean) {
    for (const child of this.children) {
      if (enable) {
        child.setAttribute('enabled', '');
      } else {
        child.removeAttribute('enabled');
      }
    }
  }
}

window.customElements.define('my-route', MyRoute);
