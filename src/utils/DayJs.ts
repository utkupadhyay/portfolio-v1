import dayjs from 'dayjs';

const format = 'MMMM D, YYYY';
export const timeConversion = (created_at: string) =>
  dayjs(created_at).format(format);
