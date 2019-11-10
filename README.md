# liri
This app searches for concerts, songs, and movies all in your command line. Instead of siri it is liri. This app uses two js files. One for the commad line interface with a switch to search by certain terms. Another for a constructor that holds the api calls and function. To use this app you must first perform an npm install to add all of the needed packages. You will need your own spotify key. Here are the instructions: Step One: Visit <https://developer.spotify.com/my-applications/#!/>

   * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

   * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

   * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

Liri can take in one of the following commands:

   * `concert-this`

   * `spotify-this-song`

   * `movie-this`

   * `do-what-it-says`

   Then it will return results based on what you have searched for. 

   Technologies used:
    * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

   * [Axios](https://www.npmjs.com/package/axios)

     * [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

   * [Moment](https://www.npmjs.com/package/moment)

   * [DotEnv](https://www.npmjs.com/package/dotenv)

   Video link of working code: https://drive.google.com/file/d/1w4XzzjdPTE6Zl0eNivtujjDiPULINM7G/view