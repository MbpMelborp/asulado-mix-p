import Calendar from "js-year-calendar";
import "js-year-calendar/locales/js-year-calendar.es";
import "js-year-calendar/dist/js-year-calendar.css";
import dayjs from "dayjs";
import dayjsBusinessDays from "dayjs-business-days2";

const options = {
  holidays: [
    "2023-12-08",
    "2023-12-25",
    "2024-01-01",
    "2024-01-08",
    "2024-03-25",
    "2024-03-28",
    "2024-03-29",
    "2024-05-01",
    "2024-05-13",
    "2024-06-03",
    "2024-06-10",
    "2024-07-01",
    "2024-07-20",
    "2024-08-07",
    "2024-08-19",
    "2024-10-14",
    "2024-11-04",
    "2024-11-11",
    "2024-12-08",
    "2024-12-25",
  ],
  holidayFormat: `YYYY-MM-DD`,
};
const novedades = [
  "2024-01-19",
  "2024-02-16",
  "2024-03-13",
  "2024-04-18",
  "2024-05-17",
  "2024-06-17",
  "2024-07-17",
  "2024-08-17",
  "2024-09-17",
  "2024-10-17",
  "2024-11-17",
  "2024-12-16",
];

dayjs.extend(dayjsBusinessDays, options);

export function setCalendar(gsap) {
  const today = new Date();
  const lastday = dayjs(today).lastBusinessDayOfMonth().format(`DD/MM/YYYY`);

  if (document.getElementById("as__calendario_pay")) {
    document.getElementById("as__calendario_pay").innerHTML = lastday;

    const today = new Date();
    const nextNovedad = novedades.find((date) => dayjs(date).isAfter(today));
    document.getElementById("as__calendario_next").innerHTML = nextNovedad
      .split("-")
      .reverse()
      .join("/");
  }

  if (document.getElementById("as__calendario")) {
    document.getElementById("proximo_pago").innerHTML = lastday;

    const calendar = new Calendar(".calendar", {
      language: "es",
      //   numberMonthsDisplayed: 16,
      startDate: new Date(),
      enableRangeSelection: false,
      renderEnd: () => {
        gsap.fromTo(
          ".month-container",
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            ease: "power4.inout",
            stagger: 0.1,
            dalay: 1,
          }
        );
      },
      customDayRenderer: (element, date) => {
        const today = new Date();
        const fdate = dayjs(date).format(`YYYY-MM-DD`);
        if (
          dayjs(date).lastBusinessDayOfMonth().format(`DD/MM/YYYY`) ==
          dayjs(date).format(`DD/MM/YYYY`)
        ) {
          element.classList.add("last_day");
        }
        if (
          dayjs(date).format(`DD/MM/YYYY`) == dayjs(today).format(`DD/MM/YYYY`)
        ) {
          element.classList.add("today");
        }
        if (!dayjs(date).isBusinessDay()) {
          element.classList.add("weekend");
        }
        if (novedades.includes(fdate)) {
          element.classList.add("novedad");
        }
      },
    });
    // console.log(calendar);
  }
}
