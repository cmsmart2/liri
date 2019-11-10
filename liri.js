require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

let search = process.argv[2]
let term = proces.argv.slice(3).join(' ')

if (!search)
    search = 'spotify-this-song'
if (!term)
    term = 'I Want it That Way'

switch(search){
    case 'concert-this':
        console.log(`Searching for concerts by: "${term}"`)
        break;
    case 'spotify-this-song':
        console.log(`Searching Song: "${term}"`)
        break;
    case 'movie-this':
        console.log(`Searching Movie: "${term}"`)
        break;
    case 'do-what-it-says':
        console.log(`Searching Random: "${term}"`)
        break;
    default:
        console.error('Invalid Search Type')

}

var getSong = function () {
    var spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }
   
        console.log(JSON.stringify(data, null, 2)); 
  });
}