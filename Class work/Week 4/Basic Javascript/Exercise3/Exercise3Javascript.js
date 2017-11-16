var isLightOn = true;
function ToggleLight()
{
	if(isLightOn == true) {
		document.getElementById('lightBulb').src = 'img/bulb-on.png'
}
	else {
 		document.getElementById('lightBulb').src = 'img/bulb-off.png'
}
}
function AddNumbers(num1, num2){
	var sum = num1 + num2;
	document.getElementById('numbers').innerHTML = sum
}
