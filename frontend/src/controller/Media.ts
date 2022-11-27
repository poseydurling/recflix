import rl_data  from "./mockedData/fullDownload.json"

export function getMovieData(): Promise<GeoJSON.FeatureCollection | undefined> {
    const dataResponse: Promise<GeoJSON.FeatureCollection | undefined> = fetch(`http://localhost:3232/getMap?minLat=${minLat}&minLon=${minLon}&maxLat=${maxLat}&maxLon=${maxLon}`)
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

function getHardCodedData(): GeoJSON.FeatureCollection | undefined{
    if (isFeatureCollection(rl_data)) {
      return rl_data
    }
    return undefined
  }
  
  export function getMockData(): Promise<GeoJSON.FeatureCollection | undefined> {
    if (isFeatureCollection(rl_data)) {
      return new Promise((resolve) => resolve(getHardCodedData()))
    }
    return new Promise((resolve) => resolve(undefined))
  
  }

export {getMovieData}