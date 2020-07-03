import {
  parseISO,
  format,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  subMinutes,
  subHours,
  subDays
} from 'date-fns';

export const timeElapsed = dateCreated => {
  const dateCreatedStamp = Date.parse(dateCreated);
  const timeNow = Date.now();
  const millis = timeNow - dateCreatedStamp;
  const yearsElapsed = Math.floor(millis / (1000 * 60 * 60 * 24 * 364.25));
  const monthsElapsed =
    yearsElapsed === 0 ? Math.floor(millis / (1000 * 60 * 60 * 24 * 30)) : 0;
  const daysElapsed =
    monthsElapsed === 0 ? Math.floor(millis / (1000 * 60 * 60 * 24)) : 0;
  const hoursElapsed =
    daysElapsed === 0 ? Math.floor(millis / (1000 * 60 * 60)) : 0;

  if (yearsElapsed !== 0) {
    return `${yearsElapsed} Year${yearsElapsed === 1 ? ' ' : 's '}Ago`;
  } else if (monthsElapsed !== 0) {
    return `${monthsElapsed} Month${monthsElapsed === 1 ? ' ' : 's '}Ago`;
  } else if (daysElapsed !== 0) {
    return `${daysElapsed} Day${daysElapsed === 1 ? ' ' : 's '}Ago`;
  } else if (hoursElapsed >= 0 && hoursElapsed < 1) {
    return `Less Than An Hour Ago`;
  } else if (hoursElapsed !== 0) {
    return `${hoursElapsed} Hour${hoursElapsed === 1 ? ' ' : 's '}Ago`;
  }
};

export function getDate(date) {
  const theDate = parseISO(date);

  return {
    time: format(theDate, 'hh:mm a').toLowerCase(),
    day: format(theDate, 'dd'),
    month: format(theDate, 'MMM'),
    year: format(theDate, 'yyyy')
  };
}

// CountDown Timer function
export const countDownToEventTime = eventDate => {
  eventDate = parseISO(eventDate);
  const remainingTime = [];
  const now = new Date();
  const parts = ['Day', 'Hour', 'Minute'];
  const fns = [differenceInDays, differenceInHours, differenceInMinutes];
  const subs = [subDays, subHours, subMinutes];

  parts.forEach((part, i) => {
    let time = fns[i](eventDate, now);

    if (time) {
      remainingTime.push(`${time} ${part}${time === 1 ? '' : 's'}`);
      if (i < parts.length) eventDate = subs[i](eventDate, time);
    }
  });
  return {
    day: remainingTime[0],
    hour: remainingTime[1],
    minute: remainingTime[2]
  };
};
