import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
form.addEventListener('submit', formSubmit);
function formSubmit(event) {
  event.preventDefault();

  const { delay, state } = event.currentTarget.elements;
  createPromise(delay.value, state.value)
    .then(delay => {
      iziToast.success({
        title: 'OK',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
  event.currentTarget.reset();
}

function createPromise(currentDelay, currentState) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (currentState === 'fulfilled') {
        resolve(currentDelay);
      } else {
        reject(currentDelay);
      }
    }, currentDelay);
  });
}

// const form = document.querySelector('.form');

// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const delay = Number(form.elements.delay.value);
//   const state = form.elements.state.value;
//   createNotification(delay, state);
// });

// function createNotification(delay, state) {
//   const delayPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (state === 'fulfilled') {
//         resolve(delay);
//       } else {
//         reject(delay);
//       }
//     }, delay);
//   });

//   delayPromise
//     .then(delay => {
//       iziToast.success({
//         title: 'OK',
//         message: `✅ Fulfilled promise in ${delay} ms!`,
//       });
//     })
//     .catch(delay => {
//       iziToast.error({
//         title: 'Error',
//         message: `❌ Rejected promise in ${delay} ms`,
//       });
//     });
//   form.reset();
// }
