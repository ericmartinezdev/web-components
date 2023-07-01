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
    `;
  }
  attributeChangedCallback(attrName, oldValue, newValue) {
    if(attrName == 'text') {
      this.innerHTML = `
        <div>
          <span>${newValue}</span>
        </div>
      `;
    }
  }

  static get observedAttributes() {
    return ['text'];
  }
}


customElements.define('web-component', WebComponent);