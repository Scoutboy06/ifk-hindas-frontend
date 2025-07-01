window.addEventListener('load', initCalendar);

async function initCalendar() {
  const events = await fetchCalendar();
  console.table(events);

  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: events.map(({ title, start, end }) => ({ title, start, end })),
  });

  calendar.setOption('locale', 'sv');

  calendar.render();
}

async function fetchCalendar() {
  const d = new Date();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  return fetch(
    `https://ifk-hindas.netlify.app/.netlify/functions/calendar?month=${month}&year=${year}`
  ).then((res) => res.json());
}
