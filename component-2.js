class CustomLink extends HTMLAnchorElement {
  constructor() {
    super();
    this.addEventListener('click', event => {
      if(!confirm('Sure you wanna use Google?')) {
        // If user selects cancel than we do not direct the page to google
        event.preventDefault();
      }
    })
  }
}

export default CustomLink;