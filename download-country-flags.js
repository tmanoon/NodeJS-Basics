downloadCountryFlags()

function downloadCountryFlags() {
const countries = getCountries() console.log('Countries:', countries.map(c => c.name)) downloadFlags(countries)
.then(() => {
console.log('Your flags are ready')
}) }
function getCountries() {
var countries = []
// TODO: get the countries from file (require), // sort by population (descending)
// and return the top 5
return countries
}
function downloadFlags(countries) {
    // TODO: use the download() function to download a flag
     
    // the name of the file should be the country name
    // TODO: use the Array.map function to generate a promise for each download // TODO: use Promise.all()
}