class WebComponent extends HTMLElement {
  
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

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
    `;

    const template = this.querySelector('template').content.cloneNode(true);
    this.shadowRoot.appendChild(template);
  }

  disconnectedCallback() {
    console.log('Disconnected Callback')
  }
}


customElements.define('web-component', WebComponent);