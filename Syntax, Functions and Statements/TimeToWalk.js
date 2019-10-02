function walk(steps, footprint, speed) {
    let range = Number(steps * footprint / 1000);
    let time = Number(range / speed);
    let timeBreak = Math.floor(Number(range / 0.5));
    let timeInMin = 60 * time;

    let hours = parseInt(timeInMin / 60);
    let min = (timeInMin % 60);
    let sec = (min * 60 % 60);
    sec = sec.toFixed(0);
    min = Math.floor(min) + timeBreak;

    if (hours < 10) {
        hours = '' + 0 + hours;
    }
    if (sec < 10) {
        sec = '' + 0 + sec;
    }
    if (min < 10) {
        min = '' + 0 + min;
    }

    console.log(`${hours}:${min}:${sec}`);
}

walk(4000, 0.60, 5);