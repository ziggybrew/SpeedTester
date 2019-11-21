function timer() {
    //timer to be shown to user as they type
    var StartTime= new Date();
		function DisplayTime(){
			var CurrentTime= new Date();
			var TimeDiff=CurrentTime.getTime()-StartTime.getTime();
			TimeDiff=Math.floor(TimeDiff/1000);
			var ShowTime=(TimeDiff<10)?'0:0':'0:';
			document.getElementById('timer').innerHTML=ShowTime+TimeDiff;
		}
		var StopTime=setInterval(DisplayTime, 1000);
		function StopUpdatingTime(){
			clearInterval(StopTime);
			document.getElementById("userInput").disabled = true;
		}
		setTimeout(StopUpdatingTime, 60000);
}

function speedCal() {
    //will calculate the user's speed
}