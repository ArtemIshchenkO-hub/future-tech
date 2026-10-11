import IMask from 'imask';

const rootSelector = '[data-js-input-mask]';

class InputMask {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.init();
  }

  init() {
    const isLibReady = typeof IMask !== 'undefined';

    if (isLibReady) {
      IMask(this.rootElement, {
        mask: this.rootElement.dataset.jsInputMask,
      });
    } else {
      console.error('Library "imask" don`t includes!');
    }
  }
}

class InputMaskCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach(element => {
      new InputMask(element);
    });
  }
}

export default InputMaskCollection;
