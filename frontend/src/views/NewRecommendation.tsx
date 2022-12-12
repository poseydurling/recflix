import '../styles/main.css'
import Movie from '../components/Movie'
import NavBar from '../components/NavBar'
import TryAgainButton from '../components/TryAgainButton'

function NewRecommendation(){
    return (
        <div>
            <NavBar></NavBar>
            <div>Our New Recommendation for You is..</div>
                <Movie></Movie>
            <TryAgainButton></TryAgainButton>
        </div>
    )
}

export default NewRecommendation;