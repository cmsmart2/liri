const Liri = require("./liri");
const liri = new Liri ();
let search = process.argv[2]
let term = process.argv.slice(3).join(' ')

//switch used to search constructor function based on the arguments put in 
switch(search){
    case 'concert-this':
        console.log(`Searching for concerts by: "${term}"`)
        if (!term){
        term = 'Celine Dion'}
        liri.findConcert(term);
        break;
    case 'spotify-this-song':
        console.log(`Searching Song: "${term}"`)
        if (!term){
        term = 'The Sign'}
        liri.findSong(term);
        break;
    case 'movie-this':
        console.log(`Searching Movie: "${term}"`)
        if (!term){
        term = 'Mr.Nobody'}
        liri.findMovie(term);
        break;
    case 'do-what-it-says':
        doWhatItSays();
        break; 
    default:
        console.error('Invalid Search Type')
    }

    

