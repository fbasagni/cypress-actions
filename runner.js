const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjExMWYyN2RlLWU4Y2EtNGYwYy1iZGY3LTkxYWQ4OTJiNmExNi0xNzg3NzYwMDcyNzE0IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiZDU2OTA1ZGItMjJlNS00Nzc2LTkyMWMtZGMwMDkyYjE2MWU1IiwidHlwZSI6InQifQ.0ACS1thbF06sxALyflNdTeiFYkAopYykTveXDv5n-Ik'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
  console.error(err)
})

