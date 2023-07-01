class WebComponent extends HTMLElement {
  constructor() {
    super();
    
    console.log(this.getAttribute('text'));
  }
}


customElements.define('web-component', WebComponent);