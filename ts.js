function Conversion() {
    var tempCels = parseFloat(document.getElementById('celsius').value);
    tempFarh =(tempCels)*(1.8)+(32);
    document.getElementById('fahrenheit').value= tempFarh;
 }

function Conversion2() {
    var tempFarh = parseFloat(document.getElementById('fahrenheit').value);
    tempCels =(tempFarh - 32)/(1.8);
    document.getElementById('celsius').value= tempCels;
 }