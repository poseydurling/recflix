import '../styles/main.css'
import NavBar from '../components/NavBar'
import TryAgainButton from '../components/TryAgainButton'
import NewRequestButton from '../components/ReturnHomeButton'
import Movie, { MovieMetaData } from "../components/Movie";
import { useState } from 'react';
import { recMovlist } from "../components/Search";
import { useEffect } from 'react';
import { getMovieDetails } from '../components/RecommendButton';

function Recommendation() {
      const[displayData, setDisplayData] = useState<MovieMetaData>({name: ' ', posterPath:' '});

      async function getMovieInformation(recId : number[]){
        console.log('LOOK IN HERE FOR GETMOVIEREC LOG')
        if(recId.length < 3)
        {
            alert("please search at least 3 movies first!")
    
        } else {
            const recommendation = await getMovieDetails(recId[0])
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

    return (

        <div>
            <NavBar></NavBar>
            <div>We recommend...</div>
            <Movie movieMetaData={displayData} ></Movie>
            <TryAgainButton    ></TryAgainButton>
            <NewRequestButton></NewRequestButton>


        </div>
    )
}

export default Recommendation;