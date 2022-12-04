import { myKey } from '../private/key';

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
  const movieTitle = movieName.replace(" ", "+");
  const response: Response = await fetch(`https://api.themoviedb.org/3/movie/157336?api_key=${myKey}&language=en-US&query=${movieTitle}`);
  const data: JSON = await response.json();
  return JSON.stringify(data);
}

export {fetchPoster}