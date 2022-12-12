import { useState } from "react";
import { searchTitle } from "../controller/Search";
import Recommendation from "../views/Recommendation";
import Form from "../views/Form";
// import {useHistory} from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function RecommendButton() {
    //    const history = useHistory();
    const navigateToRecPage = useNavigate();

    const [search, setSearch] = useState('');
    return (
        <div>
            <button type="submit" id="recommendButton"
                onClick={() => navigateToRecPage('/recommendationPage')}
            // onClick={() => {history.push('/')}}
            // onClick={() => {navigateToRecPage}}
            /*onClick={() => {getMovieAutocomplete(search)}}*/>Recommend-A-Movie</button>

        </div>
    )
}

//sends to backend movie IDs
export async function sendPost(movieId: number) {
    const rsp = await fetch('http://127.0.0.1:5000/recommendations/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "example1": movieId, "example2": movieId, "example3": movieId })
    })
    return await rsp.json()
}

//create a data structure to store output from sendPost() fetch

//parse through list of movie IDs and send request to apiquery 
//https://api.themoviedb.org/3/movie/{MOVIE ID}}?api_key=ca80130f34859e4807faeca3729ca13e&language=en-US

// let fetchApiQuery = async function (movieId: number): Promise<string> {
//     const response: Response = await fetch(`https://api.themoviedb.org/3/movie/157336?api_key=${myKey}&language=en-US&query=${movieId}`);
//     const data: JSON = await response.json();
//     return JSON.stringify(data);
//   }

//   export {fetchApiQuery}


export async function getMovieInformation() {
    //searchTitle()

}