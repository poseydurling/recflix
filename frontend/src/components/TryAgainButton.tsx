import { useNavigate } from "react-router-dom";
import { getMovieDetails } from "../components/RecommendButton";
import { recMovlist } from "../components/Search";

let recid: number = 0
let posterPath : String = ""
let recommendTitle : String = ""
let recommendRating : String = ""
let recommendDescrip : String = ""

export default function TryAgainButton() {
    const history = useNavigate();
    //  const history = useHistory();
    return (
        <div>
            <button type="submit" id="getNewRecommendation"
                onClick={() => {getNewMovieInformation(recMovlist); history('/newRecommendationPage')}}>Give New Movie Rec</button>

        </div>
    )
}

export async function getNewMovieInformation(recId : number[]){
    recid++
    if(recid > recId.length-1)
    {
        //end of recommended list -> print error!
        alert("No more recommendations available!")
    }else{
    //get the new recommended movie info
    getMovieDetails(recId[recid]).then (data=>{
        posterPath = data.poster_path
        recommendTitle = data.original_title
        recommendRating = data.vote_average
        recommendDescrip = data.tagline
        console.log(posterPath)
        console.log(recommendTitle)
    })
}
}