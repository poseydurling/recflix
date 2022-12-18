import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMovieDetails } from "../components/RecommendButton";
import { recMovlist } from "../components/Search";
import Recommendation from "../views/Recommendation";
import Movie, { MovieMetaData } from "./Movie";

let newMovieRecID: number = 0
let posterPath : String = ""
let recommendTitle : String = ""
let recommendRating : String = ""
let recommendDescrip : String = ""

export default function TryAgainButton() {
    const history = useNavigate();
    //  const history = useHistory();

    const [displayNewestRec, setNewestRec] = useState<MovieMetaData>({name: '', posterPath: ' ' })

    async function getNewMovieInformation(recId : number[]){
        console.log('GETTING U A NEW RECOMMENDATION')
        newMovieRecID++
   
    if(newMovieRecID > recId.length-1)
    {
        //end of recommended list -> print error!
        alert("No more recommendations available!")
    }else{
        const newRecommendation = await getMovieDetails(recId[newMovieRecID])
        const newRecPosterPath = "https://image.tmdb.org/t/p/original/" + newRecommendation.poster_path
        const newRecTtitle = newRecommendation.original_title
        setNewestRec({name: newRecTtitle, posterPath: newRecPosterPath})
        console.log(newRecTtitle)

    }
}

useEffect(() => {
    console.log("Check that rec button use effect is called")
    const getRecommendationInfo = async() => 
    {
        await getNewMovieInformation(recMovlist)
    }
    getRecommendationInfo()
}, [])

    return (
        <div>
            <button type="submit" id="getNewRecommendation"
                onClick={() => {
                    // history('/newRecommendationPage');
        
                    getNewMovieInformation(recMovlist);
                   
                   }}>Give New Movie Rec</button>

        </div>
    )
}

// export async function getNewMovieInformation(recId : number[]){
//     newMovieRecID++
//     if(newMovieRecID > recId.length-1)
//     {
//         //end of recommended list -> print error!
//         alert("No more recommendations available!")
//     }else{
//     //get the new recommended movie info
//     getMovieDetails(recId[newMovieRecID]).then (data=>{
//         posterPath = data.poster_path
//         recommendTitle = data.original_title
//         recommendRating = data.vote_average
//         recommendDescrip = data.tagline
//         console.log(posterPath)
//         console.log(recommendTitle)
//     })
// }
// }

