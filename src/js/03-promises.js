import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const firstDelayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');
const btnSubmitEl = document.querySelector('[type="submit"]');
const formEl = document.querySelector('form');

let position, delay, firstDelay;
let posDel ={};
// let timer;
formEl.addEventListener('submit', function(e) {
  e.preventDefault();
  firstDelay = Number(firstDelayEl.value);
  const step = Number(stepEl.value);
  const amount = Number(amountEl.value);
  for (let i = 0; i < amount; i += 1) {
    setTimeout(function(){
      position = i+1;
      posDel = {position, delay};
      doPromise(posDel);
    },firstDelay+step*i);
  };
});



function createPromise({position, delay}) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return Promise.resolve({position, delay});
  } else {
    return Promise.reject({position, delay});
  }
}

const doPromise = (posDel) => {
    createPromise(posDel)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
};