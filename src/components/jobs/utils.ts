export const calculateDateDifference = (
  startDate: string,
  endDate: string
): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const yearsDiff = end.getFullYear() - start.getFullYear();
  const monthsDiff = end.getMonth() - start.getMonth();

  const totalMonths = yearsDiff * 12 + monthsDiff + 1; //Add 1 to include the ending month

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years > 0 && months > 0) {
    return `${years} yrs ${months} mos`;
  } else if (years > 0) {
    return `${years} yrs`;
  } else {
    return `${months} mos`;
  }
};
