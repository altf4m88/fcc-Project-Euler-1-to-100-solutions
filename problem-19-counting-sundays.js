let daysInYear = 365;
let daysInLeapYear = 366;

function countingSundays(firstYear, lastYear) {

  let referenceDayCount = countDays(1900, firstYear - 1);
  let startOfFirstYearDayNumber = (referenceDayCount) % 7;

  let sundayCount = 0;
  let dayTotal = 0;
  for (let i = firstYear; i <= lastYear; i++) {

    for (let j = 0; j < 12; j++) {
      let currentDayName = determineDayName(
          (dayTotal + startOfFirstYearDayNumber)
       % 7);

      if (currentDayName === 'Sunday') {
        sundayCount++;
      }

      dayTotal += determineMonthDayCount(j, i);
    }
  }
  return sundayCount;
}

function determineMonthDayCount(month, year) {
  let dayCount = 0;
  switch(month) {
    case 8:
    case 3:
    case 5:
    case 10:
      dayCount = 30;
      break;
    case 1:
      dayCount = determineLeapYear(year) ? 29 : 28
      break;
    default:
      dayCount = 31;
      break;
  }

  return dayCount;
}

function countDays (startYear, endYear) {
  let totalDays = 0;
  for (let year = startYear; year <= endYear; year++) {
    totalDays += determineLeapYear(year) ? daysInLeapYear : daysInYear;
  }

  return totalDays;
}

function determineDayName(date) {
  let dayNames = {
    0 : "Monday",
    1 : "Tuesday",
    2 : "Wednesday",
    3 : "Thursday",
    4 : "Friday",
    5 : "Saturday",
    6 : "Sunday",
  }

  return dayNames[date];
}

function determineLeapYear(year) {
  if (year % 100 === 0) {
    return year % 400 === 0;
  }

  return year % 4 === 0;
}

countingSundays(1901, 2000);