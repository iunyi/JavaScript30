'use strict';

const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
const searchInput = document.querySelector('.js-search');
const suggestions = document.querySelector('.js-suggestions');

function getDataFromApi() {
  return fetch(endpoint)
    .then((response) => response.json())
    .then((data) => cities.push(...data));
}

function findMatchingCities(wordToMatch, cities) {
  return cities.filter((city) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return city.city.match(regex) || city.state.match(regex);
  });
}

function numberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatchingCities(this.value, cities);
  const html = matchArray
    .map((city) => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = city.city.replace(
        regex,
        `<span class="highlight">${this.value}</span>`
      );
      const stateName = city.state.replace(
        regex,
        `<span class="highlight">${this.value}</span>`
      );
      return `
        <li class="suggestion">
            <span>${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(city.population)}</span>
        </li>
      `;
    })
    .join('');

  this.value === ''
    ? (suggestions.innerHTML = '')
    : (suggestions.innerHTML = html);
}

// 0. Start
getDataFromApi();

// 1. Wait for user input
searchInput.addEventListener('keyup', displayMatches);
