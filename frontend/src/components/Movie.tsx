import { useEffect, useState } from "react"
import { fetchPoster } from "../controller/Media"
import React from "react";
import TrashIcon from "./TrashIcon";
import {movieID} from "../controller/Search"
import {myKey} from "../private/key"
import axios from "axios";
import { setTranslate3d } from "rsuite/esm/List/helper/utils";




interface MovieProps {
    movieName: string
  
}

//delete on, use state gets set to true then remove from list 

// export default async function Movie({ movieName }: MovieProps) {
//     const [deletePoster, setDeletePoster] = useState(false);
//    return (
//             <div className="movieCard" >
//                  {<img src = {await fetchPoster(movieName)} /> }
//             </div>
//         )
// }

// export default function Movie(movieName: string){
//     const [pathUrl, setpathUrl] = useState('');
//     const [error, setError] = useState('')
    
//     useEffect(() => {
//        axios
    //    .get('https://api.themoviedb.org/3/movie/' + movieID + '?api_key=' + myKey + '&language=en-US&query=' + movieName)
    //    .then((response) => {
    //        console.log(response);
    //     //    setpathUrl(response.poster_path)

//        }
        
//         })
//         .catch((err) => {
//             console.error('Error:', err);
//             setError(err);
//         });
//     }, []);
//     if (state === 'error')
//     return (
//         <h1>

//             {error.toString()}
//         </h1>
//     );
//     return (
//     <div>
//         <div>
//             {state === 'loading' ? (
//                 <h1>Loading...</h1>
//             ) : (
//                 <img src="{catUrl}" />
//             )}
//         </div>
//     </div>
//     );
    
export default function Movie(movieName: string) {
    const [pathUrl, setPathUrl] = useState('');
    const [error, setError] = useState(false);
    const [state, setState] = useState('');
    useEffect(() => {
        setState('loading');
        axios
        .get('https://api.themoviedb.org/3/movie/' + movieID + '?api_key=' + myKey + '&language=en-US&query=' + movieName)
        .then((response) => {
            console.log(response);
            setPathUrl(response.data.poster_path)
                setState('success');
            })
            .catch((err) => {
                console.error('Error:', err);
                setState('error');
                setError(err);
            });
    }, []);
    if (state === 'error')
        return (
            <h1>

                {error.toString()}
            </h1>
        );
    return (
        <div>
            <div>
                {state === 'loading' ? (
                    <h1>Loading...</h1>
                ) : (
                    <img src= {"https://image.tmdb.org/t/p/original/" + pathUrl }/>
                )}
            </div>
        </div>
    );
}







// interface PosterProps {
//     name: string
 
// }



// export async function Poster({name}: PosterProps ) {
//     return (
//         <div> 
//             {<img src = {await fetchPoster(name)} /> }
//         </div>
//     )
// }
  
