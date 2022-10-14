import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

import { fetchCountries } from './js/fetchCountries';
import { createMarkup } from './js/createMarkup';
import { previewMarkup } from './js/createPreview';

const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};
const DEBOUNCE_DELAY = 300;

function clearMarkup() {
  refs.countryList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
}

function resultRender(array) {
  clearMarkup();
  let amount = array.length;
  if (amount > 10) {
    Notify.info('Too many matches found. Please enter a more specific name');
  } else if (amount > 1 && amount <= 10) {
    Notify.info(`Hooray! We found ${amount} countries.`);
    refs.countryInfo.innerHTML = '';
    const countriesListMarkup = previewMarkup(array);
    refs.countryList.innerHTML = countriesListMarkup;
  } else if (amount === 1) {
    Notify.success(`This is exactly what you were looking for!`);
    refs.countryList.innerHTML = '';
    const countryMarkup = createMarkup(array[0]);
    refs.countryInfo.innerHTML = countryMarkup;
  }
}

function catchError() {
  Notify.failure('Oops, there is no country with that name');
  clearMarkup();
}

function onInputChange(evt) {
  let value = evt.target.value.trim().toLowerCase();
  if (value) {
    fetchCountries(value).then(resultRender).catch(catchError);
  } else {
    clearMarkup();
  }
}

refs.input.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));
