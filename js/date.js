
//console.log(rightNow.getDay());

function getCurrentDate(){
const rightNow = new Date();
document.getElementById('seconds').textContent = 'seconds:' + rightNow.getSeconds();
document.getElementById('minutes').textContent = 'minutes:' + rightNow.getMinutes();
document.getElementById('hours').textContent = 'hours:' + rightNow.getHours();
document.getElementById('date').textContent = 'date:' + rightNow.getDate();
document.getElementById('month').textContent = 'month:' + rightNow.getMonth();
document.getElementById('year').textContent = 'year:' + rightNow.getFullYear();
}