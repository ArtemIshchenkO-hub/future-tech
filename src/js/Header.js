class Header {
  selectors = {
    root: '[data-js-header]',
    overlay: '[data-js-header-overlay]',
    links: '[data-js-header-link]',
    burgerButton: '[data-js-header-burger-button]',
  };

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  };

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root);
    this.overlayElement = this.rootElement.querySelector(
      this.selectors.overlay
    );
    this.links = this.rootElement.querySelectorAll(this.selectors.links);
    this.burgerButtonElement = this.rootElement.querySelector(
      this.selectors.burgerButton
    );
    this.currentPath =
      window.location.pathname === '/'
        ? '/index.html'
        : window.location.pathname;
    this.bindEvents();
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
    this.overlayElement.classList.toggle(this.stateClasses.isActive);
    document.documentElement.classList.toggle(this.stateClasses.isLock);
  };

  setActiveLink() {
    this.links.forEach(link => {
      const linkPath = new URL(link.href).pathname;
      const isActive = this.currentPath === linkPath;

      link.classList.toggle(this.stateClasses.isActive, isActive);
    });
  }

  bindEvents() {
    this.burgerButtonElement.addEventListener(
      'click',
      this.onBurgerButtonClick
    );
    this.setActiveLink();
  }
}

export default Header;
