import { useNavigate } from "react-router-dom";
import { myKey } from "../private/key";


/**
 * When the recommend button is clicked, we naviagte to our next view/page which contains the recommended movie based on the user's input
 * @returns a react component button
 */
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

//This is the sendPost() function that takes in variable movieId of a list of numbers.
//It is responsible for sending a post request with the three user-inputted movies' ids in order 
//to get the recommended list of movie ids from the backend. It returns the output from the backend
//as a json.
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

//This is the getMovieDetails() function takes in variable movid of type number. 
//It is responsible for sending another request to the api to retrieve information of a 
//movie's attributes givesn its movie Id. It returns the response from the api as a json.
export async function getMovieDetails(movid: number) {
    const url = "https://api.themoviedb.org/3/movie/"+movid+"?api_key="+myKey+"&language=en-US"
    const response = await fetch(url)
    const movieinfo = await response.json()
    console.log(movieinfo)
    return movieinfo
}