const DAYS = ['LUN', 'MAR', 'MIER', 'JUE', 'VIE', 'SAB', 'DOM'];

export function getDayOfWeek(date) {
  const dayNumber = new Date(date).getDay();
  return DAYS[dayNumber];
}
