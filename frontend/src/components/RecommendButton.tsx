import { useState } from "react";
import { searchTitle } from "../controller/Search";

export default function RecommendButton(){
    const [search, setSearch] = useState('');
    return (
        <div>
            <button type="submit" id="recommendButton" /*onClick={() => {getMovieAutocomplete(search)}}*/>Recommend-A-Movie</button>
        </div>
    )
}

//sends to backend movie IDs
export async function sendPost(movieId: number){
    const rsp = await fetch('http://127.0.0.1:5000/recommendations/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "example1": movieId, "example2" : movieId, "example3": movieId})
    })
    return await rsp.json()
}

//create a data structure to store output from sendPost() fetch

//parse through list of movie IDs and send request to apiquery 
//https://api.themoviedb.org/3/movie/{MOVIE ID}}?api_key=ca80130f34859e4807faeca3729ca13e&language=en-US



export async function getMovieInformation(){
    //searchTitle()

}