import { myKey } from '../private/key'
import { movieID } from './Search'

let finalID = 0

/** Fetch request to the external abi which takes in a movie name and sends a url request containing the movie's id,
 * name, and our apiKey and returns a link to its poster path
 * 
 * @param movieName takes in a movie's name
 * @param count in to keep track of which movie is being displayed once this is called in the button click
 * @returns image of the movie's poster path
 */
let fetchPoster = async function (movieName: String, count: number) {
  const url = await 'https://api.themoviedb.org/3/movie/' + movieID[count] + '?api_key=' + myKey + '&language=en-US&query=' + movieName;
  const response: Response = await fetch(url);
  const data = await response.json();
  let poster_path = await data['poster_path']
  const full_path =  "https://image.tmdb.org/t/p/original/" + poster_path
  return (full_path);
}

export { fetchPoster }