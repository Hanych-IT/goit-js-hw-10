export function createMarkup({ flags, name, capital, population, languages }) {
  const langString = Object.values(languages).join(', ');
  return `<img class="country-info__img" alt="flag" src="${flags.svg}" width="50px" />
        <h2 class="country-info__name">${name.official}</h2>
      <p class="country-info__capital">Capital: ${capital}</p>
      <p class="country-info__population">Population: ${population}</p>
      <p class="country-info__languages">languages: ${langString}</p>`;
}
