const buttons = document.querySelectorAll('.button');
const body = document.body;

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(body);
    console.log(e.target.id);
    switch (e.target.id) {
      case 'grey':
      case 'white':
      case 'blue':
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});
