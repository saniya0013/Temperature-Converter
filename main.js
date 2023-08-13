const inputTemp = document.getElementById('inputTemp');
const selectUnit = document.getElementById('selectUnit');
const outputC = document.getElementById('outputC');
const outputF = document.getElementById('outputF');
const outputK = document.getElementById('outputK');

function convertTemp() {
  const tempValue = parseFloat(inputTemp.value);
  if (!isNaN(tempValue)) {
    const selectedUnit = selectUnit.value;
    let celsius, fahrenheit, kelvin;
    
    if (selectedUnit === 'C') {
      celsius = tempValue;
      fahrenheit = (tempValue * 9/5) + 32;
      kelvin = tempValue + 273.15;
    } else if (selectedUnit === 'F') {
      celsius = (tempValue - 32) * 5/9;
      fahrenheit = tempValue;
      kelvin = (tempValue - 32) * 5/9 + 273.15;
    } else {
      celsius = tempValue - 273.15;
      fahrenheit = (tempValue - 273.15) * 9/5 + 32;
      kelvin = tempValue;
    }
    
    outputC.innerText = `Celsius: ${celsius.toFixed(2)}`;
    outputF.innerText = `Fahrenheit: ${fahrenheit.toFixed(2)}`;
    outputK.innerText = `Kelvin: ${kelvin.toFixed(2)}`;
  } else {
    outputC.innerText = 'Celsius: ';
    outputF.innerText = 'Fahrenheit: ';
    outputK.innerText = 'Kelvin: ';
  }
}

inputTemp.addEventListener('input', convertTemp);
selectUnit.addEventListener('change', convertTemp);

convertTemp();
