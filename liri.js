require("dotenv").config();
const Spotify = require('node-spotify-api');
const keys = require("./keys.js");
const fs = require('fs');
const axios = require('axios');
const moment = require('moment');
//liri constructor housing all the search apis and functions
function Liri (){
//finds concert using bands in town api
    this.findConcert = async term => {
        const URL = `https://rest.bandsintown.com/artists/${term}/events?app_id=codingbootcamp`
        const { data: concert } = await axios.get(URL)
        const venues = concert[0].venue
        const dates = concert[0].datetime.slice(0,10)
        var dateConverted = moment().format(dates, "MM/DD/YYYY");
        const concertResponse = (`
            Venue: ${venues.name}
            Location: ${venues.city}
            Date: ${dateConverted}
        `);  
//adds search results to log file   
        fs.appendFile('log.txt', concertResponse, (err) => {
          if (err)
            return console.error(err)
    
          console.log(concertResponse)
        })
    };
//finds song using spotify api   
    this.findSong = async term => {
        const spotify = new Spotify(keys.spotify);
        const generateArtist = function(artist){
            return artist.name;
        }
        spotify.search({ type: 'track', query: term, limit: 5}, function(err, data) {
            if (err) {
            return console.log('Error occurred: ' + err);
            }
            const songs = data.tracks.items;
            for (var i =0; i <songs.length; i++){
                spotifyResponse = (`
                    Artist(s): ${songs[i].artists.map(generateArtist)}
                    Song Name: ${songs[i].name}
                    Preview Link: ${songs[i].preview_url}
                    Album: ${songs[i].album.name}
                    `);
            
                }
//adds search results to log file   
            fs.appendFile('log.txt', spotifyResponse, (err) => {
                if (err)
                      return console.error(err)
                console.log(spotifyResponse)
            })
        }); 
    };
//finds movie using omdb api
    this.findMovie = async term => {
        const URL = `http://www.omdbapi.com/?apikey=trilogy&t=${term}&y=plot=shorts&r=json`
        const { data: movie } = await axios.get(URL)
        const movieResponse = (`
            Title: ${movie.Title}
            Year: ${movie.Year}
            IMDB Rating: ${movie.imdbRating}
            Rotten Tomatoes Rating: ${movie.tomatoRating}
            Country: ${movie.Country}
            Language: ${movie.Language}
            Plot: ${movie.Plot}
            Actors: ${movie.Actors}
        `);
//adds search results to log file       
        fs.appendFile('log.txt', movieResponse, (err) => {
          if (err)
            return console.error(err)
    
          console.log(movieResponse)
        })
    };
}
//uses text in random.txt to run liri
doWhatItSays = function() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
        var dataArr = data.split(",");
        let term = dataArr[1];
        let search =dataArr[0];
        const liri = new Liri ();
        if(search === 'concert-this'){
            liri.findConcert(term)
        }else if(search === 'spotify-this-song'){
            liri.findSong(term)
        }else if(search === 'movie-this'){
            liri.findMovie(term)
        }else{
            console.log('Sorry I have nothing random to find')
        }
    });     
}
//exports Liri constructor 
module.exports = Liri;