export const parseDate = (date: Date | null) => {
  if (!date) {
    return '';
  }
  const dayOfMonth = date.getDate();
  const shortMonth = date.toLocaleString('en-us', { month: 'short' });
  const year = date.getFullYear();
  return `${dayOfMonth}. ${shortMonth} ${year}`;
};
