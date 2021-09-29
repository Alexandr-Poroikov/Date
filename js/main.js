// =============  DATE/time =============
let date = function date(){

	let dateNewYears = '2021-12-31T24:00:00';

	let d = document.querySelector('.js-days');
	let h = document.querySelector('.js-hours');
	let m = document.querySelector('.js-mins');
	let s = document.querySelector('.js-seconds');

 	let daysBeforeNY = function timeLeft(){
		// date now and new year  
		let myDate = new Date();
		let dateNY = new Date(dateNewYears);

		// date now and new year (UNIX)
		let utixMyDate = Date.parse(myDate);
		let utixDateNY = Date.parse(dateNY);
		// time range
		let timeRange = utixDateNY - utixMyDate;
	
		// display on the page	
		let days = Math.floor(timeRange/24/60/60/1000);
		d.innerHTML = days
		// hours
		let hours = Math.floor((timeRange/60/60/1000)%24);
		hours<10? h.innerHTML ='0'+ hours: h.innerHTML = hours;
		// mins
		let mins = Math.floor((timeRange/60/1000)%60);
		mins<10? m.innerHTML ='0'+ mins: m.innerHTML = mins;
		// seconds
		let seconds = Math.floor((timeRange/1000)%60);
		seconds<10? s.innerHTML ='0'+ seconds: s.innerHTML = seconds;

		// stop condition  setInterval
		if(dateNY < myDate ){
			d.innerHTML = '00';
			h.innerHTML = '00';
			m.innerHTML = '00';
			s.innerHTML = '00';
			document.querySelector('.js-borderDate').style.border = "2px solid #ef6161";
			clearInterval(interval);
		}
	};
	// work function timeLeft (daysBeforeNY)
	let interval = setInterval(daysBeforeNY,1000)


	// initialization of my input date and click event
	document.querySelector('.js-myDate').addEventListener('change', yourDate)
	function yourDate(){
		let titleDate = document.querySelector('.js-titleDate');
		let inputMyDate = document.querySelector('.js-myDate');
		let buttonMyDate = document.querySelector('.js-myButton');

		// when we press the button
		buttonMyDate.addEventListener('click',()=>{
			// change of title
			titleDate.innerHTML = 'Time left :';
			// change of date
			dateNewYears = inputMyDate.value;
		})
	}
}
date();

// =============  Click auto Counter =============

function counterZero(){
	const odometr = document.querySelector('.js-odometr');
	const button = document.querySelector('.js-button');
	// start counter
	odometr.addEventListener('click', count);
	// clear counter
	button.addEventListener('click', clear);

	function count(){
		let number = +odometr.innerHTML;
		let interval = setInterval(()=>{
			if(number>0){		
				number -= 1;
				odometr.innerHTML = number;
			}else{
				// stop setInterval
				clearInterval(interval);
				// show button then number = 0
				showButton();
			}
		},10)	
	}
	// show button
	function showButton(){
		if(!button.classList.contains('showButton')){
			button.classList.add('showButton');
		}
	}
	// clear number
	function clear(){
		if(button.classList.contains('showButton')){
			odometr.innerHTML = 199;
			button.classList.remove('showButton');
		}
	}

}
counterZero();

