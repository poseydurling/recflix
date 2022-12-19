import { useState } from "react";
import Movie, { MovieMetaData } from "./Movie";
import { getMovieDetails } from "./RecommendButton";
import { recMovlist } from "./Search";

let count = 1;

export default function NextButton(){
    const[nextRec, setNextRec] = useState<MovieMetaData>({name: '', posterPath:'https://images.squarespace-cdn.com/content/v1/56031d09e4b0dc68f6197723/1469030770980-URDU63CK3Q4RODZYH0S1/Grey+Box.jpg?format=1500w'});

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
            <button type="submit" id="nextButton" onClick={async () => {
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
        <Movie movieMetaData={nextRec}></Movie>
        </div>
    )
}

// export default function NextButton() {
//     const[displayData, setDisplayData] = useState<MovieMetaData>({name: '', posterPath:'https://images.squarespace-cdn.com/content/v1/56031d09e4b0dc68f6197723/1469030770980-URDU63CK3Q4RODZYH0S1/Grey+Box.jpg?format=1500w'});
//       async function getMovieInformation(recId : number[]){
//         newMovieRecID++
//           if(newMovieRecID > recId.length-1){
//                     alert("No more recommendations available!")
//                     count = 0;
//         }
//         else {
//             const recommendation = await getMovieDetails(recId[newMovieRecID])
//             const recPosterPath=  "https://image.tmdb.org/t/p/original/" + recommendation.poster_path
//             const recTitle = recommendation.original_title
//             setDisplayData({name: recTitle, posterPath: recPosterPath})
 
//         }
//     }
 
//     useEffect(() => {
//         const getRecommendationInfo = async() => 
//         {
//             await getMovieInformation(recMovlist)
//             console.log(recMovlist)
        
//         }
//         getRecommendationInfo()
//     }, [])

//     if (count >= 2){
//     return (
//         <div>
//             <button type="submit" id="getNewRecommendation"
//                 onClick={() => {
//                     count++
//                     getMovieInformation(recMovlist);
//                    }}>Give New Movie Rec</button>
//                <Movie movieMetaData={displayData} ></Movie>
//         </div>
//     ) }
//         else {
//                     return (
//                         <div>
//                             <button type="submit" id="getNewRecommendation"
//                                 onClick={() => {
//                                     // history('/newRecommendationPage');
//                                     count++
//                                     getMovieInformation(recMovlist);
//                                    }}>Give New Movie Rec</button>       
//                         </div>
//                     )
//                 }
// }