class WebComponent extends HTMLElement {
  
  constructor() {
    super();
    
    if(this.hasAttribute('text')) {
      this.innerTextContent = this.getAttribute('text');
    }

    this.innerHTML = `
      <div>
        <span>${this.innerTextContent}</span>
        <button>Trigger special event</button>
      </div>
    `;
  }

  connectedCallback() {
    this.querySelector('button').addEventListener('click', this.triggerSpecialEvent.bind(this));
  }

  attributeChangedCallback(attrName, oldValue, newValue) {
    if(attrName == 'text') {
      this.innerHTML = `
        <div>
          <span>${newValue}</span>
          <button>Trigger special event</button>
        </div>
      `;
    }
  }

  disconnectedCallback() {
    console.log('Disconnected Callback')
  }

  static get observedAttributes() {
    return ['text'];
  }

  triggerSpecialEvent() {
    const specialEvent = new Event('special');
    this.dispatchEvent(specialEvent);
  }
}


customElements.define('web-component', WebComponent);