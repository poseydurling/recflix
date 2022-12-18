import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMovieDetails } from "../components/RecommendButton";
import { recMovlist } from "../components/Search";
import Recommendation from "../views/Recommendation";
import Movie, { MovieMetaData } from "./Movie";
import setNewRecMovieList from "./Search"

let newMovieRecID: number = 0
let posterPath : String = ""
let recommendTitle : String = ""
let recommendRating : String = ""
let recommendDescrip : String = ""

let count = 1;



export function setCount(){
    newMovieRecID = 0;
    count = 0; 
}


export default function TryAgainButton() {
    const history = useNavigate();
    //  const history = useHistory();

    // const [displayNewestRec, setNewestRec] = useState<MovieMetaData>({name: '', posterPath: ' ' })

//     async function getNewMovieInformation(recId : number[]){
//         console.log('GETTING U A NEW RECOMMENDATION')
//         newMovieRecID++
   
    
//     if(newMovieRecID > recId.length-1){
//         //end of recommended list -> print error!
//         alert("No more recommendations available!")
//         count = 0;
//     }else{
//         const newRecommendation = await getMovieDetails(recId[newMovieRecID])
//         const newRecPosterPath = "https://image.tmdb.org/t/p/original/" + newRecommendation.poster_path
//         const newRecTtitle = newRecommendation.original_title
//         setNewestRec({name: newRecTtitle, posterPath: newRecPosterPath})
//         console.log(newRecTtitle)

//     }
// }

// useEffect(() => {
//     console.log("Check that rec button use effect is called")
//     const getRecommendationInfo = async() => 
//     {
//         await getNewMovieInformation(recMovlist)
//     }
//     getRecommendationInfo()
// }, [])



const[displayData, setDisplayData] = useState<MovieMetaData>({name: ' ', posterPath:' '});
      async function getMovieInformation(recId : number[]){
        console.log('LOOK IN HERE FOR GETMOVIEREC LOG')
        newMovieRecID++
          if(newMovieRecID > recId.length-1){
                    //end of recommended list -> print error!
                    alert("No more recommendations available!")
                    count = 0;
                    //newMovieRecID = 0;     
        }
        else {
            //display the first recommended movie
            const recommendation = await getMovieDetails(recId[newMovieRecID])
            const recPosterPath=  "https://image.tmdb.org/t/p/original/" + recommendation.poster_path
            const recTitle = recommendation.original_title
            // console.log(recTitle)
            // console.log(recPosterPath)
            setDisplayData({name: recTitle, posterPath: recPosterPath})
 
        }
    }
 
    useEffect(() => {
        // console.log("Check that rec button use effect is called")
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
                    // history('/newRecommendationPage');
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

