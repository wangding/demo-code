const q = document.querySelector,
      $ = q.bind(document);

window.onload = () => {
  let btnAdd1 = $('.add1'),
      btnAdd2 = $('.add2'),
      btnRemove = $('.remove'),
      div       = $('div'),
      dom       = `
        <form>
          <label>user name:</label>
          <input type="text" name="username">
          <br>
          <label>password:</label>
          <input type="password" name="password">
          <br>
          <input type="button" value="login">
          <br>
        </form>`;

  btnAdd1.onclick = () => {
    div.innerHTML = '';
    div.innerHTML = dom;
  };

  btnAdd2.onclick = () => {
    div.insertAdjacentHTML('beforeend', '<h1>hello world</h1>');
  };

  btnRemove.onclick = () => {
    div.innerHTML = '';
  }
};
