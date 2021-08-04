class Hello extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = '<h1>hello world</h1><button>click me</button>';
    this.querySelector('button').onclick = () => console.log('clicked');
  }
}

customElements.define('hello-world', Hello);
