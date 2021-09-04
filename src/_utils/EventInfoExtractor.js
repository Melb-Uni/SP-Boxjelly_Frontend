function events2Dates(events) {
  return events.map(event => event.start);
}

function eventsFilter(events, type) {
  return events.filter(event => event.type == type)
}

function events2HourAndMinute(event) {
  return [event.start.getHours() + ":" + event.start.getMinutes(), 
  event.end.getHours() + ":" + event.end.getMinutes()];
}

function isToday(date) {
  const today = new Date()
  return date.getDate() == today.getDate() &&
  date.getMonth() == today.getMonth() &&
  date.getFullYear() == today.getFullYear()
}

export {events2Dates, events2HourAndMinute, eventsFilter, isToday}