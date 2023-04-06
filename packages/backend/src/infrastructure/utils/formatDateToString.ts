const formatDayAndMonth = (dateNumber: number) => {
  return dateNumber < 10 ? `0${dateNumber}` : String(dateNumber);
};

export const formatDateToString = (date: Date): string => {
  const day = formatDayAndMonth(date.getDay());
  const month = formatDayAndMonth(date.getMonth());
  const year = date.getFullYear();
  return `${day}${month}${year}`;
};
