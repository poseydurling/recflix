import { constants } from 'fs/promises'
import { listenerCount } from 'process'
import { myKey } from '../private/key'
import { movieID } from './Search'


let finalID = 0

//check async part of this function
let fetchPoster = async function (movieName: String, count: number) {
  if(count == 0){
     finalID = movieID[0]
  }
  else if (count == 1){
    finalID = movieID[1]
  } else if  (count == 2){
    finalID = movieID[2]
  }
  // console.log("movieId in fetchposter: " + movieID)
  console.log(movieName + "fetched name")
  const url = await 'https://api.themoviedb.org/3/movie/' + finalID + '?api_key=' + myKey + '&language=en-US&query=' + movieName;
  console.log('url: ' + url);
  const response: Response = await fetch(url);
  console.log('reponse: ' + response);
  const data = await response.json();
  console.log('data: ' + data);
  let poster_path = await data['poster_path']
  console.log('path: ' + poster_path);
  const full_path =  "https://image.tmdb.org/t/p/original/" + poster_path

  console.log('full path: ' + full_path)
  return (full_path);
}


export { fetchPoster }

//157336