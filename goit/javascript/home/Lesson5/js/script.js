function Timer(timer_id) {
	var self = this;
	var timer = document.querySelector('#'+timer_id);
	var time_text = timer.querySelector('.timer__time');
	var ms = timer.querySelector('.timer__ms');
	var timeInt = 7; //Time Interval
	var start = timer.querySelector('.btn--start');
	var cont = timer.querySelector('.btn--cont');
	var pause = timer.querySelector('.btn--pause');
	var clear = timer.querySelector('.btn--clear');
	var startTime = 0;
	var curTime = 0;

	var msID = [];

	var gt = 0; //globalTime

	//Функция дополняет число x слева незначащими нулями 
	//до числа знаков s
	function fixToChar(x, s) {
		if ((x+'').length >= s) {
			return x;
		} else {
			return (x / Math.pow(10,s)).toFixed(s).substr(2);
		}
	}

	function msPlus() {
		curTime = new Date();
		gt = curTime - startTime;
		time_text.innerHTML = fixToChar(Math.floor(gt / (3600*1000)), 2) + ':' +
								fixToChar(Math.floor(gt % (3600*1000) / (60*1000)), 2) + ':' +
								fixToChar(Math.floor(gt % (3600*1000) % (60*1000) / 1000), 2);
		ms.innerHTML = fixToChar( gt % (3600*1000) % (60*1000) % 1000, 3 );
	} 

	function msStop() {
		msID.forEach(function(item, i, msID){
			clearInterval(item);
			msID.shift();
		});
	} 

	function StartCont() { //start - Continue
		msStop();
		msID.push(setInterval(msPlus, timeInt));
	}


	function addEvent(el, event, callback) {
		if(window.attachEvent)
		{
		  el.attachEvent('on'+event, callback);
		} else {
		  el.addEventListener(event, callback);
		}
	}

	self.run = function() {
		addEvent(start,'click',function(){
				startTime = new Date();
				StartCont();
				start.style.display = 'none';
				pause.style.display = 'block';
			});

		addEvent(cont,'click',function(){
				StartCont();
				cont.style.display = 'none';
				pause.style.display = 'block';
			});

		addEvent(pause,'click',function(){
				msStop();
				pause.style.display = 'none';
				cont.style.display = 'block';
			});

		addEvent(clear,'click',function(){
				msStop();
				pause.style.display = 'none';
				cont.style.display = 'none';
				start.style.display = 'block';
				time_text.innerHTML = '00:00:00';
				ms.innerHTML = '0';
				gt = 0;
			});
	}
}

var timer1 = new Timer('timer1');
timer1.run();

var timer2 = new Timer('timer2');
timer2.run();
