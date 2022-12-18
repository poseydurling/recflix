import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMovieDetails } from "../components/RecommendButton";
import { recMovlist } from "../components/Search";
import Movie, { MovieMetaData } from "./Movie";

let newMovieRecID: number = 0
let count = 1;

export function setCount(){
    newMovieRecID = 0;
    count = 0; 
}

export default function TryAgainButton() {

    const[displayData, setDisplayData] = useState<MovieMetaData>({name: ' ', posterPath:' '});
      async function getMovieInformation(recId : number[]){
        newMovieRecID++
          if(newMovieRecID > recId.length-1){
                    alert("No more recommendations available!")
                    count = 0;
        }
        else {
            const recommendation = await getMovieDetails(recId[newMovieRecID])
            const recPosterPath=  "https://image.tmdb.org/t/p/original/" + recommendation.poster_path
            const recTitle = recommendation.original_title
            setDisplayData({name: recTitle, posterPath: recPosterPath})
 
        }
    }
 
    useEffect(() => {
        const getRecommendationInfo = async() => 
        {
            await getMovieInformation(recMovlist)
            console.log(recMovlist)
        
        }
        getRecommendationInfo()
    }, [])

    if (count >= 2){
    return (
        <div>
            <button type="submit" id="getNewRecommendation"
                onClick={() => {
                    count++
                    getMovieInformation(recMovlist);
                   }}>Give New Movie Rec</button>
               <Movie movieMetaData={displayData} ></Movie>
        </div>
    ) }
        else {
                    return (
                        <div>
                            <button type="submit" id="getNewRecommendation"
                                onClick={() => {
                                    // history('/newRecommendationPage');
                                    count++
                                    getMovieInformation(recMovlist);
                                   }}>Give New Movie Rec</button>       
                        </div>
                    )
                }
}