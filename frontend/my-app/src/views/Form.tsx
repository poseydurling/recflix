import '../styles/main.css'
import Movie from '../components/Movie'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import RecommendButton from '../components/RecommendButton'

function Form(){
    return (
        <div className='Form'>
            <NavBar></NavBar>
            <div>Pick three movies you are in the mood to watch!</div>
            <Search></Search>
            <div className='movieCards'>
                <Movie></Movie>
                <Movie></Movie>
                <Movie></Movie>
            </div>
            <RecommendButton></RecommendButton>
        </div>
    )
}

export default Form;