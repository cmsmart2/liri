const Liri = require("./liri");
const liri = new Liri ();

let search = process.argv[2]
let term = process.argv.slice(3).join(' ')

if (!search)
    search = 'spotify-this-song'
if (!term)
    term = 'I Want it That Way'

switch(search){
    case 'concert-this':
        console.log(`Searching for concerts by: "${term}"`)
        liri.findConcert(term);
        break;
    case 'spotify-this-song':
        console.log(`Searching Song: "${term}"`)
        liri.findSong(term);
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