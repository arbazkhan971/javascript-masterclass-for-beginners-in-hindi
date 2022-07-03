// JavaScript Date and Time
// In JavaScript, date and time are represented by the Date object.
// The Date object provides the date and time information and also provides various methods.

// A JavaScript date defines the EcmaScript epoch that represents milliseconds since 1 January 1970 UTC.
// This date and time is the same as the UNIX epoch (predominant base value for computer-recorded date and time values).

// Creating Date Objects
// There are four ways to create a date object.
// - new Date()
const now = new Date();
console.log(now);

// - new Date(milliseconds)
const date2 = new Date(0);
console.log("date2", date2);

console.log("date3", new Date(100000));

// - new Date(Date string)

// mm/dd/yyyy
console.log("date4", new Date("02/01/2022"));
// mmm dd yyyy
console.log("date5", new Date("mar 01 2022"));
// mmm dd yy
console.log("date6",new Date("jun 04 22"));

// - new Date(year, month, day, hours, minutes, seconds, milliseconds)
console.log("date7", new Date(2022,05,30,5,30,20));

// methods

// getfullyear()

const date = new Date();
console.log("getfullyear", date.getFullYear());

// getMonth()
console.log("getmonth", date.getMonth());

// getDate()
console.log("getDate", date.getDate());

// getHours()
console.log("getHour", date.getHours());

// getMinutes
console.log("getMinutes", date.getMinutes());

