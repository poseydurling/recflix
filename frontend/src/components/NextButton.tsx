import { useState } from "react";
import Movie, { MovieMetaData } from "./Movie";
import { getMovieDetails } from "./RecommendButton";
import { recMovlist } from "./Search";
import NextRecMovie from "./NextRecMovie";
import React from "react";

let count = 1;

/**
 * Function that renders the next button component. We use a useState which is of the movieMetaData interface which updates the 
 * the movie component with the next movie reocmmendation in the recommednation list.
 * @returns Movie component which is updated with a useState that sets the next recomemdnation's title and poster path on our site
 */

export default function NextButton(){
    //use State that updates the next reocmmendation in the movie site
    const[nextRec, setNextRec] = useState<MovieMetaData>({name: '', posterPath:'https://upload.wikimedia.org/wikipedia/commons/5/50/Black_colour.jpg'});

    //function that updates the useState above by setting the next movie to be displayed to the next new recommednation
    function handleChange(name: string, posterPath : string) {
        const newRec : MovieMetaData = {name : name, posterPath : posterPath}
        setNextRec(newRec);
    }

    //checks to make sure that at least 3 movies are inputted by the user
    let recId = recMovlist;
    if(recId.length < 3){
        alert("please search at least 3 movies first!")
    }
    return (
        <div>
            <button type="submit" id="nextButton" aria-label = "submit button to request for another recommendation" onClick={async () => {
                    //check count value and alert the user if they request for an 11th recommendation
                    if(count < 10){
                        // get the movie details from recID which is the list of recommended movies our backend produces from the user's input and display the 
                        //recommendation title and movie poster path for the next movie in the list when the count is incremented on the button clicl
                    const recommendation = await getMovieDetails(recId[count]);
                    const recPosterPath=  "https://image.tmdb.org/t/p/original/" + recommendation.poster_path;
                    const recTitle = recommendation.original_title;
                    handleChange(recTitle, recPosterPath);
                    count = count + 1;
                    var card = document.getElementById('recMovieCard')
                    if(card != null){
                        card.id = 'recMovieCard2'
                    }
                    var button = document.getElementById('nextButton');
                    if(button != null){
                        button.id = 'nextButton2'
                    }
                }else{
                    //throw alert that there's no more available recommendations
                    alert("no more recommendations available!")
                }
            }
        }
            >Next</button>
        <NextRecMovie movieMetaData={nextRec}></NextRecMovie>
        </div>
    )
}