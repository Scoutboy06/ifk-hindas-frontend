window.addEventListener('load', initCalendar);

const eventCache = {};

async function initCalendar() {
  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: async (fetchInfo, successCallback, failureCallback) => {
      try {
        const start = fetchInfo.start;
        const end = fetchInfo.end;
        const requests = [];
        const currentDate = new Date(start.getFullYear(), start.getMonth(), 1);

        while (currentDate < end) {
          const year = currentDate.getFullYear();
          const month = currentDate.getMonth() + 1;
          requests.push(fetchCalendar(month, year));
          currentDate.setMonth(currentDate.getMonth() + 1);
        }

        const eventArrays = await Promise.all(requests);
        const events = [].concat(...eventArrays);
        successCallback(events);
      } catch (error) {
        failureCallback(error);
      }
    },
  });

  calendar.setOption('locale', 'sv');

  calendar.render();
}

async function fetchCalendar(month, year) {
  const cacheKey = `${year}-${month}`;
  if (eventCache[cacheKey]) {
    return eventCache[cacheKey];
  }

  const d = new Date();
  month = month || d.getMonth() + 1;
  year = year || d.getFullYear();

  // `https://ifk-hindas.netlify.app/.netlify/functions/calendar?month=${month}&year=${year}`
  console.log(`Fetching events for month: ${month}, year: ${year}`);
  const events = await fetch(
    `https://ifk-hindas.netlify.app/.netlify/functions/calendar?month=${month}&year=${year}`
  ).then((res) => res.json());

  eventCache[cacheKey] = events;
  return events;
}
