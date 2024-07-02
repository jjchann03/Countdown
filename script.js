let loginForm = document.getElementById("countdownForm");
let timerQues = document.getElementById("timer-ques");
let countdownContainer = document.getElementById("countdown-container");

let intervalId;

loginForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    let date = document.getElementsByName("date")[0].value;
    let time = document.getElementsByName("time")[0].value;
    const fullDate = date+'T'+time;
    const targetDate = new Date(fullDate);
    const present = new Date();
    if((targetDate-present)<=0){
        alert("Please select date and time, past the current date and time.");
        return;
    }
    timerQues.style.display = "none";
    countdownContainer.style.display = "flex";

    function updateCountDown(){
        const currentDate = new Date();
        const difference = targetDate-currentDate;
        const tcdays = 1000*60*60*24;
        const tchours = 1000*60*60;
        const tcminutes = 1000*60;
        const tcseconds = 1000;
        const days = Math.floor(difference/tcdays);
        const hours = Math.floor((difference%tcdays)/tchours);
        const minutes = Math.floor((difference%tchours)/tcminutes);
        const seconds = Math.floor((difference%tcminutes)/tcseconds);

        document.getElementById("days").innerHTML = `Days <br> <div>${days}</div>`;
        document.getElementById("hours").innerHTML = `Hours <br> <div>${hours}</div>`;
        document.getElementById("minutes").innerHTML = `Minutes <br> <div>${minutes}</div>`;
        document.getElementById("seconds").innerHTML = `Seconds <br> <div>${seconds}</div>`;
        
        if(difference<=0){
            clearInterval(intervalId);
            alert("Countdown Completed");
            stopCounter();
            return;
        }

        clearInterval(intervalId);
        intervalId=setInterval(updateCountDown,1000);
    }

    updateCountDown();
})

function stopCounter(){
    clearInterval(intervalId);
    countdownContainer.style.display="none";
    timerQues.style.display="block";
}
