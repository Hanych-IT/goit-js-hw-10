import './css/styles.css';
import { Notify } from 'notiflix';
import debounce from 'lodash.debounce';

import { fetchCountries } from './js/fetchCountries.js';

const DEBOUNCE_DELAY = 300;
