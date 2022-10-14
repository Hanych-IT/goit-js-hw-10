import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

import { fetchCountries } from './js/fetchCountries.js';
import { createMarkup } from './js/createMarkup';
import { previewMarkup } from './js/createPreview';

const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};
const DEBOUNCE_DELAY = 300;

function clearFields() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}

function resultRender(array) {
  clearFields();
  let amount = array.length;
  if (amount > 10) {
    Notify.info('Too many matches found. Please enter a more specific name');
  } else if (amount > 1 && amount <= 10) {
    refs.countryInfo.innerHTML = '';
    const countriesListMarkUp = previewMarkup(array);
    refs.countryList.innerHTML = countriesListMarkUp;
  } else if (amount === 1) {
    refs.countryList.innerHTML = '';
    const countryMarkUp = createMarkup(array[0]);
    refs.countryInfo.innerHTML = countryMarkUp;
  }
}

function catchError() {
  Notify.failure('Oops, there is no country with that name');
  clearFields();
}

function onIputChange(evt) {
  let value = evt.target.value.trim().toLowerCase();
  if (value) {
    fetchCountries(value).then(resultRender).catch(catchError);
  } else {
    clearFields();
  }
}

refs.input.addEventListener('input', debounce(onIputChange, DEBOUNCE_DELAY));
