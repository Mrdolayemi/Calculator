const display = document.querySelector('.current-operand');
const previous = document.querySelector('.previous-operand');

const storage = [];

let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map(button => {
  button.addEventListener('click', e => {
    switch (e.target.innerText) {
      case 'AC':
        display.innerText = ' ';
        previous.innerHTML = ' ';
        break;
      case 'DEL':
        display.innerText = display.innerText.slice(0, -1);
        break;
      case '=':
        try {
          if (display.innerText.length > 0) {
            display.innerText = eval(display.innerText);
            previous.innerHTML = display.innerText;
            display.innerText = ' ';
          }
        } catch {
          display.innerText = 'Error! ';
        }
        break;
      default:
        display.innerText += e.target.innerText;
        break;
    }
  });
});
