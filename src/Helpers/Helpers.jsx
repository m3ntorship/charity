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
