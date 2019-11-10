require("dotenv").config();
const Spotify = require('node-spotify-api');
const keys = require("./keys.js");
const fs = require('fs')
const axios = require('axios')

function Liri (){
    this.findConcert = async term => {
        const URL = `https://rest.bandsintown.com/artists/${term}/events?app_id=codingbootcamp`
        const { data: concert } = await axios.get(URL)
        const venues = concert.venue
        for (var i =0; i <venues.length; i++){
        concertResponse = (`
            Venue: ${venues[i].name}
            Location: ${venues[i].city}
            Date: ${concert.datetime}
        `);
        }
        // console.log(JSON.stringify(concert, null, 2))
        fs.appendFile('log.txt', concertResponse, (err) => {
          if (err)
            return console.error(err)
    
          console.log(concertResponse)
        })
    };
   
    this.findSong = async term => {
        const spotify = new Spotify(keys.spotify);
        const generateArtist = function(artist){
            return artist.name;
        }
        spotify.search({ type: 'track', query: term, limit: 5}, function(err, data) {
            if (err) {
            return console.log('Error occurred: ' + err);
            }
            // console.log(JSON.stringify(data, null, 2));
            const songs = data.tracks.items;
            for (var i =0; i <songs.length; i++){
                spotifyResponse = (`
                    Artist(s): ${songs[i].artists.map(generateArtist)}
                    Song Name: ${songs[i].name}
                    Preview Link: ${songs[i].preview_url}
                    Album: ${songs[i].album.name}
                    `);
            
                }
            fs.appendFile('log.txt', spotifyResponse, (err) => {
                if (err)
                      return console.error(err)
                console.log(spotifyResponse)
            })
        }); 
    };
}


module.exports = Liri;