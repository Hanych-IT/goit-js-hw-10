export function previewMarkup({ flags, name }) {
  return `<li class="country-list__item"><div class="country-title-box">
  <img class="country-flag" alt="flag" src="${flags.svg}" width="50px" />
  <h2 class="country-card-title">${name.official}</h2>
</div></li>`;
}
