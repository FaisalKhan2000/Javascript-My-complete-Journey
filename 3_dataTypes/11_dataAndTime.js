// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

//* Date and time

/*

Let’s meet a new built-in object: Date. It stores the date, time and provides methods for date/time management.

For instance, we can use it to store creation/modification times, to measure time, or just to print out the current date.

*/

//* Creation

/*

To create a new Date object call new Date() with one of the following arguments:

  * new Date()

Without arguments – create a Date object for the current date and time:

*/

let now = new Date();
console.log(now);

//* new Date(milliseconds)

// Create a Date object with the time equal to number of milliseconds (1/1000 of a second) passed after the Jan 1st of 1970 UTC+0.

// 0 means 01.01.1970 UTC+0
let jan01_1970 = new Date(0);
console.log(jan01_1970); // 1970-01-01T00:00:00.000Z

// now add 24 hours, get 02.01.1970 UTC+0
let jan02_1970 = new Date(24 * 3600 * 1000);
console.log(jan02_1970); // 1970-01-02T00:00:00.000Z
//* millioseconds = 24 hours to milleseconds = 24*36*1000 = 86400000 milliseconds

// An integer number representing the number of milliseconds that has passed since the beginning of 1970 is called a timestamp.

let Dec31_1969 = new Date(-24 * 36 * 1000);
console.log(Dec31_1969); // 1969-12-31T23:45:36.000Z

//* new Date(datestring)
// If there is a single argument, and it’s a string, then it is parsed automatically. The algorithm is the same as Date.parse uses, we’ll cover it later.

let date1 = new Date("2017-01-26"); // 2017-01-26T00:00:00.000Z
console.log(date1);
// The time is not set, so it's assumed to be midnight GMT and
// is adjusted according to the timezone the code is run in
// So the result could be
// Thu Jan 26 2017 11:00:00 GMT+1100 (Australian Eastern Daylight Time)
// or
// Wed Jan 25 2017 16:00:00 GMT-0800 (Pacific Standard Time)

//* new Date(year, month, date, hours, minutes, seconds, ms)

/*

Create the date with the given components in the local time zone. Only the first two arguments are obligatory.

    *The year should have 4 digits. For compatibility, 2 digits are also accepted and considered 19xx, e.g. 98 is the same as 1998 here, but always using 4 digits is strongly encouraged.

    *The month count starts with 0 (Jan), up to 11 (Dec).

    *The date parameter is actually the day of month, if absent then 1 is assumed.

    *If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.

*/

let date2 = new Date(2000, 0, 11, 0, 0, 0, 0); // 11 Jan 2000, 00:00:00
let date3 = new Date(2000, 0, 11); // the same, hours etc are 0 by default

console.log(date2);
console.log(date3);

// The maximal precision is 1 mcs (1/1000 sec):
let date4 = new Date(2000, 0, 11, 2, 3, 4, 567);
console.log(date4);

//* Access date components

/* 

There are methods to access the year, month and so on from the Date object:

*getFullYear()
Get the year (4 digits)

*getMonth()
Get the month, from 0 to 11.

*getDate()
Get the day of month, from 1 to 31, the name of the method does look a little bit strange.

* getHours(), getMinutes(), getSeconds(), getMilliseconds()
Get the corresponding time components.

* getDay()

Get the day of week, from 0 (Sunday) to 6 (Saturday). The first day is always Sunday, in some countries that’s not so, but can’t be changed.
All the methods above return the components relative to the local time zone.

There are also their UTC-counterparts, that return day, month, year and so on for the time zone UTC+0: getUTCFullYear(), getUTCMonth(), getUTCDay(). Just insert the "UTC" right after "get".

If your local time zone is shifted relative to UTC, then the code below shows different hours:



*/

let date5 = new Date();

console.log(date5.getHours());
console.log(date5.getUTCHours());
console.log(date5.getTime());
console.log(date5.getTimezoneOffset());

//* Setting date components

/*

The following methods allow to set date/time components:

setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)
Every one of them except setTime() has a UTC-variant, for instance: setUTCHours().

As we can see, some methods can set multiple components at once, for example setHours. The components that are not mentioned are not modified.

*/

let today = new Date();

today.setHours(0);
console.log(today); // alert(today); // still today, but the hour is changed to 0

today.setHours(0, 0, 0, 0);
console.log(today); // still today, now 00:00:00 sharp.

//* Autocorrection
// The autocorrection is a very handy feature of Date objects. We can set out-of-range values, and it will auto-adjust itself.

let date6 = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
console.log(date6); // ...is 1st Feb 2013!

// Out-of-range date components are distributed automatically.

// Let’s say we need to increase the date “28 Feb 2016” by 2 days. It may be “2 Mar” or “1 Mar” in case of a leap-year. We don’t need to think about it. Just add 2 days. The Date object will do the rest:

let date7 = new Date(2016, 1, 28);
date7.setDate(date7.getDate() + 2);

// alert(date7); // 1 Mar 2016

// That feature is often used to get the date after the given period of time. For instance, let’s get the date for “70 seconds after now”:

let date8 = new Date();
date8.setSeconds(date8.getSeconds() + 70);

// alert(date8); // shows the correct date

// We can also set zero or even negative values. For example:

let date9 = new Date(2016, 0, 2); // 2 Jan 2016

date9.setDate(1); // set day 1 of month
// alert(date9);

date9.setDate(0); // min day is 1, so the last day of the previous month is assumed
// alert(date9); // 31 Dec 2015

//* Date to number, date diff

// When a Date object is converted to number, it becomes the timestamp same as date.getTime():

let date10 = new Date();
// alert(+date10); // the number of milliseconds, same as date.getTime()

// The important side effect: dates can be subtracted, the result is their difference in ms.

// That can be used for time measurements:
let start = new Date(); // start measuring time

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date(); // end measuring time

console.log(`The loop took ${end - start} ms`);

//* Date.now()

/*

If we only want to measure time, we don’t need the Date object.

There’s a special method Date.now() that returns the current timestamp.

It is semantically equivalent to new Date().getTime(), but it doesn’t create an intermediate Date object. So it’s faster and doesn’t put pressure on garbage collection.

It is used mostly for convenience or when performance matters, like in games in JavaScript or other specialized applications.

So this is probably better:

*/

let start2 = Date.now(); // milliseconds count from 1 Jan 1970

// do the job
for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end2 = Date.now(); // done

console.log(`The loop took ${end2 - start2} ms`); // subtract numbers, not dates

//* Date.parse from a string

/*

The method Date.parse(str) can read a date from a string.

The string format should be: YYYY-MM-DDTHH:mm:ss.sssZ, where:

YYYY-MM-DD – is the date: year-month-day.
The character "T" is used as the delimiter.
HH:mm:ss.sss – is the time: hours, minutes, seconds and milliseconds.
The optional 'Z' part denotes the time zone in the format +-hh:mm. A single letter Z would mean UTC+0.
Shorter variants are also possible, like YYYY-MM-DD or YYYY-MM or even YYYY.

The call to Date.parse(str) parses the string in the given format and returns the timestamp (number of milliseconds from 1 Jan 1970 UTC+0). If the format is invalid, returns NaN.

For instance:

*/

let ms = Date.parse("2012-01-26T13:51:50.417-07:00");

console.log(ms); // 1327611110417  (timestamp)

// We can instantly create a new Date object from the timestamp:

let date = new Date(Date.parse("2012-01-26T13:51:50.417-07:00"));

console.log(date);

//* Summary

/*

Date and time in JavaScript are represented with the Date object. We can’t create “only date” or “only time”: Date objects always carry both.
Months are counted from zero (yes, January is a zero month).
Days of week in getDay() are also counted from zero (that’s Sunday).
Date auto-corrects itself when out-of-range components are set. Good for adding/subtracting days/months/hours.
Dates can be subtracted, giving their difference in milliseconds. That’s because a Date becomes the timestamp when converted to a number.
Use Date.now() to get the current timestamp fast.
Note that unlike many other systems, timestamps in JavaScript are in milliseconds, not in seconds.

Sometimes we need more precise time measurements. JavaScript itself does not have a way to measure time in microseconds (1 millionth of a second), but most environments provide it. For instance, browser has performance.now() that gives the number of milliseconds from the start of page loading with microsecond precision (3 digits after the point):

*/

alert(`Loading started ${performance.now()}ms ago`);
