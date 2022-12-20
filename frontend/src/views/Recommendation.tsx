import '../styles/main.css'
import NavBar from '../components/NavBar'
import NextButton from '../components/NextButton'
import RecMovie, { MovieMetaData } from "../components/RecMovie";
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../components/RecommendButton';
import { recMovlist } from "../components/Search";
import WeRecommend from '../components/WeRecommend';


/**
 * 
 * @returns our recommendation page component which contains the recommended movie from the user's inputs, and a next button which users can click
 * to get a new recommendation
 */
export default function Recommendation() {
  // useState that sets the posterPath with our recommendation generated from the user's inputs
    const[displayData, setDisplayData] = useState<MovieMetaData>({name: ' ', posterPath:' '});

    // function that gets the first recommendation from the list of recommednations we generate based on the user's 3 inputted movies, 
    // and displays our first recommendation's title and poster path
    async function getMovieInformation(recId : number[]){
      if(recId.length < 3)
      {
          alert("please search at least 3 movies first!")
      } else {
          const recommendation = await getMovieDetails(recId[0])
            let recPosterPath=  "https://image.tmdb.org/t/p/original/" + recommendation.poster_path
            let recTitle = recommendation.original_title
          setDisplayData({name: recTitle, posterPath: recPosterPath})
      }
  }
  useEffect(() => {
      const getRecommendationInfo = async() =>
      {
          await getMovieInformation(recMovlist)
      }
      getRecommendationInfo()
  }, [])

  return (
    <div>
      <style>{'body { background-color: black; }'}</style>
        <NavBar aria-label = "navigation bar"></NavBar>
        <WeRecommend aria-label = "recommended movie"></WeRecommend>
        <RecMovie movieMetaData={displayData} aria-label = "movie information"></RecMovie>
        <NextButton aria-label = "button requesting another recommendation" ></NextButton>
    </div>
)
}