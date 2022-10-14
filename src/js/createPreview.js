export function previewMarkup({ flags, name }) {
  return `<li><div class="country-title-box">
  <img class="ccountry-flag" src="${flags.svg}" width="50px" />
  <h2 class="country-card-title">${name.official}</h2>
</div></li>`;
}
