import { BASE_IMAGE_URL } from './config';
import { DateTime, Duration, DurationUnit } from 'luxon';

const getImageUrl = (image) => {
  return image?.startsWith('http') ? image : `${BASE_IMAGE_URL}/${image}`;
};
const FORMAT = 'yyyy-LL-dd HH:mm:ss';
const PRESENT_FORMAT = 'yyyy/LL/dd';
const TIME_FORMATTERS = [
  { label: 'seconds', limit: 60 },
  { label: 'minutes', limit: 60 },
  { label: 'hours', limit: 24 },
  { label: 'days', limit: 7 },
];
const FORMAT_UNITS = TIME_FORMATTERS.map(({ label }) => label);

export const getImageSource = (src) => (typeof src === 'string' ? { uri: getImageUrl(src) } : src);

export const getDayAndMonth = (rawDate) => {
  const date = DateTime.fromFormat(rawDate, FORMAT);
  return { day: date.toFormat('dd'), month: date.toFormat('LLL') };
};

export const getCreatedTime = (rawDate) => {
  const past = DateTime.fromFormat(rawDate, FORMAT);
  if (!past.isValid) {
    return rawDate;
  }
  const now = DateTime.local();
  const diff = now.diff(past).shiftTo(...FORMAT_UNITS);
  return TIME_FORMATTERS.reduce((memo, { label, limit }) => {
    const timeDiff = Math.round(diff.as(label) || 0);
    if (timeDiff > 0 && timeDiff < limit) {
      memo = `${timeDiff} ${label} ago`;
    }
    return memo;
  }, past.toFormat(PRESENT_FORMAT));
};
