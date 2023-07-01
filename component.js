class WebComponent extends HTMLElement {
  
  // 1. Constructor - created in memory but not necessarily attached to the DOM yet
  // This is best place for initilisation but not the best place for interacting with the DOM
  constructor() {
    super();

    console.log('constructor')
    
    if(this.hasAttribute('text')) {
      this.innerTextContent = this.getAttribute('text');
    }

    this.innerHTML = `
      <div>
        <span>${this.innerTextContent}</span>
      </div>
    `;
  }

  // 2. Connected Callback - when the element is attached to the DOM
  connectedCallback() {
    console.log('Connected Callback')
  }

  // 3. Attribute Changed Callback - checking if an attribute has changed
  attributeChangedCallback(attrName, oldValue, newValue) {
    if(attrName == 'text') {
      this.innerHTML = `
        <div>
          <span>${newValue}</span>
        </div>
      `;
    }
  }

  // 4. Disconnected Callback - When the element is detached from the DOM
  // Useful for performing cleanup
  disconnectedCallback() {
    console.log('Disconnected Callback')
  }

  static get observedAttributes() {
    return ['text'];
  }
}


customElements.define('web-component', WebComponent);