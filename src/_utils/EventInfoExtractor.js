function events2Dates(events) {
  return events.map(event => event.start);
}

function events2Title(events) {
  return events.map(event => event.title);
}

export {events2Dates, events2Title}