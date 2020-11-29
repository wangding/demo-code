window.$ = document;

window.onload = () => {
  let btnAdd    = $.querySelector('input[value="add"]'),
      btnRemove = $.querySelector('input[value="remove"]'),
      div       = $.querySelector('div'),
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

	btnAdd.onclick = () => {
	  div.innerHTML = '';
    div.innerHTML = dom;
	};

  btnRemove.onclick = () => {
    div.innerHTML = '';
  }
};
