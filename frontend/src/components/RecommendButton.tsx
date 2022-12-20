import { useNavigate } from "react-router-dom";
import { myKey } from "../private/key";

export default function RecommendButton() {
    const navigateToRecPage = useNavigate();
    return (
        <div aria-label = "submit button to request for a recommendation">
            <button type="submit" id="recommendButton"
                onClick={async () => {
                    navigateToRecPage('/recommendation');
                    }
                }>Recommend-A-Movie</button>
        </div>
    )
}

//sends a post request with the three searched movies' ids in order to get the recommended list of movie ids
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

export async function getMovieDetails(movid: number) {
    const url = "https://api.themoviedb.org/3/movie/"+movid+"?api_key="+myKey+"&language=en-US"
    const response = await fetch(url)
    const movieinfo = await response.json()
    console.log(movieinfo)
    return movieinfo
}