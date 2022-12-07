import './main.css'
import Movie from '../components/Movie'
import NavBar from '../components/NavBar'
import TryAgainButton from '../components/TryAgainButton'

function Recommendation(){
    return (
        <div>
            <NavBar>Recommend-A-Movie</NavBar>
            <div>We recommend...</div>
                <Movie id='movieCard1'></Movie>
            <TryAgainButton></TryAgainButton>
        </div>
    )
}

export default Recommendation;