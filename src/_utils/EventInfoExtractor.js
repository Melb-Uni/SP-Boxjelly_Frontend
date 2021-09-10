function events2Dates(events) {
  return events.map(event => event.start);
}

function eventsFilter(events, type) {
  return events.filter(event => event.type == type)
}

function events2HourAndMinute(event) {
  let startHour = (event.start.getHours() < 10) ? '0' + event.start.getHours() : event.start.getHours();
  let startMinute = (event.start.getMinutes() < 10) ? '0' + event.start.getMinutes() : event.start.getMinutes();
  let endHour = (event.end.getHours() < 10) ? '0' + event.end.getHours() : event.end.getHours();
  let endMinute = (event.end.getMinutes() < 10) ? '0' + event.end.getMinutes() : event.end.getMinutes();
  return [startHour + ":" + startMinute, 
  endHour + ":" + endMinute];
}

function isToday(date) {
  const today = new Date()
  return date.getDate() == today.getDate() &&
  date.getMonth() == today.getMonth() &&
  date.getFullYear() == today.getFullYear()
}

export {events2Dates, events2HourAndMinute, eventsFilter, isToday}