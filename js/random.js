function rangeUpdate(){
   const rangeValue = document.getElementById("rangeSlider").valueAsNumber;
   document.getElementById('rangeValue').textContent = 'Random Number Cap:' + rangeValue;
  //debugger;
   const randomNumber = Math.floor(Math.random() * rangeValue  +1);
  document.getElementById('randomNumValue').textContent = 'Random number:' + randomNumber;
// we need to trigger this through a button press 
//console.log(randomNumber);

}
