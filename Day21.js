/**
 * Write a function which accepts two vaild dates and return the difference in number of days
 * 
 * example: getDaysBetweenDates('10/15/2020', '12/1/2020')
 */

 const getDaysBetweenDates = (date1, date2) => {

    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    let elapsedTime = 0;

    if (secondDate > firstDate) {
        elapsedTime = secondDate - firstDate;
    } else {
        elapsedTime = firstDate - secondDate;
    }

    return Math.ceil(elapsedTime / (1000 * 60 * 60 * 24));
 };


 const numberOfDaysBetweenDates = getDaysBetweenDates('12/1/2020', '10/15/2020');

 console.log(numberOfDaysBetweenDates);