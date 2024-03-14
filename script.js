const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function newTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    hoursElement.innerHTML = fixTime(hours);
    minutesElement.innerHTML = fixTime(minutes);
    secondsElement.innerHTML = fixTime(seconds);
}

function fixTime(time) {
    return time < 10 ? "0" + time : time
}

newTime()
setInterval(newTime, 1000);