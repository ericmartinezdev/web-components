class WebComponent extends HTMLElement {
  constructor() {
    super();
    
    // 1. By simply setting the innerHTML
    this.innerHTML = `
      <div>
        <span>This is a web component</span>
      </div>
    `;
  }
}


customElements.define('web-component', WebComponent);