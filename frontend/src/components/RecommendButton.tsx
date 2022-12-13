import { useState } from "react";
import { searchTitle } from "../controller/Search";
import { recMovlist } from "../components/Search";
import Recommendation from "../views/Recommendation";
import Form from "../views/Form";
// import {useHistory} from "react-router-dom";
import { useNavigate } from "react-router-dom";

let posterPath : String = ""
let recommendTitle : String = ""
let recommendRating : String = ""
let recommendDescrip : String = ""

export default function RecommendButton() {
    //    const history = useHistory();
    const navigateToRecPage = useNavigate();

    //const [search, setSearch] = useState('');
    return (
        <div>
            <button type="submit" id="recommendButton"
                onClick={() => {getMovieInformation(recMovlist); navigateToRecPage('/recommendationPage')}}
            // onClick={() => {history.push('/')}}
            // onClick={() => {navigateToRecPage}}
            /*onClick={() => {getMovieAutocomplete(search)}}*/>Recommend-A-Movie</button>

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
    return movieinfo
}