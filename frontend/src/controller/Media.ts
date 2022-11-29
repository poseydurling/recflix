import { myKey } from '../private/key';
import { FeatureCollection } from "geojson";

async function getMovie(movieName : String): Promise<string> {
  const movieTitle = movieName.replace(" ", "+");
  return await fetch('https://api.themoviedb.org/3/movie/157336?api_key=${myKey}&language=en-US&query=${movieTitle}')
      .then(response =>  {
          // return response.json()
          let statsResp = response.json()
          return statsResp.then(data => {
              let respType = data.response_type;
              if (respType === "success") {
                console.log(data)
                  return data.poster_path //formats correctly
              } else{
                  return "Oops! Cannot access poster picture!"
              }
      } )})
}

export {getMovie}