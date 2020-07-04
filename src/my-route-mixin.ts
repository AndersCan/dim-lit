export const MyRouteMixin = (superclass: CustomElementConstructor) =>
  class extends superclass {
    enabled = false;
    static get observedAttributes() {
      return ['enabled'];
    }
    attributeChangedCallback(attrName: string, oldVal: any, newVal: any) {
      if (attrName === 'enabled') {
        const nv = typeof newVal === 'string';
        this.enabled = nv;
        
        // TODO: Type render function
        //@ts-ignore
        this.render && this.render();
      }
    }
  };
