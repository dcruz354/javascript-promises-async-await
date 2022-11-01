import { fetchWithTimeout } from './services';

var movies = require(movies.json);

export function fetchMovies() {
    const resolveFunction = () => movies;
    return fetchWithTimeout(1000).then(resolveFunction)
}

var moviePromise = fetchMovies();

console.log(moviePromise.then(results));