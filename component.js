class WebComponent extends HTMLElement {
  constructor() {
    super();
    
    if(this.hasAttribute('text')) {
      this.innerTextContent = this.getAttribute('text');
    }

    this.innerHTML = `
      <div>
        <span>${this.innerTextContent}</span>
      </div>
    `

  }
}


customElements.define('web-component', WebComponent);