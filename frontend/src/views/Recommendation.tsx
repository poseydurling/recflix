import '../styles/main.css'
// import Movie from '../components/Movie'
import NavBar from '../components/NavBar'
import TryAgainButton from '../components/TryAgainButton'
import NewRequestButton from '../components/NewRequestButton'
// import NewRequestButton from '../components/newRequestButton'
import Movie, { MovieMetaData } from "../components/Movie";
import { useState } from 'react';

function Recommendation() {

    const [recommendation, setRecommendation] = useState<MovieMetaData>({name: '', posterPath: ''});

    function handleChange1(name: string, posterPath : string) {
        const newRecommendation : MovieMetaData = {name : name, posterPath : posterPath}
        setRecommendation(newRecommendation);
      }

    return (

        <div>
            <NavBar></NavBar>
            <div>We recommend...</div>
            <Movie movieMetaData={recommendation} ></Movie>
            <TryAgainButton></TryAgainButton>
            <NewRequestButton></NewRequestButton>


        </div>
    )
}

export default Recommendation;