export let data = [];
let finalDataStructure = new Map()
let keys  = new Array() 
keys.push(finalDataStructure.keys())

export async function getAllMovies(){
  await fetch('http://127.0.0.1:5000/titles_to_ids/')
  .then(response => response.json())
  .then(json => {
    console.log(JSON.stringify(json))
    return JSON.stringify(json);
  })
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

export async function searchTitle(name:String){
  serializeMovies().then(data =>{
    //return output
  })

  for(let i =0; i<keys.length; i++){
    if (keys[i] == name){
      return finalDataStructure.get(i)
    }
    else{
      i++
    }
  }
  
}

export function usersMovies(){
  //create a list of movie IDs wnated by users
}