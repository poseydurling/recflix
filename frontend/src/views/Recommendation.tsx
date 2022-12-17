import '../styles/main.css'
// import Movie from '../components/Movie'
import NavBar from '../components/NavBar'
import TryAgainButton from '../components/TryAgainButton'
import NewRequestButton from '../components/NewRequestButton'
// import NewRequestButton from '../components/newRequestButton'

function Recommendation() {
    return (

        <div>
            <NavBar></NavBar>
            <div>We recommend...</div>
            <TryAgainButton></TryAgainButton>
            <NewRequestButton></NewRequestButton>


        </div>
    )
}

export default Recommendation;