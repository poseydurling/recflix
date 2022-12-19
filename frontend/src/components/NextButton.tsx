import { useState } from "react";
import Movie, { MovieMetaData } from "./Movie";
import { getMovieDetails } from "./RecommendButton";
import { recMovlist } from "./Search";
import RecMovie from "./RecMovie";
import React from "react";

let count = 1;

export default function NextButton(){
    const[nextRec, setNextRec] = useState<MovieMetaData>({name: '', posterPath:'https://i.etsystatic.com/15699034/r/il/e4a135/1714398370/il_1588xN.1714398370_jy1z.jpg'});

    function handleChange(name: string, posterPath : string) {
        const newRec : MovieMetaData = {name : name, posterPath : posterPath}
        setNextRec(newRec);
    }

    let recId = recMovlist;
    if(recId.length < 3){
        alert("please search at least 3 movies first!")
    }
    return (
        <div>
            <button type="submit" id="nextButton" aria-label = "submit button to request for another recommendation" onClick={async () => {
                const recommendation = await getMovieDetails(recId[count]);
                const recPosterPath=  "https://image.tmdb.org/t/p/original/" + recommendation.poster_path;
                const recTitle = recommendation.original_title;
                handleChange(recTitle, recPosterPath);
                count = count + 1;
                console.log(count);
                console.log(recId);
            }
        }
            >Next</button>
        <RecMovie movieMetaData={nextRec}></RecMovie>
        </div>
    )
}