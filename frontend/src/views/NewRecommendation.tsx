

// import Movie from '../components/Movie'
import NavBar from '../components/NavBar'

// import Search, { recMovlist } from '../components/Search'
// import RecommendButton from '../components/RecommendButton'
// import TrashIcon from '../components/TrashIcon'
// import { useState } from 'react'
// import React from 'react'
// import Movie from '../components/Movie'
// import { MovieMetaData } from "../components/Movie";
// import TryAgainButton from '../components/TryAgainButton';
// import NewRequestButton from '../components/NewRequestButton'
// import { getMovieDetails } from '../components/RecommendButton'
// import {useEffect} from 'react'
// import recMovList from '../components/Search'

// let newRecID: number = 0;



//  function NewRecommendation(){
//     const[displayNewMovieData, setNewMovieDisplayData] = useState<MovieMetaData>({name: ' ', posterPath:' '});
    
    
//     async function getNewMovieInformation(recId : number[]){
//         console.log('GETTING U A NEW RECOMMENDATION')
//         newRecID++
   
//     if(newRecID > recId.length-1)
//     {
//         //end of recommended list -> print error!
//         alert("No more recommendations available!")
//     }else{
//         const newRecommendation = await getMovieDetails(recId[newRecID])
//         const newRecPosterPath = "https://image.tmdb.org/t/p/original/" + newRecommendation.poster_path
//         const newRecTtitle = newRecommendation.original_title
//         setNewMovieDisplayData({name: newRecTtitle, posterPath: newRecPosterPath})
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



//     return(
//         <div>
//             <NavBar></NavBar>
//             <div>Here's a New Recommednation</div>
//             <Movie movieMetaData={displayNewMovieData} ></Movie>
//             <TryAgainButton></TryAgainButton>
//             <NewRequestButton></NewRequestButton>


//         </div>

//     )
// }

// export default NewRecommendation