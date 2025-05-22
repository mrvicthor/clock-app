const now = new Date();
const start = new Date(now.getFullYear(), 0, 0);
const difference = Number(now) - Number(start);
const oneDay = 1000 * 60 * 60 * 24;
export const presentDay = Math.floor(difference / oneDay);
export const dayOfTheWeek = now.getDay() + 1;

const startDate = new Date("2025-01-01");
const differenceInMilliseconds = now.getTime() - startDate.getTime();
export const weekNumber = Math.floor(
  differenceInMilliseconds / (1000 * 60 * 60 * 24 * 7)
);
