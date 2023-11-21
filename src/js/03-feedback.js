import throttle from 'lodash.throttle';

const formReg = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

let formData = {};

function onInputHandler(event) {
  const inputValue = event.target.value.trim();
  const inputName = event.target.name;
  formData[inputName] = inputValue;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

formReg.addEventListener('input', throttle(onInputHandler, 500));
formReg.addEventListener('submit', event => {
  event.preventDefault();

  console.log(formData);
  formData = {};
  localStorage.removeItem(STORAGE_KEY);
  event.target.reset();
});

function refreshForm() {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (!savedData) return;
    formData = JSON.parse(savedData);
    Object.entries(formData).forEach(([key, val]) => {
      formReg.elements[key].value = val;
    });
  } catch ({ message }) {
    console.log(message);
  }
}

refreshForm();
// localStorage.removeItem(STORAGE_KEY);
