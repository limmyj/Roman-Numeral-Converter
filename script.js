const convert = document.getElementById('convert-btn').addEventListener('click', checkNum);

function checkNum() {
  const number = document.getElementById('number').value;
  const output = document.getElementById('output');

  if (!number) {
    output.textContent = "Please enter a valid number";
    return;
  } 

  const num = parseInt(number);

  if (num < 1) {
    output.textContent = 'Please enter a number greater than or equal to 1';
    return;
  }

  if (num >= 4000) {
    output.textContent = 'Please enter a number less than or equal to 3999';
    return;
  }
  output.textContent = Roman(num);
}

function Roman(num) {
  const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];

  let roman = '';
  
  for (const numeral of romanNumerals) {
    while (num >= numeral.value) {
      roman += numeral.symbol;
      num -= numeral.value;
    }
  }

  return roman;
}
