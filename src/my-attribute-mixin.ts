export const MyAttributeMixin = (superclass: CustomElementConstructor) =>
  class extends superclass {
    attributeChangedCallback(attrName: string, oldVal: any, newVal: any) {
      // @ts-expect-error
      this[attrName] = newVal;
      // @ts-expect-error
      this.render();
    }
  };
