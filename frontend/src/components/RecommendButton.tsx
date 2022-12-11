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
export async function sendPost(){
    fetch('http://127.0.0.1:5000/recommendations/', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "example1": 78912 })
})
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))
}

//create a data structure to store output from sendPost() fetch

//parse through list of movie IDs and send request to apiquery 
//https://api.themoviedb.org/3/movie/{MOVIE ID}}?api_key=ca80130f34859e4807faeca3729ca13e&language=en-US


export async function getMovieInformation(){
    //searchTitle()

}