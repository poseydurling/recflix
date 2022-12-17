import '../styles/main.css'
// import Movie from '../components/Movie'
import NavBar from '../components/NavBar'
import TryAgainButton from '../components/TryAgainButton'
//import NewRequestButton from '../components/newRequestButton';
import NewRequestButton from '../components/NewRequestButton';

function NewRecommendation() {
    return (
        <div>
            <NavBar></NavBar>
            <div>Our New Recommendation for You is..</div>
            <TryAgainButton></TryAgainButton>
            <NewRequestButton></NewRequestButton>

        </div>
    )
}

export default NewRecommendation;