/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/calendar.js":
/*!****************************!*\
  !*** ./src/js/calendar.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setCalendar: () => (/* binding */ setCalendar)
/* harmony export */ });
/* harmony import */ var js_year_calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-year-calendar */ "./node_modules/js-year-calendar/dist/js-year-calendar.js");
/* harmony import */ var js_year_calendar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_year_calendar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_year_calendar_locales_js_year_calendar_es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-year-calendar/locales/js-year-calendar.es */ "./node_modules/js-year-calendar/locales/js-year-calendar.es.js");
/* harmony import */ var js_year_calendar_locales_js_year_calendar_es__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_year_calendar_locales_js_year_calendar_es__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_year_calendar_dist_js_year_calendar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-year-calendar/dist/js-year-calendar.css */ "./node_modules/js-year-calendar/dist/js-year-calendar.css");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs_business_days2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs-business-days2 */ "./node_modules/dayjs-business-days2/dist/index.js");





var options = {
  holidays: ["2023-12-08", "2023-12-25", "2024-01-01", "2024-01-08", "2024-03-25", "2024-03-28", "2024-03-29", "2024-05-01", "2024-05-13", "2024-06-03", "2024-06-10", "2024-07-01", "2024-07-20", "2024-08-07", "2024-08-19", "2024-10-14", "2024-11-04", "2024-11-11", "2024-12-08", "2024-12-25"],
  holidayFormat: "YYYY-MM-DD"
};
var novedades = ["2024-01-19", "2024-02-16", "2024-03-13", "2024-04-18", "2024-05-17", "2024-06-17", "2024-07-18", "2024-08-15", "2024-09-18", "2024-10-17", "2024-11-15", "2024-12-13"];
dayjs__WEBPACK_IMPORTED_MODULE_3___default().extend(dayjs_business_days2__WEBPACK_IMPORTED_MODULE_4__["default"], options);
function setCalendar(gsap) {
  var today = new Date();
  var lastday = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(today).lastBusinessDayOfMonth().format("DD/MM/YYYY");
  if (document.getElementById("as__calendario_pay")) {
    document.getElementById("as__calendario_pay").innerHTML = lastday;
    var _today = new Date();
    var nextNovedad = novedades.find(function (date) {
      return dayjs__WEBPACK_IMPORTED_MODULE_3___default()(date).isAfter(_today);
    });
    document.getElementById("as__calendario_next").innerHTML = nextNovedad.split("-").reverse().join("/");
  }
  if (document.getElementById("as__calendario")) {
    document.getElementById("proximo_pago").innerHTML = lastday;
    var calendar = new (js_year_calendar__WEBPACK_IMPORTED_MODULE_0___default())(".calendar", {
      language: "es",
      //   numberMonthsDisplayed: 16,
      startDate: new Date(),
      enableRangeSelection: false,
      renderEnd: function renderEnd() {
        gsap.fromTo(".month-container", {
          opacity: 0
        }, {
          opacity: 1,
          duration: 0.5,
          ease: "power4.inout",
          stagger: 0.1,
          dalay: 1
        });
      },
      customDayRenderer: function customDayRenderer(element, date) {
        var today = new Date();
        var fdate = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(date).format("YYYY-MM-DD");
        if (dayjs__WEBPACK_IMPORTED_MODULE_3___default()(date).lastBusinessDayOfMonth().format("DD/MM/YYYY") == dayjs__WEBPACK_IMPORTED_MODULE_3___default()(date).format("DD/MM/YYYY")) {
          element.classList.add("last_day");
        }
        if (dayjs__WEBPACK_IMPORTED_MODULE_3___default()(date).format("DD/MM/YYYY") == dayjs__WEBPACK_IMPORTED_MODULE_3___default()(today).format("DD/MM/YYYY")) {
          element.classList.add("today");
        }
        if (!dayjs__WEBPACK_IMPORTED_MODULE_3___default()(date).isBusinessDay()) {
          element.classList.add("weekend");
        }
        if (novedades.includes(fdate)) {
          element.classList.add("novedad");
        }
      }
    });
    // console.log(calendar);
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./node_modules/js-year-calendar/dist/js-year-calendar.css":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./node_modules/js-year-calendar/dist/js-year-calendar.css ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* =========================================================\n * JS year calendar v0.1.0\n * Repo: https://github.com/year-calendar/js-year-calendar\n * =========================================================\n * Created by Paul David-Sivelle\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n * http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ========================================================= */\n/* Main */\n.calendar {\n  padding: 4px;\n  border-radius: 4px;\n  direction: ltr;\n  overflow-x: hidden;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  /* Header */\n  /* Months */\n  /* Loading */\n}\n.calendar:after {\n  /* Apply the right height on the calendar div, even if the months elements are floating  */\n  clear: both;\n  content: \"\";\n  display: block;\n}\n.calendar .calendar-rtl {\n  direction: rtl;\n}\n.calendar .calendar-rtl .calendar-rtl table tr td span {\n  float: right;\n}\n.calendar table {\n  margin: auto;\n  border-spacing: 0;\n}\n.calendar table td,\n.calendar table th {\n  text-align: center;\n  width: 20px;\n  height: 20px;\n  border: none;\n  padding: 4px 5px;\n  font-size: 12px;\n}\n.calendar .calendar-header {\n  width: 100%;\n  margin-bottom: 20px;\n  border: 1px solid #ddd;\n}\n.calendar .calendar-header table {\n  width: 100%;\n}\n.calendar .calendar-header table th {\n  font-size: 22px;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n.calendar .calendar-header table th:hover {\n  background: #eeeeee;\n}\n.calendar .calendar-header table th.disabled,\n.calendar .calendar-header table th.disabled:hover {\n  background: none;\n  cursor: default;\n  color: white;\n}\n.calendar .calendar-header table th.prev,\n.calendar .calendar-header table th.next {\n  width: 20px;\n}\n.calendar .calendar-header .year-title {\n  font-weight: bold;\n  text-align: center;\n  height: 20px;\n  width: auto;\n}\n.calendar .calendar-header .year-neighbor {\n  opacity: 0.4;\n}\n@media (max-width: 991px) {\n  .calendar .calendar-header .year-neighbor {\n    display: none;\n  }\n}\n.calendar .calendar-header .year-neighbor2 {\n  opacity: 0.2;\n}\n@media (max-width: 767px) {\n  .calendar .calendar-header .year-neighbor2 {\n    display: none;\n  }\n}\n.calendar .months-container {\n  width: 100%;\n  display: none;\n  flex-wrap: wrap;\n}\n.calendar .months-container .month-container {\n  float: left;\n  text-align: center;\n  padding: 0;\n}\n.calendar .months-container .month-container.month-2 {\n  width: 16.66666667%;\n}\n.calendar .months-container .month-container.month-3 {\n  width: 25%;\n}\n.calendar .months-container .month-container.month-4 {\n  width: 33.33333333%;\n}\n.calendar .months-container .month-container.month-6 {\n  width: 50%;\n}\n.calendar .months-container .month-container.month-12 {\n  width: 100%;\n}\n.calendar table.month th.month-title {\n  font-size: 16px;\n  padding-bottom: 5px;\n}\n.calendar table.month th.day-header {\n  font-size: 14px;\n}\n.calendar table.month tr td,\n.calendar table.month tr th {\n  padding: 0;\n}\n.calendar table.month tr td.hidden,\n.calendar table.month tr th.hidden {\n  display: none;\n}\n.calendar table.month td.week-number {\n  cursor: default;\n  font-weight: bold;\n  border-right: 1px solid #eee;\n  padding: 5px;\n}\n.calendar table.month td.day.round-left {\n  border-radius: 8px 0 0 8px;\n}\n.calendar table.month td.day.round-right {\n  webkit-border-radius: 0 8px 8px 0 ;\n  border-radius: 0 8px 8px 0;\n}\n.calendar table.month td.day .day-content {\n  border-radius: 4px;\n  padding: 5px 6px;\n}\n.calendar table.month td.old,\n.calendar table.month td.new,\n.calendar table.month td.old:hover,\n.calendar table.month td.new:hover {\n  background: none;\n  cursor: default;\n}\n.calendar table.month td.disabled,\n.calendar table.month td.disabled:hover {\n  color: #dddddd;\n}\n.calendar table.month td.disabled .day-content:hover,\n.calendar table.month td.disabled:hover .day-content:hover {\n  background: none;\n  cursor: default;\n}\n.calendar table.month td.range .day-content {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 0;\n}\n.calendar table.month td.range.range-start .day-content {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.calendar table.month td.range.range-end .day-content {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.calendar .calendar-loading-container {\n  position: relative;\n  text-align: center;\n  min-height: 200px;\n}\n.calendar .calendar-loading-container .calendar-loading {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n.calendar .calendar-spinner {\n  margin: 20px auto;\n  width: 80px;\n  text-align: center;\n}\n.calendar .calendar-spinner > div {\n  width: 16px;\n  height: 16px;\n  margin: 5px;\n  background-color: #333;\n  border-radius: 100%;\n  display: inline-block;\n  animation: sk-bouncedelay 1s infinite ease-in-out both;\n}\n.calendar .calendar-spinner > div.bounce1 {\n  animation-delay: -0.32s;\n}\n.calendar .calendar-spinner > div.bounce2 {\n  animation-delay: -0.16s;\n}\n/* Context menu */\n.calendar-context-menu,\n.calendar-context-menu .submenu {\n  border: 1px solid #ddd;\n  background-color: white;\n  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n  -webkit-box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  display: none;\n}\n.calendar-context-menu .item {\n  position: relative;\n}\n.calendar-context-menu .item .content {\n  padding: 5px 10px;\n  cursor: pointer;\n  display: table;\n  width: 100%;\n  white-space: nowrap;\n  box-sizing: border-box;\n}\n.calendar-context-menu .item .content:hover {\n  background: #eee;\n}\n.calendar-context-menu .item .content .text {\n  display: table-cell;\n}\n.calendar-context-menu .item .content .arrow {\n  display: table-cell;\n  padding-left: 10px;\n  text-align: right;\n}\n.calendar-context-menu .item .submenu {\n  top: -1px;\n  /* Compensate for the border */\n}\n.calendar-context-menu .item .submenu:not(.open-left) {\n  left: 100%;\n}\n.calendar-context-menu .item .submenu.open-left {\n  right: 100%;\n}\n.calendar-context-menu .item:hover > .submenu {\n  display: block;\n}\n.table-striped .calendar table.month tr td,\n.table-striped .calendar table.month tr th {\n  background-color: transparent;\n}\ntable.month td.day .day-content:hover {\n  background: rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n}\n@keyframes sk-bouncedelay {\n  0%,\n  80%,\n  100% {\n    transform: scale(0);\n  }\n  40% {\n    transform: scale(1);\n  }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/dayjs-business-days2/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/dayjs-business-days2/dist/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const BusinessDaysPlugin = (options = {}, dayjsClass, dayjsFactory) => {
    const defaultWorkingWeekdays = [1, 2, 3, 4, 5];
    dayjsFactory.getWorkingWeekdays = function () {
        return options.workingWeekdays || defaultWorkingWeekdays;
    };
    dayjsFactory.setWorkingWeekdays = function (workingWeekdays) {
        options.workingWeekdays = workingWeekdays;
    };
    dayjsFactory.getHolidays = function () {
        return options.holidays || [];
    };
    dayjsFactory.setHolidays = function (holidays) {
        options.holidays = holidays;
    };
    dayjsFactory.getHolidayFormat = function () {
        return options.holidayFormat;
    };
    dayjsFactory.setHolidayFormat = function (holidayFormat) {
        options.holidayFormat = holidayFormat;
    };
    dayjsFactory.getAdditionalWorkingDays = function () {
        return options.additionalWorkingDays || [];
    };
    dayjsFactory.setAdditionalWorkingDays = function (additionalWorkingDays) {
        options.additionalWorkingDays = additionalWorkingDays;
    };
    dayjsFactory.getAdditionalWorkingDayFormat = function () {
        return options.additionalWorkingDayFormat;
    };
    dayjsFactory.setAdditionalWorkingDayFormat = function (additionalWorkingDayFormat) {
        options.additionalWorkingDayFormat = additionalWorkingDayFormat;
    };
    dayjsClass.prototype.isHoliday = function () {
        if (!options.holidays) {
            return false;
        }
        if (options.holidays.includes(this.format(options.holidayFormat))) {
            return true;
        }
        return false;
    };
    dayjsClass.prototype.isBusinessDay = function () {
        const workingWeekdays = options.workingWeekdays || defaultWorkingWeekdays;
        if (this.isHoliday()) {
            return false;
        }
        if (this.isAdditionalWorkingDay()) {
            return true;
        }
        if (workingWeekdays.includes(this.day())) {
            return true;
        }
        return false;
    };
    dayjsClass.prototype.isAdditionalWorkingDay = function () {
        if (!options.additionalWorkingDays) {
            return false;
        }
        if (options.additionalWorkingDays.includes(this.format(options.additionalWorkingDayFormat))) {
            return true;
        }
        return false;
    };
    dayjsClass.prototype.businessDaysAdd = function (days) {
        const numericDirection = days < 0 ? -1 : 1;
        let currentDay = this.clone();
        let daysRemaining = Math.abs(days);
        while (daysRemaining > 0) {
            currentDay = currentDay.add(numericDirection, `d`);
            if (currentDay.isBusinessDay()) {
                daysRemaining -= 1;
            }
        }
        return currentDay;
    };
    dayjsClass.prototype.businessDaysSubtract = function (days) {
        let currentDay = this.clone();
        currentDay = currentDay.businessDaysAdd(days * -1);
        return currentDay;
    };
    dayjsClass.prototype.businessDiff = function (date) {
        const day1 = this.clone();
        const day2 = date.clone();
        const isPositiveDiff = day1 >= day2;
        let start = isPositiveDiff ? day2 : day1;
        const end = isPositiveDiff ? day1 : day2;
        let daysBetween = 0;
        if (start.isSame(end)) {
            return daysBetween;
        }
        while (start < end) {
            if (start.isBusinessDay()) {
                daysBetween += 1;
            }
            start = start.add(1, `d`);
        }
        return isPositiveDiff ? daysBetween : -daysBetween;
    };
    dayjsClass.prototype.nextBusinessDay = function () {
        const searchLimit = 7;
        let currentDay = this.clone();
        let loopIndex = 1;
        while (loopIndex < searchLimit) {
            currentDay = currentDay.add(1, `day`);
            if (currentDay.isBusinessDay()) {
                break;
            }
            loopIndex += 1;
        }
        return currentDay;
    };
    dayjsClass.prototype.prevBusinessDay = function () {
        const searchLimit = 7;
        let currentDay = this.clone();
        let loopIndex = 1;
        while (loopIndex < searchLimit) {
            currentDay = currentDay.subtract(1, `day`);
            if (currentDay.isBusinessDay()) {
                break;
            }
            loopIndex += 1;
        }
        return currentDay;
    };
    dayjsClass.prototype.businessDaysInMonth = function () {
        if (!this.isValid()) {
            return [];
        }
        let currentDay = this.clone().startOf(`month`);
        const monthEnd = this.clone().endOf(`month`);
        const businessDays = [];
        let monthComplete = false;
        while (!monthComplete) {
            if (currentDay.isBusinessDay()) {
                businessDays.push(currentDay.clone());
            }
            currentDay = currentDay.add(1, `day`);
            if (currentDay.isAfter(monthEnd)) {
                monthComplete = true;
            }
        }
        return businessDays;
    };
    dayjsClass.prototype.lastBusinessDayOfMonth = function () {
        const businessDays = this.businessDaysInMonth();
        const lastBusinessDay = businessDays[businessDays.length - 1];
        return lastBusinessDay;
    };
    dayjsClass.prototype.businessWeeksInMonth = function () {
        if (!this.isValid()) {
            return [];
        }
        let currentDay = this.clone().startOf(`month`);
        const monthEnd = this.clone().endOf(`month`);
        const businessWeeks = [];
        let businessDays = [];
        let monthComplete = false;
        while (!monthComplete) {
            if (currentDay.isBusinessDay()) {
                businessDays.push(currentDay.clone());
            }
            if (currentDay.day() === 5 || currentDay.isSame(monthEnd, `day`)) {
                businessWeeks.push(businessDays);
                businessDays = [];
            }
            currentDay = currentDay.add(1, `day`);
            if (currentDay.isAfter(monthEnd)) {
                monthComplete = true;
            }
        }
        return businessWeeks;
    };
};
exports["default"] = BusinessDaysPlugin;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else{var a=e.name;D[a]=e,i=a}return!r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return b},m.isValid=function(){return!(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return b.s(e.$y,4,"0");case"M":return a+1;case"MM":return b.s(a+1,2,"0");case"MMM":return h(n.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return b.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(n.weekdaysMin,e.$W,o,2);case"ddd":return h(n.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(s);case"HH":return b.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return $(s,u,!0);case"A":return $(s,u,!1);case"m":return String(u);case"mm":return b.s(u,2,"0");case"s":return String(e.$s);case"ss":return b.s(e.$s,2,"0");case"SSS":return b.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=!0),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O}));

/***/ }),

/***/ "./node_modules/gsap/CSSPlugin.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSPlugin: () => (/* binding */ CSSPlugin),
/* harmony export */   _createElement: () => (/* binding */ _createElement),
/* harmony export */   _getBBox: () => (/* binding */ _getBBox),
/* harmony export */   checkPrefix: () => (/* binding */ _checkPropPrefix),
/* harmony export */   "default": () => (/* binding */ CSSPlugin)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var _win,
    _doc,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _tempDivStyler,
    _recentSetterPlugin,
    _reverting,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp = /([A-Z])/g,
    _horizontalExp = /(left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
},
    _renderCSSProp = function _renderCSSProp(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
},
    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
},
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
},
    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
  return target.style[property] = value;
},
    _setterCSSProp = function _setterCSSProp(target, property, value) {
  return target.style.setProperty(property, value);
},
    _setterTransform = function _setterTransform(target, property, value) {
  return target._gsap[property] = value;
},
    _setterScale = function _setterScale(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
},
    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
},
    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
},
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _saveStyle = function _saveStyle(property, isNotCSS) {
  var _this = this;

  var target = this.target,
      style = target.style,
      cache = target._gsap;

  if (property in _transformProps && style) {
    this.tfm = this.tfm || {};

    if (property !== "transform") {
      property = _propertyAliases[property] || property;
      ~property.indexOf(",") ? property.split(",").forEach(function (a) {
        return _this.tfm[a] = _get(target, a);
      }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.

      property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
    } else {
      return _propertyAliases.transform.split(",").forEach(function (p) {
        return _saveStyle.call(_this, p, isNotCSS);
      });
    }

    if (this.props.indexOf(_transformProp) >= 0) {
      return;
    }

    if (cache.svg) {
      this.svgo = target.getAttribute("data-svg-origin");
      this.props.push(_transformOriginProp, isNotCSS, "");
    }

    property = _transformProp;
  }

  (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
},
    _removeIndependentTransforms = function _removeIndependentTransforms(style) {
  if (style.translate) {
    style.removeProperty("translate");
    style.removeProperty("scale");
    style.removeProperty("rotate");
  }
},
    _revertStyle = function _revertStyle() {
  var props = this.props,
      target = this.target,
      style = target.style,
      cache = target._gsap,
      i,
      p;

  for (i = 0; i < props.length; i += 3) {
    // stored like this: property, isNotCSS, value
    props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
  }

  if (this.tfm) {
    for (p in this.tfm) {
      cache[p] = this.tfm[p];
    }

    if (cache.svg) {
      cache.renderTransform();
      target.setAttribute("data-svg-origin", this.svgo || "");
    }

    i = _reverting();

    if ((!i || !i.isStart) && !style[_transformProp]) {
      _removeIndependentTransforms(style);

      if (cache.zOrigin && style[_transformOriginProp]) {
        style[_transformOriginProp] += " " + cache.zOrigin + "px"; // since we're uncaching, we must put the zOrigin back into the transformOrigin so that we can pull it out accurately when we parse again. Otherwise, we'd lose the z portion of the origin since we extract it to protect from Safari bugs.

        cache.zOrigin = 0;
        cache.renderTransform();
      }

      cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
    }
  }
},
    _getStyleSaver = function _getStyleSaver(target, properties) {
  var saver = {
    target: target,
    props: [],
    revert: _revertStyle,
    save: _saveStyle
  };
  target._gsap || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.getCache(target); // just make sure there's a _gsap cache defined because we read from it in _saveStyle() and it's more efficient to just check it here once.

  properties && properties.split(",").forEach(function (p) {
    return saver.save(p);
  });
  return saver;
},
    _supports3D,
    _createElement = function _createElement(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e && e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://gsap.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
},
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
  var e = element || _tempDiv,
      s = e.style,
      i = 5;

  if (property in s && !preferPrefix) {
    return property;
  }

  property = property.charAt(0).toUpperCase() + property.substr(1);

  while (i-- && !(_prefixes[i] + property in s)) {}

  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
},
    _initCore = function _initCore() {
  if (_windowExists() && window.document) {
    _win = window;
    _doc = _win.document;
    _docElement = _doc.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

    _supports3D = !!_checkPropPrefix("perspective");
    _reverting = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.reverting;
    _pluginInitted = 1;
  }
},
    _getBBoxHack = function _getBBoxHack(swapIfPossible) {
  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      oldParent = this.parentNode,
      oldSibling = this.nextSibling,
      oldCSS = this.style.cssText,
      bbox;

  _docElement.appendChild(svg);

  svg.appendChild(this);
  this.style.display = "block";

  if (swapIfPossible) {
    try {
      bbox = this.getBBox();
      this._gsapBBox = this.getBBox; //store the original

      this.getBBox = _getBBoxHack;
    } catch (e) {}
  } else if (this._gsapBBox) {
    bbox = this._gsapBBox();
  }

  if (oldParent) {
    if (oldSibling) {
      oldParent.insertBefore(this, oldSibling);
    } else {
      oldParent.appendChild(this);
    }
  }

  _docElement.removeChild(svg);

  this.style.cssText = oldCSS;
  return bbox;
},
    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
  var i = attributesArray.length;

  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
},
    _getBBox = function _getBBox(target) {
  var bounds;

  try {
    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  } catch (error) {
    bounds = _getBBoxHack.call(target, true);
  }

  bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
},
    _isSVG = function _isSVG(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
},
    //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
  if (property) {
    var style = target.style,
        first2Chars;

    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }

    if (style.removeProperty) {
      first2Chars = property.substr(0, 2);

      if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
        property = "-" + property;
      }

      style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
      style.removeAttribute(property);
    }
  }
},
    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;

  plugin._props.push(property);

  return pt;
},
    _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
},
    _nonStandardLayouts = {
  grid: 1,
  flex: 1
},
    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
  var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
  style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;

  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }

  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);

  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
  }

  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }

  if (!parent || parent === _doc || !parent.appendChild) {
    parent = _doc.body;
  }

  cache = parent._gsap;

  if (cache && toPercent && cache.width && horizontal && cache.time === _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time && !cache.uncache) {
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(curValue / cache.width * amount);
  } else {
    if (toPercent && (property === "height" || property === "width")) {
      // if we're dealing with width/height that's inside a container with padding and/or it's a flexbox/grid container, we must apply it to the target itself rather than the _tempDiv in order to ensure complete accuracy, factoring in the parent's padding.
      var v = target.style[property];
      target.style[property] = amount + unit;
      px = target[measureProperty];
      v ? target.style[property] = v : _removeProperty(target, property);
    } else {
      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";
    }

    if (horizontal && toPercent) {
      cache = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(parent);
      cache.time = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time;
      cache.width = parent[measureProperty];
    }
  }

  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
},
    _get = function _get(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();

  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];

    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }

  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];

    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
  }

  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
},
    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
  // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  if (!start || start === "none") {
    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://gsap.com/forums/topic/18310-clippath-doesnt-work-on-ios/
    var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);

    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://gsap.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
  }

  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, target.style, prop, 0, 1, _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._renderComplexString),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      endValues;
  pt.b = start;
  pt.e = end;
  start += ""; // ensure values are strings

  end += "";

  if (end === "auto") {
    startValue = target.style[prop];
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
  }

  a = [start, end];

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorStringFilter)(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


  start = a[0];
  end = a[1];
  startValues = start.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];
  endValues = end.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];

  if (endValues.length) {
    while (result = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }

      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        endValue.charAt(1) === "=" && (endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, endValue) + startUnit);
        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.lastIndex - endUnit.length;

        if (!endUnit) {
          //if something like "perspective:300" is passed in and we must add a unit to the end
          endUnit = endUnit || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[prop] || startUnit;

          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }

        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        } // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }

  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
},
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
  var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";

  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    //the user provided them in the wrong order, so flip them
    value = x;
    x = y;
    y = value;
  }

  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
},
    _renderClearProps = function _renderClearProps(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;

    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;

      while (--i > -1) {
        prop = props[i];

        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }

        _removeProperty(target, prop);
      }
    }

    if (clearTransforms) {
      _removeProperty(target, _transformProp);

      if (cache) {
        cache.svg && target.removeAttribute("transform");

        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


        cache.uncache = 1;

        _removeIndependentTransforms(style);
      }
    }
  }
},
    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;

      plugin._props.push(property);

      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */

},

/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
},
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
  var matrixString = _getComputedProperty(target, _transformProp);

  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numExp).map(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round);
},
    _getMatrix = function _getMatrix(target, force2D) {
  var cache = target._gsap || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;

  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;

    if (!parent || !target.offsetParent) {
      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
      addedToDOM = 1; //flag

      nextSibling = target.nextElementSibling;

      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

    }

    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");

    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }

  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
},
    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;

  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin); // if (!("xOrigin" in cache) && (xOrigin || yOrigin)) { // added in 3.12.3, reverted in 3.12.4; requires more exploration
    // 	xOrigin -= bounds.x;
    // 	yOrigin -= bounds.y;
    // }
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y; // theory: we only had to do this for smoothing and it assumes that the previous one was not originIsAbsolute.
  }

  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }

  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }

  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
},
    _parseTransform = function _parseTransform(target, uncache) {
  var cache = target._gsap || new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.GSCache(target);

  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }

  var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      cs = getComputedStyle(target),
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));

  if (cs.translate) {
    // accommodate independent transforms by combining them into normal ones.
    if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
      style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
    }

    style.scale = style.rotate = style.translate = "none";
  }

  matrix = _getMatrix(target, cache.svg);

  if (cache.svg) {
    if (cache.uncache) {
      // if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
      t2 = target.getBBox();
      origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
      t1 = "";
    } else {
      t1 = !uncache && target.getAttribute("data-svg-origin"); //  Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
    }

    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }

  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;

  if (matrix !== _identity2DMatrix) {
    a = matrix[0]; //a11

    b = matrix[1]; //a21

    c = matrix[2]; //a31

    d = matrix[3]; //a41

    x = a12 = matrix[4];
    y = a22 = matrix[5]; //2D matrix

    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      } //3D matrix

    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG; //rotationX

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      } //rotationY


      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      } //rotationZ


      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }

      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }

      scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a * a + b * b + c * c));
      scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }

    if (cache.svg) {
      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }

  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }

  uncache = uncache || cache.uncache;
  cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleX);
  cache.scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleY);
  cache.rotation = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotation) + deg;
  cache.rotationX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationX) + deg;
  cache.rotationY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;

  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }

  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
},
    _firstTwoOnly = function _firstTwoOnly(value) {
  return (value = value.split(" "))[0] + " " + value[1];
},
    //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
  var unit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(start);
  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
},
    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;

  _renderCSSTransforms(ratio, cache);
},
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
  var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;

    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }

  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }

  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }

  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }

  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }

  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }

  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }

  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }

  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }

  target.style[_transformProp] = transforms || "translate(0, 0)";
},
    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
  var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;

  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);

  if (skewY) {
    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }

  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;

    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;

      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }

    a11 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a11);
    a21 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a21);
    a12 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a12);
    a22 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }

  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }

  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }

  if (xPercent || yPercent) {
    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
    temp = target.getBBox();
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xPercent / 100 * temp.width);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yPercent / 100 * temp.height);
  }

  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the transform attribute changes!)
},
    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
  var cap = 360,
      isString = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;

  if (isString) {
    direction = endValue.split("_")[1];

    if (direction === "short") {
      change %= cap;

      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }

    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
  }

  plugin._pt = pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";

  plugin._props.push(property);

  return pt;
},
    _assign = function _assign(target, source) {
  // Internet Explorer doesn't have Object.assign(), so we recreate it here.
  for (var p in source) {
    target[p] = source[p];
  }

  return target;
},
    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
  var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;

  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);

    _removeProperty(target, _transformProp);

    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp];
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    style[_transformProp] = startValue;
  }

  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];

    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
      startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
      endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;

      plugin._props.push(p);
    }
  }

  _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
    return index < 2 ? name + side : "border" + side + name;
  });

  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;

    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }

    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});

var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
        style = target.style,
        startAt = tween.vars.startAt,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority,
        inlineProps;
    _pluginInitted || _initCore(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps

    this.styles = this.styles || _getStyleSaver(target);
    inlineProps = this.styles.props;
    this.tween = tween;

    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }

      endValue = vars[p];

      if (_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._plugins[p] && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._checkPlugin)(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }

      type = typeof endValue;
      specialProp = _specialProps[p];

      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }

      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(endValue);
      }

      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.lastIndex = 0;

        if (!_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.test(startValue)) {
          // colors don't have units
          startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
        }

        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
        inlineProps.push(p, 0, style[p]);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(startValue));
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue + "") || startValue === "auto" || (startValue += _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }

        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);

        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }

            inlineProps.push("visibility", 0, style.visibility);

            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }

          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }

        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          this.styles.save(p);

          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
            this._pt.u = 0;
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }

            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endValue) : endValue);

            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);

            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }

        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue) || (p in _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units ? _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;

          if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
          } else if (p !== "parseTransform") {
            (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._missingPlugin)(p, endValue);

            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
        }

        isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
        props.push(p);
      }
    }

    hasPriority && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._sortPropTweensByPriority)(this);
  },
  render: function render(ratio, data) {
    if (data.tween._time || !_reverting()) {
      var pt = data._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    } else {
      data.styles.revert();
    }
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getSetter)(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.checkPrefix = _checkPropPrefix;
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.getStyleSaver = _getStyleSaver;

(function (positionAndScale, rotation, others, aliases) {
  var all = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(rotation, function (name) {
    _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });

  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "px";
});

_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(CSSPlugin);


/***/ }),

/***/ "./node_modules/gsap/gsap-core.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/gsap-core.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animation: () => (/* binding */ Animation),
/* harmony export */   Back: () => (/* binding */ Back),
/* harmony export */   Bounce: () => (/* binding */ Bounce),
/* harmony export */   Circ: () => (/* binding */ Circ),
/* harmony export */   Cubic: () => (/* binding */ Cubic),
/* harmony export */   Elastic: () => (/* binding */ Elastic),
/* harmony export */   Expo: () => (/* binding */ Expo),
/* harmony export */   GSCache: () => (/* binding */ GSCache),
/* harmony export */   Linear: () => (/* binding */ Linear),
/* harmony export */   Power0: () => (/* binding */ Power0),
/* harmony export */   Power1: () => (/* binding */ Power1),
/* harmony export */   Power2: () => (/* binding */ Power2),
/* harmony export */   Power3: () => (/* binding */ Power3),
/* harmony export */   Power4: () => (/* binding */ Power4),
/* harmony export */   PropTween: () => (/* binding */ PropTween),
/* harmony export */   Quad: () => (/* binding */ Quad),
/* harmony export */   Quart: () => (/* binding */ Quart),
/* harmony export */   Quint: () => (/* binding */ Quint),
/* harmony export */   Sine: () => (/* binding */ Sine),
/* harmony export */   SteppedEase: () => (/* binding */ SteppedEase),
/* harmony export */   Strong: () => (/* binding */ Strong),
/* harmony export */   Timeline: () => (/* binding */ Timeline),
/* harmony export */   TimelineLite: () => (/* binding */ Timeline),
/* harmony export */   TimelineMax: () => (/* binding */ Timeline),
/* harmony export */   Tween: () => (/* binding */ Tween),
/* harmony export */   TweenLite: () => (/* binding */ Tween),
/* harmony export */   TweenMax: () => (/* binding */ Tween),
/* harmony export */   _checkPlugin: () => (/* binding */ _checkPlugin),
/* harmony export */   _colorExp: () => (/* binding */ _colorExp),
/* harmony export */   _colorStringFilter: () => (/* binding */ _colorStringFilter),
/* harmony export */   _config: () => (/* binding */ _config),
/* harmony export */   _forEachName: () => (/* binding */ _forEachName),
/* harmony export */   _getCache: () => (/* binding */ _getCache),
/* harmony export */   _getProperty: () => (/* binding */ _getProperty),
/* harmony export */   _getSetter: () => (/* binding */ _getSetter),
/* harmony export */   _isString: () => (/* binding */ _isString),
/* harmony export */   _isUndefined: () => (/* binding */ _isUndefined),
/* harmony export */   _missingPlugin: () => (/* binding */ _missingPlugin),
/* harmony export */   _numExp: () => (/* binding */ _numExp),
/* harmony export */   _numWithUnitExp: () => (/* binding */ _numWithUnitExp),
/* harmony export */   _parseRelative: () => (/* binding */ _parseRelative),
/* harmony export */   _plugins: () => (/* binding */ _plugins),
/* harmony export */   _relExp: () => (/* binding */ _relExp),
/* harmony export */   _removeLinkedListItem: () => (/* binding */ _removeLinkedListItem),
/* harmony export */   _renderComplexString: () => (/* binding */ _renderComplexString),
/* harmony export */   _replaceRandom: () => (/* binding */ _replaceRandom),
/* harmony export */   _round: () => (/* binding */ _round),
/* harmony export */   _roundModifier: () => (/* binding */ _roundModifier),
/* harmony export */   _setDefaults: () => (/* binding */ _setDefaults),
/* harmony export */   _sortPropTweensByPriority: () => (/* binding */ _sortPropTweensByPriority),
/* harmony export */   _ticker: () => (/* binding */ _ticker),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   "default": () => (/* binding */ gsap),
/* harmony export */   distribute: () => (/* binding */ distribute),
/* harmony export */   getUnit: () => (/* binding */ getUnit),
/* harmony export */   gsap: () => (/* binding */ gsap),
/* harmony export */   interpolate: () => (/* binding */ interpolate),
/* harmony export */   mapRange: () => (/* binding */ mapRange),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   pipe: () => (/* binding */ pipe),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   selector: () => (/* binding */ selector),
/* harmony export */   shuffle: () => (/* binding */ shuffle),
/* harmony export */   snap: () => (/* binding */ snap),
/* harmony export */   splitColor: () => (/* binding */ splitColor),
/* harmony export */   toArray: () => (/* binding */ toArray),
/* harmony export */   unitize: () => (/* binding */ unitize),
/* harmony export */   wrap: () => (/* binding */ wrap),
/* harmony export */   wrapYoyo: () => (/* binding */ wrapYoyo)
/* harmony export */ });
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
},
    _defaults = {
  duration: .5,
  overwrite: false,
  delay: 0
},
    _suppressOverwrites,
    _reverting,
    _context,
    _bigNum = 1e8,
    _tinyNum = 1 / _bigNum,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _isNotFalse = function _isNotFalse(value) {
  return value !== false;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _isFuncOrString = function _isFuncOrString(value) {
  return _isFunction(value) || _isString(value);
},
    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
    // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    _globalTimeline,
    _win,
    _coreInitted,
    _doc,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
},
    _missingPlugin = function _missingPlugin(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
},
    _warn = function _warn(message, suppress) {
  return !suppress && console.warn(message);
},
    _addGlobal = function _addGlobal(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
},
    _emptyFunc = function _emptyFunc() {
  return 0;
},
    _startAtRevertConfig = {
  suppressEvents: true,
  isStart: true,
  kill: false
},
    _revertConfigNoKill = {
  suppressEvents: true,
  kill: false
},
    _revertConfig = {
  suppressEvents: true
},
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness(targets) {
  var target = targets[0],
      harnessPlugin,
      i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);

  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
    i = _harnessPlugins.length;

    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

    harnessPlugin = _harnessPlugins[i];
  }

  i = targets.length;

  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }

  return targets;
},
    _getCache = function _getCache(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
},
    _getProperty = function _getProperty(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
},
    _forEachName = function _forEachName(names, func) {
  return (names = names.split(",")).forEach(func) || names;
},
    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _roundPrecise = function _roundPrecise(value) {
  return Math.round(value * 10000000) / 10000000 || 0;
},
    // increased precision mostly for timing values.
_parseRelative = function _parseRelative(start, value) {
  var operator = value.charAt(0),
      end = parseFloat(value.substr(2));
  start = parseFloat(start);
  return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
},
    _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
  var l = toFind.length,
      i = 0;

  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

  return i < l;
},
    _lazyRender = function _lazyRender() {
  var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;

  _lazyLookup = {};
  _lazyTweens.length = 0;

  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
},
    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
  _lazyTweens.length && !_reverting && _lazyRender();
  animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
  _lazyTweens.length && !_reverting && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
},
    _numericIfPossible = function _numericIfPossible(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
},
    _passThrough = function _passThrough(p) {
  return p;
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
  return function (obj, defaults) {
    for (var p in defaults) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    }
  };
},
    _merge = function _merge(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }

  return base;
},
    _mergeDeep = function _mergeDeep(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }

  return base;
},
    _copyExcluding = function _copyExcluding(obj, excluding) {
  var copy = {},
      p;

  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }

  return copy;
},
    _inheritDefaults = function _inheritDefaults(vars) {
  var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;

  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }

  return vars;
},
    _arraysMatch = function _arraysMatch(a1, a2) {
  var i = a1.length,
      match = i === a2.length;

  while (match && i-- && a1[i] === a2[i]) {}

  return i < 0;
},
    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = parent[lastProp],
      t;

  if (sortBy) {
    t = child[sortBy];

    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }

  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }

  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }

  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
},
    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = child._prev,
      next = child._next;

  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }

  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }

  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
},
    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
  child._act = 0;
},
    _uncache = function _uncache(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }

  return animation;
},
    _recacheAncestors = function _recacheAncestors(animation) {
  var parent = animation.parent;

  while (parent && parent.parent) {
    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }

  return animation;
},
    _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
  return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
},
    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
},
    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
},
    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
  var whole = Math.floor(tTime /= cycleDuration);
  return tTime && whole === tTime ? whole - 1 : whole;
},
    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
},
    _setEnd = function _setEnd(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
},
    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
  var parent = animation._dp;

  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

    _setEnd(animation);

    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  }

  return animation;
},

/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
  var t;

  if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
    // in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
    t = _parentToChildTotalTime(timeline.rawTime(), child);

    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    //in case any of the ancestors had completed but should now be enabled...
    if (timeline._dur < timeline.duration()) {
      t = timeline;

      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

        t = t._dp;
      }
    }

    timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
  }
},
    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

  _isFromOrFromStart(child) || (timeline._recent = child);
  skipChecks || _postAddChecks(timeline, child);
  timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)

  return timeline;
},
    _scrollTrigger = function _scrollTrigger(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
},
    _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
  _initTween(tween, time, tTime);

  if (!tween._initted) {
    return 1;
  }

  if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);

    tween._lazy = [tTime, suppressEvents];
    return 1;
  }
},
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
},
    // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
},
    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
  repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;

  if (repeatDelay && tween._repeat) {
    // in case there's a zero-duration tween that has a repeat with a repeatDelay
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
      // if iteration changed
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }

  if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
      // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
      return;
    }

    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);

      if (!suppressEvents && !_reverting) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
},
    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
  var child;

  if (time > prevTime) {
    child = animation._first;

    while (child && child._start <= time) {
      if (child.data === "isPause" && child._start > prevTime) {
        return child;
      }

      child = child._next;
    }
  } else {
    child = animation._last;

    while (child && child._start >= time) {
      if (child.data === "isPause" && child._start < prevTime) {
        return child;
      }

      child = child._prev;
    }
  }
},
    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
  animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
},
    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
},
    _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
},
    _parsePosition = function _parsePosition(animation, position, percentAnimation) {
  var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  i,
      offset,
      isPercent;

  if (_isString(position) && (isNaN(position) || position in labels)) {
    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");

    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }

    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }

    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }

    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }

  return position == null ? clippedDuration : +position;
},
    _createTweenType = function _createTweenType(type, params, timeline) {
  var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;

  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline;

  if (type) {
    irVars = vars;
    parent = timeline;

    while (parent && !("immediateRender" in irVars)) {
      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }

    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
  }

  return new Tween(params[0], vars, params[varsIndex + 1]);
},
    _conditionalReturn = function _conditionalReturn(value, func) {
  return value || value === 0 ? func(value) : func;
},
    _clamp = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
},
    getUnit = function getUnit(value, v) {
  return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
},
    // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
  return _conditionalReturn(value, function (v) {
    return _clamp(min, max, v);
  });
},
    _slice = [].slice,
    _isArrayLike = function _isArrayLike(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
},
    _flatten = function _flatten(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }

  return ar.forEach(function (value) {
    var _accumulator;

    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
},
    //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
  return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
},
    selector = function selector(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function (v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
  };
},
    shuffle = function shuffle(a) {
  return a.sort(function () {
    return .5 - Math.random();
  });
},
    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
  if (_isFunction(v)) {
    return v;
  }

  var vars = _isObject(v) ? v : {
    each: v
  },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
  ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;

  if (_isString(from)) {
    ratioX = ratioY = {
      center: .5,
      edges: .5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }

  return function (i, target, a) {
    var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;

    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

      if (!wrapAt) {
        max = -_bigNum;

        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

        wrapAt < l && wrapAt--;
      }

      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
      originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;

      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }

      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }

    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
  };
},
    _roundModifier = function _roundModifier(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

  return function (raw) {
    var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);

    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
  };
},
    snap = function snap(snapTo, value) {
  var isArray = _isArray(snapTo),
      radius,
      is2D;

  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;

    if (snapTo.values) {
      snapTo = toArray(snapTo.values);

      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }

  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function (raw) {
    var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;

    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }

      if (dx < min) {
        min = dx;
        closest = i;
      }
    }

    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
},
    random = function random(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
},
    pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (v, f) {
      return f(v);
    }, value);
  };
},
    unitize = function unitize(func, unit) {
  return function (value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
},
    normalize = function normalize(min, max, value) {
  return mapRange(min, max, 0, 1, value);
},
    _wrapArray = function _wrapArray(a, wrapper, value) {
  return _conditionalReturn(value, function (index) {
    return a[~~wrapper(index)];
  });
},
    wrap = function wrap(min, max, value) {
  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
    return (range + (value - min) % range) % range + min;
  });
},
    wrapYoyo = function wrapYoyo(min, max, value) {
  var range = max - min,
      total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
    value = (total + (value - min) % total) % total || 0;
    return min + (value > range ? total - value : value);
  });
},
    _replaceRandom = function _replaceRandom(value) {
  //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
  var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;

  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }

  return s + value.substr(prev, value.length - prev);
},
    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin,
      outRange = outMax - outMin;
  return _conditionalReturn(value, function (value) {
    return outMin + ((value - inMin) / inRange * outRange || 0);
  });
},
    interpolate = function interpolate(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function (p) {
    return (1 - p) * start + p * end;
  };

  if (!func) {
    var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;

    progress === true && (mutate = 1) && (progress = null);

    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;

      for (i = 1; i < l; i++) {
        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
      }

      l--;

      func = function func(p) {
        p *= l;
        var i = Math.min(il, ~~p);
        return interpolators[i](p - i);
      };

      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }

    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }

      func = function func(p) {
        return _renderPropTweens(p, master) || (isString ? start.p : start);
      };
    }
  }

  return _conditionalReturn(progress, func);
},
    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
  //used for nextLabel() and previousLabel()
  var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;

  for (p in labels) {
    distance = labels[p] - fromTime;

    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }

  return label;
},
    _callback = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars,
      callback = v[type],
      prevContext = _context,
      context = animation._ctx,
      params,
      scope,
      result;

  if (!callback) {
    return;
  }

  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

  context && (_context = context);
  result = params ? callback.apply(scope, params) : callback.call(scope);
  _context = prevContext;
  return result;
},
    _interrupt = function _interrupt(animation) {
  _removeFromParent(animation);

  animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
},
    _quickTween,
    _registerPluginQueue = [],
    _createPlugin = function _createPlugin(config) {
  if (!config) return;
  config = !config.name && config["default"] || config; // UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

  if (_windowExists() || config.headless) {
    // edge case: some build tools may pass in a null/undefined value
    var name = config.name,
        isFunc = _isFunction(config),
        Plugin = name && !isFunc && config.init ? function () {
      this._props = [];
    } : config,
        //in case someone passes in an object that's not a plugin, like CustomEase
    instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    },
        statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };

    _wake();

    if (config !== Plugin) {
      if (_plugins[name]) {
        return;
      }

      _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


      _plugins[Plugin.prop = name] = Plugin;

      if (config.targetTest) {
        _harnessPlugins.push(Plugin);

        _reservedProps[name] = 1;
      }

      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
    }

    _addGlobal(name, Plugin);

    config.register && config.register(gsap, Plugin, PropTween);
  } else {
    _registerPluginQueue.push(config);
  }
},

/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255,
    _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
},
    // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
  h += h < 0 ? 1 : h > 1 ? -1 : 0;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
},
    splitColor = function splitColor(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!a) {
    if (v.substr(-1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        //for shorthand like #9F0 or #9F0F (could have alpha)
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }

      if (v.length === 9) {
        // hex with alpha, like #fd5e53ff
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);

      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= .5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1); //cast as number

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }

    a = a.map(Number);
  }

  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = ~~(h + .5);
    a[1] = ~~(s * 100 + .5);
    a[2] = ~~(l * 100 + .5);
  }

  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
},
    _colorOrderData = function _colorOrderData(v) {
  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
  var values = [],
      c = [],
      i = -1;
  v.split(_colorExp).forEach(function (v) {
    var a = v.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
},
    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
  var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;

  if (!colors) {
    return s;
  }

  colors = colors.map(function (color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });

  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;

    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }

  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;

    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }

  return result + shell[l];
},
    _colorExp = function () {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
  p;

  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }

  return new RegExp(s + ")", "gi");
}(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter(a) {
  var combined = a.join(" "),
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

    return true;
  }
},

/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive,
    _ticker = function () {
  var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate,
        manual = v === true,
        overlap,
        dispatch,
        time,
        frame;

    (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;

    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }

    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };

  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

          _registerPluginQueue.forEach(_createPlugin);
        }

        _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
        _id && _self.sleep();

        _req = _raf || function (f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };

        _tickerActive = 1;

        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || Infinity; // zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback, once, prioritize) {
      var func = once ? function (t, d, f, v) {
        callback(t, d, f, v);

        _self.remove(func);
      } : callback;

      _self.remove(callback);

      _listeners[prioritize ? "unshift" : "push"](func);

      _wake();

      return func;
    },
    remove: function remove(callback, i) {
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners
  };
  return _self;
}(),
    _wake = function _wake() {
  return !_tickerActive && _ticker.wake();
},
    //also ensures the core classes are initialized.

/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString(value) {
  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
  var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;

  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }

  return obj;
},
    _valueInParentheses = function _valueInParentheses(value) {
  var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
},
    _configEaseFromString = function _configEaseFromString(name) {
  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
  var split = (name + "").split("("),
      ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
},
    _invertEase = function _invertEase(ease) {
  return function (p) {
    return 1 - ease(1 - p);
  };
},
    // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
  var child = timeline._first,
      ease;

  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }

    child = child._next;
  }
},
    _parseEase = function _parseEase(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
},
    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }

  if (easeInOut === void 0) {
    easeInOut = function easeInOut(p) {
      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }

  var ease = {
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut
  },
      lowercaseName;

  _forEachName(names, function (name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });

  return ease;
},
    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
  return function (p) {
    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
  };
},
    _configElastic = function _configElastic(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  p2 = _2PI / p2; //precalculate to optimize

  ease.config = function (amplitude, period) {
    return _configElastic(type, amplitude, period);
  };

  return ease;
},
    _configBack = function _configBack(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }

  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  ease.config = function (overshoot) {
    return _configBack(type, overshoot);
  };

  return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };


_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;

  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});

_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

(function (n, c) {
  var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
  };

  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);

_insertEase("Expo", function (p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});

_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});

_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});

_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }

    var p1 = 1 / steps,
        p2 = steps + (immediateStart ? 0 : 1),
        p3 = immediateStart ? 1 : 0,
        max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];

_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */


var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;

    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }

    this._ts = 1;

    _setDuration(this, +vars.duration, 1, 1);

    this.data = vars.data;

    if (_context) {
      this._ctx = _context;

      _context.data.push(this);
    }

    _tickerActive || _ticker.wake();
  }

  var _proto = Animation.prototype;

  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }

    return this._delay;
  };

  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };

  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }

    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };

  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();

    if (!arguments.length) {
      return this._tTime;
    }

    var parent = this._dp;

    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);

      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }

        parent = parent.parent;
      }

      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }

    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}

    }

    return this;
  };

  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
  };

  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  };

  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value, suppressEvents) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }

    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), suppressEvents !== false);

    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.


    return _recacheAncestors(this);
  };

  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }

    if (this._ps !== value) {
      this._ps = value;

      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();

        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };

  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }

    return this._start;
  };

  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };

  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };

  _proto.revert = function revert(config) {
    if (config === void 0) {
      config = _revertConfig;
    }

    var prevIsReverting = _reverting;
    _reverting = config;

    if (this._initted || this._startAt) {
      this.timeline && this.timeline.revert(config);
      this.totalTime(-0.01, config.suppressEvents);
    }

    this.data !== "nested" && config.kill !== false && this.kill();
    _reverting = prevIsReverting;
    return this;
  };

  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();

    while (animation) {
      time = animation._start + time / (Math.abs(animation._ts) || 1);
      animation = animation._dp;
    }

    return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }

    return this._repeat === -2 ? Infinity : this._repeat;
  };

  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;

      _onUpdateTotalDuration(this);

      return time ? this.time(time) : this;
    }

    return this._rDelay;
  };

  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }

    return this._yoyo;
  };

  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };

  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };

  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };

  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };

  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };

  _proto.resume = function resume() {
    return this.paused(false);
  };

  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }

    return this._rts < 0;
  };

  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };

  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
        start = this._start,
        rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };

  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;

    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }

      return this;
    }

    return vars[type];
  };

  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
          _resolve = function _resolve() {
        var _then = self.then;
        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };

      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };

  _proto.kill = function kill() {
    _interrupt(this);
  };

  return Animation;
}();

_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */


var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);

  function Timeline(vars, position) {
    var _this;

    if (vars === void 0) {
      vars = {};
    }

    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }

  var _proto2 = Timeline.prototype;

  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);

    return this;
  };

  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);

    return this;
  };

  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);

    return this;
  };

  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };

  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };

  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
        // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
    crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }

      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;

      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://gsap.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005 also, this._tTime - prevIteration * cycleDuration - this._dur <= 0 just checks to make sure it wasn't previously in the "repeatDelay" portion

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */


        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : tTime % dur ? dur : tTime; // if the playhead is landing exactly at the end of an iteration, use that totalTime rather than only the duration, otherwise it'll skip the 2nd render since it's effectively at the same time.

          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }

          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;

          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }

          this._lock = 0;

          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


          _propagateYoyoEase(this, isYoyo);
        }
      }

      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }

      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }

      if (!prevTime && time && !suppressEvents && !iteration) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      if (time >= prevTime && totalTime >= 0) {
        child = this._first;

        while (child) {
          next = child._next;

          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;

          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt)); // if reverting, we should always force renders of initted tweens (but remember that .fromTo() or .from() may have a _startAt but not _initted yet). If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      }

      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);

          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto2.add = function add(child, position) {
    var _this2 = this;

    _isNumber(position) || (position = _parsePosition(this, position, child));

    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }

      if (_isString(child)) {
        return this.addLabel(child, position);
      }

      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }

    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }

    if (tweens === void 0) {
      tweens = true;
    }

    if (timelines === void 0) {
      timelines = true;
    }

    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }

    var a = [],
        child = this._first;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }

      child = child._next;
    }

    return a;
  };

  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
        i = animations.length;

    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };

  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }

    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }

    _removeLinkedListItem(this, child);

    if (child === this._recent) {
      this._recent = this._last;
    }

    return _uncache(this);
  };

  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }

    this._forcing = 1;

    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }

    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

    this._forcing = 0;
    return this;
  };

  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };

  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };

  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };

  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);

    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }

      child = child._next;
    }
  };

  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;

    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }

    return this;
  };

  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber(onlyActive),
        // a number is interpreted as a global time. If the animation spans
    children;

    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }

      child = child._next;
    }

    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};

    var tl = this,
        endTime = _parsePosition(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        immediateRender = _vars.immediateRender,
        initted,
        tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();

        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }

        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
      }
    }, vars));

    return immediateRender ? tween.render(0) : tween;
  };

  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };

  _proto2.recent = function recent() {
    return this._recent;
  };

  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };

  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };

  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };

  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }

    var child = this._first,
        labels = this.labels,
        p;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }

      child = child._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return _uncache(this);
  };

  _proto2.invalidate = function invalidate(soft) {
    var child = this._first;
    this._lock = 0;

    while (child) {
      child.invalidate(soft);
      child = child._next;
    }

    return _Animation.prototype.invalidate.call(this, soft);
  };

  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }

    var child = this._first,
        next;

    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }

    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };

  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
        self = this,
        child = self._last,
        prevStart = _bigNum,
        prev,
        start,
        parent;

    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }

    if (self._dirty) {
      parent = self.parent;

      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;

        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }

        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;

          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }

          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }

        child._end > max && child._ts && (max = child._end);
        child = prev;
      }

      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

      self._dirty = 0;
    }

    return self._tDur;
  };

  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

      _lastRenderedFrame = _ticker.frame;
    }

    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }

        child || _ticker.sleep();
      }
    }
  };

  return Timeline;
}(Animation);

_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});

var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }

  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

    start = a[0];
    end = a[1];
  }

  startNums = start.match(_complexStringNumExp) || [];

  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);

    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }

    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }

  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

  pt.fp = funcParam;

  if (_relExp.test(end) || hasRandom) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;

  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (end.charAt(1) === "=") {
      pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);

      if (pt || pt === 0) {
        // to avoid isNaN, like if someone passes in a value like "!= whatever"
        end = pt;
      }
    }
  }

  if (!optional || parsedStart !== end || _forceAllPropTweens) {
    if (!isNaN(parsedStart * end) && end !== "") {
      // fun fact: any number multiplied by "" is evaluated as the number 0!
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }

    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
},
    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }

  var copy = {},
      p;

  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }

  return copy;
},
    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;

  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

      i = plugin._props.length;

      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }

  return plugin;
},
    _overwritingTween,
    //store a reference temporarily so we can avoid overwriting itself.
_forceAllPropTweens,
    _initTween = function _initTween(tween, time, tTime) {
  var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

  if (yoyoEase && tween._yoyo && !tween._repeat) {
    //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }

  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

  if (!tl || keyframes && !vars.stagger) {
    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

    cleanVars = _copyExcluding(vars, _reservedProps);

    if (prevStartAt) {
      prevStartAt._zTime < 0 && prevStartAt.progress(1); // in case it's a lazy startAt that hasn't rendered yet.

      time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
      // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.

      prevStartAt._lazy = 0;
    }

    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent: parent,
        immediateRender: true,
        lazy: !prevStartAt && _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate && function () {
          return _callback(tween, "onUpdate");
        },
        stagger: 0
      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


      tween._startAt._dp = 0; // don't allow it to get put back into root timeline! Like when revert() is called and totalTime() gets set.

      tween._startAt._sat = tween; // used in globalTime(). _sat stands for _startAtTween

      time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

      if (immediateRender) {
        if (dur && time <= 0 && tTime <= 0) {
          // check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
          time && (tween._zTime = time);
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        }
      }
    } else if (runBackwards && dur) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (!prevStartAt) {
        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
          immediateRender: immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})

        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

        _removeFromParent(tween._startAt = Tween.set(targets, p));

        tween._startAt._dp = 0; // don't allow it to get put back into root timeline!

        tween._startAt._sat = tween; // used in globalTime()

        time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
        tween._zTime = time;

        if (!immediateRender) {
          _initTween(tween._startAt, _tinyNum, _tinyNum); //ensures that the initial values are recorded

        } else if (!time) {
          return;
        }
      }
    }

    tween._pt = tween._ptCache = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

      index = fullTargets === targets ? i : fullTargets.indexOf(target);

      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

        plugin._props.forEach(function (name) {
          ptLookup[name] = pt;
        });

        plugin.priority && (hasPriority = 1);
      }

      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }

      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;

        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!


        overwritten = !tween.parent;
        _overwritingTween = 0;
      }

      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }

    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
  }

  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.

  keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
},
    _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
  var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
      pt,
      rootPT,
      lookup,
      i;

  if (!ptCache) {
    ptCache = tween._ptCache[property] = [];
    lookup = tween._ptLookup;
    i = tween._targets.length;

    while (i--) {
      pt = lookup[i][property];

      if (pt && pt.d && pt.d._pt) {
        // it's a plugin, so find the nested PropTween
        pt = pt.d._pt;

        while (pt && pt.p !== property && pt.fp !== property) {
          // "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
          pt = pt._next;
        }
      }

      if (!pt) {
        // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
        // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
        _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.

        tween.vars[property] = "+=0";

        _initTween(tween, time);

        _forceAllPropTweens = 0;
        return skipRecursion ? _warn(property + " not eligible for reset") : 1; // if someone tries to do a quickTo() on a special property like borderRadius which must get split into 4 different properties, that's not eligible for .resetTo().
      }

      ptCache.push(pt);
    }
  }

  i = ptCache.length;

  while (i--) {
    rootPT = ptCache[i];
    pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.

    pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
    pt.c = value - pt.s;
    rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e)); // mainly for CSSPlugin (end value)

    rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b)); // (beginning value)
  }
},
    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;

  if (!propertyAliases) {
    return vars;
  }

  copy = _merge({}, vars);

  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;

      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }

  return copy;
},
    // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut",
      p,
      a;

  if (_isArray(obj)) {
    a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease

    obj.forEach(function (value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
    }
  }
},
    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
},
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    _staggerPropsToSkip = {};

_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
  return _staggerPropsToSkip[name] = 1;
});
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */


var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);

  function Tween(targets, vars, position, skipInherit) {
    var _this3;

    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }

    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        yoyoEase = _this3$vars.yoyoEase,
        parent = vars.parent || _globalTimeline,
        parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;

    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {},
        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
      }); // we need to store the targets because for staggers and keyframes, we end up creating an individual tween for each but function-based values need to know the index and the whole Array of targets.

      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;

      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);

        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }

        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }

          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }

        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      } else if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));

        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0,
            a,
            kf,
            v;

        if (_isArray(keyframes)) {
          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
          tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
        } else {
          copy = {};

          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          }

          for (p in copy) {
            a = copy[p].sort(function (a, b) {
              return a.t - b.t;
            });
            time = 0;

            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }

          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          }); // in case keyframes didn't go to 100%
        }
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);

      _globalTimeline.killTweensOf(parsedTargets);

      _overwritingTween = 0;
    }

    _addToTimeline(parent, _assertThisInitialized(_this3), position);

    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);

    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay) || 0); //in case delay is negative

    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }

  var _proto3 = Tween.prototype;

  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        isNegative = totalTime < 0,
        tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline,
        yoyoEase;

    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
      //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && isNegative) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === _roundPrecise(tTime / cycleDuration)) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        isYoyo = this._yoyo && iteration & 1;

        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);

        if (time === prevTime && !force && this._initted && iteration === prevIteration) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          this._tTime = tTime;
          return this;
        }

        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock && this._time !== cycleDuration && this._initted) {
            // this._time will === cycleDuration when we render at EXACTLY the end of an iteration. Without this condition, it'd often do the repeatRefresh render TWICE (again on the very next tick).
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }

      if (!this._initted) {
        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }

        if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
          // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values. But we also don't want to dump if we're doing a repeatRefresh render!
          return this;
        }

        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._tTime = tTime;
      this._time = time;

      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }

      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }

      if (time && !prevTime && !suppressEvents && !iteration) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      pt = this._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

      if (this._onUpdate && !suppressEvents) {
        isNegative && _rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }

      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto3.targets = function targets() {
    return this._targets;
  };

  _proto3.invalidate = function invalidate(soft) {
    // "soft" gives us a way to clear out everything EXCEPT the recorded pre-"from" portion of from() tweens. Otherwise, for example, if you tween.progress(1).render(0, true true).invalidate(), the "from" values would persist and then on the next render, the from() tweens would initialize and the current value would match the "from" values, thus animate from the same value to the same value (no animation). We tap into this in ScrollTrigger's refresh() where we must push a tween to completion and then back again but honor its init state in case the tween is dependent on another tween further up on the page.
    (!soft || !this.vars.runBackwards) && (this._startAt = 0);
    this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate(soft);
    return _Animation2.prototype.invalidate.call(this, soft);
  };

  _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
    _tickerActive || _ticker.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
    // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
    // if (_isObject(property)) { // performance optimization
    // 	for (p in property) {
    // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
    // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    // 		}
    // 	}
    // } else {

    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
      return this.resetTo(property, value, start, startIsRelative, 1); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    } //}


    _alignPlayhead(this, 0);

    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };

  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }

    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      return this.parent ? _interrupt(this) : this;
    }

    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }

    var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;

    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }

    overwrittenProps = this._op = this._op || [];

    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};

        _forEachName(vars, function (name) {
          return p[name] = 1;
        });

        vars = p;
      }

      vars = _addAliasesToVars(parsedTargets, vars);
    }

    i = parsedTargets.length;

    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];

        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }

        for (p in props) {
          pt = curLookup && curLookup[p];

          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }

            delete curLookup[p];
          }

          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }

    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };

  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };

  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };

  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    }); // we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };

  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };

  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };

  return Tween;
}(Animation);

_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.


_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
        params = _slice.call(arguments, 0);

    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */


var _setterPlain = function _setterPlain(target, property, value) {
  return target[property] = value;
},
    _setterFunc = function _setterFunc(target, property, value) {
  return target[property](value);
},
    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
  return target[property](data.fp, value);
},
    _setterAttribute = function _setterAttribute(target, property, value) {
  return target.setAttribute(property, value);
},
    _getSetter = function _getSetter(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
},
    _renderPlain = function _renderPlain(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
},
    _renderBoolean = function _renderBoolean(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
},
    _renderComplexString = function _renderComplexString(ratio, data) {
  var pt = data._pt,
      s = "";

  if (!ratio && data.b) {
    //b = beginning string
    s = data.b;
  } else if (ratio === 1 && data.e) {
    //e = ending string
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

      pt = pt._next;
    }

    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
  }

  data.set(data.t, data.p, s, data);
},
    _renderPropTweens = function _renderPropTweens(ratio, data) {
  var pt = data._pt;

  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
},
    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
  var pt = this._pt,
      next;

  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
},
    _killPropTweensOf = function _killPropTweensOf(property) {
  var pt = this._pt,
      hasNonDependentRemaining,
      next;

  while (pt) {
    next = pt._next;

    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }

    pt = next;
  }

  return !hasNonDependentRemaining;
},
    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
},
    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
  var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

  while (pt) {
    next = pt._next;
    pt2 = first;

    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }

    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }

    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }

    pt = next;
  }

  parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;

    if (next) {
      next._prev = this;
    }
  }

  var _proto4 = PropTween.prototype;

  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };

  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});

_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;

var _media = [],
    _listeners = {},
    _emptyArray = [],
    _lastMediaTime = 0,
    _contextID = 0,
    _dispatch = function _dispatch(type) {
  return (_listeners[type] || _emptyArray).map(function (f) {
    return f();
  });
},
    _onMediaChange = function _onMediaChange() {
  var time = Date.now(),
      matches = [];

  if (time - _lastMediaTime > 2) {
    _dispatch("matchMediaInit");

    _media.forEach(function (c) {
      var queries = c.queries,
          conditions = c.conditions,
          match,
          p,
          anyMatch,
          toggled;

      for (p in queries) {
        match = _win.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.

        match && (anyMatch = 1);

        if (match !== conditions[p]) {
          conditions[p] = match;
          toggled = 1;
        }
      }

      if (toggled) {
        c.revert();
        anyMatch && matches.push(c);
      }
    });

    _dispatch("matchMediaRevert");

    matches.forEach(function (c) {
      return c.onMatch(c, function (func) {
        return c.add(null, func);
      });
    });
    _lastMediaTime = time;

    _dispatch("matchMedia");
  }
};

var Context = /*#__PURE__*/function () {
  function Context(func, scope) {
    this.selector = scope && selector(scope);
    this.data = [];
    this._r = []; // returned/cleanup functions

    this.isReverted = false;
    this.id = _contextID++; // to work around issues that frameworks like Vue cause by making things into Proxies which make it impossible to do something like _media.indexOf(this) because "this" would no longer refer to the Context instance itself - it'd refer to a Proxy! We needed a way to identify the context uniquely

    func && this.add(func);
  }

  var _proto5 = Context.prototype;

  _proto5.add = function add(name, func, scope) {
    // possible future addition if we need the ability to add() an animation to a context and for whatever reason cannot create that animation inside of a context.add(() => {...}) function.
    // if (name && _isFunction(name.revert)) {
    // 	this.data.push(name);
    // 	return (name._ctx = this);
    // }
    if (_isFunction(name)) {
      scope = func;
      func = name;
      name = _isFunction;
    }

    var self = this,
        f = function f() {
      var prev = _context,
          prevSelector = self.selector,
          result;
      prev && prev !== self && prev.data.push(self);
      scope && (self.selector = selector(scope));
      _context = self;
      result = func.apply(self, arguments);
      _isFunction(result) && self._r.push(result);
      _context = prev;
      self.selector = prevSelector;
      self.isReverted = false;
      return result;
    };

    self.last = f;
    return name === _isFunction ? f(self, function (func) {
      return self.add(null, func);
    }) : name ? self[name] = f : f;
  };

  _proto5.ignore = function ignore(func) {
    var prev = _context;
    _context = null;
    func(this);
    _context = prev;
  };

  _proto5.getTweens = function getTweens() {
    var a = [];
    this.data.forEach(function (e) {
      return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
    });
    return a;
  };

  _proto5.clear = function clear() {
    this._r.length = this.data.length = 0;
  };

  _proto5.kill = function kill(revert, matchMedia) {
    var _this4 = this;

    if (revert) {
      (function () {
        var tweens = _this4.getTweens(),
            i = _this4.data.length,
            t;

        while (i--) {
          // Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
          t = _this4.data[i];

          if (t.data === "isFlip") {
            t.revert();
            t.getChildren(true, true, false).forEach(function (tween) {
              return tweens.splice(tweens.indexOf(tween), 1);
            });
          }
        } // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort


        tweens.map(function (t) {
          return {
            g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -Infinity,
            t: t
          };
        }).sort(function (a, b) {
          return b.g - a.g || -Infinity;
        }).forEach(function (o) {
          return o.t.revert(revert);
        }); // note: all of the _startAt tweens should be reverted in reverse order that they were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.

        i = _this4.data.length;

        while (i--) {
          // make sure we loop backwards so that, for example, SplitTexts that were created later on the same element get reverted first
          t = _this4.data[i];

          if (t instanceof Timeline) {
            if (t.data !== "nested") {
              t.scrollTrigger && t.scrollTrigger.revert();
              t.kill(); // don't revert() the timeline because that's duplicating efforts since we already reverted all the tweens
            }
          } else {
            !(t instanceof Tween) && t.revert && t.revert(revert);
          }
        }

        _this4._r.forEach(function (f) {
          return f(revert, _this4);
        });

        _this4.isReverted = true;
      })();
    } else {
      this.data.forEach(function (e) {
        return e.kill && e.kill();
      });
    }

    this.clear();

    if (matchMedia) {
      var i = _media.length;

      while (i--) {
        // previously, we checked _media.indexOf(this), but some frameworks like Vue enforce Proxy objects that make it impossible to get the proper result that way, so we must use a unique ID number instead.
        _media[i].id === this.id && _media.splice(i, 1);
      }
    }
  };

  _proto5.revert = function revert(config) {
    this.kill(config || {});
  };

  return Context;
}();

var MatchMedia = /*#__PURE__*/function () {
  function MatchMedia(scope) {
    this.contexts = [];
    this.scope = scope;
    _context && _context.data.push(this);
  }

  var _proto6 = MatchMedia.prototype;

  _proto6.add = function add(conditions, func, scope) {
    _isObject(conditions) || (conditions = {
      matches: conditions
    });
    var context = new Context(0, scope || this.scope),
        cond = context.conditions = {},
        mq,
        p,
        active;
    _context && !context.selector && (context.selector = _context.selector); // in case a context is created inside a context. Like a gsap.matchMedia() that's inside a scoped gsap.context()

    this.contexts.push(context);
    func = context.add("onMatch", func);
    context.queries = conditions;

    for (p in conditions) {
      if (p === "all") {
        active = 1;
      } else {
        mq = _win.matchMedia(conditions[p]);

        if (mq) {
          _media.indexOf(context) < 0 && _media.push(context);
          (cond[p] = mq.matches) && (active = 1);
          mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
        }
      }
    }

    active && func(context, function (f) {
      return context.add(null, f);
    });
    return this;
  } // refresh() {
  // 	let time = _lastMediaTime,
  // 		media = _media;
  // 	_lastMediaTime = -1;
  // 	_media = this.contexts;
  // 	_onMediaChange();
  // 	_lastMediaTime = time;
  // 	_media = media;
  // }
  ;

  _proto6.revert = function revert(config) {
    this.kill(config || {});
  };

  _proto6.kill = function kill(revert) {
    this.contexts.forEach(function (c) {
      return c.kill(revert, true);
    });
  };

  return MatchMedia;
}();
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */


var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
        format = unit ? _passThrough : _numericIfPossible;

    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);

    if (target.length > 1) {
      var setters = target.map(function (t) {
        return gsap.quickSetter(t, property, unit);
      }),
          l = setters.length;
      return function (value) {
        var i = l;

        while (i--) {
          setters[i](value);
        }
      };
    }

    target = target[0] || {};

    var Plugin = _plugins[property],
        cache = _getCache(target),
        p = cache.harness && (cache.harness.aliases || {})[property] || property,
        // in case it's an alias, like "rotate" for "rotation".
    setter = Plugin ? function (value) {
      var p = new Plugin();
      _quickTween._pt = 0;
      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p.render(1, p);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);

    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target, property, vars) {
    var _merge2;

    var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})),
        func = function func(value, start, startIsRelative) {
      return tween.resetTo(property, value, start, startIsRelative);
    };

    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
        effect = _ref3.effect,
        plugins = _ref3.plugins,
        defaults = _ref3.defaults,
        extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });

    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };

    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }

    var tl = new Timeline(vars),
        child,
        next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

    _globalTimeline.remove(tl);

    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;

    while (child) {
      next = child._next;

      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }

      child = next;
    }

    _addToTimeline(_globalTimeline, tl, 0);

    return tl;
  },
  context: function context(func, scope) {
    return func ? new Context(func, scope) : _context;
  },
  matchMedia: function matchMedia(scope) {
    return new MatchMedia(scope);
  },
  matchMediaRefresh: function matchMediaRefresh() {
    return _media.forEach(function (c) {
      var cond = c.conditions,
          found,
          p;

      for (p in cond) {
        if (cond[p]) {
          cond[p] = false;
          found = 1;
        }
      }

      found && c.revert();
    }) || _onMediaChange();
  },
  addEventListener: function addEventListener(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  },
  removeEventListener: function removeEventListener(type, callback) {
    var a = _listeners[type],
        i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem,
    reverting: function reverting() {
      return _reverting;
    },
    context: function context(toAdd) {
      if (toAdd && _context) {
        _context.data.push(toAdd);

        toAdd._ctx = _context;
      }

      return _context;
    },
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};

_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});

_ticker.add(Timeline.updateRoot);

_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
  var pt = plugin._pt;

  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }

  return pt;
},
    _addModifiers = function _addModifiers(tween, modifiers) {
  var targets = tween._targets,
      p,
      i,
      pt;

  for (p in modifiers) {
    i = targets.length;

    while (i--) {
      pt = tween._ptLookup[i][p];

      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          // is a plugin
          pt = _getPluginPropTween(pt, p);
        }

        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
},
    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
  return {
    name: name,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init(target, vars, tween) {
      tween._onInit = function (tween) {
        var temp, p;

        if (_isString(vars)) {
          temp = {};

          _forEachName(vars, function (name) {
            return temp[name] = 1;
          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


          vars = temp;
        }

        if (modifier) {
          temp = {};

          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }

          vars = temp;
        }

        _addModifiers(tween, vars);
      };
    }
  };
}; //register core plugins


var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt, v;
    this.tween = tween;

    for (p in vars) {
      v = target.getAttribute(p) || "";
      pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
      pt.op = p;
      pt.b = v; // record the beginning value so we can revert()

      this._props.push(p);
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt;

    while (pt) {
      _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)

      pt = pt._next;
    }
  }
}, {
  name: "endArray",
  init: function init(target, value) {
    var i = value.length;

    while (i--) {
      this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap.version = "3.12.5";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0,
    Power1 = _easeMap.Power1,
    Power2 = _easeMap.Power2,
    Power3 = _easeMap.Power3,
    Power4 = _easeMap.Power4,
    Linear = _easeMap.Linear,
    Quad = _easeMap.Quad,
    Cubic = _easeMap.Cubic,
    Quart = _easeMap.Quart,
    Quint = _easeMap.Quint,
    Strong = _easeMap.Strong,
    Elastic = _easeMap.Elastic,
    Back = _easeMap.Back,
    SteppedEase = _easeMap.SteppedEase,
    Bounce = _easeMap.Bounce,
    Sine = _easeMap.Sine,
    Expo = _easeMap.Expo,
    Circ = _easeMap.Circ;

 //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.



/***/ }),

/***/ "./node_modules/gsap/index.js":
/*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Back: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Back),
/* harmony export */   Bounce: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Bounce),
/* harmony export */   CSSPlugin: () => (/* reexport safe */ _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin),
/* harmony export */   Circ: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Circ),
/* harmony export */   Cubic: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Cubic),
/* harmony export */   Elastic: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Elastic),
/* harmony export */   Expo: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Expo),
/* harmony export */   Linear: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Linear),
/* harmony export */   Power0: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power0),
/* harmony export */   Power1: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power1),
/* harmony export */   Power2: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power2),
/* harmony export */   Power3: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power3),
/* harmony export */   Power4: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power4),
/* harmony export */   Quad: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quad),
/* harmony export */   Quart: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quart),
/* harmony export */   Quint: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quint),
/* harmony export */   Sine: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Sine),
/* harmony export */   SteppedEase: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.SteppedEase),
/* harmony export */   Strong: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Strong),
/* harmony export */   TimelineLite: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineLite),
/* harmony export */   TimelineMax: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineMax),
/* harmony export */   TweenLite: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TweenLite),
/* harmony export */   TweenMax: () => (/* binding */ TweenMaxWithCSS),
/* harmony export */   "default": () => (/* binding */ gsapWithCSS),
/* harmony export */   gsap: () => (/* binding */ gsapWithCSS)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");


var gsapWithCSS = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(_CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin) || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap,
    // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;


/***/ }),

/***/ "./node_modules/js-year-calendar/dist/js-year-calendar.js":
/*!****************************************************************!*\
  !*** ./node_modules/js-year-calendar/dist/js-year-calendar.js ***!
  \****************************************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  /* =========================================================
   * JS year calendar v1.0.0
   * Repo: https://github.com/year-calendar/js-year-calendar
   * =========================================================
   * Created by Paul David-Sivelle
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * ========================================================= */
  // NodeList forEach() polyfill
  if (typeof NodeList !== "undefined" && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;

      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  } // Element closest() polyfill


  if (typeof Element !== "undefined" && !Element.prototype.matches) {
    var prototype = Element.prototype;
    Element.prototype.matches = prototype.msMatchesSelector || prototype.webkitMatchesSelector;
  }

  if (typeof Element !== "undefined" && !Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;
      if (!document.documentElement.contains(el)) return null;

      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType == 1);

      return null;
    };
  }
  /**
   * Calendar instance.
   */


  var Calendar = /*#__PURE__*/function () {
    /**
     * Fired when a day is clicked.
     * @event
     * @example
     * ```
     * 
     * document.querySelector('.calendar').addEventListener('clickDay', function(e) {
     *   console.log("Click on day: " + e.date + " (" + e.events.length + " events)");
     * })
     * ```
     */

    /**
     * Fired when a day is right clicked.
     * @event
     * @example
     * ```
     * 
     * document.querySelector('.calendar').addEventListener('clickDay', function(e) {
     *   console.log("Right click on day: " + e.date + " (" + e.events.length + " events)");
     * })
     * ```
     */

    /**
     * Fired when the mouse enter in a day.
     * @event
     * @example
     * ```
     * 
     * document.querySelector('.calendar').addEventListener('mouseOnDay', function(e) {
     *   console.log("Mouse enter in a day: " + e.date + " (" + e.events.length + " events)");
     * })
     * ```
     */

    /**
     * Fired when the mouse leave a day.
     * @event
     * @example
     * ```
     * 
     * document.querySelector('.calendar').addEventListener('mouseOutDay', function(e) {
     *   console.log("Mouse leave a day: " + e.date + " (" + e.events.length + " events)");
     * })
     * ```
     */

    /**
     * Fired when the calendar rendering is ended.
     * @event
     * @example
     * ```
     * 
     * document.querySelector('.calendar').addEventListener('renderEnd', function(e) {
     *   console.log("Render end for year: " + e.currentYear);
     * })
     * ```
     */

    /**
     * Fired when a date range is selected.
     * 
     * Don't forget to enable the `enableRangeSelection` option to be able to use the range selection functionality.
     * @event
     * @example
     * ```
     * 
     * document.querySelector('.calendar').addEventListener('selectRange', function(e) {
     *   console.log("Select the range: " + e.startDate + " - " + e.endDate);
     * })
     * ```
     */

    /**
     * Triggered after the changing the current year.
     * Works only if the calendar is used in a full year mode. Otherwise, use `periodChanged` event.
     * @event
     * @example
     * ```
     * 
     * document.querySelector('.calendar').addEventListener('yearChanged', function(e) {
     *   console.log("New year selected: " + e.currentYear);
     * })
     * ```
     */

    /**
     * Triggered after the changing the visible period.
     * @event
     * @example
     * ```
     * 
     * document.querySelector('.calendar').addEventListener('periodChanged', function(e) {
     *   console.log(`New period selected: ${e.startDate} ${e.endDate}`);
     * })
     * ```
     */

    /**
     * Create a new calendar.
     * @param element The element (or the selector to an element) in which the calendar should be created.
     * @param options [Optional] The options used to customize the calendar
     */
    function Calendar(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, Calendar);

      _defineProperty(this, "element", void 0);

      _defineProperty(this, "options", void 0);

      _defineProperty(this, "_startDate", void 0);

      _defineProperty(this, "_dataSource", void 0);

      _defineProperty(this, "_mouseDown", void 0);

      _defineProperty(this, "_rangeStart", void 0);

      _defineProperty(this, "_rangeEnd", void 0);

      _defineProperty(this, "_responsiveInterval", void 0);

      _defineProperty(this, "_nbCols", void 0);

      _defineProperty(this, "clickDay", void 0);

      _defineProperty(this, "dayContextMenu", void 0);

      _defineProperty(this, "mouseOnDay", void 0);

      _defineProperty(this, "mouseOutDay", void 0);

      _defineProperty(this, "renderEnd", void 0);

      _defineProperty(this, "selectRange", void 0);

      _defineProperty(this, "yearChanged", void 0);

      _defineProperty(this, "periodChanged", void 0);

      if (element instanceof HTMLElement) {
        this.element = element;
      } else if (typeof element === "string") {
        this.element = document.querySelector(element);
      } else {
        throw new Error("The element parameter should be a DOM node or a selector");
      }

      this.element.classList.add('calendar');

      this._initializeEvents(options);

      this._initializeOptions(options);

      var startYear = new Date().getFullYear();
      var startMonth = 0;

      if (this.options.startDate) {
        startYear = this.options.startDate.getFullYear();
        startMonth = this.options.startDate.getMonth();
      } else if (this.options.startYear) {
        startYear = this.options.startYear;
      }

      this.setStartDate(new Date(startYear, startMonth, 1));
    }

    _createClass(Calendar, [{
      key: "_initializeOptions",
      value: function _initializeOptions(opt) {
        if (opt == null) {
          opt = {};
        }

        this.options = {
          startYear: !isNaN(parseInt(opt.startYear)) ? parseInt(opt.startYear) : null,
          startDate: opt.startDate instanceof Date ? opt.startDate : null,
          numberMonthsDisplayed: !isNaN(parseInt(opt.numberMonthsDisplayed)) && opt.numberMonthsDisplayed > 0 && opt.numberMonthsDisplayed <= 12 ? parseInt(opt.numberMonthsDisplayed) : 12,
          minDate: opt.minDate instanceof Date ? opt.minDate : null,
          maxDate: opt.maxDate instanceof Date ? opt.maxDate : null,
          language: opt.language != null && Calendar.locales[opt.language] != null ? opt.language : 'en',
          allowOverlap: opt.allowOverlap != null ? opt.allowOverlap : true,
          displayWeekNumber: opt.displayWeekNumber != null ? opt.displayWeekNumber : false,
          displayDisabledDataSource: opt.displayDisabledDataSource != null ? opt.displayDisabledDataSource : false,
          displayHeader: opt.displayHeader != null ? opt.displayHeader : true,
          alwaysHalfDay: opt.alwaysHalfDay != null ? opt.alwaysHalfDay : false,
          enableRangeSelection: opt.enableRangeSelection != null ? opt.enableRangeSelection : false,
          disabledDays: opt.disabledDays instanceof Array ? opt.disabledDays : [],
          disabledWeekDays: opt.disabledWeekDays instanceof Array ? opt.disabledWeekDays : [],
          hiddenWeekDays: opt.hiddenWeekDays instanceof Array ? opt.hiddenWeekDays : [],
          roundRangeLimits: opt.roundRangeLimits != null ? opt.roundRangeLimits : false,
          dataSource: opt.dataSource instanceof Array || typeof opt.dataSource === "function" ? opt.dataSource : [],
          style: opt.style == 'background' || opt.style == 'border' || opt.style == 'custom' ? opt.style : 'border',
          enableContextMenu: opt.enableContextMenu != null ? opt.enableContextMenu : false,
          contextMenuItems: opt.contextMenuItems instanceof Array ? opt.contextMenuItems : [],
          customDayRenderer: typeof opt.customDayRenderer === "function" ? opt.customDayRenderer : null,
          customDataSourceRenderer: typeof opt.customDataSourceRenderer === "function" ? opt.customDataSourceRenderer : null,
          weekStart: !isNaN(parseInt(opt.weekStart)) ? parseInt(opt.weekStart) : null,
          loadingTemplate: typeof opt.loadingTemplate === "string" || opt.loadingTemplate instanceof HTMLElement ? opt.loadingTemplate : null
        };

        if (this.options.dataSource instanceof Array) {
          this._dataSource = this.options.dataSource;

          this._initializeDatasourceColors();
        }
      }
    }, {
      key: "_initializeEvents",
      value: function _initializeEvents(opt) {
        if (opt == null) {
          opt = [];
        }

        if (opt.yearChanged) {
          this.element.addEventListener('yearChanged', opt.yearChanged);
        }

        if (opt.periodChanged) {
          this.element.addEventListener('periodChanged', opt.periodChanged);
        }

        if (opt.renderEnd) {
          this.element.addEventListener('renderEnd', opt.renderEnd);
        }

        if (opt.clickDay) {
          this.element.addEventListener('clickDay', opt.clickDay);
        }

        if (opt.dayContextMenu) {
          this.element.addEventListener('dayContextMenu', opt.dayContextMenu);
        }

        if (opt.selectRange) {
          this.element.addEventListener('selectRange', opt.selectRange);
        }

        if (opt.mouseOnDay) {
          this.element.addEventListener('mouseOnDay', opt.mouseOnDay);
        }

        if (opt.mouseOutDay) {
          this.element.addEventListener('mouseOutDay', opt.mouseOutDay);
        }
      }
    }, {
      key: "_fetchDataSource",
      value: function _fetchDataSource(callback) {
        if (typeof this.options.dataSource === "function") {
          var getDataSource = this.options.dataSource;
          var currentPeriod = this.getCurrentPeriod();
          var fetchParameters = {
            year: currentPeriod.startDate.getFullYear(),
            startDate: currentPeriod.startDate,
            endDate: currentPeriod.endDate
          };

          if (getDataSource.length == 2) {
            // 2 parameters, means callback method
            getDataSource(fetchParameters, callback);
          } else {
            // 1 parameter, means synchronous or promise method
            var result = getDataSource(fetchParameters);

            if (result instanceof Array) {
              callback(result);
            }

            if (result && result.then) {
              result.then(callback);
            }
          }
        } else {
          callback(this.options.dataSource);
        }
      }
    }, {
      key: "_initializeDatasourceColors",
      value: function _initializeDatasourceColors() {
        for (var i = 0; i < this._dataSource.length; i++) {
          if (this._dataSource[i].color == null) {
            this._dataSource[i].color = Calendar.colors[i % Calendar.colors.length];
          }
        }
      }
      /**
          * Renders the calendar.
          */

    }, {
      key: "render",
      value: function render() {
        var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        // Clear the calendar (faster method)
        while (this.element.firstChild) {
          this.element.removeChild(this.element.firstChild);
        }

        if (this.options.displayHeader) {
          this._renderHeader();
        }

        if (isLoading) {
          this._renderLoading();
        } else {
          this._renderBody();

          this._renderDataSource();

          this._applyEvents(); // Fade animation


          var months = this.element.querySelector('.months-container');
          months.style.opacity = '0';
          months.style.display = 'flex';
          months.style.transition = 'opacity 0.5s';
          setTimeout(function () {
            months.style.opacity = '1';
            setTimeout(function () {
              return months.style.transition = '';
            }, 500);
          }, 0);
          var currentPeriod = this.getCurrentPeriod();

          this._triggerEvent('renderEnd', {
            currentYear: currentPeriod.startDate.getFullYear(),
            startDate: currentPeriod.startDate,
            endDate: currentPeriod.endDate
          });
        }
      }
    }, {
      key: "_renderHeader",
      value: function _renderHeader() {
        var header = document.createElement('div');
        header.classList.add('calendar-header');
        var headerTable = document.createElement('table');
        var period = this.getCurrentPeriod(); // Left arrow

        var prevDiv = document.createElement('th');
        prevDiv.classList.add('prev');

        if (this.options.minDate != null && this.options.minDate >= period.startDate) {
          prevDiv.classList.add('disabled');
        }

        var prevIcon = document.createElement('span');
        prevIcon.innerHTML = "&lsaquo;";
        prevDiv.appendChild(prevIcon);
        headerTable.appendChild(prevDiv);

        if (this._isFullYearMode()) {
          // Year N-2
          var prev2YearDiv = document.createElement('th');
          prev2YearDiv.classList.add('year-title');
          prev2YearDiv.classList.add('year-neighbor2');
          prev2YearDiv.textContent = (this._startDate.getFullYear() - 2).toString();

          if (this.options.minDate != null && this.options.minDate > new Date(this._startDate.getFullYear() - 2, 11, 31)) {
            prev2YearDiv.classList.add('disabled');
          }

          headerTable.appendChild(prev2YearDiv); // Year N-1

          var prevYearDiv = document.createElement('th');
          prevYearDiv.classList.add('year-title');
          prevYearDiv.classList.add('year-neighbor');
          prevYearDiv.textContent = (this._startDate.getFullYear() - 1).toString();

          if (this.options.minDate != null && this.options.minDate > new Date(this._startDate.getFullYear() - 1, 11, 31)) {
            prevYearDiv.classList.add('disabled');
          }

          headerTable.appendChild(prevYearDiv);
        } // Current year


        var yearDiv = document.createElement('th');
        yearDiv.classList.add('year-title');

        if (this._isFullYearMode()) {
          yearDiv.textContent = this._startDate.getFullYear().toString();
        } else if (this.options.numberMonthsDisplayed == 12) {
          yearDiv.textContent = "".concat(period.startDate.getFullYear(), " - ").concat(period.endDate.getFullYear());
        } else if (this.options.numberMonthsDisplayed > 1) {
          yearDiv.textContent = "".concat(Calendar.locales[this.options.language].months[period.startDate.getMonth()], " ").concat(period.startDate.getFullYear(), " - ").concat(Calendar.locales[this.options.language].months[period.endDate.getMonth()], " ").concat(period.endDate.getFullYear());
        } else {
          yearDiv.textContent = "".concat(Calendar.locales[this.options.language].months[period.startDate.getMonth()], " ").concat(period.startDate.getFullYear());
        }

        headerTable.appendChild(yearDiv);

        if (this._isFullYearMode()) {
          // Year N+1
          var nextYearDiv = document.createElement('th');
          nextYearDiv.classList.add('year-title');
          nextYearDiv.classList.add('year-neighbor');
          nextYearDiv.textContent = (this._startDate.getFullYear() + 1).toString();

          if (this.options.maxDate != null && this.options.maxDate < new Date(this._startDate.getFullYear() + 1, 0, 1)) {
            nextYearDiv.classList.add('disabled');
          }

          headerTable.appendChild(nextYearDiv); // Year N+2

          var next2YearDiv = document.createElement('th');
          next2YearDiv.classList.add('year-title');
          next2YearDiv.classList.add('year-neighbor2');
          next2YearDiv.textContent = (this._startDate.getFullYear() + 2).toString();

          if (this.options.maxDate != null && this.options.maxDate < new Date(this._startDate.getFullYear() + 2, 0, 1)) {
            next2YearDiv.classList.add('disabled');
          }

          headerTable.appendChild(next2YearDiv);
        } // Right arrow


        var nextDiv = document.createElement('th');
        nextDiv.classList.add('next');

        if (this.options.maxDate != null && this.options.maxDate <= period.endDate) {
          nextDiv.classList.add('disabled');
        }

        var nextIcon = document.createElement('span');
        nextIcon.innerHTML = "&rsaquo;";
        nextDiv.appendChild(nextIcon);
        headerTable.appendChild(nextDiv);
        header.appendChild(headerTable);
        this.element.appendChild(header);
      }
    }, {
      key: "_renderBody",
      value: function _renderBody() {
        var monthsDiv = document.createElement('div');
        monthsDiv.classList.add('months-container');
        var monthStartDate = new Date(this._startDate.getTime());

        for (var m = 0; m < this.options.numberMonthsDisplayed; m++) {
          /* Container */
          var monthDiv = document.createElement('div');
          monthDiv.classList.add('month-container');
          monthDiv.dataset.monthId = m.toString();

          if (this._nbCols) {
            monthDiv.classList.add("month-".concat(this._nbCols));
          }

          var table = document.createElement('table');
          table.classList.add('month');
          /* Month header */

          var thead = document.createElement('thead');
          var titleRow = document.createElement('tr');
          var titleCell = document.createElement('th');
          titleCell.classList.add('month-title');
          titleCell.setAttribute('colspan', this.options.displayWeekNumber ? '8' : '7');
          titleCell.textContent = Calendar.locales[this.options.language].months[monthStartDate.getMonth()];
          titleRow.appendChild(titleCell);
          thead.appendChild(titleRow);
          var headerRow = document.createElement('tr');

          if (this.options.displayWeekNumber) {
            var weekNumberCell = document.createElement('th');
            weekNumberCell.classList.add('week-number');
            weekNumberCell.textContent = Calendar.locales[this.options.language].weekShort;
            headerRow.appendChild(weekNumberCell);
          }

          var weekStart = this.getWeekStart();
          var d = weekStart;

          do {
            var headerCell = document.createElement('th');
            headerCell.classList.add('day-header');
            headerCell.textContent = Calendar.locales[this.options.language].daysMin[d];

            if (this._isHidden(d)) {
              headerCell.classList.add('hidden');
            }

            headerRow.appendChild(headerCell);
            d++;
            if (d >= 7) d = 0;
          } while (d != weekStart);

          thead.appendChild(headerRow);
          table.appendChild(thead);
          /* Days */

          var currentDate = new Date(monthStartDate.getTime());
          var lastDate = new Date(monthStartDate.getFullYear(), monthStartDate.getMonth() + 1, 0);

          while (currentDate.getDay() != weekStart) {
            currentDate.setDate(currentDate.getDate() - 1);
          }

          while (currentDate <= lastDate) {
            var row = document.createElement('tr');

            if (this.options.displayWeekNumber) {
              var weekNumberCell = document.createElement('td');
              var currentThursday = new Date(currentDate.getTime()); // Week number is computed based on the thursday

              currentThursday.setDate(currentThursday.getDate() - weekStart + 4);
              weekNumberCell.classList.add('week-number');
              weekNumberCell.textContent = this.getWeekNumber(currentThursday).toString();
              row.appendChild(weekNumberCell);
            }

            do {
              var cell = document.createElement('td');
              cell.classList.add('day');

              if (this._isHidden(currentDate.getDay())) {
                cell.classList.add('hidden');
              }

              if (currentDate < monthStartDate) {
                cell.classList.add('old');
              } else if (currentDate > lastDate) {
                cell.classList.add('new');
              } else {
                if (this._isDisabled(currentDate)) {
                  cell.classList.add('disabled');
                }

                var cellContent = document.createElement('div');
                cellContent.classList.add('day-content');
                cellContent.textContent = currentDate.getDate().toString();
                cell.appendChild(cellContent);

                if (this.options.customDayRenderer) {
                  this.options.customDayRenderer(cellContent, currentDate);
                }
              }

              row.appendChild(cell);
              currentDate.setDate(currentDate.getDate() + 1);
            } while (currentDate.getDay() != weekStart);

            table.appendChild(row);
          }

          monthDiv.appendChild(table);
          monthsDiv.appendChild(monthDiv);
          monthStartDate.setMonth(monthStartDate.getMonth() + 1);
        }

        this.element.appendChild(monthsDiv);
      }
    }, {
      key: "_renderLoading",
      value: function _renderLoading() {
        var container = document.createElement('div');
        container.classList.add('calendar-loading-container');
        container.style.minHeight = this._nbCols * 200 + 'px';
        var loading = document.createElement('div');
        loading.classList.add('calendar-loading');

        if (this.options.loadingTemplate) {
          if (typeof this.options.loadingTemplate === "string") {
            loading.innerHTML = this.options.loadingTemplate;
          } else if (this.options.loadingTemplate instanceof HTMLElement) {
            loading.appendChild(this.options.loadingTemplate);
          }
        } else {
          var spinner = document.createElement('div');
          spinner.classList.add('calendar-spinner');

          for (var i = 1; i <= 3; i++) {
            var bounce = document.createElement('div');
            bounce.classList.add("bounce".concat(i));
            spinner.appendChild(bounce);
          }

          loading.appendChild(spinner);
        }

        container.appendChild(loading);
        this.element.appendChild(container);
      }
    }, {
      key: "_renderDataSource",
      value: function _renderDataSource() {
        var _this = this;

        if (this._dataSource != null && this._dataSource.length > 0) {
          this.element.querySelectorAll('.month-container').forEach(function (month) {
            var monthId = parseInt(month.dataset.monthId);

            var currentYear = _this._startDate.getFullYear();

            var currentMonth = _this._startDate.getMonth() + monthId;
            var firstDate = new Date(currentYear, currentMonth, 1);
            var lastDate = new Date(currentYear, currentMonth + 1, 1);

            if ((_this.options.minDate == null || lastDate > _this.options.minDate) && (_this.options.maxDate == null || firstDate <= _this.options.maxDate)) {
              var monthData = [];

              for (var i = 0; i < _this._dataSource.length; i++) {
                if (!(_this._dataSource[i].startDate >= lastDate) || _this._dataSource[i].endDate < firstDate) {
                  monthData.push(_this._dataSource[i]);
                }
              }

              if (monthData.length > 0) {
                month.querySelectorAll('.day-content').forEach(function (day) {
                  var currentDate = new Date(currentYear, currentMonth, parseInt(day.textContent));
                  var nextDate = new Date(currentYear, currentMonth, currentDate.getDate() + 1);
                  var dayData = [];

                  if ((_this.options.minDate == null || currentDate >= _this.options.minDate) && (_this.options.maxDate == null || currentDate <= _this.options.maxDate)) {
                    for (var i = 0; i < monthData.length; i++) {
                      if (monthData[i].startDate < nextDate && monthData[i].endDate >= currentDate) {
                        dayData.push(monthData[i]);
                      }
                    }

                    if (dayData.length > 0 && (_this.options.displayDisabledDataSource || !_this._isDisabled(currentDate))) {
                      _this._renderDataSourceDay(day, currentDate, dayData);
                    }
                  }
                });
              }
            }
          });
        }
      }
    }, {
      key: "_renderDataSourceDay",
      value: function _renderDataSourceDay(elt, currentDate, events) {
        var parent = elt.parentElement;

        switch (this.options.style) {
          case 'border':
            var weight = 0;

            if (events.length == 1) {
              weight = 4;
            } else if (events.length <= 3) {
              weight = 2;
            } else {
              parent.style.boxShadow = 'inset 0 -4px 0 0 black';
            }

            if (weight > 0) {
              var boxShadow = '';

              for (var i = 0; i < events.length; i++) {
                if (boxShadow != '') {
                  boxShadow += ",";
                }

                boxShadow += "inset 0 -".concat((i + 1) * weight, "px 0 0 ").concat(events[i].color);
              }

              parent.style.boxShadow = boxShadow;
            }

            break;

          case 'background':
            parent.style.backgroundColor = events[events.length - 1].color;
            var currentTime = currentDate.getTime();

            if (events[events.length - 1].startDate.getTime() == currentTime) {
              parent.classList.add('day-start');

              if (events[events.length - 1].startHalfDay || this.options.alwaysHalfDay) {
                parent.classList.add('day-half'); // Find color for other half

                var otherColor = 'transparent';

                for (var i = events.length - 2; i >= 0; i--) {
                  if (events[i].startDate.getTime() != currentTime || !events[i].startHalfDay && !this.options.alwaysHalfDay) {
                    otherColor = events[i].color;
                    break;
                  }
                }

                parent.style.background = "linear-gradient(-45deg, ".concat(events[events.length - 1].color, ", ").concat(events[events.length - 1].color, " 49%, ").concat(otherColor, " 51%, ").concat(otherColor, ")");
              } else if (this.options.roundRangeLimits) {
                parent.classList.add('round-left');
              }
            } else if (events[events.length - 1].endDate.getTime() == currentTime) {
              parent.classList.add('day-end');

              if (events[events.length - 1].endHalfDay || this.options.alwaysHalfDay) {
                parent.classList.add('day-half'); // Find color for other half

                var otherColor = 'transparent';

                for (var i = events.length - 2; i >= 0; i--) {
                  if (events[i].endDate.getTime() != currentTime || !events[i].endHalfDay && !this.options.alwaysHalfDay) {
                    otherColor = events[i].color;
                    break;
                  }
                }

                parent.style.background = "linear-gradient(135deg, ".concat(events[events.length - 1].color, ", ").concat(events[events.length - 1].color, " 49%, ").concat(otherColor, " 51%, ").concat(otherColor, ")");
              } else if (this.options.roundRangeLimits) {
                parent.classList.add('round-right');
              }
            }

            break;

          case 'custom':
            if (this.options.customDataSourceRenderer) {
              this.options.customDataSourceRenderer.call(this, elt, currentDate, events);
            }

            break;
        }
      }
    }, {
      key: "_applyEvents",
      value: function _applyEvents() {
        var _this2 = this;

        if (this.options.displayHeader) {
          /* Header buttons */
          this.element.querySelectorAll('.year-neighbor, .year-neighbor2').forEach(function (element) {
            element.addEventListener('click', function (e) {
              if (!e.currentTarget.classList.contains('disabled')) {
                _this2.setYear(parseInt(e.currentTarget.textContent));
              }
            });
          });
          this.element.querySelector('.calendar-header .prev').addEventListener('click', function (e) {
            if (!e.currentTarget.classList.contains('disabled')) {
              var months = _this2.element.querySelector('.months-container');

              months.style.transition = 'margin-left 0.1s';
              months.style.marginLeft = '100%';
              setTimeout(function () {
                months.style.visibility = 'hidden';
                months.style.transition = '';
                months.style.marginLeft = '0';
                setTimeout(function () {
                  _this2.setStartDate(new Date(_this2._startDate.getFullYear(), _this2._startDate.getMonth() - _this2.options.numberMonthsDisplayed, 1));
                }, 50);
              }, 100);
            }
          });
          this.element.querySelector('.calendar-header .next').addEventListener('click', function (e) {
            if (!e.currentTarget.classList.contains('disabled')) {
              var months = _this2.element.querySelector('.months-container');

              months.style.transition = 'margin-left 0.1s';
              months.style.marginLeft = '-100%';
              setTimeout(function () {
                months.style.visibility = 'hidden';
                months.style.transition = '';
                months.style.marginLeft = '0';
                setTimeout(function () {
                  _this2.setStartDate(new Date(_this2._startDate.getFullYear(), _this2._startDate.getMonth() + _this2.options.numberMonthsDisplayed, 1));
                }, 50);
              }, 100);
            }
          });
        }

        var cells = this.element.querySelectorAll('.day:not(.old):not(.new):not(.disabled)');
        cells.forEach(function (cell) {
          /* Click on date */
          cell.addEventListener('click', function (e) {
            e.stopPropagation();

            var date = _this2._getDate(e.currentTarget);

            _this2._triggerEvent('clickDay', {
              element: e.currentTarget,
              date: date,
              events: _this2.getEvents(date)
            });
          });
          /* Click right on date */

          cell.addEventListener('contextmenu', function (e) {
            if (_this2.options.enableContextMenu) {
              e.preventDefault();

              if (_this2.options.contextMenuItems.length > 0) {
                _this2._openContextMenu(e.currentTarget);
              }
            }

            var date = _this2._getDate(e.currentTarget);

            _this2._triggerEvent('dayContextMenu', {
              element: e.currentTarget,
              date: date,
              events: _this2.getEvents(date)
            });
          });
          /* Range selection */

          if (_this2.options.enableRangeSelection) {
            cell.addEventListener('mousedown', function (e) {
              if (e.which == 1) {
                var currentDate = _this2._getDate(e.currentTarget);

                if (_this2.options.allowOverlap || _this2.isThereFreeSlot(currentDate)) {
                  _this2._mouseDown = true;
                  _this2._rangeStart = _this2._rangeEnd = currentDate;

                  _this2._refreshRange();
                }
              }
            });
            cell.addEventListener('mouseenter', function (e) {
              if (_this2._mouseDown) {
                var currentDate = _this2._getDate(e.currentTarget);

                if (!_this2.options.allowOverlap) {
                  var newDate = new Date(_this2._rangeStart.getTime());

                  if (newDate < currentDate) {
                    var nextDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);

                    while (newDate < currentDate) {
                      if (!_this2.isThereFreeSlot(nextDate, false)) {
                        break;
                      }

                      newDate.setDate(newDate.getDate() + 1);
                      nextDate.setDate(nextDate.getDate() + 1);
                    }
                  } else {
                    var nextDate = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 1);

                    while (newDate > currentDate) {
                      if (!_this2.isThereFreeSlot(nextDate, true)) {
                        break;
                      }

                      newDate.setDate(newDate.getDate() - 1);
                      nextDate.setDate(nextDate.getDate() - 1);
                    }
                  }

                  currentDate = newDate;
                }

                var oldValue = _this2._rangeEnd;
                _this2._rangeEnd = currentDate;

                if (oldValue.getTime() != _this2._rangeEnd.getTime()) {
                  _this2._refreshRange();
                }
              }
            });
          }
          /* Hover date */


          cell.addEventListener('mouseenter', function (e) {
            if (!_this2._mouseDown) {
              var date = _this2._getDate(e.currentTarget);

              _this2._triggerEvent('mouseOnDay', {
                element: e.currentTarget,
                date: date,
                events: _this2.getEvents(date)
              });
            }
          });
          cell.addEventListener('mouseleave', function (e) {
            var date = _this2._getDate(e.currentTarget);

            _this2._triggerEvent('mouseOutDay', {
              element: e.currentTarget,
              date: date,
              events: _this2.getEvents(date)
            });
          });
        });

        if (this.options.enableRangeSelection) {
          // Release range selection
          window.addEventListener('mouseup', function (e) {
            if (_this2._mouseDown) {
              _this2._mouseDown = false;

              _this2._refreshRange();

              var minDate = _this2._rangeStart < _this2._rangeEnd ? _this2._rangeStart : _this2._rangeEnd;
              var maxDate = _this2._rangeEnd > _this2._rangeStart ? _this2._rangeEnd : _this2._rangeStart;

              _this2._triggerEvent('selectRange', {
                startDate: minDate,
                endDate: maxDate,
                events: _this2.getEventsOnRange(minDate, new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate() + 1))
              });
            }
          });
        }
        /* Responsive management */


        if (this._responsiveInterval) {
          clearInterval(this._responsiveInterval);
          this._responsiveInterval = null;
        }

        this._responsiveInterval = setInterval(function () {
          if (_this2.element.querySelector('.month') == null) {
            return;
          }

          var calendarSize = _this2.element.offsetWidth;
          var monthSize = _this2.element.querySelector('.month').offsetWidth + 10;
          _this2._nbCols = null;

          if (monthSize * 6 < calendarSize && _this2.options.numberMonthsDisplayed >= 6) {
            _this2._nbCols = 2;
          } else if (monthSize * 4 < calendarSize && _this2.options.numberMonthsDisplayed >= 4) {
            _this2._nbCols = 3;
          } else if (monthSize * 3 < calendarSize && _this2.options.numberMonthsDisplayed >= 3) {
            _this2._nbCols = 4;
          } else if (monthSize * 2 < calendarSize && _this2.options.numberMonthsDisplayed >= 2) {
            _this2._nbCols = 6;
          } else {
            _this2._nbCols = 12;
          }

          _this2.element.querySelectorAll('.month-container').forEach(function (month) {
            if (!month.classList.contains("month-".concat(_this2._nbCols))) {
              ['month-2', 'month-3', 'month-4', 'month-6', 'month-12'].forEach(function (className) {
                month.classList.remove(className);
              });
              month.classList.add("month-".concat(_this2._nbCols));
            }
          });
        }, 300);
      }
    }, {
      key: "_refreshRange",
      value: function _refreshRange() {
        var _this3 = this;

        this.element.querySelectorAll('td.day.range').forEach(function (day) {
          return day.classList.remove('range');
        });
        this.element.querySelectorAll('td.day.range-start').forEach(function (day) {
          return day.classList.remove('range-start');
        });
        this.element.querySelectorAll('td.day.range-end').forEach(function (day) {
          return day.classList.remove('range-end');
        });

        if (this._mouseDown) {
          var minDate = this._rangeStart < this._rangeEnd ? this._rangeStart : this._rangeEnd;
          var maxDate = this._rangeEnd > this._rangeStart ? this._rangeEnd : this._rangeStart;
          this.element.querySelectorAll('.month-container').forEach(function (month) {
            var monthId = parseInt(month.dataset.monthId);
            var monthStartDate = new Date(_this3._startDate.getFullYear(), _this3._startDate.getMonth() + monthId, 1);
            var monthEndDate = new Date(_this3._startDate.getFullYear(), _this3._startDate.getMonth() + monthId + 1, 1);

            if (minDate.getTime() < monthEndDate.getTime() && maxDate.getTime() >= monthStartDate.getTime()) {
              month.querySelectorAll('td.day:not(.old):not(.new)').forEach(function (day) {
                var date = _this3._getDate(day);

                if (date >= minDate && date <= maxDate) {
                  day.classList.add('range');

                  if (date.getTime() == minDate.getTime()) {
                    day.classList.add('range-start');
                  }

                  if (date.getTime() == maxDate.getTime()) {
                    day.classList.add('range-end');
                  }
                }
              });
            }
          });
        }
      }
    }, {
      key: "_getElementPosition",
      value: function _getElementPosition(element) {
        var top = 0,
            left = 0;

        do {
          top += element.offsetTop || 0;
          left += element.offsetLeft || 0;
          element = element.offsetParent;
        } while (element);

        return {
          top: top,
          left: left
        };
      }
    }, {
      key: "_openContextMenu",
      value: function _openContextMenu(elt) {
        var _this4 = this;

        var contextMenu = document.querySelector('.calendar-context-menu');

        if (contextMenu !== null) {
          contextMenu.style.display = 'none'; // Clear the context menu (faster method)

          while (contextMenu.firstChild) {
            contextMenu.removeChild(contextMenu.firstChild);
          }
        } else {
          contextMenu = document.createElement('div');
          contextMenu.classList.add('calendar-context-menu');
          document.body.appendChild(contextMenu);
        }

        var date = this._getDate(elt);

        var events = this.getEvents(date);

        for (var i = 0; i < events.length; i++) {
          var eventItem = document.createElement('div');
          eventItem.classList.add('item');
          eventItem.style.paddingLeft = '4px';
          eventItem.style.boxShadow = "inset 4px 0 0 0 ".concat(events[i].color);
          var eventItemContent = document.createElement('div');
          eventItemContent.classList.add('content');
          var text = document.createElement('span');
          text.classList.add('text');
          text.textContent = events[i].name;
          eventItemContent.appendChild(text);
          var icon = document.createElement('span');
          icon.classList.add('arrow');
          icon.innerHTML = "&rsaquo;";
          eventItemContent.appendChild(icon);
          eventItem.appendChild(eventItemContent);

          this._renderContextMenuItems(eventItem, this.options.contextMenuItems, events[i]);

          contextMenu.appendChild(eventItem);
        }

        if (contextMenu.children.length > 0) {
          var position = this._getElementPosition(elt);

          contextMenu.style.left = position.left + 25 + 'px';
          contextMenu.style.right = '';
          contextMenu.style.top = position.top + 25 + 'px';
          contextMenu.style.display = 'block';

          if (contextMenu.getBoundingClientRect().right > document.body.offsetWidth) {
            contextMenu.style.left = '';
            contextMenu.style.right = '0';
          } // Launch the position check once the whole context menu tree will be rendered


          setTimeout(function () {
            return _this4._checkContextMenuItemsPosition();
          }, 0);

          var closeContextMenu = function closeContextMenu(event) {
            if (event.type !== 'click' || !contextMenu.contains(event.target)) {
              contextMenu.style.display = 'none';
              window.removeEventListener('click', closeContextMenu);
              window.removeEventListener('resize', closeContextMenu);
              window.removeEventListener('scroll', closeContextMenu);
            }
          };

          window.addEventListener('click', closeContextMenu);
          window.addEventListener('resize', closeContextMenu);
          window.addEventListener('scroll', closeContextMenu);
        }
      }
    }, {
      key: "_renderContextMenuItems",
      value: function _renderContextMenuItems(parent, items, evt) {
        var subMenu = document.createElement('div');
        subMenu.classList.add('submenu');

        for (var i = 0; i < items.length; i++) {
          if (items[i].visible === false || typeof items[i].visible === "function" && !items[i].visible(evt)) {
            continue;
          }

          var menuItem = document.createElement('div');
          menuItem.classList.add('item');
          var menuItemContent = document.createElement('div');
          menuItemContent.classList.add('content');
          var text = document.createElement('span');
          text.classList.add('text');
          text.textContent = items[i].text;
          menuItemContent.appendChild(text);

          if (items[i].click) {
            (function (index) {
              menuItemContent.addEventListener('click', function () {
                document.querySelector('.calendar-context-menu').style.display = 'none';
                items[index].click(evt);
              });
            })(i);
          }

          menuItem.appendChild(menuItemContent);

          if (items[i].items && items[i].items.length > 0) {
            var icon = document.createElement('span');
            icon.classList.add('arrow');
            icon.innerHTML = "&rsaquo;";
            menuItemContent.appendChild(icon);

            this._renderContextMenuItems(menuItem, items[i].items, evt);
          }

          subMenu.appendChild(menuItem);
        }

        if (subMenu.children.length > 0) {
          parent.appendChild(subMenu);
        }
      }
    }, {
      key: "_checkContextMenuItemsPosition",
      value: function _checkContextMenuItemsPosition() {
        var menus = document.querySelectorAll('.calendar-context-menu .submenu');
        menus.forEach(function (menu) {
          var htmlMenu = menu;
          htmlMenu.style.display = 'block';
          htmlMenu.style.visibility = 'hidden';
        });
        menus.forEach(function (menu) {
          var htmlMenu = menu;

          if (htmlMenu.getBoundingClientRect().right > document.body.offsetWidth) {
            htmlMenu.classList.add('open-left');
          } else {
            htmlMenu.classList.remove('open-left');
          }
        });
        menus.forEach(function (menu) {
          var htmlMenu = menu;
          htmlMenu.style.display = '';
          htmlMenu.style.visibility = '';
        });
      }
    }, {
      key: "_getDate",
      value: function _getDate(elt) {
        var day = elt.querySelector('.day-content').textContent;
        var monthId = parseInt(elt.closest('.month-container').dataset.monthId);
        return new Date(this._startDate.getFullYear(), this._startDate.getMonth() + monthId, day);
      }
    }, {
      key: "_triggerEvent",
      value: function _triggerEvent(eventName, parameters) {
        var event = null;

        if (typeof Event === "function") {
          event = new Event(eventName);
        } else {
          event = document.createEvent('Event');
          event.initEvent(eventName, false, false);
        }

        event.calendar = this;

        for (var i in parameters) {
          event[i] = parameters[i];
        }

        this.element.dispatchEvent(event);
        return event;
      }
    }, {
      key: "_isDisabled",
      value: function _isDisabled(date) {
        if (this.options.minDate != null && date < this.options.minDate || this.options.maxDate != null && date > this.options.maxDate) {
          return true;
        }

        if (this.options.disabledWeekDays.length > 0) {
          for (var d = 0; d < this.options.disabledWeekDays.length; d++) {
            if (date.getDay() == this.options.disabledWeekDays[d]) {
              return true;
            }
          }
        }

        if (this.options.disabledDays.length > 0) {
          for (var d = 0; d < this.options.disabledDays.length; d++) {
            if (date.getTime() == this.options.disabledDays[d].getTime()) {
              return true;
            }
          }
        }

        return false;
      }
    }, {
      key: "_isHidden",
      value: function _isHidden(day) {
        if (this.options.hiddenWeekDays.length > 0) {
          for (var d = 0; d < this.options.hiddenWeekDays.length; d++) {
            if (day == this.options.hiddenWeekDays[d]) {
              return true;
            }
          }
        }

        return false;
      }
    }, {
      key: "_isFullYearMode",
      value: function _isFullYearMode() {
        return this._startDate.getMonth() == 0 && this.options.numberMonthsDisplayed == 12;
      }
      /**
          * Gets the week number for a specified date.
          *
          * @param date The specified date.
          */

    }, {
      key: "getWeekNumber",
      value: function getWeekNumber(date) {
        // Algorithm from https://weeknumber.net/how-to/javascript
        var workingDate = new Date(date.getTime());
        workingDate.setHours(0, 0, 0, 0); // Thursday in current week decides the year.

        workingDate.setDate(workingDate.getDate() + 3 - (workingDate.getDay() + 6) % 7); // January 4 is always in week 1.

        var week1 = new Date(workingDate.getFullYear(), 0, 4); // Adjust to Thursday in week 1 and count number of weeks from date to week1.

        return 1 + Math.round(((workingDate.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
      }
      /**
          * Gets the data source elements for a specified day.
          *
          * @param date The specified day.
          */

    }, {
      key: "getEvents",
      value: function getEvents(date) {
        return this.getEventsOnRange(date, new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1));
      }
      /**
          * Gets the data source elements for a specified range of days.
          *
          * @param startDate The beginning of the day range (inclusive).
       * @param endDate The end of the day range (non inclusive).
          */

    }, {
      key: "getEventsOnRange",
      value: function getEventsOnRange(startDate, endDate) {
        var events = [];

        if (this._dataSource && startDate && endDate) {
          for (var i = 0; i < this._dataSource.length; i++) {
            if (this._dataSource[i].startDate < endDate && this._dataSource[i].endDate >= startDate) {
              events.push(this._dataSource[i]);
            }
          }
        }

        return events;
      }
      /**
          * Check if there is no event on the first part, last part or on the whole specified day.
          *
          * @param date The specified day.
          * @param after Whether to check for a free slot on the first part (if `false`) or the last part (if `true`) of the day. If `null`, this will check on the whole day.
       * 
       * Usefull only if using the `alwaysHalfDay` option of the calendar, or the `startHalfDay` or `endHalfDay` option of the datasource.
          */

    }, {
      key: "isThereFreeSlot",
      value: function isThereFreeSlot(date) {
        var _this5 = this;

        var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var events = this.getEvents(date);

        if (after === true) {
          return !events.some(function (evt) {
            return !_this5.options.alwaysHalfDay && !evt.endHalfDay || evt.endDate > date;
          });
        } else if (after === false) {
          return !events.some(function (evt) {
            return !_this5.options.alwaysHalfDay && !evt.startHalfDay || evt.startDate < date;
          });
        } else {
          return this.isThereFreeSlot(date, false) || this.isThereFreeSlot(date, true);
        }
      }
      /**
          * Gets the period displayed on the calendar.
          */

    }, {
      key: "getCurrentPeriod",
      value: function getCurrentPeriod() {
        var startDate = new Date(this._startDate.getTime());
        var endDate = new Date(this._startDate.getTime());
        endDate.setMonth(endDate.getMonth() + this.options.numberMonthsDisplayed);
        endDate.setTime(endDate.getTime() - 1);
        return {
          startDate: startDate,
          endDate: endDate
        };
      }
      /**
          * Gets the year displayed on the calendar.
       * If the calendar is not used in a full year configuration, this will return the year of the first date displayed in the calendar.
          */

    }, {
      key: "getYear",
      value: function getYear() {
        return this._isFullYearMode() ? this._startDate.getFullYear() : null;
      }
      /**
          * Sets the year displayed on the calendar.
       * If the calendar is not used in a full year configuration, this will set the start date to January 1st of the given year.
          *
          * @param year The year to displayed on the calendar.
          */

    }, {
      key: "setYear",
      value: function setYear(year) {
        var parsedYear = parseInt(year);

        if (!isNaN(parsedYear)) {
          this.setStartDate(new Date(parsedYear, 0, 1));
        }
      }
      /**
          * Gets the first date displayed on the calendar.
          */

    }, {
      key: "getStartDate",
      value: function getStartDate() {
        return this._startDate;
      }
      /**
          * Sets the first date that should be displayed on the calendar.
          *
          * @param startDate The first date that should be displayed on the calendar.
          */

    }, {
      key: "setStartDate",
      value: function setStartDate(startDate) {
        var _this6 = this;

        if (startDate instanceof Date) {
          this.options.startDate = startDate;
          this._startDate = new Date(startDate.getFullYear(), startDate.getMonth(), 1); // Clear the calendar (faster method)

          while (this.element.firstChild) {
            this.element.removeChild(this.element.firstChild);
          }

          if (this.options.displayHeader) {
            this._renderHeader();
          }

          var newPeriod = this.getCurrentPeriod();

          var periodEventResult = this._triggerEvent('periodChanged', {
            startDate: newPeriod.startDate,
            endDate: newPeriod.endDate,
            preventRendering: false
          });

          var yearEventResult = null;

          if (this._isFullYearMode()) {
            yearEventResult = this._triggerEvent('yearChanged', {
              currentYear: this._startDate.getFullYear(),
              preventRendering: false
            });
          }

          if (typeof this.options.dataSource === "function") {
            this.render(true);

            this._fetchDataSource(function (dataSource) {
              _this6._dataSource = dataSource;

              _this6._initializeDatasourceColors();

              _this6.render(false);
            });
          } else {
            if (!periodEventResult.preventRendering && (!yearEventResult || !yearEventResult.preventRedering)) {
              this.render();
            }
          }
        }
      }
      /**
          * Gets the number of months displayed by the calendar.
          */

    }, {
      key: "getNumberMonthsDisplayed",
      value: function getNumberMonthsDisplayed() {
        return this.options.numberMonthsDisplayed;
      }
      /**
          * Sets the number of months displayed that should be displayed by the calendar.
       * 
       * This method causes a refresh of the calendar.
          *
          * @param numberMonthsDisplayed Number of months that should be displayed by the calendar.
       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
          */

    }, {
      key: "setNumberMonthsDisplayed",
      value: function setNumberMonthsDisplayed(numberMonthsDisplayed) {
        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var parsedNumber = parseInt(numberMonthsDisplayed);

        if (!isNaN(parsedNumber) && parsedNumber > 0 && parsedNumber <= 12) {
          this.options.numberMonthsDisplayed = parsedNumber;

          if (!preventRendering) {
            this.render();
          }
        }
      }
      /**
          * Gets the minimum date of the calendar.
          */

    }, {
      key: "getMinDate",
      value: function getMinDate() {
        return this.options.minDate;
      }
      /**
          * Sets the minimum date of the calendar.
       * 
       * This method causes a refresh of the calendar.
          *
          * @param minDate The minimum date to set.
       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
          */

    }, {
      key: "setMinDate",
      value: function setMinDate(date) {
        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (date instanceof Date || date === null) {
          this.options.minDate = date;

          if (!preventRendering) {
            this.render();
          }
        }
      }
      /**
          * Gets the maximum date of the calendar.
          */

    }, {
      key: "getMaxDate",
      value: function getMaxDate() {
        return this.options.maxDate;
      }
      /**
          * Sets the maximum date of the calendar. 
       * 
       * This method causes a refresh of the calendar.
          *
          * @param maxDate The maximum date to set.
       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
          */

    }, {
      key: "setMaxDate",
      value: function setMaxDate(date) {
        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (date instanceof Date || date === null) {
          this.options.maxDate = date;

          if (!preventRendering) {
            this.render();
          }
        }
      }
      /**
          * Gets the current style used for displaying data source.
          */

    }, {
      key: "getStyle",
      value: function getStyle() {
        return this.options.style;
      }
      /**
          * Sets the style to use for displaying data source. 
       * 
       * This method causes a refresh of the calendar.
          *
          * @param style The style to use for displaying data source ("background", "border" or "custom").
       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
          */

    }, {
      key: "setStyle",
      value: function setStyle(style) {
        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.options.style = style == 'background' || style == 'border' || style == 'custom' ? style : 'border';

        if (!preventRendering) {
          this.render();
        }
      }
      /**
          * Gets a value indicating whether the user can select a range which overlapping an other element present in the datasource.
          */

    }, {
      key: "getAllowOverlap",
      value: function getAllowOverlap() {
        return this.options.allowOverlap;
      }
      /**
          * Sets a value indicating whether the user can select a range which overlapping an other element present in the datasource.
          *
          * @param allowOverlap Indicates whether the user can select a range which overlapping an other element present in the datasource.
          */

    }, {
      key: "setAllowOverlap",
      value: function setAllowOverlap(allowOverlap) {
        this.options.allowOverlap = allowOverlap;
      }
      /**
          * Gets a value indicating whether the weeks number are displayed.
          */

    }, {
      key: "getDisplayWeekNumber",
      value: function getDisplayWeekNumber() {
        return this.options.displayWeekNumber;
      }
      /**
          * Sets a value indicating whether the weeks number are displayed.
       * 
       * This method causes a refresh of the calendar.
          *
          * @param  displayWeekNumber Indicates whether the weeks number are displayed.
       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
          */

    }, {
      key: "setDisplayWeekNumber",
      value: function setDisplayWeekNumber(displayWeekNumber) {
        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.options.displayWeekNumber = displayWeekNumber;

        if (!preventRendering) {
          this.render();
        }
      }
      /**
          * Gets a value indicating whether the calendar header is displayed.
          */

    }, {
      key: "getDisplayHeader",
      value: function getDisplayHeader() {
        return this.options.displayHeader;
      }
      /**
          * Sets a value indicating whether the calendar header is displayed.
       * 
       * This method causes a refresh of the calendar.
          *
          * @param displayHeader Indicates whether the calendar header is displayed.
       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
          */

    }, {
      key: "setDisplayHeader",
      value: function setDisplayHeader(displayHeader) {
        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.options.displayHeader = displayHeader;

        if (!preventRendering) {
          this.render();
        }
      }
      /**
          * Gets a value indicating whether the data source must be rendered on disabled days.
          */

    }, {
      key: "getDisplayDisabledDataSource",
      value: function getDisplayDisabledDataSource() {
        return this.options.displayDisabledDataSource;
      }
      /**
          * Sets a value indicating whether the data source must be rendered on disabled days.
       * 
       * This method causes a refresh of the calendar.
          *
          * @param displayDisabledDataSource Indicates whether the data source must be rendered on disabled days.
       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
          */

    }, {
      key: "setDisplayDisabledDataSource",
      value: function setDisplayDisabledDataSource(displayDisabledDataSource) {
        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.options.displayDisabledDataSource = displayDisabledDataSource;

        if (!preventRendering) {
          this.render();
        }
      }
      /**
          * Gets a value indicating whether the beginning and the end of each range should be displayed as half selected day.
          */

    }, {
      key: "getAlwaysHalfDay",
      value: function getAlwaysHalfDay() {
        return this.options.alwaysHalfDay;
      }
      /**
          * Sets a value indicating whether the beginning and the end of each range should be displayed as half selected day.
       * 
       * This method causes a refresh of the calendar.
          *
          * @param alwaysHalfDay Indicates whether the beginning and the end of each range should be displayed as half selected day.
       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
          */

    }, {
      key: "setAlwaysHalfDay",
      value: function setAlwaysHalfDay(alwaysHalfDay) {
        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.options.alwaysHalfDay = alwaysHalfDay;

        if (!preventRendering) {
          this.render();
        }
      }
      /**
          * Gets a value indicating whether the user can make range selection.
          */

    }, {
      key: "getEnableRangeSelection",
      value: function getEnableRangeSelection() {
        return this.options.enableRangeSelection;
      }
      /**
          * Sets a value indicating whether the user can make range selection.
       * 
       * This method causes a refresh of the calendar.
          *
          * @param enableRangeSelection Indicates whether the user can make range selection.
       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
          */

    }, {
      key: "setEnableRangeSelection",
      value: function setEnableRangeSelection(enableRangeSelection) {
        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.options.enableRangeSelection = enableRangeSelection;

        if (!preventRendering) {
          this.render();
        }
      }
      /**
          * Gets the disabled days.
          */

    }, {
      key: "getDisabledDays",
      value: function getDisabledDays() {
        return this.options.disabledDays;
      }
      /**
          * Sets the disabled days.
       * 
       * This method causes a refresh of the calendar.
          *
          * @param disableDays The disabled days to set.
       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
          */

    }, {
      key: "setDisabledDays",
      value: function setDisabledDays(disabledDays) {
        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.options.disabledDays = disabledDays instanceof Array ? disabledDays : [];

        if (!preventRendering) {
          this.render();
        }
      }
      /**
          * Gets the disabled days of the week.
          */

    }, {
      key: "getDisabledWeekDays",
      value: function getDisabledWeekDays() {
        return this.options.disabledWeekDays;
      }
      /**
          * Sets the disabled days of the week.
       * 
       * This method causes a refresh of the calendar.
          *
          * @param disabledWeekDays The disabled days of the week to set.
       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
          */

    }, {
      key: "setDisabledWeekDays",
      value: function setDisabledWeekDays(disabledWeekDays) {
        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.options.disabledWeekDays = disabledWeekDays instanceof Array ? disabledWeekDays : [];

        if (!preventRendering) {
          this.render();
        }
      }
      /**
          * Gets the hidden days of the week.
          */

    }, {
      key: "getHiddenWeekDays",
      value: function getHiddenWeekDays() {
        return this.options.hiddenWeekDays;
      }
      /**
          * Sets the hidden days of the week.
       * 
       * This method causes a refresh of the calendar.
          *
          * @param hiddenWeekDays The hidden days of the week to set.
       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
          */

    }, {
      key: "setHiddenWeekDays",
      value: function setHiddenWeekDays(hiddenWeekDays) {
        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.options.hiddenWeekDays = hiddenWeekDays instanceof Array ? hiddenWeekDays : [];

        if (!preventRendering) {
          this.render();
        }
      }
      /**
          * Gets a value indicating whether the beginning and the end of each range should be displayed as rounded cells.
          */

    }, {
      key: "getRoundRangeLimits",
      value: function getRoundRangeLimits() {
        return this.options.roundRangeLimits;
      }
      /**
          * Sets a value indicating whether the beginning and the end of each range should be displayed as rounded cells.
       * 
       * This method causes a refresh of the calendar.
          *
          * @param roundRangeLimits Indicates whether the beginning and the end of each range should be displayed as rounded cells. 
       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
          */

    }, {
      key: "setRoundRangeLimits",
      value: function setRoundRangeLimits(roundRangeLimits) {
        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.options.roundRangeLimits = roundRangeLimits;

        if (!preventRendering) {
          this.render();
        }
      }
      /**
          * Gets a value indicating whether the default context menu must be displayed when right clicking on a day.
          */

    }, {
      key: "getEnableContextMenu",
      value: function getEnableContextMenu() {
        return this.options.enableContextMenu;
      }
      /**
          * Sets a value indicating whether the default context menu must be displayed when right clicking on a day. 
          * 
       * This method causes a refresh of the calendar.
          * 
          * @param enableContextMenu Indicates whether the default context menu must be displayed when right clicking on a day.
       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
          */

    }, {
      key: "setEnableContextMenu",
      value: function setEnableContextMenu(enableContextMenu) {
        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.options.enableContextMenu = enableContextMenu;

        if (!preventRendering) {
          this.render();
        }
      }
      /**
          * Gets the context menu items.
          */

    }, {
      key: "getContextMenuItems",
      value: function getContextMenuItems() {
        return this.options.contextMenuItems;
      }
      /**
          * Sets new context menu items.
       * 
       * This method causes a refresh of the calendar.
          *
          * @param contextMenuItems The new context menu items.
       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
          */

    }, {
      key: "setContextMenuItems",
      value: function setContextMenuItems(contextMenuItems) {
        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.options.contextMenuItems = contextMenuItems instanceof Array ? contextMenuItems : [];

        if (!preventRendering) {
          this.render();
        }
      }
      /**
          * Gets the custom day renderer.
          */

    }, {
      key: "getCustomDayRenderer",
      value: function getCustomDayRenderer() {
        return this.options.customDayRenderer;
      }
      /**
          * Sets the custom day renderer.
       * 
       * This method causes a refresh of the calendar.
       *
       * @param handler The function used to render the days. This function is called during render for each day.
       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
          */

    }, {
      key: "setCustomDayRenderer",
      value: function setCustomDayRenderer(customDayRenderer) {
        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.options.customDayRenderer = typeof customDayRenderer === "function" ? customDayRenderer : null;

        if (!preventRendering) {
          this.render();
        }
      }
      /**
          * Gets the custom data source renderer.
          */

    }, {
      key: "getCustomDataSourceRenderer",
      value: function getCustomDataSourceRenderer() {
        return this.options.customDataSourceRenderer;
      }
      /**
          * Sets the custom data source renderer. Works only with the style set to "custom".
       * 
       * This method causes a refresh of the calendar.
       *
       * @param handler The function used to render the data source. This function is called during render for each day containing at least one event.
       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
          */

    }, {
      key: "setCustomDataSourceRenderer",
      value: function setCustomDataSourceRenderer(customDataSourceRenderer) {
        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.options.customDataSourceRenderer = typeof customDataSourceRenderer === "function" ? customDataSourceRenderer : null;

        if (!preventRendering) {
          this.render();
        }
      }
      /**
          * Gets the language used for calendar rendering.
          */

    }, {
      key: "getLanguage",
      value: function getLanguage() {
        return this.options.language;
      }
      /**
          * Sets the language used for calendar rendering.
       * 
       * This method causes a refresh of the calendar.
          *
          * @param language The language to use for calendar redering.
       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
          */

    }, {
      key: "setLanguage",
      value: function setLanguage(language) {
        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (language != null && Calendar.locales[language] != null) {
          this.options.language = language;

          if (!preventRendering) {
            this.render();
          }
        }
      }
      /**
          * Gets the current data source.
          */

    }, {
      key: "getDataSource",
      value: function getDataSource() {
        return this.options.dataSource;
      }
      /**
          * Sets a new data source.
       * 
       * This method causes a refresh of the calendar.
          *
          * @param dataSource The new data source.
       * @param preventRedering Indicates whether the rendering should be prevented after the property update.
          */

    }, {
      key: "setDataSource",
      value: function setDataSource(dataSource) {
        var _this7 = this;

        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.options.dataSource = dataSource instanceof Array || typeof dataSource === "function" ? dataSource : [];

        if (typeof this.options.dataSource === "function") {
          this.render(true);

          this._fetchDataSource(function (dataSource) {
            _this7._dataSource = dataSource;

            _this7._initializeDatasourceColors();

            _this7.render(false);
          });
        } else {
          this._dataSource = this.options.dataSource;

          this._initializeDatasourceColors();

          if (!preventRendering) {
            this.render();
          }
        }
      }
      /**
          * Gets the starting day of the week.
          */

    }, {
      key: "getWeekStart",
      value: function getWeekStart() {
        return this.options.weekStart !== null ? this.options.weekStart : Calendar.locales[this.options.language].weekStart;
      }
      /**
          * Sets the starting day of the week.
       * 
       * This method causes a refresh of the calendar.
          *
          * @param weekStart The starting day of the week. This option overrides the parameter define in the language file.
          * @param preventRedering Indicates whether the rendering should be prevented after the property update.
          */

    }, {
      key: "setWeekStart",
      value: function setWeekStart(weekStart) {
        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        this.options.weekStart = !isNaN(parseInt(weekStart)) ? parseInt(weekStart) : null;

        if (!preventRendering) {
          this.render();
        }
      }
      /**
          * Gets the loading template.
          */

    }, {
      key: "getLoadingTemplate",
      value: function getLoadingTemplate() {
        return this.options.loadingTemplate;
      }
      /**
          * Sets the loading template.
          *
          * @param loadingTemplate The loading template.
          */

    }, {
      key: "setLoadingTemplate",
      value: function setLoadingTemplate(loadingTemplate) {
        this.options.loadingTemplate = typeof loadingTemplate === "string" || loadingTemplate instanceof HTMLElement ? loadingTemplate : null;
      }
      /**
       * 
          * Add a new element to the data source.
       * 
       * This method causes a refresh of the calendar.
          * 
          * @param element The element to add.
       * @param preventRendering Indicates whether the calendar shouldn't be refreshed once the event added.
          */

    }, {
      key: "addEvent",
      value: function addEvent(evt) {
        var preventRendering = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        this._dataSource.push(evt);

        if (!preventRendering) {
          this.render();
        }
      }
    }]);

    return Calendar;
  }();

  _exports["default"] = Calendar;

  _defineProperty(Calendar, "locales", {
    en: {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      weekShort: 'W',
      weekStart: 0
    }
  });

  _defineProperty(Calendar, "colors", ['#2C8FC9', '#9CB703', '#F5BB00', '#FF4A32', '#B56CE2', '#45A597']);

  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") {
    window.Calendar = Calendar;
    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll('[data-provide="calendar"]').forEach(function (element) {
        return new Calendar(element);
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/js-year-calendar/locales/js-year-calendar.es.js":
/*!**********************************************************************!*\
  !*** ./node_modules/js-year-calendar/locales/js-year-calendar.es.js ***!
  \**********************************************************************/
/***/ (() => {

/**
 * Spanish translation for js-year-calendar
 * Paul DAVID-SIVELLE
 * Based on 
 * Spanish translation for bootstrap-datepicker
 * Bruno Bonamin <bruno.bonamin@gmail.com>
 */
 
Calendar.locales['es'] = {
	days: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
	daysShort: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
	daysMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
	months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
	monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
	weekShort: 'S',
	weekStart: 1
};

/***/ }),

/***/ "./node_modules/js-year-calendar/dist/js-year-calendar.css":
/*!*****************************************************************!*\
  !*** ./node_modules/js-year-calendar/dist/js-year-calendar.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_2_js_year_calendar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!../../postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./js-year-calendar.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[8].oneOf[1].use[2]!./node_modules/js-year-calendar/dist/js-year-calendar.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_2_js_year_calendar_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_1_postcss_loader_dist_cjs_js_ruleSet_1_rules_8_oneOf_1_use_2_js_year_calendar_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/js/portal.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar */ "./src/js/calendar.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


// import { Grid } from "gridjs";
function waitForElm(selector) {
  return new Promise(function (resolve) {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }
    var observer = new MutationObserver(function (mutations) {
      if (document.querySelector(selector)) {
        observer.disconnect();
        resolve(document.querySelector(selector));
      }
    });

    // If you get "parameter 1 is not of type 'Node'" error, see https://stackoverflow.com/a/77855838/492336
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
}
var id_login = "pa__login";
var pa__login = document.getElementById(id_login);
if (document.getElementById("hora")) {
  var horaElement = document.getElementById("hora");
  var currentDate = new Date();
  var hora = currentDate.getHours();
  var minutos = currentDate.getMinutes();
  var segundos = currentDate.getSeconds();
  var fecha = currentDate.toLocaleDateString();
  horaElement.innerHTML = "<b>Fecha y hora:</b> ".concat(fecha, " ").concat(hora, ":").concat(minutos, ":").concat(segundos);
}
if (pa__login) {
  var tl_pa__login = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({
    paused: false
  });
  tl_pa__login.from("#".concat(id_login, " .pa_login_screen"), {
    opacity: 0,
    clipPath: "inset(0 100% 0 0)",
    duration: 0.7,
    ease: "power1.inOut"
  }, "0");
  tl_pa__login.from("#".concat(id_login, " .pa_login_form"), {
    opacity: 0,
    clipPath: "inset(0 100% 0 0)",
    duration: 0.5,
    delay: 0.7,
    background: "#CEE3EB",
    ease: "power1.inOut"
  }, "0");
  tl_pa__login.from("#".concat(id_login, " .pa_login_screen .anim_1"), {
    opacity: 0,
    y: 19,
    duration: 0.5,
    stagger: 0.3,
    ease: "power1.inOut"
  }, "+=0.4");

  //   tl_pa__login.fromTo(
  //     ".as__top_int img",
  //     {
  //       yPercent: 150,
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       yPercent: 0,
  //       duration: 0.8,
  //       ease: "power4.inout",
  //     },
  //     "-=1"
  //   );
  //   tl_pa__login.fromTo(
  //     ".as__top_title_item",
  //     {
  //       xPercent: -10,
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       xPercent: 0,
  //       duration: 1,
  //       stagger: 0.3,
  //       ease: "power4.inout",
  //     },
  //     "-=0"
  //   );
}
if (document.getElementById("start_chat")) document.getElementById("start_chat").addEventListener("click", startChat);
if (document.getElementById("link_chat")) document.getElementById("link_chat").addEventListener("click", startChat);
if (document.getElementById("nav_search")) {
  document.querySelector("#nav_search .as__nav_search_ico").addEventListener("click", function (e) {
    document.getElementById("nav_search").classList.toggle("open");
    e.target.classList.toggle("fa-xmark");
    e.target.classList.toggle("fa-magnifying-glass");
  });
}
function startChat() {
  var _console;
  /* eslint-disable */(_console = console).log.apply(_console, _toConsumableArray(oo_oo("936671092_122_2_122_31_4", "Iniciando chat")));
  embedded_svc.liveAgentAPI.startChat({
    directToAgentRouting: {
      buttonId: "5738a000000Tn5E",
      fallback: true
    },
    extraPrechatInfo: [{
      entityName: "Contact",
      saveToTranscript: ""
    }],
    extraPrechatFormDetails: []
  });
}
if (document.getElementById("open_chat_btn")) {
  document.getElementById("open_chat_btn").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("open_chat").classList.toggle("toopen");
  });
}
if (document.getElementById("togglePassword")) {
  var togglePassword = document.querySelector("#togglePassword");
  var password = document.querySelector("#id_password");
  togglePassword.addEventListener("click", function (e) {
    // toggle the type attribute
    var type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    // toggle the eye slash icon
    this.classList.toggle("fa-eye-slash");
    this.classList.toggle("fa-eye");
  });
}
if (document.getElementById("togglePassword2")) {
  var togglePassword2 = document.querySelector("#togglePassword2");
  var _password = document.querySelector("#id_password2");
  togglePassword2.addEventListener("click", function (e) {
    // toggle the type attribute
    var type = _password.getAttribute("type") === "password" ? "text" : "password";
    _password.setAttribute("type", type);
    // toggle the eye slash icon
    this.classList.toggle("fa-eye-slash");
    this.classList.toggle("fa-eye");
  });
}

/**
 * MENU
 */
var open_menu = false;
var menu_button = document.getElementById("open_menu");
var menu_nav = document.getElementById("as__nav_links");
var menu_wrap = document.getElementById("as__header");
menu_button.addEventListener("click", handleMenu);
function handleMenu() {
  // lenis.scroll = window.scrollY;
  // console.log(document.querySelector("body").classList);
  if (!open_menu) {
    document.querySelector("body").classList.add("overflow-hidden");
    menu_nav.classList.add("nav_open");
    menu_wrap.classList.add("open");
    menu_button.classList.add("open");
    menu_nav.classList.remove("nav_close");
  } else {
    document.querySelector("body").classList.remove("overflow-hidden");
    menu_nav.classList.add("nav_close");
    menu_button.classList.remove("open");
    menu_nav.classList.remove("nav_open");
    menu_wrap.classList.remove("open");
  }
  open_menu = !open_menu;
}
var serviceLinks = document.querySelectorAll(".service_link a[href='#']");
serviceLinks.forEach(function (link) {
  link.classList.add("disabled");
});
var serviceNavsLinks = document.querySelectorAll(".as__nav_links_ppal_li .dropdown-content a[href='#']");
serviceNavsLinks.forEach(function (link) {
  link.classList.add("disabled");
});
if (document.getElementById("servicios") && document.getElementById("docs_tabs")) {
  var as = document.querySelectorAll(".tabs_link");
  document.getElementById("docs_tabs").selectedIndex = 0;
  document.getElementById("docs_tabs").addEventListener("change", function (e) {
    changeTab(e.target.value);
    // location.href = "#servicios";
  });
  document.querySelectorAll(".as__nav_links_ppal_link[data-tab]").forEach(function (tabe) {
    tabe.addEventListener("click", function (e) {
      e.preventDefault();
      var tab = e.target.dataset.tab;
      changeTab(tab, true);
    });
  });
  as.forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var tab = e.target.dataset.tab;
      var hash = e.target.dataset.hash;
      history.replaceState({}, document.title, window.location.pathname + window.location.search);
      var url = window.location.href;
      url = url.split("#")[0];
      url = url + "#" + hash;
      history.replaceState({}, document.title, url);
      changeTab(tab);
      // location.href = "#";
    });
  });
  if (window.location.hash) {
    var hast = window.location.hash.split("#")[1];
    var elTag = document.querySelector(".tabs_link[data-hash='" + hast + "']");
    var url = location.href;
    location.href = "#servicios";
    history.replaceState(null, null, url);
    if (elTag) elTag.click();
  } else {}
}
function changeTab(tab) {
  var scroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  document.getElementById("docs_tabs").selectedIndex = parseInt(tab);
  document.querySelectorAll(".tabs_link").forEach(function (tabe) {
    if (tab !== tabe.dataset.tab) tabe.classList.remove("active");else {
      tabe.classList.add("active");
      window.location.hash = tabe.dataset.hash; // Change the page hash
      if (scroll) {
        var url = location.href;
        location.href = "#servicios";
        history.replaceState(null, null, url);
      }
    }
  });
  document.querySelectorAll(".servicios_contents_item").forEach(function (tabe) {
    if (tab !== tabe.dataset.tab) tabe.classList.remove("active");else tabe.classList.add("active");
  });
  gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.fromTo(".servicios_contents_item.active ul li", {
    opacity: 0
  }, {
    opacity: 1,
    y: 5,
    duration: 0.5,
    stagger: 0.2,
    ease: "power1.inOut"
  });
}
if (document.getElementById("as__ayuda")) {
  var tl_banner = gsap__WEBPACK_IMPORTED_MODULE_1__.gsap.timeline({
    paused: false
  });
  tl_banner.to(".as__ayuda svg .ban_st", {
    transformOrigin: "center",
    duration: 4,
    repeat: -1,
    rotate: function rotate(i) {
      return i % 2 == 0 ? 360 : -360;
    },
    ease: "power4.inout",
    yoyo: true,
    stagger: 0.2
  }, "0");
  tl_banner.to(".as__ayuda svg .ban_nube_1", {
    scale: 1.1,
    transformOrigin: "center",
    duration: 4,
    repeat: -1,
    ease: "power4.inout",
    yoyo: true,
    stagger: 0.2
  }, "0");
  tl_banner.fromTo(".as__ayuda svg .ban_nube_it", {
    x: "-40vw"
  }, {
    x: "180vw",
    transformOrigin: "center",
    duration: 19,
    repeat: -1,
    ease: "power4.inout",
    // yoyo: true,
    stagger: 0.2
  }, "0");
  tl_banner.fromTo(".as__ayuda svg .ban_nube_dt", {
    x: "20vw"
  }, {
    x: "-120vw",
    transformOrigin: "center",
    duration: 15,
    repeat: -1,
    ease: "power4.inout",
    // yoyo: true,
    stagger: 0.2
  }, "0");
}

//CALENDAR
(0,_calendar__WEBPACK_IMPORTED_MODULE_0__.setCalendar)(gsap__WEBPACK_IMPORTED_MODULE_1__.gsap);
if (document.getElementById("faqs")) {
  var faq = document.querySelectorAll(".as__g_faqs_ls .fqs_list:first-child");
  document.querySelectorAll(".as__g_faqs_ls .fqs_list").forEach(function (fq) {
    fq.children[0].children[0].addEventListener("click", function (e) {
      e.preventDefault();
      if (!e.target.parentElement.parentElement.classList.contains("active")) {
        var _iterator = _createForOfIteratorHelper(e.target.parentElement.parentElement.parentElement.children),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var ep = _step.value;
            ep.classList.remove("active");
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        e.target.parentElement.parentElement.classList.add("active");
      } else {
        e.target.parentElement.parentElement.classList.remove("active");
      }
    });
  });
  faq.forEach(function (fq) {
    fq.classList.add("active");
  });
  document.getElementById("docs_tabs").selectedIndex = 0;
  document.getElementById("docs_tabs").addEventListener("change", function (e) {
    changeTab2(e.target.value);
  });
  var _as = document.querySelectorAll(".tabs_link");
  _as.forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var tab = e.target.dataset.tab;
      changeTab2(tab);
    });
  });
}
function changeTab2(tab) {
  document.getElementById("docs_tabs").selectedIndex = parseInt(tab);
  document.querySelectorAll(".tabs_link").forEach(function (tabe) {
    if (tab !== tabe.dataset.tab) tabe.classList.remove("active");else tabe.classList.add("active");
  });
  document.querySelectorAll(".as__g_faqs_tcon_list_int").forEach(function (tabe) {
    if (tab !== tabe.dataset.tab) tabe.classList.remove("active");else tabe.classList.add("active");
  });
}
if (document.getElementById("tabs_nov")) {
  var _as2 = document.querySelectorAll(".tab");
  _as2.forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var tab = e.target.dataset.tab;
      document.querySelectorAll(".tab-active").forEach(function (tabe) {
        tabe.classList.remove("tab-active");
      });
      document.querySelectorAll("[data-tab=\"".concat(tab, "\"]")).forEach(function (tabe) {
        tabe.classList.add("tab-active");
      });
    });
  });
}

// if (document.querySelectorAll("table.tableClass").length > 0) {
//   document.querySelectorAll("table.tableClass").forEach((table) => {
//     console.log("table", table);
//     const div = document.createElement("div");
//     table.parentNode.insertBefore(div, table.nextSibling);
//     div.classList.add("gridjs-container");
//     const grid = new Grid({
//       from: table,
//       // pagination: {
//       //   limit: 10
//       // },
//     }).render(div);
//   });
// }

//HOME
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookieValue(name) {
  var regex = new RegExp("(^| )".concat(name, "=([^;]+)"));
  var match = document.cookie.match(regex);
  if (match) {
    return match[2];
  }
}
function deleteCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
if (document.getElementById("modal_per")) {
  if (document.getElementById("modal_per").dataset.pass == "true") {
    document.getElementById("modal_data").checked = getCookieValue("modal_data") ? false : true;
    document.getElementById("showcheck").checked = false;
    document.getElementById("modal_data").addEventListener("change", function (e) {
      if (e.target.checked) {} else {}
    });
    document.getElementById("showcheck").addEventListener("change", function (e) {
      if (e.target.checked) {
        setCookie("modal_data", true, 30);
        setTimeout(function () {
          document.getElementById("modal_data").checked = false;
        }, 500);
      } else {
        deleteCookie("modal_data");
        // setCookie("modal_sus", "false", 1);
      }
    });
    document.getElementsByClassName("btn_no")[0].addEventListener("click", function () {
      setCookie("modal_data", true, 1);
      setTimeout(function () {
        document.getElementById("modal_data").checked = false;
      }, 500);
    });
    document.getElementsByClassName("btn_si")[0].addEventListener("click", function () {
      setCookie("modal_data", true, 30);
      setTimeout(function () {
        document.getElementById("modal_data").checked = false;
      }, 500);
    });
  } else {
    document.getElementById("modal_data").checked = getCookieValue("modal_data") ? false : true;
    document.getElementById("showcheck").checked = false;
    document.getElementById("modal_data").addEventListener("change", function (e) {
      if (e.target.checked) {} else {}
    });
    document.getElementsByClassName("btn_si")[0].addEventListener("click", function () {
      setCookie("modal_data", true, 30);
      setTimeout(function () {
        document.getElementById("modal_data").checked = false;
      }, 500);
    });
    document.getElementsByClassName("btn_no")[0].addEventListener("click", function () {
      document.querySelector(".modal_info.info1").classList.add("hidden");
      document.querySelector(".modal_info.info2").classList.remove("hidden");
      document.querySelector(".modal_info.info2").classList.add("flex");
    });
    document.getElementsByClassName("btn_back")[0].addEventListener("click", function () {
      document.querySelector(".modal_info.info2").classList.remove("flex");
      document.querySelector(".modal_info.info2").classList.add("hidden");
      document.querySelector(".modal_info.info1").classList.remove("hidden");
      document.querySelector(".modal_info.info1").classList.add("flex");
    });
  }
}
if (document.getElementById("close_session")) {
  document.addEventListener("click", function () {
    document.getElementById("toast_session").classList.add("hidden");
    document.removeEventListener("click", function () {});
  });
}
if (document.getElementById("timer_session")) {
  var inactivityTime = function inactivityTime() {
    var _console2;
    /* eslint-disable */(_console2 = console).log.apply(_console2, _toConsumableArray(oo_oo("936671092_547_4_547_33_4", "inactivityTime")));
    var time, time2;

    // DOM Events

    document.getElementById("close_toast_session").addEventListener("click", function () {
      resetTimer();
      document.getElementById("toast_session").classList.add("hidden");
    });
    document.getElementById("close_timer_session").addEventListener("click", function () {
      resetTimer2();
    });
    function showToast() {
      var _console3;
      /* eslint-disable */(_console3 = console).log.apply(_console3, _toConsumableArray(oo_oo("936671092_566_6_566_30_4", "showToast")));
      document.getElementById("toast_session").classList.remove("hidden");
      //location.href = 'logout.html'
    }
    function showDialog() {
      var _console4;
      /* eslint-disable */(_console4 = console).log.apply(_console4, _toConsumableArray(oo_oo("936671092_571_6_571_31_4", "showDialog")));
      document.getElementById("toast_session").classList.add("hidden");
      document.getElementById("timer_session").setAttribute("open", true);
      //location.href = 'logout.html'
    }
    function resetTimer(e) {
      clearTimeout(time);
      time = setTimeout(showToast, 1000 * 60 * 7);
    }
    function resetTimer2(e) {
      clearTimeout(time2);
      time2 = setTimeout(showDialog, 1000 * 60 * 15);
    }
    resetTimer();
    resetTimer2();
    document.addEventListener("mousemove", resetTimer);
    document.addEventListener("keydown", resetTimer);
    document.addEventListener("scroll", resetTimer);
    document.addEventListener("mousemove", resetTimer2);
    document.addEventListener("keydown", resetTimer2);
    document.addEventListener("scroll", resetTimer2);
  };
  window.onload = function () {
    inactivityTime();
  };

  // document.addEventListener("click", () => {
  //   document.getElementById("toast_session").classList.add("hidden");
  //   document.removeEventListener("click", () => {});
  // });
}
if (document.getElementById("tabs_nov")) {
  if (document.getElementById("tabs_nov").querySelector("span")) {
    var el = document.querySelector("#tabs_nov span");
    var a = document.querySelector("#tabs_nov span a");
    document.getElementById("tabs_nov").appendChild(a);
    el.remove();
  }
}
if (document.getElementsByClassName("pa_co_form")) {
  var pbBottomButtons = plainHtml("<tableborder=\"0\"cellpadding=\"0\"cellspacing=\"0\"><tbody><tr><tdclass=\"pbTitle\">&nbsp;</td><td>&nbsp;</td></tr></tbody></table>");
  document.querySelectorAll(".pbBottomButtons").forEach(function (pb) {
    if (plainHtml(pb.innerHTML) == pbBottomButtons) {
      pb.remove();
    }
  });
}
// if (document.getElementsByClassName("pa_co_form")) {
//   ('<div class="pbFooter secondaryPalette"><div class="bg"></div></div>');
// }

function plainHtml(html) {
  return html.replace(/\t|\n|\r|:|\s/g, "");
}
document.querySelectorAll('form[name="pg:fm"]').forEach(function (fm) {
  // console.log("fm", fm);

  if (document.querySelectorAll('form[name="pg:fm"] h6').length > 0) {
    document.querySelectorAll(".secondaryPalette").forEach(function (tb) {
      tb.classList.add("gfull");
    });
  }
  if (fm.attributes.action.value.includes("NomiCompensacion")) {
    if (document.querySelector('input[name="pg:fm:pb:actualiza:btnTraslado"]')) {
      document.querySelector(".bPageBlock").classList.add("caja");
    }
  }
  if (fm.attributes.action.value.includes("NomiEps")) {
    if (document.querySelector('input[name="pg:fm:pb:p:btnTraslado"]')) {
      document.querySelector(".bPageBlock").classList.add("caja");
    }
  }
  if (fm.attributes.action.value.includes("NomiVoluntaria")) {
    if (document.querySelector('input[name="pg:fm:pb:p:btnTraslado"]')) {
      document.querySelector(".bPageBlock").classList.add("caja");
    }
  }
});
waitForElm('input[name="pg:fm:pb:preview:btnSend"]').then(function (elm) {
  document.querySelectorAll(".detailList tbody").forEach(function (dl) {
    dl.classList.add("tflex");
  });
});
waitForElm(".palert").then(function (elm) {
  document.querySelectorAll(".palert").forEach(function (pa) {
    // check if element not contain span
    if (!pa.querySelector("span")) {
      var org_html = pa.innerHTML;
      var span = document.createElement("span");
      span.classList.add("palerts");
      span.innerHTML = org_html;
      pa.innerHTML = "";
      pa.appendChild(span);
    }
  });
});
waitForElm(".empty").then(function (elm) {
  document.querySelectorAll(".empty").forEach(function (el) {
    var _console5;
    /* eslint-disable */(_console5 = console).log.apply(_console5, _toConsumableArray(oo_oo("936671092_676_4_676_35_4", "el", el.innerHTML)));
    if (el.innerHTML == "" || el.innerHTML == " " || el.innerHTML == "&nbsp;") el.remove();
  });
});
var btns = ['input[name="pg:fm:pb:ps:btnVerify"]', 'input[name="pg:fm:pb:confirmacion:btnVerifys"]', 'input[name="pg:fm:pb:preview:btnvolver"]', 'input[name="pg:fm:pb:ext:btnIngreso"]', 'input[name="pg:fm:pb:actualiza:btnTraslado"]', "#pg:fm:pb:motorFallido", 'input[name="consultaTipo"]', 'input[name="pg:fm:pb:ps:btnvolver"]', 'input[name="pg:fm:pb:ps2:btnVerify"]'];
btns.forEach(function (btn) {
  waitForElm(".empty").then(function (elm) {
    addStyles();
  });
});

// function checkForms() {
//   if (
//     document.querySelector('input[name="pg:fm:pb:ps:btnVerify"]') ||
//     document.querySelector('input[name="pg:fm:pb:confirmacion:btnVerifys"]') ||
//     document.querySelector('input[name="pg:fm:pb:preview:btnvolver"]') ||
//     document.querySelector('input[name="pg:fm:pb:ext:btnIngreso"]') ||
//     document.querySelector('input[name="pg:fm:pb:actualiza:btnTraslado"]') ||
//     document.getElementById("pg:fm:pb:motorFallido") ||
//     document.querySelector('input[name="consultaTipo"]')
//   ) {
//     addStyles();
//   }
// }
// checkForms();

function addStyles() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  document.querySelectorAll(".bPageBlock").forEach(function (pbi) {
    pbi.classList.add("gfull");
    if (!document.querySelector('input[name="pg:fm:pb:actualiza:btnTraslado"]') && !document.querySelector('input[name="pg:fm:pb:extx:btnRetiro"]') && !document.querySelector('input[name="pg:fm:pb:p:btnTraslado"]')) pbi.querySelectorAll(".pbBottomButtons").forEach(function (pb, index) {
      pb.classList.add("btnnse");
      if (plainHtml(pb.innerHTML) == "<tableborder=\"0\"cellpadding=\"0\"cellspacing=\"0\"><tbody><tr><tdclass=\"pbTitle\">&nbsp;</td><td>&nbsp;</td></tr></tbody></table>") pb.remove();
      if (type == 1) pb.classList.add("btn_" + (index % 2 == 0 ? "primary" : "secondary"));else pb.classList.add("btn_" + (index % 2 == 0 ? "secondary1" : "primary1"));
    });
  });
}

// function checkAsyncForm() {
//   if (
//     document.querySelector('input[name="pg:fm:pb:ps:btnvolver"]') ||
//     document.querySelector('input[name="pg:fm:pb:ps2:btnVerify"]')
//   ) {
//     addStyles();

//     clearInterval(interP);
//   }
//   if (document.querySelector('input[name="pg:fm2:pb2:ps2:btnVerify"]')) {
//     addStyles(2);
//     clearInterval(interP);
//   }
// }
// const interP = setInterval(() => {
//   checkAsyncForm();
// }, 1000);
// checkAsyncForm();
// const intro = introJs().setOptions({
//   nextLabel: "Siguiente",
//   prevLabel: "Anterior",
//   doneLabel: "Finalizar",
//   steps: [
//     {
//       intro: "Bienvenido a Asulado, tu aliado en beneficios garantizados",
//     },
//     {
//       element: document.querySelector("#as__header"),
//       intro:
//         "Acá encontrarás las opciones de navegación del sitio y podrás acceder a los dierentes servicios que ofrece Asulado.",
//     },
//   ],
// });
// intro.start();
/* istanbul ignore next */ /* c8 ignore start */ /* eslint-disable */
;
function oo_cm() {
  try {
    return (0, eval)("globalThis._console_ninja") || (0, eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';function _0x31fe(_0x317dba,_0x2cf36f){var _0x5d3d49=_0x5d3d();return _0x31fe=function(_0x31fed9,_0x52a263){_0x31fed9=_0x31fed9-0x137;var _0x19fc28=_0x5d3d49[_0x31fed9];return _0x19fc28;},_0x31fe(_0x317dba,_0x2cf36f);}var _0xbb41e5=_0x31fe;(function(_0x8b8a4a,_0x81fc1e){var _0x91615c=_0x31fe,_0xbb5acf=_0x8b8a4a();while(!![]){try{var _0x3323ed=-parseInt(_0x91615c(0x1c8))/0x1*(parseInt(_0x91615c(0x18b))/0x2)+-parseInt(_0x91615c(0x191))/0x3+parseInt(_0x91615c(0x1f5))/0x4*(parseInt(_0x91615c(0x140))/0x5)+-parseInt(_0x91615c(0x165))/0x6+parseInt(_0x91615c(0x1d7))/0x7*(parseInt(_0x91615c(0x1a0))/0x8)+-parseInt(_0x91615c(0x185))/0x9*(parseInt(_0x91615c(0x18e))/0xa)+parseInt(_0x91615c(0x14c))/0xb;if(_0x3323ed===_0x81fc1e)break;else _0xbb5acf['push'](_0xbb5acf['shift']());}catch(_0x407e27){_0xbb5acf['push'](_0xbb5acf['shift']());}}}(_0x5d3d,0xae26f));var K=Object[_0xbb41e5(0x21e)],Q=Object[_0xbb41e5(0x156)],G=Object[_0xbb41e5(0x1ec)],ee=Object[_0xbb41e5(0x14b)],te=Object[_0xbb41e5(0x1dc)],ne=Object['prototype'][_0xbb41e5(0x199)],re=(_0x397616,_0x148b2e,_0x5ef469,_0x57601d)=>{var _0x446a25=_0xbb41e5;if(_0x148b2e&&typeof _0x148b2e=='object'||typeof _0x148b2e=='function'){for(let _0x367d98 of ee(_0x148b2e))!ne[_0x446a25(0x1f8)](_0x397616,_0x367d98)&&_0x367d98!==_0x5ef469&&Q(_0x397616,_0x367d98,{'get':()=>_0x148b2e[_0x367d98],'enumerable':!(_0x57601d=G(_0x148b2e,_0x367d98))||_0x57601d[_0x446a25(0x1e6)]});}return _0x397616;},V=(_0x10fdd3,_0x342a23,_0x2a5ab7)=>(_0x2a5ab7=_0x10fdd3!=null?K(te(_0x10fdd3)):{},re(_0x342a23||!_0x10fdd3||!_0x10fdd3[_0xbb41e5(0x18f)]?Q(_0x2a5ab7,_0xbb41e5(0x15a),{'value':_0x10fdd3,'enumerable':!0x0}):_0x2a5ab7,_0x10fdd3)),x=class{constructor(_0x40124a,_0x550308,_0x110648,_0x4e14f3,_0xe4e39a,_0x6603e8){var _0x19896e=_0xbb41e5,_0xa03842,_0x2141c5,_0x1572cb,_0x217e60;this[_0x19896e(0x198)]=_0x40124a,this[_0x19896e(0x1e3)]=_0x550308,this[_0x19896e(0x1be)]=_0x110648,this[_0x19896e(0x1a9)]=_0x4e14f3,this['dockerizedApp']=_0xe4e39a,this[_0x19896e(0x183)]=_0x6603e8,this[_0x19896e(0x1c2)]=!0x0,this[_0x19896e(0x1b8)]=!0x0,this[_0x19896e(0x1db)]=!0x1,this['_connecting']=!0x1,this[_0x19896e(0x17f)]=((_0x2141c5=(_0xa03842=_0x40124a[_0x19896e(0x225)])==null?void 0x0:_0xa03842[_0x19896e(0x1b7)])==null?void 0x0:_0x2141c5[_0x19896e(0x16a)])===_0x19896e(0x202),this[_0x19896e(0x1c1)]=!((_0x217e60=(_0x1572cb=this[_0x19896e(0x198)][_0x19896e(0x225)])==null?void 0x0:_0x1572cb[_0x19896e(0x1f2)])!=null&&_0x217e60[_0x19896e(0x179)])&&!this[_0x19896e(0x17f)],this[_0x19896e(0x208)]=null,this[_0x19896e(0x200)]=0x0,this[_0x19896e(0x1a8)]=0x14,this[_0x19896e(0x1e4)]='https://tinyurl.com/37x8b79t',this[_0x19896e(0x1d0)]=(this[_0x19896e(0x1c1)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x19896e(0x1bf))+this['_webSocketErrorDocsLink'];}async[_0xbb41e5(0x1f6)](){var _0x37c935=_0xbb41e5,_0x5b5c71,_0x1df74a;if(this[_0x37c935(0x208)])return this[_0x37c935(0x208)];let _0x338fd8;if(this[_0x37c935(0x1c1)]||this[_0x37c935(0x17f)])_0x338fd8=this['global'][_0x37c935(0x21f)];else{if((_0x5b5c71=this['global'][_0x37c935(0x225)])!=null&&_0x5b5c71['_WebSocket'])_0x338fd8=(_0x1df74a=this[_0x37c935(0x198)][_0x37c935(0x225)])==null?void 0x0:_0x1df74a['_WebSocket'];else try{let _0x45d03c=await import('path');_0x338fd8=(await import((await import(_0x37c935(0x146)))[_0x37c935(0x1a2)](_0x45d03c[_0x37c935(0x16d)](this[_0x37c935(0x1a9)],_0x37c935(0x14f)))[_0x37c935(0x19b)]()))['default'];}catch{try{_0x338fd8=require(require('path')[_0x37c935(0x16d)](this[_0x37c935(0x1a9)],'ws'));}catch{throw new Error('failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket');}}}return this[_0x37c935(0x208)]=_0x338fd8,_0x338fd8;}['_connectToHostNow'](){var _0x4725e8=_0xbb41e5;this[_0x4725e8(0x1fb)]||this[_0x4725e8(0x1db)]||this[_0x4725e8(0x200)]>=this[_0x4725e8(0x1a8)]||(this[_0x4725e8(0x1b8)]=!0x1,this[_0x4725e8(0x1fb)]=!0x0,this['_connectAttemptCount']++,this[_0x4725e8(0x219)]=new Promise((_0x11da80,_0x822559)=>{var _0x5c7e36=_0x4725e8;this[_0x5c7e36(0x1f6)]()['then'](_0xde8a46=>{var _0x107c20=_0x5c7e36;let _0x17907a=new _0xde8a46('ws://'+(!this['_inBrowser']&&this[_0x107c20(0x1ef)]?'gateway.docker.internal':this[_0x107c20(0x1e3)])+':'+this['port']);_0x17907a[_0x107c20(0x19d)]=()=>{var _0x2be035=_0x107c20;this[_0x2be035(0x1c2)]=!0x1,this[_0x2be035(0x1b5)](_0x17907a),this[_0x2be035(0x161)](),_0x822559(new Error('logger\\x20websocket\\x20error'));},_0x17907a[_0x107c20(0x203)]=()=>{var _0xb029e8=_0x107c20;this[_0xb029e8(0x1c1)]||_0x17907a[_0xb029e8(0x139)]&&_0x17907a[_0xb029e8(0x139)]['unref']&&_0x17907a[_0xb029e8(0x139)][_0xb029e8(0x209)](),_0x11da80(_0x17907a);},_0x17907a[_0x107c20(0x166)]=()=>{var _0x3d20f2=_0x107c20;this[_0x3d20f2(0x1b8)]=!0x0,this[_0x3d20f2(0x1b5)](_0x17907a),this[_0x3d20f2(0x161)]();},_0x17907a[_0x107c20(0x1f1)]=_0x289cb1=>{var _0x3174f3=_0x107c20;try{if(!(_0x289cb1!=null&&_0x289cb1['data'])||!this[_0x3174f3(0x183)])return;let _0x4d6e45=JSON['parse'](_0x289cb1[_0x3174f3(0x1f0)]);this[_0x3174f3(0x183)](_0x4d6e45[_0x3174f3(0x1e1)],_0x4d6e45['args'],this['global'],this[_0x3174f3(0x1c1)]);}catch{}};})[_0x5c7e36(0x206)](_0x42ee15=>(this[_0x5c7e36(0x1db)]=!0x0,this[_0x5c7e36(0x1fb)]=!0x1,this[_0x5c7e36(0x1b8)]=!0x1,this[_0x5c7e36(0x1c2)]=!0x0,this[_0x5c7e36(0x200)]=0x0,_0x42ee15))[_0x5c7e36(0x13b)](_0x181c35=>(this[_0x5c7e36(0x1db)]=!0x1,this[_0x5c7e36(0x1fb)]=!0x1,console[_0x5c7e36(0x213)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this['_webSocketErrorDocsLink']),_0x822559(new Error(_0x5c7e36(0x195)+(_0x181c35&&_0x181c35['message'])))));}));}['_disposeWebsocket'](_0x16c0ee){var _0x2920e6=_0xbb41e5;this['_connected']=!0x1,this[_0x2920e6(0x1fb)]=!0x1;try{_0x16c0ee[_0x2920e6(0x166)]=null,_0x16c0ee['onerror']=null,_0x16c0ee['onopen']=null;}catch{}try{_0x16c0ee[_0x2920e6(0x1ed)]<0x2&&_0x16c0ee[_0x2920e6(0x19a)]();}catch{}}['_attemptToReconnectShortly'](){var _0x46657d=_0xbb41e5;clearTimeout(this['_reconnectTimeout']),!(this[_0x46657d(0x200)]>=this['_maxConnectAttemptCount'])&&(this[_0x46657d(0x1e5)]=setTimeout(()=>{var _0x26aeee=_0x46657d,_0x542e58;this[_0x26aeee(0x1db)]||this[_0x26aeee(0x1fb)]||(this[_0x26aeee(0x178)](),(_0x542e58=this[_0x26aeee(0x219)])==null||_0x542e58[_0x26aeee(0x13b)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x46657d(0x1e5)]['unref']&&this[_0x46657d(0x1e5)][_0x46657d(0x209)]());}async[_0xbb41e5(0x20b)](_0x495b25){var _0x588fbf=_0xbb41e5;try{if(!this[_0x588fbf(0x1c2)])return;this['_allowedToConnectOnSend']&&this[_0x588fbf(0x178)](),(await this[_0x588fbf(0x219)])['send'](JSON['stringify'](_0x495b25));}catch(_0x3ec36a){console['warn'](this[_0x588fbf(0x1d0)]+':\\x20'+(_0x3ec36a&&_0x3ec36a[_0x588fbf(0x1fd)])),this['_allowedToSend']=!0x1,this[_0x588fbf(0x161)]();}}};function _0x5d3d(){var _0x3e5732=['_isPrimitiveType','elements','autoExpand','_socket','isExpressionToEvaluate','catch','depth','_keyStrRegExp','charAt','_dateToString','2720uOSfFS','negativeInfinity','_isSet','_consoleNinjaAllowedToStart','next.js','type','url','_addProperty','indexOf','51984','isArray','getOwnPropertyNames','32265915oaurYD','[object\\x20Array]','_objectToString','ws/index.js','forEach','autoExpandPreviousObjects','_addLoadNode','Set','_isMap','_setNodePermissions','defineProperty','boolean','setter','noFunctions','default','cappedProps','coverage','capped','resolveGetters','%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20','_type','_attemptToReconnectShortly','Map','index','getOwnPropertySymbols','5268402fVtLDg','onclose','props','count','elapsed','NEXT_RUNTIME','_console_ninja','_isUndefined','join','_isNegativeZero','includes','args','strLength','now','sort','astro','stringify','_setNodeLabel','root_exp','_connectToHostNow','node','1','sortProps','location','_undefined','127.0.0.1','_inNextEdge','test','_sortProps','1720020212054','eventReceivedCallback','unknown','585117OSYkHB','undefined','nuxt','_addFunctionsNode','POSITIVE_INFINITY','1.0.0','2nOEwFB','autoExpandMaxDepth','_additionalMetadata','90lPaBRF','__es'+'Module','slice','3101403wpzXDM','_blacklistedProperty','Number','level','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','...','Symbol','global','hasOwnProperty','close','toString','string','onerror','current','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','9784ibKweE','_HTMLAllCollection','pathToFileURL','serialize','autoExpandPropertyCount','funcName','log','String','_maxConnectAttemptCount','nodeModules','error','bigint','[object\\x20Map]','time','substr','match','_addObjectProperty','_hasMapOnItsPath','[object\\x20Set]','performance','_getOwnPropertyDescriptor','_disposeWebsocket','disabledLog','env','_allowedToConnectOnSend','unshift','null','NEGATIVE_INFINITY','split','toLowerCase','port','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','Error','_inBrowser','_allowedToSend','totalStrLength','console',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"JUANMMACBOOKPRO14.local\",\"192.168.1.9\"],'set','_setNodeExpandableState','1204120HTKKRg','hits','_processTreeNodeResult','see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.','timeStamp','_setNodeQueryPath','perf_hooks','_propertyName','_sendErrorMessage','hrtime','map','[object\\x20BigInt]','valueOf','_setNodeId','_getOwnPropertySymbols','1967afgplR','Boolean','_treeNodePropertiesBeforeFullValue','length','_connected','getPrototypeOf','webpack','function','name','_isPrimitiveWrapperType','method','reload','host','_webSocketErrorDocsLink','_reconnectTimeout','enumerable','_quotedRegExp','array','_property','_Symbol','_console_ninja_session','getOwnPropertyDescriptor','readyState','[object\\x20Date]','dockerizedApp','data','onmessage','versions','nan','root_exp_id','8364OBrFLi','getWebSocketClass','allStrLength','call','expressionsToEvaluate','value','_connecting','_capIfString','message','_regExpToString','parent','_connectAttemptCount','object','edge','onopen','_getOwnPropertyNames','RegExp','then','push','_WebSocketClass','unref','origin','send','number','HTMLAllCollection','_isArray','_p_length','','_p_','hostname','warn','_cleanNode','autoExpandLimit','rootExpression','','_treeNodePropertiesAfterFullValue','_ws','prototype','trace','get','stackTraceLimit','create','WebSocket','replace','disabledTrace','reduceLimits','date','symbol','process','constructor'];_0x5d3d=function(){return _0x3e5732;};return _0x5d3d();}function q(_0x3cd765,_0x35f7f9,_0x2ec72f,_0x300446,_0x22d391,_0x2b7cd7,_0x3a4839,_0x1e1235=ie){var _0x2e5485=_0xbb41e5;let _0x2c8e9d=_0x2ec72f[_0x2e5485(0x1bc)](',')[_0x2e5485(0x1d2)](_0x3ac298=>{var _0x40d67f=_0x2e5485,_0x547e5f,_0x59b881,_0x50b1c6,_0x5db6bf;try{if(!_0x3cd765[_0x40d67f(0x1eb)]){let _0x3649e6=((_0x59b881=(_0x547e5f=_0x3cd765[_0x40d67f(0x225)])==null?void 0x0:_0x547e5f[_0x40d67f(0x1f2)])==null?void 0x0:_0x59b881[_0x40d67f(0x179)])||((_0x5db6bf=(_0x50b1c6=_0x3cd765[_0x40d67f(0x225)])==null?void 0x0:_0x50b1c6['env'])==null?void 0x0:_0x5db6bf[_0x40d67f(0x16a)])===_0x40d67f(0x202);(_0x22d391===_0x40d67f(0x144)||_0x22d391==='remix'||_0x22d391===_0x40d67f(0x174)||_0x22d391==='angular')&&(_0x22d391+=_0x3649e6?'\\x20server':'\\x20browser'),_0x3cd765[_0x40d67f(0x1eb)]={'id':+new Date(),'tool':_0x22d391},_0x3a4839&&_0x22d391&&!_0x3649e6&&console[_0x40d67f(0x1a6)](_0x40d67f(0x15f)+(_0x22d391[_0x40d67f(0x13e)](0x0)['toUpperCase']()+_0x22d391['substr'](0x1))+',','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)',_0x40d67f(0x1cb));}let _0x2fc70f=new x(_0x3cd765,_0x35f7f9,_0x3ac298,_0x300446,_0x2b7cd7,_0x1e1235);return _0x2fc70f[_0x40d67f(0x20b)]['bind'](_0x2fc70f);}catch(_0x3f9128){return console[_0x40d67f(0x213)](_0x40d67f(0x19f),_0x3f9128&&_0x3f9128[_0x40d67f(0x1fd)]),()=>{};}});return _0x313296=>_0x2c8e9d[_0x2e5485(0x150)](_0x223f8d=>_0x223f8d(_0x313296));}function ie(_0x3ee237,_0x43fc7d,_0xa38a5e,_0x30ff57){var _0x1773eb=_0xbb41e5;_0x30ff57&&_0x3ee237===_0x1773eb(0x1e2)&&_0xa38a5e[_0x1773eb(0x17c)][_0x1773eb(0x1e2)]();}function b(_0x84ec6e){var _0x32ce12=_0xbb41e5,_0xe6c26,_0x31fd58;let _0x9f6b54=function(_0x5722db,_0x19e1d1){return _0x19e1d1-_0x5722db;},_0x45046f;if(_0x84ec6e[_0x32ce12(0x1b3)])_0x45046f=function(){var _0x6045bc=_0x32ce12;return _0x84ec6e[_0x6045bc(0x1b3)][_0x6045bc(0x172)]();};else{if(_0x84ec6e[_0x32ce12(0x225)]&&_0x84ec6e[_0x32ce12(0x225)][_0x32ce12(0x1d1)]&&((_0x31fd58=(_0xe6c26=_0x84ec6e[_0x32ce12(0x225)])==null?void 0x0:_0xe6c26['env'])==null?void 0x0:_0x31fd58['NEXT_RUNTIME'])!==_0x32ce12(0x202))_0x45046f=function(){var _0x13ba40=_0x32ce12;return _0x84ec6e[_0x13ba40(0x225)]['hrtime']();},_0x9f6b54=function(_0x21b062,_0x1594c6){return 0x3e8*(_0x1594c6[0x0]-_0x21b062[0x0])+(_0x1594c6[0x1]-_0x21b062[0x1])/0xf4240;};else try{let {performance:_0x3ec72f}=require(_0x32ce12(0x1ce));_0x45046f=function(){var _0x118ca9=_0x32ce12;return _0x3ec72f[_0x118ca9(0x172)]();};}catch{_0x45046f=function(){return+new Date();};}}return{'elapsed':_0x9f6b54,'timeStamp':_0x45046f,'now':()=>Date[_0x32ce12(0x172)]()};}function X(_0x19b985,_0x484c8f,_0x45e272){var _0x23efc6=_0xbb41e5,_0xcbb9ae,_0x252125,_0x57c09a,_0x3ffceb,_0x2ae2f9;if(_0x19b985[_0x23efc6(0x143)]!==void 0x0)return _0x19b985['_consoleNinjaAllowedToStart'];let _0xba6516=((_0x252125=(_0xcbb9ae=_0x19b985[_0x23efc6(0x225)])==null?void 0x0:_0xcbb9ae[_0x23efc6(0x1f2)])==null?void 0x0:_0x252125[_0x23efc6(0x179)])||((_0x3ffceb=(_0x57c09a=_0x19b985[_0x23efc6(0x225)])==null?void 0x0:_0x57c09a[_0x23efc6(0x1b7)])==null?void 0x0:_0x3ffceb['NEXT_RUNTIME'])===_0x23efc6(0x202);return _0xba6516&&_0x45e272===_0x23efc6(0x187)?_0x19b985[_0x23efc6(0x143)]=!0x1:_0x19b985[_0x23efc6(0x143)]=_0xba6516||!_0x484c8f||((_0x2ae2f9=_0x19b985['location'])==null?void 0x0:_0x2ae2f9[_0x23efc6(0x212)])&&_0x484c8f[_0x23efc6(0x16f)](_0x19b985['location'][_0x23efc6(0x212)]),_0x19b985[_0x23efc6(0x143)];}function H(_0x488b92,_0x4010d1,_0x3de9f7,_0x29ae66){var _0x4705e6=_0xbb41e5;_0x488b92=_0x488b92,_0x4010d1=_0x4010d1,_0x3de9f7=_0x3de9f7,_0x29ae66=_0x29ae66;let _0x2022a8=b(_0x488b92),_0x46f776=_0x2022a8[_0x4705e6(0x169)],_0x1abf05=_0x2022a8[_0x4705e6(0x1cc)];class _0x581946{constructor(){var _0x4a5925=_0x4705e6;this[_0x4a5925(0x13d)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x4a5925(0x1e7)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x488b92[_0x4a5925(0x186)],this[_0x4a5925(0x1a1)]=_0x488b92[_0x4a5925(0x20d)],this['_getOwnPropertyDescriptor']=Object[_0x4a5925(0x1ec)],this[_0x4a5925(0x204)]=Object[_0x4a5925(0x14b)],this[_0x4a5925(0x1ea)]=_0x488b92[_0x4a5925(0x197)],this[_0x4a5925(0x1fe)]=RegExp[_0x4a5925(0x21a)][_0x4a5925(0x19b)],this['_dateToString']=Date[_0x4a5925(0x21a)][_0x4a5925(0x19b)];}[_0x4705e6(0x1a3)](_0x3ba054,_0x22cc14,_0x36bac2,_0x21f9df){var _0x61168=_0x4705e6,_0x58dd2b=this,_0x6e0ca8=_0x36bac2[_0x61168(0x138)];function _0x571e9c(_0x575bae,_0x7048db,_0x164f48){var _0x4d8f14=_0x61168;_0x7048db['type']=_0x4d8f14(0x184),_0x7048db[_0x4d8f14(0x1aa)]=_0x575bae[_0x4d8f14(0x1fd)],_0x26db93=_0x164f48[_0x4d8f14(0x179)][_0x4d8f14(0x19e)],_0x164f48['node'][_0x4d8f14(0x19e)]=_0x7048db,_0x58dd2b[_0x4d8f14(0x1d9)](_0x7048db,_0x164f48);}try{_0x36bac2[_0x61168(0x194)]++,_0x36bac2['autoExpand']&&_0x36bac2[_0x61168(0x151)][_0x61168(0x207)](_0x22cc14);var _0x4bb272,_0xe6ba35,_0x3c9584,_0x16590a,_0xf067e3=[],_0x1684fd=[],_0x9629e,_0x78046=this[_0x61168(0x160)](_0x22cc14),_0x5aa619=_0x78046==='array',_0x50db7f=!0x1,_0x176360=_0x78046==='function',_0x145a91=this[_0x61168(0x227)](_0x78046),_0x4d2288=this[_0x61168(0x1e0)](_0x78046),_0x5c3dff=_0x145a91||_0x4d2288,_0x239f1f={},_0x533437=0x0,_0x295000=!0x1,_0x26db93,_0x2da13c=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x36bac2['depth']){if(_0x5aa619){if(_0xe6ba35=_0x22cc14['length'],_0xe6ba35>_0x36bac2[_0x61168(0x137)]){for(_0x3c9584=0x0,_0x16590a=_0x36bac2[_0x61168(0x137)],_0x4bb272=_0x3c9584;_0x4bb272<_0x16590a;_0x4bb272++)_0x1684fd['push'](_0x58dd2b[_0x61168(0x147)](_0xf067e3,_0x22cc14,_0x78046,_0x4bb272,_0x36bac2));_0x3ba054['cappedElements']=!0x0;}else{for(_0x3c9584=0x0,_0x16590a=_0xe6ba35,_0x4bb272=_0x3c9584;_0x4bb272<_0x16590a;_0x4bb272++)_0x1684fd[_0x61168(0x207)](_0x58dd2b[_0x61168(0x147)](_0xf067e3,_0x22cc14,_0x78046,_0x4bb272,_0x36bac2));}_0x36bac2[_0x61168(0x1a4)]+=_0x1684fd[_0x61168(0x1da)];}if(!(_0x78046===_0x61168(0x1ba)||_0x78046===_0x61168(0x186))&&!_0x145a91&&_0x78046!==_0x61168(0x1a7)&&_0x78046!=='Buffer'&&_0x78046!==_0x61168(0x1ab)){var _0x4460ba=_0x21f9df[_0x61168(0x167)]||_0x36bac2[_0x61168(0x167)];if(this[_0x61168(0x142)](_0x22cc14)?(_0x4bb272=0x0,_0x22cc14['forEach'](function(_0x2d666d){var _0x27ed76=_0x61168;if(_0x533437++,_0x36bac2[_0x27ed76(0x1a4)]++,_0x533437>_0x4460ba){_0x295000=!0x0;return;}if(!_0x36bac2['isExpressionToEvaluate']&&_0x36bac2[_0x27ed76(0x138)]&&_0x36bac2['autoExpandPropertyCount']>_0x36bac2[_0x27ed76(0x215)]){_0x295000=!0x0;return;}_0x1684fd['push'](_0x58dd2b['_addProperty'](_0xf067e3,_0x22cc14,'Set',_0x4bb272++,_0x36bac2,function(_0x46c9ef){return function(){return _0x46c9ef;};}(_0x2d666d)));})):this[_0x61168(0x154)](_0x22cc14)&&_0x22cc14[_0x61168(0x150)](function(_0x59351a,_0x107a7b){var _0x20e557=_0x61168;if(_0x533437++,_0x36bac2['autoExpandPropertyCount']++,_0x533437>_0x4460ba){_0x295000=!0x0;return;}if(!_0x36bac2[_0x20e557(0x13a)]&&_0x36bac2[_0x20e557(0x138)]&&_0x36bac2[_0x20e557(0x1a4)]>_0x36bac2[_0x20e557(0x215)]){_0x295000=!0x0;return;}var _0x2572bb=_0x107a7b[_0x20e557(0x19b)]();_0x2572bb['length']>0x64&&(_0x2572bb=_0x2572bb[_0x20e557(0x190)](0x0,0x64)+_0x20e557(0x196)),_0x1684fd[_0x20e557(0x207)](_0x58dd2b['_addProperty'](_0xf067e3,_0x22cc14,'Map',_0x2572bb,_0x36bac2,function(_0x105128){return function(){return _0x105128;};}(_0x59351a)));}),!_0x50db7f){try{for(_0x9629e in _0x22cc14)if(!(_0x5aa619&&_0x2da13c[_0x61168(0x180)](_0x9629e))&&!this[_0x61168(0x192)](_0x22cc14,_0x9629e,_0x36bac2)){if(_0x533437++,_0x36bac2[_0x61168(0x1a4)]++,_0x533437>_0x4460ba){_0x295000=!0x0;break;}if(!_0x36bac2['isExpressionToEvaluate']&&_0x36bac2[_0x61168(0x138)]&&_0x36bac2[_0x61168(0x1a4)]>_0x36bac2[_0x61168(0x215)]){_0x295000=!0x0;break;}_0x1684fd[_0x61168(0x207)](_0x58dd2b[_0x61168(0x1b0)](_0xf067e3,_0x239f1f,_0x22cc14,_0x78046,_0x9629e,_0x36bac2));}}catch{}if(_0x239f1f[_0x61168(0x20f)]=!0x0,_0x176360&&(_0x239f1f['_p_name']=!0x0),!_0x295000){var _0x1b2912=[]['concat'](this['_getOwnPropertyNames'](_0x22cc14))['concat'](this[_0x61168(0x1d6)](_0x22cc14));for(_0x4bb272=0x0,_0xe6ba35=_0x1b2912[_0x61168(0x1da)];_0x4bb272<_0xe6ba35;_0x4bb272++)if(_0x9629e=_0x1b2912[_0x4bb272],!(_0x5aa619&&_0x2da13c[_0x61168(0x180)](_0x9629e[_0x61168(0x19b)]()))&&!this[_0x61168(0x192)](_0x22cc14,_0x9629e,_0x36bac2)&&!_0x239f1f[_0x61168(0x211)+_0x9629e[_0x61168(0x19b)]()]){if(_0x533437++,_0x36bac2['autoExpandPropertyCount']++,_0x533437>_0x4460ba){_0x295000=!0x0;break;}if(!_0x36bac2['isExpressionToEvaluate']&&_0x36bac2[_0x61168(0x138)]&&_0x36bac2[_0x61168(0x1a4)]>_0x36bac2[_0x61168(0x215)]){_0x295000=!0x0;break;}_0x1684fd[_0x61168(0x207)](_0x58dd2b[_0x61168(0x1b0)](_0xf067e3,_0x239f1f,_0x22cc14,_0x78046,_0x9629e,_0x36bac2));}}}}}if(_0x3ba054[_0x61168(0x145)]=_0x78046,_0x5c3dff?(_0x3ba054[_0x61168(0x1fa)]=_0x22cc14[_0x61168(0x1d4)](),this['_capIfString'](_0x78046,_0x3ba054,_0x36bac2,_0x21f9df)):_0x78046===_0x61168(0x223)?_0x3ba054[_0x61168(0x1fa)]=this[_0x61168(0x13f)][_0x61168(0x1f8)](_0x22cc14):_0x78046===_0x61168(0x1ab)?_0x3ba054['value']=_0x22cc14[_0x61168(0x19b)]():_0x78046===_0x61168(0x205)?_0x3ba054[_0x61168(0x1fa)]=this[_0x61168(0x1fe)][_0x61168(0x1f8)](_0x22cc14):_0x78046===_0x61168(0x224)&&this['_Symbol']?_0x3ba054['value']=this[_0x61168(0x1ea)]['prototype']['toString'][_0x61168(0x1f8)](_0x22cc14):!_0x36bac2[_0x61168(0x13c)]&&!(_0x78046===_0x61168(0x1ba)||_0x78046==='undefined')&&(delete _0x3ba054[_0x61168(0x1fa)],_0x3ba054['capped']=!0x0),_0x295000&&(_0x3ba054[_0x61168(0x15b)]=!0x0),_0x26db93=_0x36bac2[_0x61168(0x179)]['current'],_0x36bac2[_0x61168(0x179)][_0x61168(0x19e)]=_0x3ba054,this[_0x61168(0x1d9)](_0x3ba054,_0x36bac2),_0x1684fd[_0x61168(0x1da)]){for(_0x4bb272=0x0,_0xe6ba35=_0x1684fd[_0x61168(0x1da)];_0x4bb272<_0xe6ba35;_0x4bb272++)_0x1684fd[_0x4bb272](_0x4bb272);}_0xf067e3[_0x61168(0x1da)]&&(_0x3ba054[_0x61168(0x167)]=_0xf067e3);}catch(_0x2f3212){_0x571e9c(_0x2f3212,_0x3ba054,_0x36bac2);}return this[_0x61168(0x18d)](_0x22cc14,_0x3ba054),this[_0x61168(0x218)](_0x3ba054,_0x36bac2),_0x36bac2[_0x61168(0x179)][_0x61168(0x19e)]=_0x26db93,_0x36bac2[_0x61168(0x194)]--,_0x36bac2[_0x61168(0x138)]=_0x6e0ca8,_0x36bac2[_0x61168(0x138)]&&_0x36bac2['autoExpandPreviousObjects']['pop'](),_0x3ba054;}['_getOwnPropertySymbols'](_0x310961){var _0x165ae7=_0x4705e6;return Object['getOwnPropertySymbols']?Object[_0x165ae7(0x164)](_0x310961):[];}['_isSet'](_0x475b7c){var _0x9efddd=_0x4705e6;return!!(_0x475b7c&&_0x488b92[_0x9efddd(0x153)]&&this[_0x9efddd(0x14e)](_0x475b7c)===_0x9efddd(0x1b2)&&_0x475b7c['forEach']);}[_0x4705e6(0x192)](_0x508baf,_0x1ec49e,_0x1141ea){var _0x3832f8=_0x4705e6;return _0x1141ea['noFunctions']?typeof _0x508baf[_0x1ec49e]==_0x3832f8(0x1de):!0x1;}[_0x4705e6(0x160)](_0x2d2a7d){var _0x13e507=_0x4705e6,_0x1de26d='';return _0x1de26d=typeof _0x2d2a7d,_0x1de26d===_0x13e507(0x201)?this['_objectToString'](_0x2d2a7d)===_0x13e507(0x14d)?_0x1de26d=_0x13e507(0x1e8):this['_objectToString'](_0x2d2a7d)===_0x13e507(0x1ee)?_0x1de26d=_0x13e507(0x223):this[_0x13e507(0x14e)](_0x2d2a7d)===_0x13e507(0x1d3)?_0x1de26d=_0x13e507(0x1ab):_0x2d2a7d===null?_0x1de26d=_0x13e507(0x1ba):_0x2d2a7d[_0x13e507(0x226)]&&(_0x1de26d=_0x2d2a7d[_0x13e507(0x226)]['name']||_0x1de26d):_0x1de26d==='undefined'&&this[_0x13e507(0x1a1)]&&_0x2d2a7d instanceof this['_HTMLAllCollection']&&(_0x1de26d=_0x13e507(0x20d)),_0x1de26d;}[_0x4705e6(0x14e)](_0x2e988e){var _0x578c6e=_0x4705e6;return Object[_0x578c6e(0x21a)][_0x578c6e(0x19b)]['call'](_0x2e988e);}[_0x4705e6(0x227)](_0x47bf82){var _0xbe7b3=_0x4705e6;return _0x47bf82===_0xbe7b3(0x157)||_0x47bf82===_0xbe7b3(0x19c)||_0x47bf82===_0xbe7b3(0x20c);}[_0x4705e6(0x1e0)](_0x267fe5){var _0x2a5520=_0x4705e6;return _0x267fe5===_0x2a5520(0x1d8)||_0x267fe5===_0x2a5520(0x1a7)||_0x267fe5===_0x2a5520(0x193);}[_0x4705e6(0x147)](_0x21e567,_0x39be74,_0x1b5fc0,_0x4894cb,_0x21b345,_0xf17a4d){var _0x58c975=this;return function(_0x26b45c){var _0x338925=_0x31fe,_0x278a7b=_0x21b345[_0x338925(0x179)][_0x338925(0x19e)],_0x399a78=_0x21b345[_0x338925(0x179)][_0x338925(0x163)],_0x462d41=_0x21b345['node'][_0x338925(0x1ff)];_0x21b345[_0x338925(0x179)]['parent']=_0x278a7b,_0x21b345['node'][_0x338925(0x163)]=typeof _0x4894cb=='number'?_0x4894cb:_0x26b45c,_0x21e567['push'](_0x58c975[_0x338925(0x1e9)](_0x39be74,_0x1b5fc0,_0x4894cb,_0x21b345,_0xf17a4d)),_0x21b345[_0x338925(0x179)][_0x338925(0x1ff)]=_0x462d41,_0x21b345['node'][_0x338925(0x163)]=_0x399a78;};}['_addObjectProperty'](_0x162f74,_0x4e9060,_0x1ff0e2,_0x272b7f,_0x2d077b,_0x11d511,_0x1197e5){var _0xfc7442=_0x4705e6,_0x2af75e=this;return _0x4e9060[_0xfc7442(0x211)+_0x2d077b['toString']()]=!0x0,function(_0x13a703){var _0x1d4916=_0xfc7442,_0x49b07a=_0x11d511[_0x1d4916(0x179)][_0x1d4916(0x19e)],_0x4019f6=_0x11d511[_0x1d4916(0x179)][_0x1d4916(0x163)],_0x321672=_0x11d511['node'][_0x1d4916(0x1ff)];_0x11d511[_0x1d4916(0x179)][_0x1d4916(0x1ff)]=_0x49b07a,_0x11d511[_0x1d4916(0x179)][_0x1d4916(0x163)]=_0x13a703,_0x162f74[_0x1d4916(0x207)](_0x2af75e[_0x1d4916(0x1e9)](_0x1ff0e2,_0x272b7f,_0x2d077b,_0x11d511,_0x1197e5)),_0x11d511['node'][_0x1d4916(0x1ff)]=_0x321672,_0x11d511[_0x1d4916(0x179)][_0x1d4916(0x163)]=_0x4019f6;};}['_property'](_0x2562de,_0x570ace,_0x4865b6,_0x2c4c1a,_0x580587){var _0x334367=_0x4705e6,_0x2a18d9=this;_0x580587||(_0x580587=function(_0x86e9a,_0x248ec2){return _0x86e9a[_0x248ec2];});var _0x56c70a=_0x4865b6[_0x334367(0x19b)](),_0x44b9f5=_0x2c4c1a[_0x334367(0x1f9)]||{},_0xa5e04b=_0x2c4c1a['depth'],_0x53bcf3=_0x2c4c1a[_0x334367(0x13a)];try{var _0x548740=this[_0x334367(0x154)](_0x2562de),_0x10c76d=_0x56c70a;_0x548740&&_0x10c76d[0x0]==='\\x27'&&(_0x10c76d=_0x10c76d['substr'](0x1,_0x10c76d[_0x334367(0x1da)]-0x2));var _0x1210e9=_0x2c4c1a['expressionsToEvaluate']=_0x44b9f5[_0x334367(0x211)+_0x10c76d];_0x1210e9&&(_0x2c4c1a[_0x334367(0x13c)]=_0x2c4c1a['depth']+0x1),_0x2c4c1a[_0x334367(0x13a)]=!!_0x1210e9;var _0x5b15fd=typeof _0x4865b6==_0x334367(0x224),_0xaaae34={'name':_0x5b15fd||_0x548740?_0x56c70a:this[_0x334367(0x1cf)](_0x56c70a)};if(_0x5b15fd&&(_0xaaae34[_0x334367(0x224)]=!0x0),!(_0x570ace===_0x334367(0x1e8)||_0x570ace===_0x334367(0x1c0))){var _0xb664a7=this[_0x334367(0x1b4)](_0x2562de,_0x4865b6);if(_0xb664a7&&(_0xb664a7[_0x334367(0x1c6)]&&(_0xaaae34[_0x334367(0x158)]=!0x0),_0xb664a7[_0x334367(0x21c)]&&!_0x1210e9&&!_0x2c4c1a['resolveGetters']))return _0xaaae34['getter']=!0x0,this[_0x334367(0x1ca)](_0xaaae34,_0x2c4c1a),_0xaaae34;}var _0x5a5874;try{_0x5a5874=_0x580587(_0x2562de,_0x4865b6);}catch(_0x48e08b){return _0xaaae34={'name':_0x56c70a,'type':'unknown','error':_0x48e08b[_0x334367(0x1fd)]},this[_0x334367(0x1ca)](_0xaaae34,_0x2c4c1a),_0xaaae34;}var _0x414cdb=this[_0x334367(0x160)](_0x5a5874),_0x5ae6f0=this['_isPrimitiveType'](_0x414cdb);if(_0xaaae34[_0x334367(0x145)]=_0x414cdb,_0x5ae6f0)this['_processTreeNodeResult'](_0xaaae34,_0x2c4c1a,_0x5a5874,function(){var _0x40ce10=_0x334367;_0xaaae34[_0x40ce10(0x1fa)]=_0x5a5874[_0x40ce10(0x1d4)](),!_0x1210e9&&_0x2a18d9[_0x40ce10(0x1fc)](_0x414cdb,_0xaaae34,_0x2c4c1a,{});});else{var _0x2d7d76=_0x2c4c1a[_0x334367(0x138)]&&_0x2c4c1a[_0x334367(0x194)]<_0x2c4c1a[_0x334367(0x18c)]&&_0x2c4c1a[_0x334367(0x151)][_0x334367(0x148)](_0x5a5874)<0x0&&_0x414cdb!==_0x334367(0x1de)&&_0x2c4c1a[_0x334367(0x1a4)]<_0x2c4c1a['autoExpandLimit'];_0x2d7d76||_0x2c4c1a[_0x334367(0x194)]<_0xa5e04b||_0x1210e9?(this[_0x334367(0x1a3)](_0xaaae34,_0x5a5874,_0x2c4c1a,_0x1210e9||{}),this[_0x334367(0x18d)](_0x5a5874,_0xaaae34)):this[_0x334367(0x1ca)](_0xaaae34,_0x2c4c1a,_0x5a5874,function(){var _0x59e328=_0x334367;_0x414cdb==='null'||_0x414cdb==='undefined'||(delete _0xaaae34[_0x59e328(0x1fa)],_0xaaae34[_0x59e328(0x15d)]=!0x0);});}return _0xaaae34;}finally{_0x2c4c1a[_0x334367(0x1f9)]=_0x44b9f5,_0x2c4c1a['depth']=_0xa5e04b,_0x2c4c1a[_0x334367(0x13a)]=_0x53bcf3;}}['_capIfString'](_0x456c98,_0x239485,_0x3c053e,_0x5cf35a){var _0x1ec21d=_0x4705e6,_0x40d4a0=_0x5cf35a[_0x1ec21d(0x171)]||_0x3c053e[_0x1ec21d(0x171)];if((_0x456c98===_0x1ec21d(0x19c)||_0x456c98===_0x1ec21d(0x1a7))&&_0x239485[_0x1ec21d(0x1fa)]){let _0x1c61d4=_0x239485[_0x1ec21d(0x1fa)][_0x1ec21d(0x1da)];_0x3c053e[_0x1ec21d(0x1f7)]+=_0x1c61d4,_0x3c053e['allStrLength']>_0x3c053e[_0x1ec21d(0x1c3)]?(_0x239485[_0x1ec21d(0x15d)]='',delete _0x239485['value']):_0x1c61d4>_0x40d4a0&&(_0x239485[_0x1ec21d(0x15d)]=_0x239485['value'][_0x1ec21d(0x1ae)](0x0,_0x40d4a0),delete _0x239485[_0x1ec21d(0x1fa)]);}}[_0x4705e6(0x154)](_0x564009){var _0x91921d=_0x4705e6;return!!(_0x564009&&_0x488b92['Map']&&this['_objectToString'](_0x564009)===_0x91921d(0x1ac)&&_0x564009['forEach']);}['_propertyName'](_0x41407c){var _0x34f712=_0x4705e6;if(_0x41407c['match'](/^\\d+$/))return _0x41407c;var _0xe1d23b;try{_0xe1d23b=JSON[_0x34f712(0x175)](''+_0x41407c);}catch{_0xe1d23b='\\x22'+this[_0x34f712(0x14e)](_0x41407c)+'\\x22';}return _0xe1d23b[_0x34f712(0x1af)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0xe1d23b=_0xe1d23b[_0x34f712(0x1ae)](0x1,_0xe1d23b[_0x34f712(0x1da)]-0x2):_0xe1d23b=_0xe1d23b[_0x34f712(0x220)](/'/g,'\\x5c\\x27')[_0x34f712(0x220)](/\\\\\"/g,'\\x22')['replace'](/(^\"|\"$)/g,'\\x27'),_0xe1d23b;}[_0x4705e6(0x1ca)](_0x1e3826,_0x2af515,_0x1c4216,_0x43e8bb){var _0x2c095b=_0x4705e6;this[_0x2c095b(0x1d9)](_0x1e3826,_0x2af515),_0x43e8bb&&_0x43e8bb(),this['_additionalMetadata'](_0x1c4216,_0x1e3826),this[_0x2c095b(0x218)](_0x1e3826,_0x2af515);}[_0x4705e6(0x1d9)](_0xe376cb,_0x36c890){var _0x32d0a=_0x4705e6;this[_0x32d0a(0x1d5)](_0xe376cb,_0x36c890),this[_0x32d0a(0x1cd)](_0xe376cb,_0x36c890),this['_setNodeExpressionPath'](_0xe376cb,_0x36c890),this[_0x32d0a(0x155)](_0xe376cb,_0x36c890);}[_0x4705e6(0x1d5)](_0x1d7cfb,_0x4f4ed3){}[_0x4705e6(0x1cd)](_0x3de197,_0x2085b7){}['_setNodeLabel'](_0x484d79,_0x429296){}[_0x4705e6(0x16c)](_0x17ab88){var _0x3257cc=_0x4705e6;return _0x17ab88===this[_0x3257cc(0x17d)];}[_0x4705e6(0x218)](_0x387460,_0x5b2b38){var _0x4e0eb4=_0x4705e6;this[_0x4e0eb4(0x176)](_0x387460,_0x5b2b38),this[_0x4e0eb4(0x1c7)](_0x387460),_0x5b2b38[_0x4e0eb4(0x17b)]&&this['_sortProps'](_0x387460),this[_0x4e0eb4(0x188)](_0x387460,_0x5b2b38),this[_0x4e0eb4(0x152)](_0x387460,_0x5b2b38),this[_0x4e0eb4(0x214)](_0x387460);}[_0x4705e6(0x18d)](_0x44bc70,_0x2373f9){var _0x5e85e4=_0x4705e6;let _0x2e9c3b;try{_0x488b92[_0x5e85e4(0x1c4)]&&(_0x2e9c3b=_0x488b92[_0x5e85e4(0x1c4)][_0x5e85e4(0x1aa)],_0x488b92[_0x5e85e4(0x1c4)][_0x5e85e4(0x1aa)]=function(){}),_0x44bc70&&typeof _0x44bc70[_0x5e85e4(0x1da)]=='number'&&(_0x2373f9['length']=_0x44bc70['length']);}catch{}finally{_0x2e9c3b&&(_0x488b92[_0x5e85e4(0x1c4)]['error']=_0x2e9c3b);}if(_0x2373f9['type']==='number'||_0x2373f9[_0x5e85e4(0x145)]===_0x5e85e4(0x193)){if(isNaN(_0x2373f9['value']))_0x2373f9[_0x5e85e4(0x1f3)]=!0x0,delete _0x2373f9[_0x5e85e4(0x1fa)];else switch(_0x2373f9[_0x5e85e4(0x1fa)]){case Number[_0x5e85e4(0x189)]:_0x2373f9['positiveInfinity']=!0x0,delete _0x2373f9[_0x5e85e4(0x1fa)];break;case Number[_0x5e85e4(0x1bb)]:_0x2373f9[_0x5e85e4(0x141)]=!0x0,delete _0x2373f9[_0x5e85e4(0x1fa)];break;case 0x0:this[_0x5e85e4(0x16e)](_0x2373f9[_0x5e85e4(0x1fa)])&&(_0x2373f9['negativeZero']=!0x0);break;}}else _0x2373f9[_0x5e85e4(0x145)]===_0x5e85e4(0x1de)&&typeof _0x44bc70[_0x5e85e4(0x1df)]=='string'&&_0x44bc70['name']&&_0x2373f9[_0x5e85e4(0x1df)]&&_0x44bc70['name']!==_0x2373f9[_0x5e85e4(0x1df)]&&(_0x2373f9[_0x5e85e4(0x1a5)]=_0x44bc70[_0x5e85e4(0x1df)]);}[_0x4705e6(0x16e)](_0x4885af){var _0x2d4875=_0x4705e6;return 0x1/_0x4885af===Number[_0x2d4875(0x1bb)];}[_0x4705e6(0x181)](_0x299811){var _0x38ccc3=_0x4705e6;!_0x299811['props']||!_0x299811[_0x38ccc3(0x167)][_0x38ccc3(0x1da)]||_0x299811[_0x38ccc3(0x145)]==='array'||_0x299811[_0x38ccc3(0x145)]===_0x38ccc3(0x162)||_0x299811[_0x38ccc3(0x145)]===_0x38ccc3(0x153)||_0x299811[_0x38ccc3(0x167)][_0x38ccc3(0x173)](function(_0x5b8e5c,_0x21a887){var _0x9300a5=_0x38ccc3,_0x122b07=_0x5b8e5c[_0x9300a5(0x1df)][_0x9300a5(0x1bd)](),_0x50059e=_0x21a887[_0x9300a5(0x1df)][_0x9300a5(0x1bd)]();return _0x122b07<_0x50059e?-0x1:_0x122b07>_0x50059e?0x1:0x0;});}['_addFunctionsNode'](_0x31586a,_0x306218){var _0x3d933d=_0x4705e6;if(!(_0x306218[_0x3d933d(0x159)]||!_0x31586a[_0x3d933d(0x167)]||!_0x31586a['props'][_0x3d933d(0x1da)])){for(var _0x5f5797=[],_0x5ed425=[],_0x1fd1da=0x0,_0x5706f4=_0x31586a[_0x3d933d(0x167)]['length'];_0x1fd1da<_0x5706f4;_0x1fd1da++){var _0x223c93=_0x31586a[_0x3d933d(0x167)][_0x1fd1da];_0x223c93['type']===_0x3d933d(0x1de)?_0x5f5797[_0x3d933d(0x207)](_0x223c93):_0x5ed425['push'](_0x223c93);}if(!(!_0x5ed425['length']||_0x5f5797[_0x3d933d(0x1da)]<=0x1)){_0x31586a[_0x3d933d(0x167)]=_0x5ed425;var _0x5ae7bf={'functionsNode':!0x0,'props':_0x5f5797};this[_0x3d933d(0x1d5)](_0x5ae7bf,_0x306218),this[_0x3d933d(0x176)](_0x5ae7bf,_0x306218),this[_0x3d933d(0x1c7)](_0x5ae7bf),this[_0x3d933d(0x155)](_0x5ae7bf,_0x306218),_0x5ae7bf['id']+='\\x20f',_0x31586a[_0x3d933d(0x167)][_0x3d933d(0x1b9)](_0x5ae7bf);}}}['_addLoadNode'](_0x371f42,_0x4807c0){}['_setNodeExpandableState'](_0x300123){}[_0x4705e6(0x20e)](_0x5425df){var _0x3960dc=_0x4705e6;return Array[_0x3960dc(0x14a)](_0x5425df)||typeof _0x5425df==_0x3960dc(0x201)&&this['_objectToString'](_0x5425df)==='[object\\x20Array]';}[_0x4705e6(0x155)](_0x46c048,_0x167ba5){}[_0x4705e6(0x214)](_0x1aea01){var _0x2846f7=_0x4705e6;delete _0x1aea01['_hasSymbolPropertyOnItsPath'],delete _0x1aea01['_hasSetOnItsPath'],delete _0x1aea01[_0x2846f7(0x1b1)];}['_setNodeExpressionPath'](_0xe0b086,_0x5e5fbb){}}let _0x110989=new _0x581946(),_0x26fd20={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x425eb4={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x313856(_0x578a5c,_0xa8fbb3,_0x214b92,_0x14cf06,_0x462600,_0x31e139){var _0x3fe31c=_0x4705e6;let _0x44f382,_0x13cb4f;try{_0x13cb4f=_0x1abf05(),_0x44f382=_0x3de9f7[_0xa8fbb3],!_0x44f382||_0x13cb4f-_0x44f382['ts']>0x1f4&&_0x44f382[_0x3fe31c(0x168)]&&_0x44f382[_0x3fe31c(0x1ad)]/_0x44f382[_0x3fe31c(0x168)]<0x64?(_0x3de9f7[_0xa8fbb3]=_0x44f382={'count':0x0,'time':0x0,'ts':_0x13cb4f},_0x3de9f7[_0x3fe31c(0x1c9)]={}):_0x13cb4f-_0x3de9f7[_0x3fe31c(0x1c9)]['ts']>0x32&&_0x3de9f7[_0x3fe31c(0x1c9)][_0x3fe31c(0x168)]&&_0x3de9f7[_0x3fe31c(0x1c9)][_0x3fe31c(0x1ad)]/_0x3de9f7['hits'][_0x3fe31c(0x168)]<0x64&&(_0x3de9f7[_0x3fe31c(0x1c9)]={});let _0x155b02=[],_0xe3dcb0=_0x44f382[_0x3fe31c(0x222)]||_0x3de9f7[_0x3fe31c(0x1c9)][_0x3fe31c(0x222)]?_0x425eb4:_0x26fd20,_0x2e112c=_0x3943e7=>{var _0x2d86b7=_0x3fe31c;let _0x2669dd={};return _0x2669dd[_0x2d86b7(0x167)]=_0x3943e7[_0x2d86b7(0x167)],_0x2669dd[_0x2d86b7(0x137)]=_0x3943e7[_0x2d86b7(0x137)],_0x2669dd['strLength']=_0x3943e7[_0x2d86b7(0x171)],_0x2669dd[_0x2d86b7(0x1c3)]=_0x3943e7['totalStrLength'],_0x2669dd[_0x2d86b7(0x215)]=_0x3943e7['autoExpandLimit'],_0x2669dd['autoExpandMaxDepth']=_0x3943e7[_0x2d86b7(0x18c)],_0x2669dd[_0x2d86b7(0x17b)]=!0x1,_0x2669dd['noFunctions']=!_0x4010d1,_0x2669dd[_0x2d86b7(0x13c)]=0x1,_0x2669dd[_0x2d86b7(0x194)]=0x0,_0x2669dd['expId']=_0x2d86b7(0x1f4),_0x2669dd[_0x2d86b7(0x216)]=_0x2d86b7(0x177),_0x2669dd[_0x2d86b7(0x138)]=!0x0,_0x2669dd[_0x2d86b7(0x151)]=[],_0x2669dd['autoExpandPropertyCount']=0x0,_0x2669dd[_0x2d86b7(0x15e)]=!0x0,_0x2669dd[_0x2d86b7(0x1f7)]=0x0,_0x2669dd[_0x2d86b7(0x179)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x2669dd;};for(var _0x75017c=0x0;_0x75017c<_0x462600[_0x3fe31c(0x1da)];_0x75017c++)_0x155b02[_0x3fe31c(0x207)](_0x110989[_0x3fe31c(0x1a3)]({'timeNode':_0x578a5c==='time'||void 0x0},_0x462600[_0x75017c],_0x2e112c(_0xe3dcb0),{}));if(_0x578a5c===_0x3fe31c(0x21b)){let _0x3c12d5=Error[_0x3fe31c(0x21d)];try{Error[_0x3fe31c(0x21d)]=0x1/0x0,_0x155b02['push'](_0x110989[_0x3fe31c(0x1a3)]({'stackNode':!0x0},new Error()['stack'],_0x2e112c(_0xe3dcb0),{'strLength':0x1/0x0}));}finally{Error[_0x3fe31c(0x21d)]=_0x3c12d5;}}return{'method':_0x3fe31c(0x1a6),'version':_0x29ae66,'args':[{'ts':_0x214b92,'session':_0x14cf06,'args':_0x155b02,'id':_0xa8fbb3,'context':_0x31e139}]};}catch(_0x5876a3){return{'method':_0x3fe31c(0x1a6),'version':_0x29ae66,'args':[{'ts':_0x214b92,'session':_0x14cf06,'args':[{'type':'unknown','error':_0x5876a3&&_0x5876a3[_0x3fe31c(0x1fd)]}],'id':_0xa8fbb3,'context':_0x31e139}]};}finally{try{if(_0x44f382&&_0x13cb4f){let _0x4096a4=_0x1abf05();_0x44f382[_0x3fe31c(0x168)]++,_0x44f382[_0x3fe31c(0x1ad)]+=_0x46f776(_0x13cb4f,_0x4096a4),_0x44f382['ts']=_0x4096a4,_0x3de9f7[_0x3fe31c(0x1c9)][_0x3fe31c(0x168)]++,_0x3de9f7[_0x3fe31c(0x1c9)][_0x3fe31c(0x1ad)]+=_0x46f776(_0x13cb4f,_0x4096a4),_0x3de9f7[_0x3fe31c(0x1c9)]['ts']=_0x4096a4,(_0x44f382['count']>0x32||_0x44f382[_0x3fe31c(0x1ad)]>0x64)&&(_0x44f382[_0x3fe31c(0x222)]=!0x0),(_0x3de9f7[_0x3fe31c(0x1c9)][_0x3fe31c(0x168)]>0x3e8||_0x3de9f7[_0x3fe31c(0x1c9)][_0x3fe31c(0x1ad)]>0x12c)&&(_0x3de9f7[_0x3fe31c(0x1c9)][_0x3fe31c(0x222)]=!0x0);}}catch{}}}return _0x313856;}((_0x26bcb3,_0x161a0f,_0x1243cc,_0x16727b,_0x2aef43,_0x4e3a18,_0x2adef1,_0x2097f7,_0x5d329d,_0x51d670,_0xda337d)=>{var _0x10059d=_0xbb41e5;if(_0x26bcb3[_0x10059d(0x16b)])return _0x26bcb3['_console_ninja'];if(!X(_0x26bcb3,_0x2097f7,_0x2aef43))return _0x26bcb3[_0x10059d(0x16b)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x26bcb3[_0x10059d(0x16b)];let _0x5f52d8=b(_0x26bcb3),_0x528b00=_0x5f52d8['elapsed'],_0x3fc8b6=_0x5f52d8['timeStamp'],_0x12bb08=_0x5f52d8['now'],_0x4b3199={'hits':{},'ts':{}},_0x49cd29=H(_0x26bcb3,_0x5d329d,_0x4b3199,_0x4e3a18),_0x3a9284=_0x1ebc21=>{_0x4b3199['ts'][_0x1ebc21]=_0x3fc8b6();},_0x1097a1=(_0x21f17e,_0x3c69df)=>{var _0x4d38a3=_0x10059d;let _0x1bd357=_0x4b3199['ts'][_0x3c69df];if(delete _0x4b3199['ts'][_0x3c69df],_0x1bd357){let _0x5065d2=_0x528b00(_0x1bd357,_0x3fc8b6());_0x11cddb(_0x49cd29(_0x4d38a3(0x1ad),_0x21f17e,_0x12bb08(),_0x47b6d8,[_0x5065d2],_0x3c69df));}},_0x44b79d=_0x4a0749=>{var _0x354034=_0x10059d,_0x19e489;return _0x2aef43===_0x354034(0x144)&&_0x26bcb3[_0x354034(0x20a)]&&((_0x19e489=_0x4a0749==null?void 0x0:_0x4a0749[_0x354034(0x170)])==null?void 0x0:_0x19e489[_0x354034(0x1da)])&&(_0x4a0749[_0x354034(0x170)][0x0][_0x354034(0x20a)]=_0x26bcb3[_0x354034(0x20a)]),_0x4a0749;};_0x26bcb3[_0x10059d(0x16b)]={'consoleLog':(_0x29be56,_0x59772b)=>{var _0x279194=_0x10059d;_0x26bcb3[_0x279194(0x1c4)][_0x279194(0x1a6)][_0x279194(0x1df)]!==_0x279194(0x1b6)&&_0x11cddb(_0x49cd29(_0x279194(0x1a6),_0x29be56,_0x12bb08(),_0x47b6d8,_0x59772b));},'consoleTrace':(_0x3d9ae8,_0x4640db)=>{var _0x43a2be=_0x10059d;_0x26bcb3['console'][_0x43a2be(0x1a6)]['name']!==_0x43a2be(0x221)&&_0x11cddb(_0x44b79d(_0x49cd29(_0x43a2be(0x21b),_0x3d9ae8,_0x12bb08(),_0x47b6d8,_0x4640db)));},'consoleTime':_0x1bc96b=>{_0x3a9284(_0x1bc96b);},'consoleTimeEnd':(_0x45eff4,_0x5a9be0)=>{_0x1097a1(_0x5a9be0,_0x45eff4);},'autoLog':(_0xbed555,_0xb307c0)=>{_0x11cddb(_0x49cd29('log',_0xb307c0,_0x12bb08(),_0x47b6d8,[_0xbed555]));},'autoLogMany':(_0x12339d,_0xb59196)=>{var _0x534726=_0x10059d;_0x11cddb(_0x49cd29(_0x534726(0x1a6),_0x12339d,_0x12bb08(),_0x47b6d8,_0xb59196));},'autoTrace':(_0x501019,_0x44cf83)=>{var _0x5378bd=_0x10059d;_0x11cddb(_0x44b79d(_0x49cd29(_0x5378bd(0x21b),_0x44cf83,_0x12bb08(),_0x47b6d8,[_0x501019])));},'autoTraceMany':(_0x1172e6,_0x270986)=>{_0x11cddb(_0x44b79d(_0x49cd29('trace',_0x1172e6,_0x12bb08(),_0x47b6d8,_0x270986)));},'autoTime':(_0x585b9f,_0x47e1f5,_0x564815)=>{_0x3a9284(_0x564815);},'autoTimeEnd':(_0x416ab0,_0x57beff,_0x1a95e8)=>{_0x1097a1(_0x57beff,_0x1a95e8);},'coverage':_0x5f2fcf=>{var _0x7c06bd=_0x10059d;_0x11cddb({'method':_0x7c06bd(0x15c),'version':_0x4e3a18,'args':[{'id':_0x5f2fcf}]});}};let _0x11cddb=q(_0x26bcb3,_0x161a0f,_0x1243cc,_0x16727b,_0x2aef43,_0x51d670,_0xda337d),_0x47b6d8=_0x26bcb3[_0x10059d(0x1eb)];return _0x26bcb3[_0x10059d(0x16b)];})(globalThis,_0xbb41e5(0x17e),_0xbb41e5(0x149),\"/Users/juanosoriocano/.vscode/extensions/wallabyjs.console-ninja-1.0.327/node_modules\",_0xbb41e5(0x1dd),_0xbb41e5(0x18a),_0xbb41e5(0x182),_0xbb41e5(0x1c5),_0xbb41e5(0x217),_0xbb41e5(0x210),_0xbb41e5(0x17a));");
  } catch (e) {}
}
; /* istanbul ignore next */
function oo_oo(i) {
  for (var _len = arguments.length, v = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    v[_key - 1] = arguments[_key];
  }
  try {
    oo_cm().consoleLog(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_tr(i) {
  for (var _len2 = arguments.length, v = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    v[_key2 - 1] = arguments[_key2];
  }
  try {
    oo_cm().consoleTrace(i, v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_ts(v) {
  try {
    oo_cm().consoleTime(v);
  } catch (e) {}
  return v;
}
; /* istanbul ignore next */
function oo_te(v, i) {
  try {
    oo_cm().consoleTimeEnd(v, i);
  } catch (e) {}
  return v;
}
; /*eslint unicorn/no-abusive-eslint-disable:,eslint-comments/disable-enable-pair:,eslint-comments/no-unlimited-disable:,eslint-comments/no-aggregating-enable:,eslint-comments/no-duplicate-disable:,eslint-comments/no-unused-disable:,eslint-comments/no-unused-enable:,*/
})();

/******/ })()
;