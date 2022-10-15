import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

import { fetchCountries } from './js/fetchCountries';
import { previewMarkup, createMarkup } from './js/markup';

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
  let countries = array.length;
  clearMarkup();
  if (countries > 10) {
    Notify.info('Too many matches found. Please enter a more specific name');
  } else if (countries > 1 && countries <= 10) {
    Notify.info(`Hooray! We found ${countries} countries.`);
    refs.countryInfo.innerHTML = '';
    const previesListMarkup = previewMarkup(array);
    refs.countryList.innerHTML = previesListMarkup;
  } else if (countries === 1) {
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
  evt.preventDefault;
  if (evt.target.value) {
    fetchCountries(evt.target.value.trim())
      .then(resultRender)
      .catch(catchError);
  }
  clearMarkup();
}

refs.input.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));
