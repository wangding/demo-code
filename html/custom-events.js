class Hello extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = '<h1>hello world</h1><button>click me</button>';
    /*
    this.querySelector('button').onclick = () => {
      this.querySelector('h1').className = 'actived';
    };*/
    this.querySelector('button').addEventListener('click', () =>{
      this.querySelector('h1').className = 'actived';
    });
  }
}

customElements.define('hello-world', Hello);

const q = document.querySelector,
      $ = q.bind(document);

$('body').insertAdjacentHTML('beforeend', '<hello-world></hello-world>');

