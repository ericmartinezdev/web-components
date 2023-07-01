class WebComponent extends HTMLElement {
  
  constructor() {
    super();
    
    if(this.hasAttribute('text')) {
      this.innerTextContent = this.getAttribute('text');
    }

    this.attachShadow({ mode: 'open'});

    this.shadowRoot.innerHTML = `
      <style>
        span {
          color: green;
        }
      </style>
      <div>
        <span>${this.innerTextContent}</span>
        <slot></slot>
      </div>
    `;
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if(attrName == 'text') {
      this.shadowRoot.querySelector('span').innerHTML = newValue;
    }
  }

  disconnectedCallback() {
    console.log('Disconnected Callback')
  }

  static get observedAttributes() {
    return ['text'];
  }

}


customElements.define('web-component', WebComponent);