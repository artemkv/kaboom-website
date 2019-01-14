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