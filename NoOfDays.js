const daysBetweenDates = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const timeDifference = Math.abs(d2 - d1);
    const dayDifference = timeDifference / (1000 * 60 * 60 * 24);
    return dayDifference;
};

console.log(daysBetweenDates("2019-06-29", "2019-06-30")); 
console.log(daysBetweenDates("2020-01-15", "2019-12-31")); 
