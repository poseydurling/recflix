import { isPropertySignature } from "typescript"
import { fetchPoster } from "../controller/Media"

export default function Movie(props: any){
    const movieId = {}
    console.log(props.card1)
    return (
        <div id="movieCard1">   
        </div>
        //props.card1 gives u whatever if in the high level state variable 
        //tell page to display the background path from fetchPoster
        //use an image element to do this
        
    )
}

export function uploadPoster(props: any){
   
}