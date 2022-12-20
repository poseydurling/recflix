import { sendPost } from "../components/RecommendButton";
import { keys } from 'ts-transformer-keys';

let examples: number[] = [];

//database interface that's used to deserialize fetch outputs
interface DB {
  [name: string]: number;
}

//Gets a master list of all movie titles to IDs from the backend server's titles_to_ids endpoint
export async function getAllMovies() {
  const response = await fetch('http://127.0.0.1:5000/titles_to_ids/', {
    mode: 'cors',
    headers: {
      'Acess-Control-Allow-origin': '*'
    }
  })
  const moviedata = await response.json()
  return moviedata.data;
}

export async function getMovieTitleList() {
  const response = await fetch('http://127.0.0.1:5000/titles_to_ids/', {
    mode: 'cors',
    headers: {
      'Acess-Control-Allow-origin': '*'
    }
  })
  const moviedata = await response.json()
  return Object.keys(moviedata.data);
}

//variable declarations
export let movieID = [0, 0, 0]; //Three user inputted movie IDs
let movieIndex = 0; //MovieID index
let movieCount = 0; //Counts the number of searched movies
var dataDB: (DB | null) = null; //cache for master list of movies to ids

export async function getMovieTitlesFromMap() {
  dataDB = await getAllMovies() as DB
  const keysOfProps = keys<DB>();
}

export async function updateExamples(title : string){
  //Makes sure cache is empty
  if (dataDB === null) {
    //If it's empty get the master list of movies
    dataDB = await getAllMovies() as DB
  }
  //Throws alert if movie title doesn't exist
  if (dataDB[title] === null) {
    throw new Error("No match exist!")
  }
  const id = dataDB[title]
  examples.push(id)
  return examples;
}

//This is the getRecommendation() function that takes in a varibale name of type string through its parameters. 
//It is responsible for sending a post request and getting the output of recommended movies from the backend.
export async function getRecommendation(name: string) {
  //If there's no user input --> alert user
  if (name === "") {
    alert("No search input")
    return null;
  } else {
    //Make sure cache is empty
    if (dataDB === null) {
      //if it's empty get the master list of movies
      dataDB = await getAllMovies() as DB
    }

    //Throw alert if movie title doesn't exist
    if (dataDB[name] == null) {
      alert("No match exist!")
      return null;
    } else {
      const id = dataDB[name]
      movieID[movieIndex] = id

      //The following checks to make sure there are 3 movies is not based on number of 
      //clicks on the search button but rather the search button triggers the
      //fetches that populate the movieID list and based on what's in that list,
      //we check to see if three movies have been inputted.

      //Checks to make sure that user inputs three movies based on indices of array
      if (movieIndex == 2) {
        movieIndex = 0
      } else {
        movieIndex++
      }

      if (movieCount > 1) {
        //If there are three movies then send post request
        const recommendedOuput = await sendPost(movieID)
        return recommendedOuput
      } else {
        movieCount++
        return null
      }
    }
  }
}