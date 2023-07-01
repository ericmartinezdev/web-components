class WebComponent extends HTMLElement {
  
  constructor() {
    super();

    this.attachShadow({ mode: 'open'});

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          font-weight: bold;
        }
        span {
          color: green;
          background-color: var(--bg-color);
        }
        ::slotted(span) {
          color: grey;
        }
      </style>
      <div>
        <slot name="slot-1"></slot>
      </div>
      <div>
        <slot name="slot-2"></slot>
      </div>
    `;
  }

  disconnectedCallback() {
    console.log('Disconnected Callback')
  }
}


customElements.define('web-component', WebComponent);