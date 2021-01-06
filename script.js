const binary = document.getElementById('binary');
const numberUser = document.getElementById('number-user');

numberUser.addEventListener('keydown', addNumbers);

let numberBin = [];
let number = [];
// let number1 = numberUser;

function addNumbers(key)
{
  switch (true)
  {
    case (key.keyCode === 48 || key.keyCode === 96):
      newItem = number.push(0);
      break;
    case (key.keyCode === 49 || key.keyCode === 97):
      newItem = number.push(1);
      break;
    case (key.keyCode === 50 || key.keyCode === 98):
      newItem = number.push(2);
      break;
    case (key.keyCode === 51 || key.keyCode === 99):
      newItem = number.push(3);
      break;
    case (key.keyCode === 52 || key.keyCode === 100):
      newItem = number.push(4);
      break;
    case (key.keyCode === 53 || key.keyCode === 101):
      newItem = number.push(5);
      break;
    case (key.keyCode === 54 || key.keyCode === 102):
      newItem = number.push(6);
      break;
    case (key.keyCode === 55 || key.keyCode === 103):
      newItem = number.push(7);
      break;
    case (key.keyCode === 56 || key.keyCode === 104):
      newItem = number.push(8);
      break;
    case (key.keyCode === 57 || key.keyCode === 105):
      newItem = number.push(9);
      break;
    default:
      console.log('no funciona');
      break;
  }
}

function converter()
{
  let numbers1 = parseInt(number.join(''));
  while (numbers1 >= 1)
  {
    mod = numberBin.splice(0, 0, numbers1 % 2);
    numbers1 = parseInt(numbers1 / 2);
  }

  binary.innerText = numberBin.join('');
  numberBin = [];
  number = [];
}