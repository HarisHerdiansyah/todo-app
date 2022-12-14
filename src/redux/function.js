import * as _condition from "./constant";
import Swal from "sweetalert2";

function handleZero(stringDate) {
  if (stringDate.length === 1) {
    return `0${stringDate}`;
  } else {
    return `${stringDate}`;
  }
}

function handleConditionByDate(date) {
  const [year, month, day] = date;
  let resultCondition = "";
  const getTodayDay = new Date().getDate().toString();
  const getTomorrowDay = (1 + new Date().getDate()).toString();
  const getThreeNextDayDay = (3 + new Date().getDate()).toString();
  const getNextWeekDay = (7 + new Date().getDate()).toString();
  const getMonth = (1 + new Date().getMonth()).toString();

  const dayToday = handleZero(getTodayDay);
  const dayTomorrow = handleZero(getTomorrowDay);
  const dayThreeNextDay = handleZero(getThreeNextDayDay);
  const dayNextWeek = handleZero(getNextWeekDay);
  const monthNow = handleZero(getMonth);
  const yearNow = new Date().getFullYear().toString();

  if (
    (year < yearNow && (month < monthNow || month > monthNow || month === monthNow)) ||
    (year === yearNow && month < monthNow) ||
    (year === yearNow && month === monthNow && day < dayToday)
  ) { resultCondition = _condition.YESTERDAY; } 
  
  else if (year === yearNow && month === monthNow && day === dayToday) { resultCondition = _condition.TODAY; } 

  else if (
    year === yearNow &&
    month === monthNow &&
    (day === dayTomorrow || day < dayThreeNextDay)
  ) { resultCondition = _condition.TOMORROW; } 
  
  else if (
    year === yearNow &&
    month === monthNow &&
    (day === dayThreeNextDay || day < dayNextWeek)
  ) { resultCondition = _condition.THREE_NEXT_DAY; } 
  
  else if (year === yearNow && month === monthNow && day === dayNextWeek) { resultCondition = _condition.NEXT_WEEK; } 
  
  else if (
    (year > yearNow && (month < monthNow || month > monthNow || month === monthNow)) ||
    (year === yearNow && month > monthNow) ||
    (year === yearNow && month === monthNow && day > dayNextWeek)
  ) { resultCondition = _condition.SOON; }

  return resultCondition;
}

const DELETE_ALERT = () => {
  Swal.fire("Tugas dihapus!", "Tugas telah dihapus dari daftar!", "info");
};

const COMPLETE_ALERT = (todo) => {
  todo.isComplete
    ? Swal.fire(
        "Tugas dikembalikan!",
        "Tugas dikembalikan ke daftar tugas, segara selesaikan tugasmu!",
        "info"
      )
    : Swal.fire("Selesai!", "Selamat! tugasmu telah selesai!", "success");
};

const date = new Date().getUTCDate();
const day = new Date().getUTCDay();
const month =  new Date().getUTCMonth();
const year = new Date().getUTCFullYear();

const locale_date = `${_condition.DAY[day]}, ${date} ${_condition.MONTH[month]} ${year}`;

export { handleConditionByDate, DELETE_ALERT, COMPLETE_ALERT, locale_date, day };