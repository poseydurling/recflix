import { useState } from "react";
import { recMovlist } from "../components/Search";
import { useNavigate } from "react-router-dom";
import {myKey} from '../private/key';
import { fetchPoster } from "../controller/Media";

let posterPath : string = ""
let recommendTitle : string = ""
let recommendRating : String = ""
let recommendDescrip : String = ""
let recTtitleOne : String = ""


interface RecList{
    movieName: string
}

export default function RecommendButton() {
    //    const history = useHistory();
    const navigateToRecPage = useNavigate();
    const [movieRecList, setMovieRec] = useState<RecList[]>([]);
    const [search, setSearch] = useState();
    const[movieId, setMovieId] = useState();

    //const [search, setSearch] = useState('');
    return (
        <div>
            <button type="submit" id="recommendButton"
                onClick={() => { 
                    //get rec movie list by calling the post function and pass this argument in for the get movie info
                    getMovieInformation(recMovlist); 
                    navigateToRecPage('/recommendationPage');
                    
                    //recId[0]
                }}
            // onClick={() => {history.push('/')}}
            // onClick={() => {navigateToRecPage}}
            /*onClick={() => {getMovieAutocomplete(search)}}*/>Recommend-A-Movie</button>

<               div className="movieCards">
                    {/* <Movie movieName={recommendTitle} /> */}
                </div>
           

        </div>
    )
}

//send a post request with the three searched movies' ids in order to get the recommended list of movie ids
export async function sendPost(movieId: number[]){
   const rsp = await fetch('http://127.0.0.1:5000/recommendations/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "example1": movieId[0], "example2" : movieId[1], "example3": movieId[2]})
    })
   console.log(rsp)
    return await rsp.json()
}

export async function getMovieInformation(recId : number[]){
    if(recId.length < 3)
    {
        alert("please search at least 3 movies first!")

    } else {
        //display the first recommended movie
        getMovieDetails(recId[0]).then (data=>{
            posterPath = data.poster_path
            recommendTitle = data.original_title
            recommendRating = data.vote_average
            recommendDescrip = data.tagline
           console.log(posterPath)
           console.log(recommendTitle)
        })
    }
}

export async function getMovieDetails(movid: number) {
    const url = "https://api.themoviedb.org/3/movie/"+movid+"?api_key=ca80130f34859e4807faeca3729ca13e&language=en-US"
    const response = await fetch(url)
    const movieinfo = await response.json()
    console.log(movieinfo)
    return movieinfo
}