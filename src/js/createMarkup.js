export function createMarkup({ flags, name, capital, population, languages }) {
  const langString = Object.values(languages).join(', ');
  return `<img class="country-flag" alt="flag" src="${flags.svg}" width="50px" />
        <h2 class="country-card-title">${name.official}</h2>
      <p class="country-capital">Capital: ${capital}</p>
      <p class="country-population">Population: ${population}</p>
      <p class="country-languages">languages: ${langString}</p>`;
}
