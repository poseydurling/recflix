export let data = [];

//cedric sprint 3

export async function getMovieAutocomplete(name:String){
  //change this local host once backend is done
  await fetch(`http://localhost:3232/getMap?minLat=${name}`)
  .then(response => response.json())
  .then(json => {
    data = json["title"]
  })
}