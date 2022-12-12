// import {useHistory} from "react-router-dom";
import { useNavigate } from "react-router-dom";



export default function TryAgainButton() {
    const history = useNavigate();
    //  const history = useHistory();
    return (
        <div>

            <button type="submit" id="getNewRecommendation"
                onClick={() => history('/newRecommendationPage')}
            // onClick={() => {navigateToRecPage}}
            /*onClick={() => {getMovieAutocomplete(search)}}*/>Give New Movie Rec</button>

        </div>
    )
}

//sends to backend movie IDs list and gets the next item in the list
export async function sendPostNewRec(movieId: number) {
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
export async function sendRequestMoveAPI(moiveId: number) {
    const rsp = await fetch(' https://api.themoviedb.org/3/movie/{MOVIE ID')
}



export async function getMovieInformation() {
    //searchTitle()

}