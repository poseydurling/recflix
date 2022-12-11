import '../styles/main.css'
import Movie from '../components/Movie'
import NavBar from '../components/NavBar'
import TryAgainButton from '../components/TryAgainButton'

function Recommendation(){
    return (
        <div>
            <NavBar></NavBar>
            <div>We recommend...</div>
                <Movie></Movie>
            <TryAgainButton></TryAgainButton>
        </div>
    )
}

export default Recommendation;