'use strict';

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteenHundred = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year <= 1599
);
console.log('1. Inventors who were born between 1500 and 1599:');
console.table(fifteenHundred);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullName = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);
console.log('2. Full name array:', fullName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const bornEarlier = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.table('3. Inventors listed by birthdate:');
console.table(bornEarlier);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const totalYears = inventors.reduce(
  (acc, inventor) => acc + (inventor.passed - inventor.year),
  0
);
// 0 is the initial value for acc.
console.log('4. Total years lived altogether:', totalYears);

// 5. Sort the inventors by years lived
const diedYoungest = inventors.sort((a, b) => {
  const inventorA = a.passed - a.year;
  const inventorB = b.passed - b.year;
  return inventorA > inventorB ? 1 : -1;
});
console.log('5. Inventors listed by years lived:');
console.table(diedYoungest);

// ---------------------------------------------------------

// // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name in https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// //    6.1. Select the element in the page with the class defined below:
// const category = document.querySelector('.mw-category');
// //    6.2. Select the links of all the elements stated above. Make a node list:
// const links = category.querySelectorAll('a');
// //    6.3. Convert the node list into an array with an spray operator:
// const links = [...category.querySelectorAll('a')];
// //    6.4. Access to the text of the link (map) and filter the ones that include 'de':
// const boulevardsContainingDe = links
//   .map((link) => link.textContent)
//   .filter((boulevard) => boulevard.includes('de'));
// console.log(boulevardsContainingDe);

// ---------------------------------------------------------

const people = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William',
];

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortAlphabetically = people.sort((personA, personB) => {
  const [lastA, firstA] = personA.split(', ');
  const [lastB, firstB] = personB.split(', ');
  return lastA > lastB ? 1 : -1;
});
console.log('7. Sort the people alphabetically by last name:');
console.table(sortAlphabetically);

// ---------------------------------------------------------

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];

const transportation = data.reduce((obj, transportation) => {
  //'obj' is the object, i.e. '{car: 2}'
  // 'transportation' is 'car'
  // 'obj[transportation]' is '2'

  // 8.3. Check whether the transportation is already listed in the object. It it is not, it will be added:
  if (!obj[transportation]) {
    obj[transportation] = 0;
  }

  //   8.2. The reduce method will add 1 to the amount of the transportation in the object:
  obj[transportation]++;
  return obj;

  //   8.1.An empty object is declared:
}, {});

console.log('8. Sum up the instances:', transportation);
