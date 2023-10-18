import dayjs from 'dayjs';

export function parseTimeSecInMinsAndSec(seconds: number): string {
  const minutes = Math.floor(Number(seconds) / 60);
  let remainingSeconds = Number(seconds) % 60;

  // Pad single-digit seconds with a leading zero
  if (remainingSeconds < 10) {
    // @ts-expect-error intentionally done
    remainingSeconds = `0${remainingSeconds}`;
  }

  const timeString = `${minutes}:${remainingSeconds}`; // Concatenate the minutes and seconds

  return timeString;
}

export function formatDatetime(dateString = new Date(), format = 'DD MMMM, hh:mm A') {
  return dayjs(dateString).format(format);
}
