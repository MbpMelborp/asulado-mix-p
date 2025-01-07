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
    "2025-01-01",
    "2025-01-06",
    "2025-03-24",
    "2025-04-17",
    "2025-04-18",
    "2025-06-01",
    "2025-06-02",
    "2025-06-23",
    "2025-06-30",
    "2025-07-20",
    "2025-08-07",
    "2025-08-18",
    "2025-10-13",
    "2025-11-03",
    "2025-11-17",
    "2025-12-08",
    "2025-12-25",
  ],
  holidayFormat: `YYYY-MM-DD`,
};
const novedades = [
  "2025-01-17",
  "2025-02-17",
  "2025-03-17",
  "2025-04-15",
  "2025-05-16",
  "2025-06-13",
  "2025-07-17",
  "2025-08-17",
  "2025-09-17",
  "2025-10-17",
  "2025-11-17",
  "2025-12-12",
];
const pagos = [
  "2025-01-29",
  "2025-02-26",
  "2025-03-27",
  "2025-04-28",
  "2025-05-28",
  "2025-06-25",
  "2025-07-29",
  "2025-08-27",
  "2025-09-26",
  "2025-10-28",
  "2025-11-26",
  "2025-12-23",
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
    const nextPago = pagos.find((date) => dayjs(date).isAfter(today));
    const formattedNextPago = nextPago.split("-").reverse().join("/");
    document.getElementById("proximo_pago").innerHTML = formattedNextPago;

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
          // element.classList.add("last_day");
        }
        if (pagos.includes(fdate)) {
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
