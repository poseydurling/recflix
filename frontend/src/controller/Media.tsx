import { myKey } from '../private/key'
import {movieID} from './Search'

// async function getMovie(movieName : String): Promise<string> {
//   const movieTitle = movieName.replace(" ", "+");
//   return await fetch('https://api.themoviedb.org/3/movie/157336?api_key=${myKey}&language=en-US&query=${movieTitle}')
//       .then(response =>  {
//           // return response.json()
//           let posterResp = response.json()
//           return posterResp.then(data => {
//               let respType = data.response_type;
//               if (respType === "success") {
//                 console.log(respType)
//                 return data.poster_path
//               } else{
//                   return "Oops! Cannot access poster picture!"
//               }
//       } )})
// }

//cedric sprint 3

let fetchPoster = async function (movieName: String): Promise<string> {
  // const movieTitle = movieName.replace(" ", "+");
  // const response: Response = await fetch(`https://api.themoviedb.org/3/movie/157336?api_key=${myKey}&language=en-US&query=${movieTitle}`);
  // const data: JSON = await response.json();
  const url = 'https://api.themoviedb.org/3/movie/'+movieID+'?api_key='+myKey+'&language=en-US&query='+movieName;
  const response: Response = await fetch(url);
  const data = await response.json();
  console.log(data)
  let poster_path = data['poser_path']
// let poster_path = data['backdrop_path']
  console.log(poster_path)
  const full_path = "https://image.tmdb.org/t/p/original/" + poster_path
  // console.log(full_path)
  return (full_path);
}

export {fetchPoster}


//157336