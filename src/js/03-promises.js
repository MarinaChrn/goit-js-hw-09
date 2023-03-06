const firstDelayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');
const btnSubmitEl = document.querySelector('[type="submit"]');
const formEl = document.querySelector('form');

let position, delay;
formEl.addEventListener('submit', function(e) {
  e.preventDefault();
  delay = Number(firstDelayEl.value);
  const step = Number(stepEl.value);
  const amount = Number(amountEl.value);
  for (let i = 0; i < amount; i += 1) {
    delay = delay+step*i;
    position = i+1;
    const posDel = {position, delay};
    doPromise(posDel);
  };
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return Promise.resolve({position, delay});
  } else {
    return Promise.reject({position, delay});
  }
}

const doPromise = (posDel) => {
  const timer = setTimeout(()=>{
    createPromise(posDel)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  },({delay}))
};

