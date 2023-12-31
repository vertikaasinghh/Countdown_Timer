const countdown = () => 
{
    const countDate = new Date(document.getElementById('userDate').value).getTime();
    const now= new Date().getTime();
    const gap= countDate-now;
    
    const seconds = 1000;
    const minutes = seconds*60;
    const hour = minutes*60;
    const day = hour*24;

    const textDay = Math.floor(gap/day);
    const textHour = Math.floor((gap%day)/hour);
    const textMinutes = Math.floor((gap%hour)/minutes);
    const textSeconds = Math.floor((gap%minutes)/seconds);

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minutes').innerText = textMinutes;
    document.querySelector('.seconds').innerText = textSeconds;

    console.log(gap);
};

document.getElementById('startCountdown').addEventListener('click', () => 
{
    clearInterval(interval);
    interval = setInterval(countdown, 1000); 
});

let interval = setInterval(countdown, 1000);
