import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputDate = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

btnStart.setAttribute('disabled', true);
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      dateChoosen = inputDate.value;
      yearDate = Number(dateChoosen[0] +dateChoosen[1]+dateChoosen[2]+dateChoosen[3]);
      monthDate = Number(dateChoosen[5] +dateChoosen[6]);
      dayDate =  Number(dateChoosen[8]+dateChoosen[9]);
      hourDate = Number(dateChoosen[11]+dateChoosen[12]);
      minutesDate = Number(dateChoosen[14]+dateChoosen[15]);
      const utcDate = Number(Date.UTC(yearDate, (monthDate-1), dayDate, hourDate, minutesDate))-7185947;
      if (utcDate<Date.now()) {
        Notiflix.Notify.failure("Please choose a date in the future");
        btnStart.setAttribute('disabled', true);
      }
      else {
        btnStart.removeAttribute('disabled');
      };
    },
};
flatpickr('#datetime-picker', options);
btnStart.addEventListener('click', ()=>{
    const choosenDateInMs = (minutesDate*60*1000)+(hourDate*60*60*1000)+(dayDate*24*60*60*1000)+(monthDate*4*7*24*60*60*1000)+(yearDate*12*4*7*24*60*60*1000);
    updateTime = setInterval(()=> {
        const dateNow = new Date(Date.now());
        const dateNowInMs = (dateNow.getSeconds()*1000)+(dateNow.getMinutes()*60*1000)+(dateNow.getHours()*60*60*1000)+(dateNow.getDate()*24*60*60*1000)+(dateNow.getMonth()*4*7*24*60*60*1000)+(dateNow.getFullYear()*12*4*7*24*60*60*1000);
        const timeBetween = choosenDateInMs - dateNowInMs- 2419200000;
        if (timeBetween>=0) {
            function convertMs(timeBetween) {
                console.log(timeBetween);
                // Number of milliseconds per unit of time
                const ms = timeBetween;
                const second = 1000;
                const minute = second * 60;
                const hour = minute * 60;
                const day = hour * 24;
            
                // Remaining days
                const days = Math.floor(ms / day);
                // Remaining hours
                const hours = Math.floor((ms % day) / hour);
                // Remaining minutes
                const minutes = Math.floor(((ms % day) % hour) / minute);
                // Remaining seconds
                const seconds = Math.floor((((ms % day) % hour) % minute) / second);
                return { days, hours, minutes, seconds };
            }
            function addLeadingZero(value) {
                const newValue = `${value}`.padStart(2, 0);
                return newValue;
            }
            days = addLeadingZero(convertMs(timeBetween).days);
            hours = addLeadingZero(convertMs(timeBetween).hours);
            minutes = addLeadingZero(convertMs(timeBetween).minutes);
            seconds = addLeadingZero(convertMs(timeBetween).seconds);
            daysEl.textContent = days;
            hoursEl.textContent = hours;
            minutesEl.textContent = minutes;
            secondsEl.textContent = seconds;
        }
    }, 1000);
});
