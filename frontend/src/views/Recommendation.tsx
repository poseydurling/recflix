import '../styles/main.css'
import NavBar from '../components/NavBar'
import NextButton from '../components/NextButton'
import Movie, { MovieMetaData } from "../components/Movie";
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../components/RecommendButton';
import { recMovlist } from "../components/Search";
import WeRecommend from '../components/WeRecommend';

export default function Recommendation() {
    // const[nextRec, setNextRec] = useState<MovieMetaData>({name: '', posterPath:'https://images.squarespace-cdn.com/content/v1/56031d09e4b0dc68f6197723/1469030770980-URDU63CK3Q4RODZYH0S1/Grey+Box.jpg?format=1500w'});
    const[displayData, setDisplayData] = useState<MovieMetaData>({name: ' ', posterPath:' '});

    // function handleChange(name: string, posterPath : string) {
    //     const newRec : MovieMetaData = {name : name, posterPath : posterPath}
    //     setNextRec(newRec);
    // }

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
        <NavBar aria-label = "navigation bar"></NavBar>
        <WeRecommend aria-label = "recommended movie"></WeRecommend>
        <Movie movieMetaData={displayData} aria-label = "movie information"></Movie>
        <NextButton aria-label = "button requesting another recommendation" ></NextButton>
    </div>
)
}

    // return (
    //     <div>
    //         <NavBar></NavBar>
    //         <div>We recommend...</div>
    //         <Movie movieMetaData={displayData} ></Movie>
    //         <NextButton setRec={handleChange}></NextButton>
    //     </div>
    // )