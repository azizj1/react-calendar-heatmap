import { DAYS_IN_WEEK } from './constants';

// returns a new date shifted a certain number of days (can be negative)
export function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

export function getBeginningTimeForDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// obj can be a parseable string, a millisecond timestamp, or a Date object
export function convertToDate(obj) {
  return obj instanceof Date ? obj : new Date(obj);
}

export function convertToUtc(date) {
  return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());
}

export function dateNDaysAgo(numDaysAgo) {
  return shiftDate(new Date(), -numDaysAgo);
}

export function getRange(count) {
  const arr = [];
  for (let idx = 0; idx < count; idx += 1) {
    arr.push(idx);
  }
  return arr;
}

/**
 * @param {number} a is the dividend
 * @param {number} m is the divisor, also known as the modulus.
 * @return {number} a mod m. The Javascript mod operator (%) doesn't handle
 * negative numbers, but this function does.
 */
function mod(a, m) {
  const ans = a % m;
  if (ans < 0) {
    return ans + m;
  }
  return ans;
}

/**
 * @param {Date} date
 * @param {{startOnMonday?: boolean}} options
 */
export function getDay(date, options = {}) {
  const { startOnMonday } = options;
  const day = date.getDay();
  if (startOnMonday) {
    return mod(day - 1, DAYS_IN_WEEK);
  }
  return day;
}
