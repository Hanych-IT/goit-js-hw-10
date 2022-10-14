export function previewMarkup({ flags, name }) {
  return `<li class="country-list__item"><div>
  <img class="country-list__img" alt="flag" src="${flags.svg}" width="50px" />
  <h2 class="country-info__name"">${name.official}</h2>
</div></li>`;
}
