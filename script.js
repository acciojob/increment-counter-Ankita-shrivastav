//your JS code here. If required.
 let button =document.getElementById("incrementBtn");
 button.addEventListener("Click",increasedtheValue);

function increasedtheValue(){
	let counter=document.getElementById("counter");
	let counter2=Number(counter.innerHTMl);
	counter2=+1;
	counter.innerHtML=counter2;
	alert(counter2-2);
}
