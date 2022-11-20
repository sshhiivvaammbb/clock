function displayTime() {
    var dateTime =new Date();
    var hrs= dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs>=12){
        session.innerHTML = "PM"
    }
    else{
        session.innerHTML = "Am"
    }

    if(hrs>12){
        hrs = hrs-12 ;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime,1000);






const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('drop-it-124014.mp3');

function ringBell() {
    audio.play();
    // alert("the bell is ringing");
    
}

function setAlarm(e) {
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmdate= new Date(alarm.value);
    console.log(`setting time for... ${alarmdate}`);

    now = new Date();
    let timeTOAlarm =alarmdate-now;

    if(timeTOAlarm >= 0){
        setTimeout(() => {
            ringBell();
        }, timeTOAlarm);
    }
    
}