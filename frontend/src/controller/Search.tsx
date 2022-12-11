import { sendPost } from "../components/RecommendButton";

export let data = [];
let finalDataStructure = new Map()
let keys  = new Array() 
keys.push(finalDataStructure.keys())
//cedric sprint 3
interface DB {
  [name: string]: number;
}

export async function getAllMovies(){
  const response = await fetch('http://127.0.0.1:5000/titles_to_ids/')
  const moviedata = await response.json()

  return moviedata.data;
}

// export async function getMovieMap(){
//   getAllMovies().then(m_data =>{
    
//     let movieHashmap = new Map();
//     for (var name in m_data.data) {
//         movieHashmap.set(name, m_data.data[name]);
//     }
//     console.log(movieHashmap);
//     return movieHashmap;
//   }
//   )
// }
var datadb: (DB|null) = null;

export async function searchTitle(name:string){
  if(datadb === null) {
    datadb = await getAllMovies() as DB
  } 
  const id = datadb[name]
  console.log(datadb)
  await sendPost(id)
  return datadb[name]   
}

export async function serializeMovies(){
  getAllMovies().then(data =>{
    //this method should return some sort of data structure with all movie titles
    //linked to movie IDs
    
    //update finalDataStructure
    return finalDataStructure
  }
  )
}

// export async function searchTitle(name:String){
//   serializeMovies().then(data =>{
//     //return output
//   })

//   for(let i =0; i<keys.length; i++){
//     if (keys[i] == name){
//       return finalDataStructure.get(i)
//     }
//     else{
//       i++
//     }
//   }
  
// }

export function usersMovies(){
  //create a list of movie IDs wnated by users
}

export function getMovieAutocomplete(name:String){
  //change this local host once backend is done
  console.log(getAllMovies)
  // await fetch(`http://localhost:3232/getMap?minLat=${name}`)
  // .then(response => response.json())
  // .then(json => {
  //   data = json["title"]
  // })
}