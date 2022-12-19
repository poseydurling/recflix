import { myKey } from '../private/key'
import { movieID } from './Search'

let finalID = 0

let fetchPoster = async function (movieName: String, count: number) {
  const url = await 'https://api.themoviedb.org/3/movie/' + movieID[count] + '?api_key=' + myKey + '&language=en-US&query=' + movieName;
  const response: Response = await fetch(url);
  const data = await response.json();
  let poster_path = await data['poster_path']
  const full_path =  "https://image.tmdb.org/t/p/original/" + poster_path
  return (full_path);
}

export { fetchPoster }