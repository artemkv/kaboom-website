export function getYear(date) {
    return date.getFullYear();
}

export function getMonth(date) {
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = '0' + month.toString();
    } else {
        month = month.toString();
    }
    return month;
}

export function getDay(date) {
    let day = date.getDate();
    if (day < 10) {
        day = '0' + day.toString();
    } else {
        day = day.toString();
    }
    return day;
}

export function getHour(date) {
    let hour = date.getHours();
    if (hour < 10) {
        hour = '0' + hour.toString();
    } else {
        hour = hour.toString();
    }
    return hour;
}

export function getDt(period, date) {
    switch (period) {
        case 'year':
            return `${getYear(date)}`;
        case 'month':
            return `${getYear(date)}${getMonth(date)}`;
        case 'day':
            return `${getYear(date)}${getMonth(date)}${getDay(date)}`;
        case 'hour':
            return `${getYear(date)}${getMonth(date)}${getDay(date)}${getHour(date)}`;
        default:
            throw new Error(`Unkdaten period ${period}`);
    }
}

function charRange(from, to) {
    let arr = [];
    for (let i = from; i <= to; i++) {
        if (i < 10) {
            arr.push('0' + i.toString());
        } else {
            arr.push(i.toString());
        }
    }
    return arr;
}

export function getPeriodDts(period, date) {
    let startDt = getDt(period, date);
    switch (period) {
        case 'year':
            return charRange(1, 12).map(x => startDt + x);
        case 'month':
            return charRange(1, 31).map(x => startDt + x);
        case 'day':
            return charRange(0, 24).map(x => startDt + x);
        case 'hour':
            return charRange(1, 60).map(x => startDt + x);
        default:
            throw new Error(`Unknown period ${period}`);
    }
}