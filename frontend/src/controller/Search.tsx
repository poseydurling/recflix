import { sendPost } from "../components/RecommendButton";

interface DB {
  [name: string]: number;
}

export async function getAllMovies(){
  const response = await fetch('http://127.0.0.1:5000/titles_to_ids/')
  const moviedata = await response.json()

  return moviedata.data;
}

let movId = [0,0,0]; //three user inputted movie IDs
let movNum = 0; //movId index
let movCnt = 0; //counts for number of searched movies
var datadb: (DB|null) = null;

export async function searchTitle(name:string){
  if(name === ""){
    alert("No search input")
    return null;
  } else {
    if(datadb === null) {
      datadb = await getAllMovies() as DB
    }

    if(datadb[name] == null) {
      alert("No match exist!")
      return null;
    } else {
      const id = datadb[name]
      movId[movNum] = id
      if(movNum == 2){
        movNum = 0
      } else {
        movNum++
      }

      if(movCnt > 1) {
        const rec_ret = await sendPost(movId)
        return rec_ret
      } else {
        movCnt++
        return null
      }
    }
  }
}
