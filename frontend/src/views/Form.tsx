import './main.css'
import Movie from '../components/Movie'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import RecommendButton from '../components/RecommendButton'

function Form(){
    return (
        <div className='App'>
            <NavBar>Recommend-A-Movie</NavBar>
            <div>Pick three movies you are in the mood to watch!</div>
            <Search></Search>
            <div className='movieCards'>
                <Movie id='movieCard1'></Movie>
                <Movie id='movieCard2'></Movie>
                <Movie id='movieCard3'></Movie>
            </div>
            <RecommendButton></RecommendButton>
        </div>
    )
}

export default Form;