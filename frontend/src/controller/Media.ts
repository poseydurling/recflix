import { myKey } from '../private/key';
import { FeatureCollection } from "geojson";

function getMovieData(): Promise<GeoJSON.FeatureCollection | undefined> {
    const dataResponse: Promise<GeoJSON.FeatureCollection | undefined> = fetch(`https://api.themoviedb.org/3/movie/550?api_key=${myKey}`)
    .then((resp) => resp.json())
    .then((json) => {
        if (isFeatureCollection(json.data)) {
            console.log(json.data); 
            return json.data
          } else {
            console.log("Undefined data")
            return undefined
          }})
    return dataResponse;
}

export function isFeatureCollection(json: any): json is FeatureCollection {
  return json.type === "FeatureCollection"
}

export {getMovieData}