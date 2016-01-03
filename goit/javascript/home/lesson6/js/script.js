function Timer(timer_id) {
var self = this;
var timer = document.querySelector('#'+timer_id);
var time_text = timer.querySelector('.timer');
var timeInt = 7; //Time Interval
var start = timer.querySelector('.btn--start');
var stop = timer.querySelector('.btn--stop');
var split = timer.querySelector('.btn--split');
var reset = timer.querySelector('.btn--reset');
var splitText = timer.querySelector('.split');
var startTime = 0;
var curTime = 0;
var msID = [];
var gt = 0; //globalTime
var c = 0; //counter

//Функция дополняет число x слева незначащими нулями 
//до числа знаков s
function fixToChar(x, s){
	if ((x+'').length > s) {
		return x;
	} else {
		return (x / Math.pow(10,s)).toFixed(s).substr(2);
	}
}

function msPlus(){
	curTime = new Date();
	gt = curTime - startTime;
	time_text.innerHTML = fixToChar(Math.floor(gt / (3600*1000)), 2) + ':' +
							fixToChar(Math.floor(gt % (3600*1000) / (60*1000)), 2) + ':' +
							fixToChar(Math.floor(gt % (3600*1000) % (60*1000) / 1000), 2)+ '.' +
							fixToChar( gt % (3600*1000) % (60*1000) % 1000, 3 );
} 

function msStop(){
	msID.forEach(function(item, i, msID){
		clearInterval(item);
		msID.shift();
	});
} 

function StartCont(){ //start - Continue
	msStop();
	msID.push(setInterval(msPlus, timeInt));
}

function SplitTime(){
	c++;
	splitText.innerHTML += c + " Split: " + time_text.innerHTML+'<br>';
}

function addEvent(el, event, callback) {
	if(window.attachEvent)
	{
	  el.attachEvent('on'+event, callback);
	} else {
	  el.addEventListener(event, callback);
	}
}

self.run = function(){

	addEvent(start,'click',function(){
			startTime = new Date();
			StartCont();
			start.style.display = 'none';
			stop.style.display = 'inline-block';
			split.addEventListener('click',SplitTime);
		});

	addEvent(stop,'click',function(){
			msStop();
			stop.style.display = 'none';
			start.style.display = 'inline-block';
			c++;
			splitText.innerHTML += c + " Stop: " + time_text.innerHTML+'<br>';
			split.removeEventListener('click',SplitTime);
		});

	addEvent(reset,'click',function(){
			msStop();
			stop.style.display = 'none';
			start.style.display = 'inline-block';
			time_text.innerHTML = '00:00:00.000';
			splitText.innerHTML = '';
			split.removeEventListener('click',SplitTime);
			gt = 0;
			c = 0;
		});
}
}

var timer1 = new Timer('timer1');
timer1.run();