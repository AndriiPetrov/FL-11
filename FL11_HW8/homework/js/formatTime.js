function formatTime(numberOfMinutes) {
    if (numberOfMinutes < 0 && parseInt(numberOfMinutes) !== numberOfMinutes) {
        return alert(`Passed argument is always must be positive integer number.`);
    }

    let days = parseInt(numberOfMinutes / 1440) % 365;
    let hours = parseInt(numberOfMinutes / 60) % 24;
    let minutes = numberOfMinutes % 60;

    return `${days} day(s) ${hours} hour(s) ${minutes} minute(s).`
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));