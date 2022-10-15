function previewMarkup({ flags, name }) {
  return `<li class="country-list__item"><div>
  <img class="country-list__img" alt="flag" src="${flags.svg}" width="50px" />
  <h2 class="country-info__name"">${name.official}</h2>
</div></li>`;
}

function createMarkup({ flags, name, capital, population, languages }) {
  const languagesString = Object.values(languages).join(', ');
  return `<img class="country-info__img" alt="flag" src="${flags.svg}" width="50px" />
        <h2 class="country-info__name">${name.official}</h2>
      <p class="country-info__capital">Capital: ${capital}</p>
      <p class="country-info__population">Population: ${population}</p>
      <p class="country-info__languages">languages: ${languagesString}</p>`;
}

export { previewMarkup, createMarkup };
