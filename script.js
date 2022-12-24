function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML=valNum-273.15;
  }
  function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML=((valNum-273.15)*1.8)+32;
  }
  function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML=(valNum*1.8)+32;
  }
  
{
}

const reset = () => {
    document.querySelector("outputFahrenheit").value = " ";
    document.querySelector("fahrenheit").value = " ";
}