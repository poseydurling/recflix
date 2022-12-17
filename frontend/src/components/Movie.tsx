import { useEffect, useState } from "react"
import { isPropertySignature } from "typescript"
import { fetchPoster } from "../controller/Media"
import { movieID } from "../controller/Search"
import { myKey } from "../private/key"


interface MovieProps {
    movieName: string
    card: string
}


export default function Movie({ movieName, card }: MovieProps) {
    return (
        <div className="movieCard1">
            <Poster name={movieName}  />
        </div>
    )
}
    /* } else if(props.card == 'card2'){
        return(
            <div id="movieCard2">   
        </div>
        )
    } else if (props.card == 'card3'){
        return (
            <div id="movieCard3">   
            </div>
        )
    } else {
        return (
            <div>   
            </div>
        )
    }
        //props.card1 gives u whatever if in the high level state variable 
        //tell page to display the background path from fetchPoster
        //use an image element to do this */


interface getMoivePoster {
    name: string
    link : string
}

// export default function MoviePoster({name, link } : getMoivePoster){
//     return (
//         <div className="movieCard4">
//             <Poster name={name} link={link} />
//         </div>
//     )

// }



interface PosterProps {
    name: string
 
}

// export function Poster({name, link} : PosterProps){
//     const [path, setPath] = useState<string | null>(null)
//         useEffect(() => {
//          fetchPoster(name).then(path => setPath(path));
//     }, [])
//     return (
//         <div>
//             <p> {name} </p>
//             {path ? <img src={path} /> : null}

//         </div>
//     )

// }

export function Poster({ name }: PosterProps) {
    const [path, setPath] = useState<string | null>(null)
    useEffect(() => {
         fetchPoster(name).then(p => setPath(p));
    }, [])
   
    return (
        <div>
            <p>{name}</p>
            {path ? <img src={path} /> : null}
        </div>
    )
    }





    // if(count == 1){
    //     let el1 = document.getElementById("movieCard1");
    //     if(el1 === null) {
    //         console.log("Couldn't find input element")
    //     } else {
    //         console.log('poster = ' + path)
    //         el1.innerHTML="<img src =" + path + "/>";

    //     }
    // } else if(count == 2) {
    //     let el2 = document.getElementById("movieCard2");
    //     if(el2 === null) {
    //         console.log("Couldn't find input element")
    //     } else {
    //         el2.innerHTML="<img src = 'https://image.tmdb.org/t/p/original//spTUUMgIVm4gOdWL35IoYWEuZQl.jpg'/>";

    //     }
    // } else if(count == 3) {
    //     let el3 = document.getElementById("movieCard3");
    //     if(el3 === null) {
    //         console.log("Couldn't find input element")
    //     } else {
    //         el3.innerHTML="<img src = 'https://image.tmdb.org/t/p/original//spTUUMgIVm4gOdWL35IoYWEuZQl.jpg'/>";
    //     }
    // } else {
    //     return console.log('cannot get poster path')
    // }
