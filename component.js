class WebComponent extends HTMLElement {
  constructor() {
    super();
    
    // 1. By simply setting the innerHTML
    // this.innerHTML = `
    //   <div>
    //     <span>This is a web component</span>
    //   </div>
    // `;

    // 2. By creating elements and adding them to the DOM
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.innerHTML = "This is a web component";
    div.appendChild(span);
    this.appendChild(div);
  }
}


customElements.define('web-component', WebComponent);