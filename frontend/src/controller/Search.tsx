import { sendPost } from "../components/RecommendButton";
import { keys } from 'ts-transformer-keys';

interface DB {
  [name: string]: number;
}


//get master list of all movie titles to IDs
export async function getAllMovies(){
  const response = await fetch('http://127.0.0.1:5000/titles_to_ids/')
  const moviedata = await response.json()

  return moviedata.data;
}




let movieID = [0,0,0]; //three user inputted movie IDs
let movieIndex = 0; //movId index
let movieCount = 0; //counts for number of searched movies
var dataDB: (DB|null) = null;



export async function getMovieTitlesFromMap(){
  dataDB = await getAllMovies() as DB
  const keysOfMovies = keys<DB>();
  console.log(keysOfMovies);
  
  keysOfMovies.toString();
}





export async function searchTitle(name:string){
  //if there's no user input --> alert user
  if(name === ""){
    alert("No search input")
    return null;
  } else {
    //make sure cache is empty
    if(dataDB === null) {
      //if it's empty get the master list of movies
      dataDB = await getAllMovies() as DB
    }

    //throw alert if movie title doesn't exist
    if(dataDB[name] == null) {
      alert("No match exist!")
      return null;
    } else {
      const id = dataDB[name]
      movieID[movieIndex] = id

      //the following checks to make sure there are 3 movies is not based on number of 
      //clicks on the search button but rather the search button triggers the
      //fetches that populate the movieID list and based on what's in that list
      //we check to see if three movies have been inputted

      //check to make sure that user inputs three movies based on indices of array
      if(movieIndex == 2){
        movieIndex = 0
      } else {
        movieIndex++
      }

      if(movieCount > 1) {
        //if there are three movies then send post request
        const recommendedOuput = await sendPost(movieID)
        return recommendedOuput
      } else {
        movieCount++
        return null
      }
    }
  }
}
