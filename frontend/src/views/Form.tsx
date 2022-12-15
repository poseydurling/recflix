import '../styles/main.css'
import Movie from '../components/Movie'
import NavBar from '../components/NavBar'
import Search from '../components/Search'
import RecommendButton from '../components/RecommendButton'
import TrashIcon from '../components/TrashIcon'

function Form(props: any){
    return (
        <div className="App">
          <NavBar></NavBar>
            <br></br>
                <div>Pick three movies you are in the mood to watch!</div>
                <br></br>
                <Search></Search>
                <div className='movieCards'>
                    <Movie card={props.card1} card2={props.card2} card3={props.card3}/>
                    {/* <Movie id="movieCard2"/>
                    <Movie id="movieCard3"/> */}
                    <TrashIcon/>
                    <TrashIcon/>
                    <TrashIcon/>
                </div>
                <RecommendButton></RecommendButton>
        </div>
      );
}
//make 3 props for the movie cards and make a prop for each link for the

export default Form;