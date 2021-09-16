import { events2Dates, eventsFilter, events2HourAndMinute, isToday} from "../_utils/EventInfoExtractor";

it('Events can be converted to dates', () => {
  expect(events2Dates([
    {
      'title': 'End of Sprint 1',
      'start': new Date(2021, 8, 19, 7, 0),
      'end': new Date(2021, 8, 19, 23, 59),
      'type': 'Key date',
      'link': "https://confluence.cis.unimelb.edu.au:8443//display/COMP900822021SM1SP/Meeting+Notes+for+30th%2C+March"
    },
    {
      'title': 'Client Meeting',
      'start': new Date(2021, 8, 11, 10, 30),
      'end': new Date(2021, 8, 11, 12, 30), 
      'type': 'Key date',
      'link': "https://confluence.cis.unimelb.edu.au:8443//display/COMP900822021SM1SP/Meeting+Notes+for+30th%2C+March"
    },
    {
      'title': 'Internal Meeting',
      'start': new Date(2021, 8, 16, 13, 30),
      'end': new Date(2021, 8, 16, 14, 30), 
      'type': 'Meeting',
      'link': "https://confluence.cis.unimelb.edu.au:8443//display/COMP900822021SM1SP/Meeting+Notes+for+30th%2C+March"
    },
    {
      'title': 'Internal Meeting',
      'start': new Date(2021, 8, 11, 13, 30),
      'end': new Date(2021, 8, 11, 14, 30), 
      'type': 'Meeting',
      'link': "https://confluence.cis.unimelb.edu.au:8443//display/COMP900822021SM1SP/Meeting+Notes+for+30th%2C+March"
    },
    {
      'title': 'Frontend Meeting',
      'start': new Date(2021, 8, 21, 15, 0),
      'end': new Date(2021, 8, 21, 14, 30), 
      'type': 'Meeting',
      'link': "https://confluence.cis.unimelb.edu.au:8443//display/COMP900822021SM1SP/Meeting+Notes+for+30th%2C+March"
    },
  ])).toStrictEqual([
    new Date(2021, 8, 19, 7, 0),
    new Date(2021, 8, 11, 10, 30),
    new Date(2021, 8, 16, 13, 30),
    new Date(2021, 8, 11, 13, 30),
    new Date(2021, 8, 21, 15, 0)
  ]);
});