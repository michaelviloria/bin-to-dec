const binary = document.getElementById('binary');
const numberUser = document.getElementById('number-user');

numberUser.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    converter();
  }
})

function converter()
{
  let numberBin = [];
  let numbers = parseInt(numberUser.value);
  while (numbers >= 1)
  {
    numberBin.splice(0, 0, numbers % 2);
    numbers = parseInt(numbers / 2);
  }

  if (numberUser.value == 0) {
    numberBin.splice(0, 0, 0);
  }

  binary.innerText = numberBin.join('');
  numberBin = [];
  number = [];
}