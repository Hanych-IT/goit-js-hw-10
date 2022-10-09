import './css/styles.css';
import { Notify } from 'notiflix';
import debounce from 'lodash.debounce';

import { fetchCountries } from './js/fetchCountries.js';
import { refs } from './js/refs.js';
// import countryListTpl from '../src/templates/country-list.hbs';
// import countryCardTpl from '../src/templates/country-cards.hbs';

const DEBOUNCE_DELAY = 300;
